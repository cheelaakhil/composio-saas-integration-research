/**
 * Calculates distribution patterns across the 100-app final dataset
 */

export function calculatePatterns(dataset) {
  const total = dataset.length;

  // 1. Auth Patterns
  const authCounts = {};
  const primaryAuthCounts = {};

  // 2. Access / Credential Setup Patterns
  const accessCounts = {};
  let selfServeCount = 0;
  let gatedCount = 0;

  // 3. API Patterns
  const apiTypeCounts = {};
  const apiBreadthCounts = {};
  let writeOpsCount = 0;
  let webhooksCount = 0;

  // 4. MCP Patterns
  const mcpCounts = {
    "First-party": 0,
    "Third-party": 0,
    "Community": 0,
    "None": 0
  };
  let mcpAvailableCount = 0;

  // 5. Buildability Patterns
  const buildabilityCounts = {
    "Easy Win": 0,
    "Buildable": 0,
    "Needs Investigation": 0,
    "Gated / Outreach": 0,
    "Not Practical": 0
  };

  // 6. Category Counts
  const categoryCounts = {};

  for (const item of dataset) {
    // Category
    const cat = item.app.category;
    categoryCounts[cat] = (categoryCounts[cat] || 0) + 1;

    // Auth
    for (const method of item.authentication.methods) {
      authCounts[method] = (authCounts[method] || 0) + 1;
    }
    const primaryAuth = item.authentication.methods[0] || 'None';
    primaryAuthCounts[primaryAuth] = (primaryAuthCounts[primaryAuth] || 0) + 1;

    // Access
    const setup = item.authentication.credential_setup;
    accessCounts[setup] = (accessCounts[setup] || 0) + 1;
    if (item.authentication.self_serve) selfServeCount++;
    if (item.authentication.gated) gatedCount++;

    // API
    const apiType = item.api.type;
    apiTypeCounts[apiType] = (apiTypeCounts[apiType] || 0) + 1;
    const breadth = item.api.breadth;
    apiBreadthCounts[breadth] = (apiBreadthCounts[breadth] || 0) + 1;
    if (item.api.write_operations) writeOpsCount++;
    if (item.api.webhooks) webhooksCount++;

    // MCP
    if (item.mcp.available) mcpAvailableCount++;
    if (mcpCounts[item.mcp.type] !== undefined) {
      mcpCounts[item.mcp.type]++;
    } else {
      mcpCounts[item.mcp.type] = 1;
    }

    // Buildability
    const verdict = item.buildability.verdict;
    if (buildabilityCounts[verdict] !== undefined) {
      buildabilityCounts[verdict]++;
    } else {
      buildabilityCounts[verdict] = 1;
    }
  }

  // Format with percentages
  const toDistribution = (countsObj) => {
    return Object.entries(countsObj).map(([key, count]) => ({
      name: key,
      count,
      percentage: Number(((count / total) * 100).toFixed(1))
    })).sort((a, b) => b.count - a.count);
  };

  return {
    total_apps: total,
    auth_patterns: {
      all_methods: toDistribution(authCounts),
      primary_methods: toDistribution(primaryAuthCounts)
    },
    access_patterns: {
      credential_setup: toDistribution(accessCounts),
      self_serve_count: selfServeCount,
      self_serve_pct: Number(((selfServeCount / total) * 100).toFixed(1)),
      gated_count: gatedCount,
      gated_pct: Number(((gatedCount / total) * 100).toFixed(1))
    },
    api_patterns: {
      types: toDistribution(apiTypeCounts),
      breadth: toDistribution(apiBreadthCounts),
      write_operations_support: {
        count: writeOpsCount,
        pct: Number(((writeOpsCount / total) * 100).toFixed(1))
      },
      webhooks_support: {
        count: webhooksCount,
        pct: Number(((webhooksCount / total) * 100).toFixed(1))
      }
    },
    mcp_patterns: {
      available_count: mcpAvailableCount,
      available_pct: Number(((mcpAvailableCount / total) * 100).toFixed(1)),
      distribution: toDistribution(mcpCounts)
    },
    buildability_patterns: {
      distribution: toDistribution(buildabilityCounts),
      easy_win_pct: Number(((buildabilityCounts["Easy Win"] / total) * 100).toFixed(1)),
      buildable_pct: Number(((buildabilityCounts["Buildable"] / total) * 100).toFixed(1)),
      gated_pct: Number(((buildabilityCounts["Gated / Outreach"] / total) * 100).toFixed(1))
    },
    categories: toDistribution(categoryCounts)
  };
}

/**
 * Calculates multi-dimensional cross-tabulations
 */
export function calculateCrossTabs(dataset) {
  const categories = [
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

  // 1. Category × Buildability Matrix
  const categoryXBuildability = {};
  for (const cat of categories) {
    categoryXBuildability[cat] = { "Easy Win": 0, "Buildable": 0, "Needs Investigation": 0, "Gated / Outreach": 0, "Not Practical": 0 };
  }

  // 2. Auth Method × Self-Serve Matrix
  const authXSelfServe = {};

  // 3. API Availability × Credential Availability Matrix
  const apiXCredential = {
    "Public API + Self-Serve Credentials (Easy Ingest)": 0,
    "Public API + Paid/Enterprise Gated (Contract Barrier)": 0,
    "Public API + Partner/Admin Gated (Approval Barrier)": 0,
    "No Active Public API (Sunset/Restricted)": 0
  };

  for (const item of dataset) {
    const cat = item.app.category;
    const verdict = item.buildability.verdict;
    if (categoryXBuildability[cat]) {
      categoryXBuildability[cat][verdict] = (categoryXBuildability[cat][verdict] || 0) + 1;
    }

    const primaryAuth = item.authentication.methods[0] || 'Unknown';
    if (!authXSelfServe[primaryAuth]) {
      authXSelfServe[primaryAuth] = { self_serve: 0, gated: 0, total: 0 };
    }
    authXSelfServe[primaryAuth].total++;
    if (item.authentication.self_serve) {
      authXSelfServe[primaryAuth].self_serve++;
    } else {
      authXSelfServe[primaryAuth].gated++;
    }

    // API x Credential
    if (item.api.type === 'None') {
      apiXCredential["No Active Public API (Sunset/Restricted)"]++;
    } else if (item.authentication.self_serve) {
      apiXCredential["Public API + Self-Serve Credentials (Easy Ingest)"]++;
    } else if (['Partner program', 'Admin approval', 'Contact sales'].includes(item.authentication.credential_setup)) {
      apiXCredential["Public API + Partner/Admin Gated (Approval Barrier)"]++;
    } else {
      apiXCredential["Public API + Paid/Enterprise Gated (Contract Barrier)"]++;
    }
  }

  return {
    category_x_buildability: categoryXBuildability,
    auth_x_self_serve: authXSelfServe,
    api_x_credential_availability: apiXCredential
  };
}
