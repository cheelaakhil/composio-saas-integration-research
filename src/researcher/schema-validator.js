const VALID_CATEGORIES = [
  "CRM and Sales",
  "Support and Helpdesk",
  "Communications and Messaging",
  "Marketing, Ads, Email and Social",
  "Ecommerce",
  "Data, SEO and Scraping",
  "Developer, Infra and Data platforms",
  "Productivity and Project Management",
  "Finance and Fintech",
  "AI, Research and Media-native"
];

const VALID_AUTH_METHODS = [
  "OAuth2", "API Key", "Bearer/PAT", "Basic", "Session", "SAML", "Custom", "CLI/Local", "None"
];

const VALID_CREDENTIAL_SETUPS = [
  "Self-serve signup", "Free tier available", "Trial required", "Paid plan required",
  "Admin approval", "Partner program", "Contact sales", "Open Source / Local", "Unknown"
];

const VALID_API_TYPES = [
  "REST", "GraphQL", "Both", "SOAP", "gRPC", "WebSocket", "CLI/Node", "Other", "None"
];

const VALID_API_BREADTH = [
  "Comprehensive", "Moderate", "Limited", "Minimal", "None"
];

const VALID_MCP_TYPES = [
  "First-party", "Third-party", "Community", "None"
];

const VALID_BUILDABILITY = [
  "Easy Win", "Buildable", "Needs Investigation", "Gated / Outreach", "Not Practical"
];

const VALID_EFFORT = ["Low", "Medium", "High", "Very High"];
const VALID_CONFIDENCE = ["HIGH", "MEDIUM", "LOW"];
const VALID_VERIFICATION = ["Verified", "Unverified", "Contradicted", "Partial"];

/**
 * Validates a single app research record against the schema and logical rules
 */
export function validateRecord(record) {
  const errors = [];
  const warnings = [];

  if (!record || typeof record !== 'object') {
    return { valid: false, errors: ['Record must be a non-null object'], warnings: [] };
  }

  // 1. App metadata
  if (!record.app) {
    errors.push('Missing "app" object');
  } else {
    if (!record.app.name || typeof record.app.name !== 'string') errors.push('app.name must be a non-empty string');
    if (!VALID_CATEGORIES.includes(record.app.category)) {
      errors.push(`app.category "${record.app.category}" is invalid. Expected one of: ${VALID_CATEGORIES.join(', ')}`);
    }
    if (!record.app.description || typeof record.app.description !== 'string') {
      errors.push('app.description must be a non-empty string');
    }
  }

  // 2. Authentication
  if (!record.authentication) {
    errors.push('Missing "authentication" object');
  } else {
    const auth = record.authentication;
    if (!Array.isArray(auth.methods) || auth.methods.length === 0) {
      errors.push('authentication.methods must be a non-empty array');
    } else {
      for (const m of auth.methods) {
        if (!VALID_AUTH_METHODS.includes(m)) {
          errors.push(`Invalid auth method "${m}".`);
        }
      }
    }
    if (!VALID_CREDENTIAL_SETUPS.includes(auth.credential_setup)) {
      errors.push(`Invalid credential_setup "${auth.credential_setup}"`);
    }
    if (typeof auth.self_serve !== 'boolean') errors.push('authentication.self_serve must be boolean');
    if (typeof auth.gated !== 'boolean') errors.push('authentication.gated must be boolean');
  }

  // 3. API
  if (!record.api) {
    errors.push('Missing "api" object');
  } else {
    const api = record.api;
    if (!VALID_API_TYPES.includes(api.type)) errors.push(`Invalid api.type "${api.type}"`);
    if (!VALID_API_BREADTH.includes(api.breadth)) errors.push(`Invalid api.breadth "${api.breadth}"`);
    if (typeof api.write_operations !== 'boolean') errors.push('api.write_operations must be boolean');
    if (typeof api.webhooks !== 'boolean') errors.push('api.webhooks must be boolean');
  }

  // 4. MCP
  if (!record.mcp) {
    errors.push('Missing "mcp" object');
  } else {
    const mcp = record.mcp;
    if (typeof mcp.available !== 'boolean') errors.push('mcp.available must be boolean');
    if (!VALID_MCP_TYPES.includes(mcp.type)) errors.push(`Invalid mcp.type "${mcp.type}"`);
    if (typeof mcp.agent_callable !== 'boolean') errors.push('mcp.agent_callable must be boolean');
  }

  // 5. Buildability
  if (!record.buildability) {
    errors.push('Missing "buildability" object');
  } else {
    const b = record.buildability;
    if (!VALID_BUILDABILITY.includes(b.verdict)) errors.push(`Invalid buildability.verdict "${b.verdict}"`);
    if (!VALID_EFFORT.includes(b.effort_estimate)) errors.push(`Invalid buildability.effort_estimate "${b.effort_estimate}"`);
  }

  // 6. Evidence
  if (!record.evidence) {
    errors.push('Missing "evidence" object');
  } else {
    const ev = record.evidence;
    if (!Array.isArray(ev.urls) || ev.urls.length === 0) {
      errors.push('evidence.urls must be a non-empty array of valid URLs');
    }
    if (!Array.isArray(ev.snippets) || ev.snippets.length === 0) {
      errors.push('evidence.snippets must be a non-empty array of claim/quote objects');
    }
    if (!VALID_CONFIDENCE.includes(ev.confidence)) errors.push(`Invalid evidence.confidence "${ev.confidence}"`);
    if (!VALID_VERIFICATION.includes(ev.verification_status)) errors.push(`Invalid evidence.verification_status "${ev.verification_status}"`);
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings
  };
}
