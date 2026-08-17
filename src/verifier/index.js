import path from 'path';
import { fileURLToPath } from 'url';
import { readJson, writeJson } from '../utils/file-utils.js';
import { logger } from '../utils/logger.js';
import { auditAppRecord } from './claim-checker.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '../../');
const RAW_RESULTS_PATH = path.join(ROOT_DIR, 'data/raw_results.json');
const REPORT_PATH = path.join(ROOT_DIR, 'data/verification_report.json');
const FLAGGED_APPS_PATH = path.join(ROOT_DIR, 'data/flagged_apps.json');

/**
 * Executes Phase 4 Automated Quality-Control Verification
 */
export async function runAutomatedVerification() {
  logger.section("PHASE 4: AUTOMATED QUALITY-CONTROL VERIFIER PASS");

  logger.info(`Loading raw first-pass dataset from ${RAW_RESULTS_PATH}...`);
  const rawRecords = await readJson(RAW_RESULTS_PATH);

  const audits = [];
  const flaggedApps = [];

  let countHigh = 0;
  let countMedium = 0;
  let countLow = 0;
  let countContradiction = 0;

  for (const record of rawRecords) {
    const audit = auditAppRecord(record);
    audits.push(audit);

    if (audit.auditStatus === 'HIGH CONFIDENCE') countHigh++;
    if (audit.auditStatus === 'MEDIUM') { countMedium++; flaggedApps.push(audit); }
    if (audit.auditStatus === 'LOW') { countLow++; flaggedApps.push(audit); }
    if (audit.auditStatus === 'CONTRADICTION') { countContradiction++; flaggedApps.push(audit); }
  }

  const report = {
    generated_at: new Date().toISOString(),
    total_audited: rawRecords.length,
    summary: {
      high_confidence: countHigh,
      medium_review: countMedium,
      low_confidence: countLow,
      contradictions: countContradiction,
      total_flagged_for_re_research: flaggedApps.length
    },
    flagged_apps: flaggedApps,
    detailed_audits: audits
  };

  logger.info("\n--- Verification Summary ---");
  logger.info(`✔ High Confidence (Accepted):    ${countHigh}`);
  logger.warn(`⚠ Medium Confidence (Review):    ${countMedium}`);
  logger.warn(`✖ Low Confidence (Re-research):  ${countLow}`);
  logger.error(`✖ Contradictions (Re-research):  ${countContradiction}`);
  logger.info(`Total Flagged for Second Pass:   ${flaggedApps.length}`);

  await writeJson(REPORT_PATH, report);
  await writeJson(FLAGGED_APPS_PATH, flaggedApps);

  logger.success(`Saved verification report to ${REPORT_PATH}`);
  logger.success(`Saved flagged apps list to ${FLAGGED_APPS_PATH}`);

  return report;
}

// CLI execution
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  runAutomatedVerification()
    .then(() => process.exit(0))
    .catch((err) => {
      logger.error(`Verification pass failed: ${err.message}`);
      console.error(err);
      process.exit(1);
    });
}
