import path from 'path';
import { fileURLToPath } from 'url';
import { ALL_APPS } from './knowledge-base.js';
import { researchAppFirstPass } from './app-researcher.js';
import { writeJson, readJson, fileExists } from '../utils/file-utils.js';
import { logger } from '../utils/logger.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '../../');
const RAW_RESULTS_PATH = path.join(ROOT_DIR, 'data/raw_results.json');

/**
 * Runs First Pass Research across all 100 apps or a single target app
 */
export async function runFirstPassResearch(options = {}) {
  logger.section("PHASE 3: RUNNING FIRST-PASS RESEARCH (100 APPS)");

  if (options.app) {
    logger.info(`Running single-app research mode for: "${options.app}"`);
    const record = researchAppFirstPass(options.app);
    logger.success(`Research complete for ${record.app.name}:`);
    console.log(JSON.stringify(record, null, 2));
    return [record];
  }

  // Check if raw_results.json already exists to preserve raw data history if desired
  if (await fileExists(RAW_RESULTS_PATH) && !options.force) {
    logger.warn(`raw_results.json already exists at ${RAW_RESULTS_PATH}.`);
    logger.info("Loading existing first-pass raw results to maintain historical fidelity...");
    const existing = await readJson(RAW_RESULTS_PATH);
    logger.success(`Loaded ${existing.length} raw records.`);
    return existing;
  }

  const results = [];
  const total = ALL_APPS.length;
  logger.info(`Starting automated first-pass evidence collection across ${total} apps...`);

  for (let i = 0; i < total; i++) {
    const appConfig = ALL_APPS[i];
    const record = researchAppFirstPass(appConfig.app.name);
    results.push(record);
    logger.progress(i + 1, total, record.app.name);
  }

  logger.info(`\nSaving raw first-pass output to ${RAW_RESULTS_PATH}...`);
  await writeJson(RAW_RESULTS_PATH, results);
  logger.success(`Successfully recorded 100 raw app records in data/raw_results.json (IMMUTABLE FIRST PASS).`);

  return results;
}

// CLI execution
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2);
  const singleAppIndex = args.indexOf('--app');
  const targetApp = singleAppIndex !== -1 ? args[singleAppIndex + 1] : null;
  const force = args.includes('--force');

  runFirstPassResearch({ app: targetApp, force })
    .then(() => process.exit(0))
    .catch((err) => {
      logger.error(`First pass failed: ${err.message}`);
      console.error(err);
      process.exit(1);
    });
}
