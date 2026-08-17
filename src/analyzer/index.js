import path from 'path';
import { fileURLToPath } from 'url';
import { readJson, writeJson } from '../utils/file-utils.js';
import { logger } from '../utils/logger.js';
import { calculatePatterns, calculateCrossTabs } from './pattern-calculator.js';
import { generateInsights } from './insight-generator.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '../../');
const FINAL_DATASET_PATH = path.join(ROOT_DIR, 'data/final_dataset.json');
const ANALYSIS_DIR = path.join(ROOT_DIR, 'data/analysis');

/**
 * Executes Phase 8 & 9 Analytics and Insight Synthesis
 */
export async function runAnalysis() {
  logger.section("PHASE 8 & 9: RUNNING ANALYTICS & STRATEGIC INSIGHT GENERATOR");

  logger.info(`Loading final verified dataset from ${FINAL_DATASET_PATH}...`);
  const dataset = await readJson(FINAL_DATASET_PATH);
  logger.info(`Analyzing ${dataset.length} SaaS application records across 10 categories...`);

  // 1. Calculate statistical patterns
  const patterns = calculatePatterns(dataset);

  // 2. Calculate cross-tabulations
  const crossTabs = calculateCrossTabs(dataset);

  // 3. Generate key strategic insights
  const insights = generateInsights(patterns, crossTabs);

  const fullAnalysis = {
    generated_at: new Date().toISOString(),
    total_apps_analyzed: dataset.length,
    patterns,
    cross_tabs: crossTabs,
    insights
  };

  // Save individual analysis slices
  await writeJson(path.join(ANALYSIS_DIR, 'auth_patterns.json'), patterns.auth_patterns);
  await writeJson(path.join(ANALYSIS_DIR, 'access_patterns.json'), patterns.access_patterns);
  await writeJson(path.join(ANALYSIS_DIR, 'api_patterns.json'), patterns.api_patterns);
  await writeJson(path.join(ANALYSIS_DIR, 'mcp_patterns.json'), patterns.mcp_patterns);
  await writeJson(path.join(ANALYSIS_DIR, 'buildability_patterns.json'), patterns.buildability_patterns);
  await writeJson(path.join(ANALYSIS_DIR, 'cross_tabs.json'), crossTabs);
  await writeJson(path.join(ANALYSIS_DIR, 'insights.json'), insights);
  await writeJson(path.join(ANALYSIS_DIR, 'full_analysis.json'), fullAnalysis);

  logger.subSection("Key Summary Metrics");
  logger.info(`• Self-Serve Credential Rate:     ${patterns.access_patterns.self_serve_pct}% (${patterns.access_patterns.self_serve_count}/100)`);
  logger.info(`• Gated / Outreach Rate:          ${patterns.access_patterns.gated_pct}% (${patterns.access_patterns.gated_count}/100)`);
  logger.info(`• Easy Win Integration Rate:      ${patterns.buildability_patterns.easy_win_pct}%`);
  logger.info(`• MCP Availability Rate:          ${patterns.mcp_patterns.available_pct}% (First-party: ${patterns.mcp_patterns.distribution.find(d=>d.name==='First-party')?.count})`);
  logger.info(`• Webhook Support Rate:           ${patterns.api_patterns.webhooks_support.pct}%`);
  logger.info(`• Write Operation Support:        ${patterns.api_patterns.write_operations_support.pct}%`);

  logger.success(`\n✔ Successfully generated all analysis artifacts in data/analysis/`);

  return fullAnalysis;
}

// CLI execution
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  runAnalysis()
    .then(() => process.exit(0))
    .catch((err) => {
      logger.error(`Analysis failed: ${err.message}`);
      console.error(err);
      process.exit(1);
    });
}
