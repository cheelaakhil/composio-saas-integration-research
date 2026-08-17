import { runFirstPassResearch } from './researcher/index.js';
import { runAutomatedVerification } from './verifier/index.js';
import { runSecondPassResearch } from './researcher/second-pass.js';
import { runHumanVerificationAudit } from './verifier/human-verifier.js';
import { runAnalysis } from './analyzer/index.js';
import { logger } from './utils/logger.js';

/**
 * Master End-to-End Orchestrator for the entire Research Pipeline
 */
async function main() {
  const startTime = Date.now();

  logger.section("STARTING COMPLETE SAAS INTEGRATION RESEARCH SYSTEM");
  console.log("System Mode: Fast, Evidence-First, Verification-Driven (100 Apps)");
  console.log("Target Architecture: Composio Tool & MCP Ecosystem Evaluation\n");

  try {
    // Step 1: First Pass Research
    const rawResults = await runFirstPassResearch({ force: true });

    // Step 2: Automated QC Verifier
    const verificationReport = await runAutomatedVerification();

    // Step 3: Targeted Second Pass
    const secondPass = await runSecondPassResearch();

    // Step 4: Human Verification Sample (20 Apps) & Learning Metrics
    const humanAudit = await runHumanVerificationAudit();

    // Step 5: Statistical Analytics & Strategic Insights
    const analysis = await runAnalysis();

    const duration = ((Date.now() - startTime) / 1000).toFixed(2);

    logger.section("PIPELINE EXECUTION SUMMARY");
    logger.success(`All 10 Research Phases Completed Successfully in ${duration}s!`);
    console.log(`
  ══════════════════════════════════════════════════════════════════════
  • Total Apps Researched:               ${rawResults.length}
  • First-Pass Flagged for Re-research:  ${verificationReport.summary.total_flagged_for_re_research}
  • Second-Pass Corrected Apps:          ${secondPass.secondPassResults.length}
  • Verified Final Dataset Locked:       ${secondPass.finalDataset.length} records
  • Human Audit Claim Accuracy:          ${humanAudit.metrics.first_pass.claim_accuracy_pct}% ➔ ${humanAudit.metrics.second_pass.claim_accuracy_pct}% (+${humanAudit.metrics.improvement.accuracy_gain_pct}%)
  • Critical Errors Reduced:             ${humanAudit.metrics.first_pass.critical_errors} ➔ ${humanAudit.metrics.second_pass.critical_errors}
  • Strategic Insights Generated:        ${analysis.insights.length}
  ══════════════════════════════════════════════════════════════════════
    `);

  } catch (error) {
    logger.error("Pipeline failed with error:", error);
    console.error(error);
    process.exit(1);
  }
}

main();
