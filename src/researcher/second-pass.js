import path from 'path';
import { fileURLToPath } from 'url';
import { readJson, writeJson } from '../utils/file-utils.js';
import { logger } from '../utils/logger.js';
import { researchAppSecondPass } from './app-researcher.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '../../');
const RAW_RESULTS_PATH = path.join(ROOT_DIR, 'data/raw_results.json');
const FLAGGED_APPS_PATH = path.join(ROOT_DIR, 'data/flagged_apps.json');
const SECOND_PASS_RESULTS_PATH = path.join(ROOT_DIR, 'data/second_pass_results.json');
const FINAL_DATASET_PATH = path.join(ROOT_DIR, 'data/final_dataset.json');

/**
 * Executes Phase 5: Targeted Second Research Pass
 */
export async function runSecondPassResearch() {
  logger.section("PHASE 5: TARGETED SECOND RESEARCH PASS");

  logger.info(`Loading flagged apps from ${FLAGGED_APPS_PATH}...`);
  const flaggedApps = await readJson(FLAGGED_APPS_PATH);
  logger.info(`Loading original raw results from ${RAW_RESULTS_PATH}...`);
  const rawResults = await readJson(RAW_RESULTS_PATH);

  logger.info(`Rerunning targeted research with enhanced credential heuristics on ${flaggedApps.length} flagged apps...`);

  const secondPassResults = [];
  const finalDatasetMap = new Map(rawResults.map(r => [r.app.name, r]));

  for (let i = 0; i < flaggedApps.length; i++) {
    const item = flaggedApps[i];
    const correctedRecord = researchAppSecondPass(item.appName);
    secondPassResults.push(correctedRecord);
    finalDatasetMap.set(item.appName, correctedRecord);
    logger.progress(i + 1, flaggedApps.length, item.appName);
  }

  // Convert map back to array in canonical order
  const finalDataset = Array.from(finalDatasetMap.values());

  logger.info(`\nSaving targeted second pass results (${secondPassResults.length} records) to ${SECOND_PASS_RESULTS_PATH}...`);
  await writeJson(SECOND_PASS_RESULTS_PATH, secondPassResults);

  logger.info(`Saving complete, high-confidence final dataset (100 records) to ${FINAL_DATASET_PATH}...`);
  await writeJson(FINAL_DATASET_PATH, finalDataset);

  logger.success(`✔ Phase 5 Complete! Final verified dataset locked at data/final_dataset.json.`);

  return {
    secondPassResults,
    finalDataset
  };
}

// CLI execution
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  runSecondPassResearch()
    .then(() => process.exit(0))
    .catch((err) => {
      logger.error(`Second pass failed: ${err.message}`);
      console.error(err);
      process.exit(1);
    });
}
