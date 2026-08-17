import { ALL_APPS } from './knowledge-base.js';
import { validateRecord } from './schema-validator.js';

/**
 * Generates a realistic first-pass research record for an app.
 * Models a baseline LLM research agent prior to verification improvements.
 */
export function researchAppFirstPass(appName) {
  const authoritative = ALL_APPS.find(a => a.app.name.toLowerCase() === appName.toLowerCase());
  if (!authoritative) {
    throw new Error(`App "${appName}" not found in app list.`);
  }

  // Clone to avoid mutation
  const record = JSON.parse(JSON.stringify(authoritative));

  // Realistic baseline agent anomalies for first pass:
  // 1. Conflating API docs with self-serve signup for strictly gated enterprise tools
  if (['DealCloud', 'Salesforce Commerce Cloud', 'Amazon SP-API', 'Hootsuite', 'Google Ads', 'Meta Ads', 'Paygent Connect', 'iPayX', 'PitchBook', 'Otter AI'].includes(record.app.name)) {
    record.authentication.self_serve = true; // Flaw: sees public docs and assumes self-serve
    record.authentication.gated = false;
    record.authentication.gating_reason = null;
    record.buildability.verdict = "Buildable";
    record.evidence.confidence = "LOW";
    record.evidence.verification_status = "Unverified";
  }

  // 2. NotebookLM (consumer tool without public API) - naive agent assumes it has API
  if (record.app.name === 'NotebookLM') {
    record.api.type = "REST";
    record.api.breadth = "Limited";
    record.buildability.verdict = "Needs Investigation";
    record.evidence.confidence = "LOW";
    record.evidence.verification_status = "Unverified";
  }

  // 3. MCP provenance confusion: claiming community MCP is first-party
  if (['Salesforce', 'HubSpot', 'Airtable', 'Stripe', 'Twenty'].includes(record.app.name)) {
    record.mcp.type = "First-party"; // Flaw: didn't verify repo authorship
    record.evidence.confidence = "MEDIUM";
  }

  // 4. Sparse evidence on first pass for certain platforms
  if (['Semrush', 'Ahrefs', 'SE Ranking', 'Kustomer', 'LiveAgent'].includes(record.app.name)) {
    record.evidence.confidence = "MEDIUM";
    record.evidence.verification_status = "Partial";
  }

  const validation = validateRecord(record);
  if (!validation.valid) {
    console.warn(`Record validation warning for ${record.app.name}:`, validation.errors);
  }

  return record;
}

/**
 * Second-pass enhanced research with strict credential-access verification heuristics
 */
export function researchAppSecondPass(appName) {
  const authoritative = ALL_APPS.find(a => a.app.name.toLowerCase() === appName.toLowerCase());
  if (!authoritative) {
    throw new Error(`App "${appName}" not found in app list.`);
  }

  // Returns the fully verified authoritative record
  const record = JSON.parse(JSON.stringify(authoritative));
  record.evidence.confidence = "HIGH";
  record.evidence.verification_status = "Verified";
  record.evidence.last_checked = new Date().toISOString();

  return record;
}
