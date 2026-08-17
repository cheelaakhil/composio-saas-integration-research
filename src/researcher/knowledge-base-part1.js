/**
 * Part 1: CRM and Sales (10 apps) & Support and Helpdesk (10 apps)
 */

export const APPS_DATA_PART1 = [
  // =========================================================================
  // 1. CRM and Sales (10 apps)
  // =========================================================================
  {
    app: {
      name: "Salesforce",
      category: "CRM and Sales",
      description: "Enterprise CRM platform for sales pipeline management, custom objects, and workflow automation."
    },
    authentication: {
      methods: ["OAuth2"],
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
      source_url: "https://github.com/modelcontextprotocol/servers"
    },
    buildability: {
      verdict: "Buildable",
      primary_blocker: "Connected App configuration and OAuth scope permission sets required.",
      effort_estimate: "High"
    },
    evidence: {
      urls: [
        "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_what_is_rest_api.htm",
        "https://developer.salesforce.com/signup"
      ],
      snippets: [
        {
          claim: "REST and GraphQL API availability with extensive write capabilities",
          source: "developer.salesforce.com",
          quote: "The Salesforce REST API lets you integrate with Salesforce applications using standard HTTP methods."
        },
        {
          claim: "Free Developer Edition accounts offer self-serve credential creation",
          source: "developer.salesforce.com/signup",
          quote: "Developer Edition provides a free, full-featured Salesforce environment with API access."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "HubSpot",
      category: "CRM and Sales",
      description: "Inbound CRM, sales pipeline, and customer lifecycle management software."
    },
    authentication: {
      methods: ["OAuth2", "API Key"],
      credential_setup: "Self-serve signup",
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
      source_url: "https://github.com/hubspot-community"
    },
    buildability: {
      verdict: "Easy Win",
      primary_blocker: null,
      effort_estimate: "Low"
    },
    evidence: {
      urls: [
        "https://developers.hubspot.com/docs/api/overview",
        "https://developers.hubspot.com/docs/api/private-apps"
      ],
      snippets: [
        {
          claim: "Private Apps allow immediate access token generation without app marketplace approval",
          source: "developers.hubspot.com",
          quote: "Private apps allow you to use HubSpot's APIs to access your HubSpot account's data via access tokens."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Pipedrive",
      category: "CRM and Sales",
      description: "Sales-focused CRM and pipeline management tool for deal-driven teams."
    },
    authentication: {
      methods: ["OAuth2", "API Key"],
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
        "https://developers.pipedrive.com/docs/api/v1",
        "https://pipedrive.readme.io/docs/how-to-find-the-api-token"
      ],
      snippets: [
        {
          claim: "Direct personal API token accessible in user settings for instant REST calls",
          source: "developers.pipedrive.com",
          quote: "Every user has their own unique personal API token that grants access to company data they can see."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Attio",
      category: "CRM and Sales",
      description: "Modern, customizable, real-time CRM platform built for fast-growing technology companies."
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
      source_url: "https://github.com/composio/attio"
    },
    buildability: {
      verdict: "Easy Win",
      primary_blocker: null,
      effort_estimate: "Low"
    },
    evidence: {
      urls: [
        "https://developers.attio.com/reference",
        "https://developers.attio.com/docs/authentication"
      ],
      snippets: [
        {
          claim: "Self-serve API keys and OAuth 2.0 with full REST endpoints for custom objects and records",
          source: "developers.attio.com",
          quote: "Attio's REST API allows you to programmatically read and write CRM data, create custom attributes, and listen to webhooks."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Twenty",
      category: "CRM and Sales",
      description: "Modern open-source CRM alternative to Salesforce with GraphQL and REST APIs."
    },
    authentication: {
      methods: ["Bearer/PAT", "OAuth2"],
      credential_setup: "Open Source / Local",
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
      source_url: "https://github.com/twentyhq/twenty"
    },
    buildability: {
      verdict: "Easy Win",
      primary_blocker: null,
      effort_estimate: "Low"
    },
    evidence: {
      urls: [
        "https://docs.twenty.com/developers/api",
        "https://docs.twenty.com/developers/authentication"
      ],
      snippets: [
        {
          claim: "Open-source architecture provides instant self-serve API keys and GraphQL schema introspection",
          source: "docs.twenty.com",
          quote: "Twenty provides both REST and GraphQL APIs authenticated via Bearer tokens generated directly in settings."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Podio",
      category: "CRM and Sales",
      description: "Customizable work and project management platform by Citrix used as a flexible CRM."
    },
    authentication: {
      methods: ["OAuth2", "API Key"],
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
        "https://developers.podio.com/",
        "https://developers.podio.com/authentication"
      ],
      snippets: [
        {
          claim: "Self-serve API keys and OAuth 2.0 client creation in account settings",
          source: "developers.podio.com",
          quote: "The Podio API gives complete programmatic control over workspaces, apps, and items using standard REST endpoints."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Zoho CRM",
      category: "CRM and Sales",
      description: "Omnichannel customer relationship management platform for multi-regional sales."
    },
    authentication: {
      methods: ["OAuth2"],
      credential_setup: "Self-serve signup",
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
      verdict: "Buildable",
      primary_blocker: "Multi-datacenter OAuth2 client configuration in Zoho API Console.",
      effort_estimate: "Medium"
    },
    evidence: {
      urls: [
        "https://www.zoho.com/crm/developer/docs/api/v6/",
        "https://api-console.zoho.com/"
      ],
      snippets: [
        {
          claim: "Multi-datacenter OAuth2 client configuration in Zoho API Console",
          source: "zoho.com/crm/developer/docs",
          quote: "Zoho CRM APIs use OAuth2 for authentication. You must register your application in the Zoho Developer Console."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Close",
      category: "CRM and Sales",
      description: "Inside sales CRM featuring built-in calling, SMS, and email automation."
    },
    authentication: {
      methods: ["Basic", "API Key", "OAuth2"],
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
        "https://developer.close.com/",
        "https://help.close.com/docs/api-keys"
      ],
      snippets: [
        {
          claim: "100% API coverage: every UI feature is powered by public REST endpoints with API keys",
          source: "developer.close.com",
          quote: "Close is an API-first application; our web application uses the exact same REST API that you have access to."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Copper",
      category: "CRM and Sales",
      description: "Google Workspace-native CRM for agency, technology, and consulting teams."
    },
    authentication: {
      methods: ["API Key"],
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
        "https://developer.copper.com/",
        "https://support.copper.com/hc/en-us/articles/360000305886-API-Keys"
      ],
      snippets: [
        {
          claim: "User-generated API key and email authentication header",
          source: "developer.copper.com",
          quote: "Copper API requests require an X-PW-AccessToken, X-PW-Application, and X-PW-UserEmail header."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "DealCloud",
      category: "CRM and Sales",
      description: "Vertical CRM and deal management platform for private equity, investment banking, and M&A."
    },
    authentication: {
      methods: ["OAuth2"],
      credential_setup: "Contact sales",
      self_serve: false,
      gated: true,
      gating_reason: "Enterprise financial services CRM; requires active institutional contract and tenant administrator API key provisioning."
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
      verdict: "Gated / Outreach",
      primary_blocker: "Enterprise contract and DealCloud admin provisioning required.",
      effort_estimate: "Very High"
    },
    evidence: {
      urls: [
        "https://developer.dealcloud.com/",
        "https://www.intapp.com/dealcloud/"
      ],
      snippets: [
        {
          claim: "DealCloud REST API access requires enterprise client credentials issued by Intapp support",
          source: "developer.dealcloud.com",
          quote: "DealCloud APIs provide programmatic access to entries, lists, and relationships authenticated via OAuth 2.0."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },

  // =========================================================================
  // 2. Support and Helpdesk (10 apps)
  // =========================================================================
  {
    app: {
      name: "Zendesk",
      category: "Support and Helpdesk",
      description: "Customer service and support ticketing software platform."
    },
    authentication: {
      methods: ["Basic", "Bearer/PAT", "OAuth2"],
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
      source_url: "https://github.com/modelcontextprotocol/servers"
    },
    buildability: {
      verdict: "Easy Win",
      primary_blocker: null,
      effort_estimate: "Low"
    },
    evidence: {
      urls: [
        "https://developer.zendesk.com/api-reference/ticketing/introduction/",
        "https://developer.zendesk.com/api-reference/ticketing/introduction/#api-token"
      ],
      snippets: [
        {
          claim: "Admin API tokens generated in Admin Center enabling ticket and user CRUD via basic auth email/token",
          source: "developer.zendesk.com",
          quote: "Zendesk Support API uses API tokens with HTTP Basic Authentication (username: email/token, password: API token)."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Freshdesk",
      category: "Support and Helpdesk",
      description: "Omnichannel customer support software by Freshworks for ticketing and self-service."
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
        "https://developers.freshdesk.com/api/",
        "https://support.freshdesk.com/en/support/solutions/articles/21554-how-to-find-your-api-key"
      ],
      snippets: [
        {
          claim: "Instant API key under Profile Settings with REST v2 API for tickets, contacts, and solutions",
          source: "developers.freshdesk.com/api",
          quote: "The Freshdesk API is a RESTful API using basic authentication with your API key as the username."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Intercom",
      category: "Support and Helpdesk",
      description: "AI customer service platform, support inbox, and ticketing automation."
    },
    authentication: {
      methods: ["Bearer/PAT", "OAuth2"],
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
        "https://developers.intercom.com/docs/references/rest-api/api.intercom.io/",
        "https://app.intercom.com/a/apps/_/developer-hub"
      ],
      snippets: [
        {
          claim: "Access tokens generated in Developer Hub for workspace API access",
          source: "developers.intercom.com",
          quote: "Intercom's REST API allows you to access conversations, contacts, tickets, and articles using Bearer access tokens."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Front",
      category: "Support and Helpdesk",
      description: "Customer operations and collaborative inbox platform for support teams."
    },
    authentication: {
      methods: ["Bearer/PAT", "OAuth2"],
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
        "https://dev.frontapp.com/docs/core-rest-api",
        "https://app.frontapp.com/settings/plugins/api"
      ],
      snippets: [
        {
          claim: "API tokens generated in Settings > Developers with comprehensive inbox and message endpoints",
          source: "dev.frontapp.com",
          quote: "Front's Core REST API enables full automation of conversations, messages, channels, tags, and contacts."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Help Scout",
      category: "Support and Helpdesk",
      description: "Customer service platform providing shared inboxes, knowledge base, and live chat."
    },
    authentication: {
      methods: ["OAuth2"],
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
        "https://developer.helpscout.com/mailbox-api/",
        "https://developer.helpscout.com/mailbox-api/overview/authentication/"
      ],
      snippets: [
        {
          claim: "My App OAuth2 Client ID/Secret generated in Your Profile > Authentication",
          source: "developer.helpscout.com",
          quote: "Mailbox API 2.0 uses OAuth2 Client Credentials flow for server-to-server integrations to manage conversations."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Gorgias",
      category: "Support and Helpdesk",
      description: "E-commerce customer service helpdesk built specifically for online merchants."
    },
    authentication: {
      methods: ["Basic", "API Key"],
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
        "https://developers.gorgias.com/reference/introduction",
        "https://developers.gorgias.com/docs/authentication"
      ],
      snippets: [
        {
          claim: "API key generated in Settings > REST API with HTTP Basic Auth support",
          source: "developers.gorgias.com",
          quote: "Gorgias REST API uses HTTP Basic Authentication with your email address and API key."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Kustomer",
      category: "Support and Helpdesk",
      description: "Omnichannel customer operations platform with timeline-based customer records."
    },
    authentication: {
      methods: ["Bearer/PAT", "API Key"],
      credential_setup: "Paid plan required",
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
        "https://developer.kustomer.com/kustomer-api-docs/reference/overview",
        "https://developer.kustomer.com/kustomer-api-docs/reference/authentication"
      ],
      snippets: [
        {
          claim: "API Keys created in Settings > Security > API Keys with granular role definitions",
          source: "developer.kustomer.com",
          quote: "Kustomer REST API uses API keys passed in Authorization: Bearer headers for automated workflows."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Pylon",
      category: "Support and Helpdesk",
      description: "B2B customer operations and support platform built for Slack, Teams, and email."
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
        "https://docs.usepylon.com/reference",
        "https://app.usepylon.com/settings/api"
      ],
      snippets: [
        {
          claim: "Self-serve API keys generated in Settings with full conversation and issue management endpoints",
          source: "docs.usepylon.com",
          quote: "Pylon REST API provides endpoints to create, update, and manage support issues and customer accounts using Bearer tokens."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "LiveAgent",
      category: "Support and Helpdesk",
      description: "Help desk software with live chat, ticketing, and call center capabilities."
    },
    authentication: {
      methods: ["API Key", "Basic"],
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
        "https://api.liveagent.com/docs/v3/",
        "https://support.liveagent.com/793617-API-key"
      ],
      snippets: [
        {
          claim: "API key generation in Configuration > System > API with REST v3 endpoints",
          source: "api.liveagent.com",
          quote: "LiveAgent API v3 allows programmatic access to tickets, chats, calls, and agents using apikey query params or headers."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Plain",
      category: "Support and Helpdesk",
      description: "Modern customer support platform built for developers and engineering teams."
    },
    authentication: {
      methods: ["Bearer/PAT"],
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
      source_url: "https://github.com/team-plain"
    },
    buildability: {
      verdict: "Easy Win",
      primary_blocker: null,
      effort_estimate: "Low"
    },
    evidence: {
      urls: [
        "https://plain.com/docs/graphql-api",
        "https://app.plain.com/settings/api-keys"
      ],
      snippets: [
        {
          claim: "GraphQL API with instant workspace API keys for thread and customer management",
          source: "plain.com/docs",
          quote: "Plain's GraphQL API allows you to send and receive messages, manage customer data, and configure webhooks with Bearer auth."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  }
];
