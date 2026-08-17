/**
 * Part 4: Developer, Infra & Data (10 apps) & Productivity & Project Management (10 apps)
 */

export const APPS_DATA_PART4 = [
  // =========================================================================
  // 7. Developer, Infra and Data platforms (10 apps)
  // =========================================================================
  {
    app: {
      name: "GitHub",
      category: "Developer, Infra and Data platforms",
      description: "Code hosting platform for version control, collaboration, CI/CD, and project management."
    },
    authentication: {
      methods: ["Bearer/PAT", "OAuth2"],
      credential_setup: "Free tier available",
      self_serve: true,
      gated: false,
      gating_reason: null
    },
    api: {
      type: "Both",
      breadth: "Comprehensive",
      write_operations: true,
      webhooks: true
    },
    mcp: {
      available: true,
      type: "First-party",
      agent_callable: true,
      source_url: "https://github.com/modelcontextprotocol/servers/tree/main/src/github"
    },
    buildability: {
      verdict: "Easy Win",
      primary_blocker: null,
      effort_estimate: "Low"
    },
    evidence: {
      urls: [
        "https://docs.github.com/en/rest",
        "https://docs.github.com/en/graphql",
        "https://github.com/settings/tokens"
      ],
      snippets: [
        {
          claim: "Fine-grained Personal Access Tokens and GitHub Apps with complete REST and GraphQL API coverage",
          source: "docs.github.com/en/rest",
          quote: "GitHub provides comprehensive REST and GraphQL APIs for repositories, pull requests, issues, actions, and organizations."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Jira",
      category: "Developer, Infra and Data platforms",
      description: "Issue tracking and agile project management product developed by Atlassian."
    },
    authentication: {
      methods: ["Basic", "OAuth2", "Bearer/PAT"],
      credential_setup: "Free tier available",
      self_serve: true,
      gated: false,
      gating_reason: null
    },
    api: {
      type: "REST",
      breadth: "Comprehensive",
      write_operations: true,
      webhooks: true
    },
    mcp: {
      available: true,
      type: "Community",
      agent_callable: true,
      source_url: "https://github.com/modelcontextprotocol/servers"
    },
    buildability: {
      verdict: "Easy Win",
      primary_blocker: null,
      effort_estimate: "Low"
    },
    evidence: {
      urls: [
        "https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/",
        "https://id.atlassian.com/manage-profile/security/api-tokens"
      ],
      snippets: [
        {
          claim: "Instant API token creation in Atlassian account with REST v3 API support",
          source: "developer.atlassian.com",
          quote: "Authenticate requests to Jira Cloud using basic authentication with your email address and an API token."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Linear",
      category: "Developer, Infra and Data platforms",
      description: "Issue tracking and product development tool purpose-built for high-performance software teams."
    },
    authentication: {
      methods: ["Bearer/PAT", "OAuth2"],
      credential_setup: "Free tier available",
      self_serve: true,
      gated: false,
      gating_reason: null
    },
    api: {
      type: "GraphQL",
      breadth: "Comprehensive",
      write_operations: true,
      webhooks: true
    },
    mcp: {
      available: true,
      type: "Community",
      agent_callable: true,
      source_url: "https://github.com/modelcontextprotocol/servers"
    },
    buildability: {
      verdict: "Easy Win",
      primary_blocker: null,
      effort_estimate: "Low"
    },
    evidence: {
      urls: [
        "https://developers.linear.app/docs/graphql/working-with-the-graphql-api",
        "https://linear.app/settings/api"
      ],
      snippets: [
        {
          claim: "GraphQL API with personal API keys generated instantly in user settings",
          source: "developers.linear.app",
          quote: "Linear's API is built on GraphQL, providing full access to issues, cycles, projects, and roadmaps with Bearer authentication."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Vercel",
      category: "Developer, Infra and Data platforms",
      description: "Frontend cloud platform for static sites and serverless web development."
    },
    authentication: {
      methods: ["Bearer/PAT", "OAuth2"],
      credential_setup: "Free tier available",
      self_serve: true,
      gated: false,
      gating_reason: null
    },
    api: {
      type: "REST",
      breadth: "Comprehensive",
      write_operations: true,
      webhooks: true
    },
    mcp: {
      available: true,
      type: "Community",
      agent_callable: true,
      source_url: "https://github.com/modelcontextprotocol/servers"
    },
    buildability: {
      verdict: "Easy Win",
      primary_blocker: null,
      effort_estimate: "Low"
    },
    evidence: {
      urls: [
        "https://vercel.com/docs/rest-api",
        "https://vercel.com/account/tokens"
      ],
      snippets: [
        {
          claim: "Self-serve Personal Access Tokens with complete deployments and project management REST API",
          source: "vercel.com/docs/rest-api",
          quote: "The Vercel REST API allows programmatic deployment, domain management, environment variables, and log streaming."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Netlify",
      category: "Developer, Infra and Data platforms",
      description: "Cloud platform for building, deploying, and scaling modern web applications."
    },
    authentication: {
      methods: ["Bearer/PAT", "OAuth2"],
      credential_setup: "Free tier available",
      self_serve: true,
      gated: false,
      gating_reason: null
    },
    api: {
      type: "REST",
      breadth: "Comprehensive",
      write_operations: true,
      webhooks: true
    },
    mcp: {
      available: false,
      type: "None",
      agent_callable: true,
      source_url: null
    },
    buildability: {
      verdict: "Easy Win",
      primary_blocker: null,
      effort_estimate: "Low"
    },
    evidence: {
      urls: [
        "https://docs.netlify.com/api/get-started/",
        "https://app.netlify.com/user/applications"
      ],
      snippets: [
        {
          claim: "Personal Access Tokens generated in User Applications for full site/build/deploy REST API",
          source: "docs.netlify.com/api",
          quote: "Netlify REST API lets you manage sites, forms, DNS zones, and trigger deploys with Bearer token authentication."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Cloudflare",
      category: "Developer, Infra and Data platforms",
      description: "Global cloud platform providing DNS, CDN, DDoS protection, and serverless Workers."
    },
    authentication: {
      methods: ["Bearer/PAT", "API Key"],
      credential_setup: "Free tier available",
      self_serve: true,
      gated: false,
      gating_reason: null
    },
    api: {
      type: "REST",
      breadth: "Comprehensive",
      write_operations: true,
      webhooks: true
    },
    mcp: {
      available: true,
      type: "Community",
      agent_callable: true,
      source_url: "https://github.com/cloudflare/mcp-server-cloudflare"
    },
    buildability: {
      verdict: "Easy Win",
      primary_blocker: null,
      effort_estimate: "Low"
    },
    evidence: {
      urls: [
        "https://developers.cloudflare.com/api/",
        "https://dash.cloudflare.com/profile/api-tokens"
      ],
      snippets: [
        {
          claim: "Scoped API Tokens generated in User Profile for DNS, Workers, and KV management",
          source: "developers.cloudflare.com/api",
          quote: "Cloudflare API v4 uses scoped API Tokens passed in Authorization: Bearer headers for granular resource access."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Snowflake",
      category: "Developer, Infra and Data platforms",
      description: "Cloud data warehouse and analytical data platform supporting SQL REST API."
    },
    authentication: {
      methods: ["Bearer/PAT", "OAuth2", "Custom"],
      credential_setup: "Trial required",
      self_serve: true,
      gated: false,
      gating_reason: null
    },
    api: {
      type: "REST",
      breadth: "Comprehensive",
      write_operations: true,
      webhooks: true
    },
    mcp: {
      available: true,
      type: "Community",
      agent_callable: true,
      source_url: "https://github.com/Snowflake-Labs"
    },
    buildability: {
      verdict: "Buildable",
      primary_blocker: "Key-pair authentication (JWT) or OAuth security integration setup required.",
      effort_estimate: "Medium"
    },
    evidence: {
      urls: [
        "https://docs.snowflake.com/en/developer-guide/sql-api/index",
        "https://docs.snowflake.com/en/developer-guide/sql-api/authenticating"
      ],
      snippets: [
        {
          claim: "Snowflake SQL REST API executes queries and updates using JWT key-pair or OAuth bearer tokens",
          source: "docs.snowflake.com",
          quote: "The Snowflake SQL API allows you to submit SQL statements and fetch results using standard HTTP REST requests."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "MongoDB Atlas",
      category: "Developer, Infra and Data platforms",
      description: "Fully managed cloud database service for modern document-based applications."
    },
    authentication: {
      methods: ["Basic", "API Key"],
      credential_setup: "Free tier available",
      self_serve: true,
      gated: false,
      gating_reason: null
    },
    api: {
      type: "REST",
      breadth: "Comprehensive",
      write_operations: true,
      webhooks: true
    },
    mcp: {
      available: true,
      type: "Community",
      agent_callable: true,
      source_url: "https://github.com/mongodb-developer"
    },
    buildability: {
      verdict: "Easy Win",
      primary_blocker: null,
      effort_estimate: "Low"
    },
    evidence: {
      urls: [
        "https://www.mongodb.com/docs/atlas/reference/api-resources-spec/",
        "https://cloud.mongodb.com/v2#/account/apiKeys"
      ],
      snippets: [
        {
          claim: "Atlas Administration REST API uses HTTP Digest authentication with Public/Private API keys",
          source: "mongodb.com/docs/atlas",
          quote: "Atlas Admin API allows automated provisioning of clusters, database users, IP access lists, and backups."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Neo4j",
      category: "Developer, Infra and Data platforms",
      description: "Graph database platform for connected data, Cypher queries, and knowledge graphs."
    },
    authentication: {
      methods: ["Basic", "Bearer/PAT"],
      credential_setup: "Free tier available",
      self_serve: true,
      gated: false,
      gating_reason: null
    },
    api: {
      type: "REST",
      breadth: "Comprehensive",
      write_operations: true,
      webhooks: true
    },
    mcp: {
      available: true,
      type: "Community",
      agent_callable: true,
      source_url: "https://github.com/neo4j-contrib/mcp-neo4j"
    },
    buildability: {
      verdict: "Easy Win",
      primary_blocker: null,
      effort_estimate: "Low"
    },
    evidence: {
      urls: [
        "https://neo4j.com/docs/aura/current/aura-api/",
        "https://console.neo4j.io/#user-settings"
      ],
      snippets: [
        {
          claim: "Neo4j Aura API and Cypher HTTP transaction endpoints authenticated via Client ID/Secret and Basic Auth",
          source: "neo4j.com/docs/aura",
          quote: "The Aura REST API provides programmatic control to create, pause, and query Neo4j graph instances."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Supabase",
      category: "Developer, Infra and Data platforms",
      description: "Open source Firebase alternative providing Postgres, Auth, Realtime, and Storage."
    },
    authentication: {
      methods: ["Bearer/PAT", "API Key"],
      credential_setup: "Free tier available",
      self_serve: true,
      gated: false,
      gating_reason: null
    },
    api: {
      type: "Both",
      breadth: "Comprehensive",
      write_operations: true,
      webhooks: true
    },
    mcp: {
      available: true,
      type: "Community",
      agent_callable: true,
      source_url: "https://github.com/supabase-community/mcp-supabase"
    },
    buildability: {
      verdict: "Easy Win",
      primary_blocker: null,
      effort_estimate: "Low"
    },
    evidence: {
      urls: [
        "https://supabase.com/docs/reference/api/introduction",
        "https://supabase.com/dashboard/account/tokens"
      ],
      snippets: [
        {
          claim: "Management API and auto-generated PostgREST REST APIs with service role / anon keys",
          source: "supabase.com/docs",
          quote: "Supabase provides both a Management REST API for project control and direct PostgREST APIs for database operations."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },

  // =========================================================================
  // 8. Productivity and Project Management (10 apps)
  // =========================================================================
  {
    app: {
      name: "Notion",
      category: "Productivity and Project Management",
      description: "Connected workspace for wiki, docs, notes, project management, and databases."
    },
    authentication: {
      methods: ["Bearer/PAT", "OAuth2"],
      credential_setup: "Free tier available",
      self_serve: true,
      gated: false,
      gating_reason: null
    },
    api: {
      type: "REST",
      breadth: "Comprehensive",
      write_operations: true,
      webhooks: false
    },
    mcp: {
      available: true,
      type: "Community",
      agent_callable: true,
      source_url: "https://github.com/suekou/mcp-notion-server"
    },
    buildability: {
      verdict: "Easy Win",
      primary_blocker: null,
      effort_estimate: "Low"
    },
    evidence: {
      urls: [
        "https://developers.notion.com/",
        "https://developers.notion.com/docs/create-a-notion-integration"
      ],
      snippets: [
        {
          claim: "Internal integration secrets can be generated instantly without OAuth app approval",
          source: "developers.notion.com",
          quote: "Internal integrations provide an internal API secret that lets you immediately interact with pages and databases shared with the integration."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Airtable",
      category: "Productivity and Project Management",
      description: "Low-code platform for building collaborative database applications and workflows."
    },
    authentication: {
      methods: ["Bearer/PAT", "OAuth2"],
      credential_setup: "Free tier available",
      self_serve: true,
      gated: false,
      gating_reason: null
    },
    api: {
      type: "REST",
      breadth: "Comprehensive",
      write_operations: true,
      webhooks: true
    },
    mcp: {
      available: true,
      type: "Community",
      agent_callable: true,
      source_url: "https://github.com/modelcontextprotocol/servers/tree/main/src/airtable"
    },
    buildability: {
      verdict: "Easy Win",
      primary_blocker: null,
      effort_estimate: "Low"
    },
    evidence: {
      urls: [
        "https://airtable.com/developers/web/api/introduction",
        "https://airtable.com/create/tokens"
      ],
      snippets: [
        {
          claim: "Personal Access Tokens with granular read/write and schema scopes",
          source: "airtable.com/developers",
          quote: "Personal access tokens allow you to securely grant access to your Airtable data and schema via REST API."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Coda",
      category: "Productivity and Project Management",
      description: "All-in-one collaborative doc format combining documents, spreadsheets, and apps."
    },
    authentication: {
      methods: ["Bearer/PAT"],
      credential_setup: "Free tier available",
      self_serve: true,
      gated: false,
      gating_reason: null
    },
    api: {
      type: "REST",
      breadth: "Comprehensive",
      write_operations: true,
      webhooks: true
    },
    mcp: {
      available: false,
      type: "None",
      agent_callable: true,
      source_url: null
    },
    buildability: {
      verdict: "Easy Win",
      primary_blocker: null,
      effort_estimate: "Low"
    },
    evidence: {
      urls: [
        "https://coda.io/developers/apis/v1",
        "https://coda.io/account"
      ],
      snippets: [
        {
          claim: "API tokens generated instantly from Account settings with full doc/table control",
          source: "coda.io/developers",
          quote: "The Coda API lets you read, insert, and update docs, pages, tables, rows, and formulas."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "ClickUp",
      category: "Productivity and Project Management",
      description: "Customizable project management and work platform for tasks, docs, and goals."
    },
    authentication: {
      methods: ["Bearer/PAT", "OAuth2"],
      credential_setup: "Free tier available",
      self_serve: true,
      gated: false,
      gating_reason: null
    },
    api: {
      type: "REST",
      breadth: "Comprehensive",
      write_operations: true,
      webhooks: true
    },
    mcp: {
      available: false,
      type: "None",
      agent_callable: true,
      source_url: null
    },
    buildability: {
      verdict: "Easy Win",
      primary_blocker: null,
      effort_estimate: "Low"
    },
    evidence: {
      urls: [
        "https://clickup.com/api",
        "https://clickup.com/api/developer-portal/authentication/"
      ],
      snippets: [
        {
          claim: "Personal API token generator inside workspace apps settings",
          source: "clickup.com/api",
          quote: "Personal API tokens can be created in user settings and passed in the Authorization header for complete workspace access."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Asana",
      category: "Productivity and Project Management",
      description: "Work management platform designed to help teams organize, track, and manage work."
    },
    authentication: {
      methods: ["Bearer/PAT", "OAuth2"],
      credential_setup: "Free tier available",
      self_serve: true,
      gated: false,
      gating_reason: null
    },
    api: {
      type: "REST",
      breadth: "Comprehensive",
      write_operations: true,
      webhooks: true
    },
    mcp: {
      available: false,
      type: "None",
      agent_callable: true,
      source_url: null
    },
    buildability: {
      verdict: "Easy Win",
      primary_blocker: null,
      effort_estimate: "Low"
    },
    evidence: {
      urls: [
        "https://developers.asana.com/docs",
        "https://developers.asana.com/docs/personal-access-token"
      ],
      snippets: [
        {
          claim: "Personal Access Tokens can be generated immediately from Developer App Console",
          source: "developers.asana.com",
          quote: "Personal access tokens allow you to access the Asana API as yourself via the Authorization header."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Monday.com",
      category: "Productivity and Project Management",
      description: "Work operating system that enables organizations to build custom workflow apps."
    },
    authentication: {
      methods: ["Bearer/PAT", "OAuth2"],
      credential_setup: "Free tier available",
      self_serve: true,
      gated: false,
      gating_reason: null
    },
    api: {
      type: "GraphQL",
      breadth: "Comprehensive",
      write_operations: true,
      webhooks: true
    },
    mcp: {
      available: false,
      type: "None",
      agent_callable: true,
      source_url: null
    },
    buildability: {
      verdict: "Easy Win",
      primary_blocker: null,
      effort_estimate: "Low"
    },
    evidence: {
      urls: [
        "https://developer.monday.com/api-reference/docs",
        "https://developer.monday.com/api-reference/docs/authentication"
      ],
      snippets: [
        {
          claim: "GraphQL API with immediate personal API tokens in developer section",
          source: "developer.monday.com",
          quote: "The monday.com API is built on GraphQL. Authentication uses an API token passed in the Authorization header."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Smartsheet",
      category: "Productivity and Project Management",
      description: "Enterprise dynamic work platform for project execution, sheet automations, and reporting."
    },
    authentication: {
      methods: ["Bearer/PAT", "OAuth2"],
      credential_setup: "Free tier available",
      self_serve: true,
      gated: false,
      gating_reason: null
    },
    api: {
      type: "REST",
      breadth: "Comprehensive",
      write_operations: true,
      webhooks: true
    },
    mcp: {
      available: false,
      type: "None",
      agent_callable: true,
      source_url: null
    },
    buildability: {
      verdict: "Easy Win",
      primary_blocker: null,
      effort_estimate: "Low"
    },
    evidence: {
      urls: [
        "https://smartsheet.redoc.ly/",
        "https://help.smartsheet.com/articles/2482389-generate-api-key"
      ],
      snippets: [
        {
          claim: "Personal Access Token generated in Account > Personal Settings > API Access",
          source: "smartsheet.redoc.ly",
          quote: "The Smartsheet REST API enables programmatic access to sheets, rows, attachments, reports, and webhooks using Bearer tokens."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Harvest",
      category: "Productivity and Project Management",
      description: "Time tracking, invoicing, and expense reporting software for professional teams."
    },
    authentication: {
      methods: ["Bearer/PAT", "OAuth2"],
      credential_setup: "Free tier available",
      self_serve: true,
      gated: false,
      gating_reason: null
    },
    api: {
      type: "REST",
      breadth: "Comprehensive",
      write_operations: true,
      webhooks: true
    },
    mcp: {
      available: false,
      type: "None",
      agent_callable: true,
      source_url: null
    },
    buildability: {
      verdict: "Easy Win",
      primary_blocker: null,
      effort_estimate: "Low"
    },
    evidence: {
      urls: [
        "https://help.getharvest.com/api-v2/",
        "https://id.getharvest.com/developers"
      ],
      snippets: [
        {
          claim: "Personal Access Tokens generated in Harvest Developer Portal with Account ID and Bearer auth",
          source: "help.getharvest.com/api-v2",
          quote: "Harvest REST API v2 provides endpoints for time entries, projects, tasks, invoices, and clients."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Trello",
      category: "Productivity and Project Management",
      description: "Visual project management tool based on Kanban boards, lists, and cards."
    },
    authentication: {
      methods: ["API Key", "OAuth2"],
      credential_setup: "Free tier available",
      self_serve: true,
      gated: false,
      gating_reason: null
    },
    api: {
      type: "REST",
      breadth: "Comprehensive",
      write_operations: true,
      webhooks: true
    },
    mcp: {
      available: false,
      type: "None",
      agent_callable: true,
      source_url: null
    },
    buildability: {
      verdict: "Easy Win",
      primary_blocker: null,
      effort_estimate: "Low"
    },
    evidence: {
      urls: [
        "https://developer.atlassian.com/cloud/trello/rest/",
        "https://trello.com/app-key"
      ],
      snippets: [
        {
          claim: "API key and manual user token generation page available immediately upon login",
          source: "developer.atlassian.com/cloud/trello",
          quote: "To use the Trello API, you need an API key and an API token associated with your user account."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Todoist",
      category: "Productivity and Project Management",
      description: "Task manager and to-do list application for individuals and teams."
    },
    authentication: {
      methods: ["Bearer/PAT", "OAuth2"],
      credential_setup: "Free tier available",
      self_serve: true,
      gated: false,
      gating_reason: null
    },
    api: {
      type: "REST",
      breadth: "Comprehensive",
      write_operations: true,
      webhooks: true
    },
    mcp: {
      available: true,
      type: "Community",
      agent_callable: true,
      source_url: "https://github.com/modelcontextprotocol/servers"
    },
    buildability: {
      verdict: "Easy Win",
      primary_blocker: null,
      effort_estimate: "Low"
    },
    evidence: {
      urls: [
        "https://developer.todoist.com/rest/v2/",
        "https://todoist.com/app/settings/integrations/developer"
      ],
      snippets: [
        {
          claim: "REST API v2 with immediate personal API token generation in Developer settings",
          source: "developer.todoist.com",
          quote: "The Todoist REST API provides CRUD access to tasks, projects, sections, comments, and labels."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  }
];
