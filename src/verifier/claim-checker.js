/**
 * Automated Quality Control Verifier.
 * Evaluates claims, detects conflations, checks MCP provenance, and flags records for targeted re-research.
 */

// Ground truth enterprise gated signatures in the 100-app assigned dataset
const ENTERPRISE_GATED_APPS = [
  'DealCloud',
  'Salesforce Commerce Cloud',
  'Amazon SP-API',
  'Hootsuite',
  'Google Ads',
  'Meta Ads',
  'Paygent Connect',
  'iPayX',
  'PitchBook',
  'Otter AI'
];

// Verified first-party MCP servers
const FIRST_PARTY_MCP_APPS = [
  'Slack', 'GitHub', 'GitLab', 'Sentry'
];

// Consumer / Non-API platforms
const NO_API_APPS = [
  'NotebookLM'
];

/**
 * Evaluates an individual app record for quality, consistency, and potential hallucinations
 */
export function auditAppRecord(record) {
  const flags = [];
  const appName = record.app.name;

  // 1. Check: Conflating Public API Docs with Self-Serve Access
  if (ENTERPRISE_GATED_APPS.includes(appName)) {
    if (record.authentication.self_serve && !record.authentication.gated) {
      flags.push({
        type: 'CONTRADICTION',
        severity: 'CRITICAL',
        issue: 'Conflating public API documentation with self-serve credential access. Enterprise contract or partner approval required.',
        field: 'authentication.self_serve'
      });
    }
  }

  // 2. Check: MCP Authorship Provenance (First-party vs Community)
  if (record.mcp.available && record.mcp.type === 'First-party') {
    if (!FIRST_PARTY_MCP_APPS.includes(appName)) {
      flags.push({
        type: 'MEDIUM',
        severity: 'MODERATE',
        issue: `MCP server for ${appName} is community-built, not officially authored by the vendor.`,
        field: 'mcp.type'
      });
    }
  }

  // 3. Check: Consumer platforms without public APIs
  if (NO_API_APPS.includes(appName)) {
    if (record.buildability.verdict !== 'Not Practical' || record.api.type !== 'None') {
      flags.push({
        type: 'CONTRADICTION',
        severity: 'CRITICAL',
        issue: 'Platform has no public developer REST/GraphQL APIs; buildability must reflect "Not Practical".',
        field: 'buildability.verdict'
      });
    }
  }

  // 4. Check: Evidence Snippet Quality
  if (!record.evidence.urls || record.evidence.urls.length < 2) {
    flags.push({
      type: 'LOW',
      severity: 'LOW',
      issue: 'Insufficient evidence URLs (fewer than 2 independent sources).',
      field: 'evidence.urls'
    });
  }

  if (record.evidence.confidence === 'LOW') {
    flags.push({
      type: 'LOW',
      severity: 'HIGH',
      issue: 'Marked with LOW confidence by initial collector.',
      field: 'evidence.confidence'
    });
  }

  // Determine overall audit verdict
  let auditStatus = 'HIGH CONFIDENCE';
  let requiresReresearch = false;

  const hasCritical = flags.some(f => f.type === 'CONTRADICTION' || f.severity === 'CRITICAL');
  const hasLow = flags.some(f => f.type === 'LOW' || f.severity === 'HIGH');
  const hasMedium = flags.some(f => f.type === 'MEDIUM');

  if (hasCritical) {
    auditStatus = 'CONTRADICTION';
    requiresReresearch = true;
  } else if (hasLow) {
    auditStatus = 'LOW';
    requiresReresearch = true;
  } else if (hasMedium) {
    auditStatus = 'MEDIUM';
    requiresReresearch = true;
  }

  return {
    appName,
    category: record.app.category,
    auditStatus,
    requiresReresearch,
    flagCount: flags.length,
    flags
  };
}
