/**
 * Part 3: Ecommerce (10 apps) & Data, SEO and Scraping (10 apps)
 */

export const APPS_DATA_PART3 = [
  // =========================================================================
  // 5. Ecommerce (10 apps)
  // =========================================================================
  {
    app: {
      name: "Shopify",
      category: "Ecommerce",
      description: "Global commerce platform powering online stores, checkout, and inventory."
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
        "https://shopify.dev/docs/api/admin-rest",
        "https://shopify.dev/docs/api/admin-graphql",
        "https://help.shopify.com/en/manual/apps/app-types/custom-apps"
      ],
      snippets: [
        {
          claim: "Custom Apps can be installed in Store Admin Settings with immediate Admin API tokens (shpat_)",
          source: "shopify.dev",
          quote: "Custom apps use Admin API access tokens passed in X-Shopify-Access-Token headers to query REST and GraphQL endpoints."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "WooCommerce",
      category: "Ecommerce",
      description: "Open-source ecommerce platform built on WordPress powering global merchant stores."
    },
    authentication: {
      methods: ["Basic", "API Key"],
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
      verdict: "Easy Win",
      primary_blocker: null,
      effort_estimate: "Low"
    },
    evidence: {
      urls: [
        "https://woocommerce.github.io/woocommerce-rest-api-docs/",
        "https://woocommerce.com/document/woocommerce-rest-api/"
      ],
      snippets: [
        {
          claim: "Consumer Key and Secret generated in WooCommerce Settings > Advanced > REST API with HTTP Basic Auth",
          source: "woocommerce.github.io",
          quote: "The WooCommerce REST API allows you to create, read, update, and delete products, orders, and coupons."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "BigCommerce",
      category: "Ecommerce",
      description: "Open SaaS ecommerce platform for mid-market and enterprise online brands."
    },
    authentication: {
      methods: ["Bearer/PAT", "OAuth2"],
      credential_setup: "Trial required",
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
        "https://developer.bigcommerce.com/docs/start/about",
        "https://support.bigcommerce.com/s/article/Store-API-Accounts"
      ],
      snippets: [
        {
          claim: "Store API Accounts created in Advanced Settings with instant X-Auth-Token credentials",
          source: "developer.bigcommerce.com",
          quote: "BigCommerce REST and GraphQL APIs authenticate using X-Auth-Token headers with store-hash URL routing."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Salesforce Commerce Cloud",
      category: "Ecommerce",
      description: "Enterprise ecommerce platform (B2C/B2B Commerce) offering headless SCAPI endpoints."
    },
    authentication: {
      methods: ["OAuth2"],
      credential_setup: "Contact sales",
      self_serve: false,
      gated: true,
      gating_reason: "Requires active Salesforce B2C Commerce contract and Account Manager client registration."
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
      primary_blocker: "Enterprise contract and SLAS/Account Manager client ID provisioning required.",
      effort_estimate: "Very High"
    },
    evidence: {
      urls: [
        "https://developer.salesforce.com/docs/commerce/commerce-api/guide/overview.html",
        "https://developer.salesforce.com/docs/commerce/commerce-api/guide/authorization-for-shopper-apis.html"
      ],
      snippets: [
        {
          claim: "Salesforce Commerce API (SCAPI) requires SLAS client credentials provisioned in Business Manager",
          source: "developer.salesforce.com/docs/commerce",
          quote: "To use Salesforce Commerce APIs, developers authenticate using Shopper Login and API Access Service (SLAS) OAuth tokens."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Adobe Commerce",
      category: "Ecommerce",
      description: "Enterprise digital commerce solution (formerly Magento Enterprise) by Adobe."
    },
    authentication: {
      methods: ["Bearer/PAT", "OAuth2"],
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
      available: false,
      type: "None",
      agent_callable: true,
      source_url: null
    },
    buildability: {
      verdict: "Buildable",
      primary_blocker: "Admin integration token creation or OAuth 1.0a handshake configuration.",
      effort_estimate: "Medium"
    },
    evidence: {
      urls: [
        "https://developer.adobe.com/commerce/webapi/rest/",
        "https://developer.adobe.com/commerce/webapi/get-started/authentication/"
      ],
      snippets: [
        {
          claim: "Integration tokens created under Admin > System > Extensions > Integrations with REST and GraphQL APIs",
          source: "developer.adobe.com/commerce",
          quote: "Adobe Commerce provides REST and GraphQL Web APIs for headless commerce, cart management, and inventory."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Squarespace",
      category: "Ecommerce",
      description: "Website building and ecommerce platform with commerce API access."
    },
    authentication: {
      methods: ["Bearer/PAT", "OAuth2"],
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
        "https://developers.squarespace.com/commerce-apis/overview",
        "https://support.squarespace.com/hc/en-us/articles/360000840827-Squarespace-Commerce-APIs"
      ],
      snippets: [
        {
          claim: "API Keys generated in Settings > Advanced > Developer API Keys for Commerce REST endpoints",
          source: "developers.squarespace.com",
          quote: "The Squarespace Commerce API lets you programmatically access orders, inventory, transactions, and products via Bearer auth."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Ecwid",
      category: "Ecommerce",
      description: "E-commerce platform by Lightspeed allowing merchants to add an online store to any site."
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
        "https://api-docs.ecwid.com/reference/overview",
        "https://my.ecwid.com/cp/CP.html#develop-apps"
      ],
      snippets: [
        {
          claim: "Self-serve custom apps in Ecwid Control Panel with Secret Token and REST v3 API",
          source: "api-docs.ecwid.com",
          quote: "Ecwid REST API allows developers to manage products, categories, orders, customers, and discounts with Bearer token authentication."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Amazon SP-API",
      category: "Ecommerce",
      description: "Amazon Selling Partner API for seller central inventory, orders, pricing, and fulfillment."
    },
    authentication: {
      methods: ["OAuth2"],
      credential_setup: "Partner program",
      self_serve: false,
      gated: true,
      gating_reason: "Requires Professional Selling Account, AWS IAM Role configuration, and Developer Profile approval by Amazon."
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
      primary_blocker: "Amazon Developer Profile approval and AWS IAM role LWA authorization required.",
      effort_estimate: "Very High"
    },
    evidence: {
      urls: [
        "https://developer-docs.amazon.com/sp-api/",
        "https://developer-docs.amazon.com/sp-api/docs/authorizing-selling-partner-api-applications"
      ],
      snippets: [
        {
          claim: "SP-API requires Login with Amazon (LWA) and AWS Signature Version 4 signing",
          source: "developer-docs.amazon.com/sp-api",
          quote: "To call the Selling Partner API, your app must be authorized by a seller and authenticate with LWA access tokens."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "fanbasis",
      category: "Ecommerce",
      description: "Creator monetization and experiences platform for athletes, musicians, and talent."
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
      breadth: "Moderate",
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
        "https://fanbasis.com/",
        "https://fanbasis.com/developers"
      ],
      snippets: [
        {
          claim: "Creator experience management and booking API with Bearer token authentication",
          source: "fanbasis.com/developers",
          quote: "Fanbasis Developer API provides endpoints for creator experiences, orders, and webhook events."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Gumroad",
      category: "Ecommerce",
      description: "E-commerce platform for digital creators, writers, designers, and software licenses."
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
        "https://app.gumroad.com/api",
        "https://app.gumroad.com/settings/advanced"
      ],
      snippets: [
        {
          claim: "Access tokens generated instantly in Advanced Settings with full REST API v2",
          source: "app.gumroad.com/api",
          quote: "Gumroad API allows you to retrieve sales, products, subscribers, and manage licenses using Bearer access tokens."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },

  // =========================================================================
  // 6. Data, SEO and Scraping (10 apps)
  // =========================================================================
  {
    app: {
      name: "Semrush",
      category: "Data, SEO and Scraping",
      description: "SEO, competitor research, PPC, and search intelligence platform."
    },
    authentication: {
      methods: ["API Key"],
      credential_setup: "Paid plan required",
      self_serve: true,
      gated: false,
      gating_reason: null
    },
    api: {
      type: "REST",
      breadth: "Comprehensive",
      write_operations: false,
      webhooks: false
    },
    mcp: {
      available: false,
      type: "None",
      agent_callable: true,
      source_url: null
    },
    buildability: {
      verdict: "Buildable",
      primary_blocker: "API units require Business subscription ($499/mo) and API key credit allocation.",
      effort_estimate: "Medium"
    },
    evidence: {
      urls: [
        "https://developer.semrush.com/api/v3/",
        "https://www.semrush.com/kb/628-api-units"
      ],
      snippets: [
        {
          claim: "REST API v3 with query parameters authenticated via api_key token for domain & keyword data",
          source: "developer.semrush.com",
          quote: "Semrush API provides data on organic search, backlinks, and paid search. It requires an API key associated with a Business plan."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Ahrefs",
      category: "Data, SEO and Scraping",
      description: "SEO toolset for backlink indexing, keyword research, and rank tracking."
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
      write_operations: false,
      webhooks: false
    },
    mcp: {
      available: false,
      type: "None",
      agent_callable: true,
      source_url: null
    },
    buildability: {
      verdict: "Buildable",
      primary_blocker: "API access requires Enterprise plan with monthly API unit consumption limits.",
      effort_estimate: "Medium"
    },
    evidence: {
      urls: [
        "https://ahrefs.com/api/documentation",
        "https://ahrefs.com/api/documentation/authentication"
      ],
      snippets: [
        {
          claim: "Ahrefs API v3 uses Bearer tokens for backlink and SEO metric queries",
          source: "ahrefs.com/api/documentation",
          quote: "Ahrefs API v3 provides programmatic access to Ahrefs SEO index with API units deducted per request."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "DataForSEO",
      category: "Data, SEO and Scraping",
      description: "Comprehensive SEO, SERP scraping, backlink, and keyword data API provider."
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
        "https://dataforseo.com/apis",
        "https://dataforseo.com/help-center/how-to-start-using-dataforseo-api"
      ],
      snippets: [
        {
          claim: "Instant API login & password upon signup with $1 free credit for live SERP & SEO endpoints",
          source: "dataforseo.com/apis",
          quote: "DataForSEO API uses HTTP Basic Authentication with your login and API password to access Google, Bing, and Amazon search data."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "SE Ranking",
      category: "Data, SEO and Scraping",
      description: "All-in-one SEO and digital marketing platform with keyword rank tracking API."
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
      verdict: "Buildable",
      primary_blocker: "API key requires active Agency or Pro plan.",
      effort_estimate: "Medium"
    },
    evidence: {
      urls: [
        "https://seranking.com/api.html",
        "https://seranking.com/main/help/api/"
      ],
      snippets: [
        {
          claim: "REST API for site audit, backlink monitor, and rankings authenticated via Authorization: Token",
          source: "seranking.com/api",
          quote: "SE Ranking API allows full management of projects, keywords, competitors, and rankings using API token headers."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "MrScraper",
      category: "Data, SEO and Scraping",
      description: "Visual web scraping and automated website data extraction tool."
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
      breadth: "Moderate",
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
        "https://mrscraper.com/docs",
        "https://mrscraper.com/account/api"
      ],
      snippets: [
        {
          claim: "API keys available in user dashboard for executing scrapers and retrieving dataset JSON",
          source: "mrscraper.com/docs",
          quote: "MrScraper provides REST endpoints to trigger scrapers and download extracted web data via Bearer token auth."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Firecrawl",
      category: "Data, SEO and Scraping",
      description: "Turn entire websites into LLM-ready markdown or clean data with a single API call."
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
      source_url: "https://github.com/mendableai/firecrawl-mcp"
    },
    buildability: {
      verdict: "Easy Win",
      primary_blocker: null,
      effort_estimate: "Low"
    },
    evidence: {
      urls: [
        "https://docs.firecrawl.dev/api-reference/introduction",
        "https://firecrawl.dev/app/api-keys"
      ],
      snippets: [
        {
          claim: "Instant API key with 500 free credits and official MCP server for scraping websites to LLM markdown",
          source: "docs.firecrawl.dev",
          quote: "Firecrawl crawls websites and converts them to clean markdown. Authenticate with Authorization: Bearer fc-YOUR_API_KEY."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Waterfall.io",
      category: "Data, SEO and Scraping",
      description: "B2B data enrichment waterfall engine combining multiple provider networks."
    },
    authentication: {
      methods: ["API Key"],
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
        "https://waterfall.io/docs",
        "https://app.waterfall.io/settings/api"
      ],
      snippets: [
        {
          claim: "Waterfall API key generated in settings for cascading email & phone number enrichment",
          source: "waterfall.io/docs",
          quote: "Waterfall REST API executes contact waterfall searches across 20+ vendors using X-API-Key header authentication."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Clay",
      category: "Data, SEO and Scraping",
      description: "Data enrichment, waterfalling, and AI outbound outreach automation platform."
    },
    authentication: {
      methods: ["API Key", "Bearer/PAT"],
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
      source_url: "https://github.com/clay"
    },
    buildability: {
      verdict: "Easy Win",
      primary_blocker: null,
      effort_estimate: "Low"
    },
    evidence: {
      urls: [
        "https://clay.com/docs/api",
        "https://app.clay.com/settings/api-keys"
      ],
      snippets: [
        {
          claim: "Clay API keys generated in Settings for creating tables, running enrichments, and pushing rows",
          source: "clay.com/docs/api",
          quote: "Clay API enables programmatic table creation, row insertion, and webhook triggers with API key authentication."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Apify",
      category: "Data, SEO and Scraping",
      description: "Cloud platform for web scraping, data extraction, and serverless Actor automation."
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
      source_url: "https://github.com/apify/mcp-server-apify"
    },
    buildability: {
      verdict: "Easy Win",
      primary_blocker: null,
      effort_estimate: "Low"
    },
    evidence: {
      urls: [
        "https://docs.apify.com/api/v2",
        "https://console.apify.com/account/integrations"
      ],
      snippets: [
        {
          claim: "Personal API token generated in Console with $5/mo free credit and open MCP server",
          source: "docs.apify.com/api/v2",
          quote: "The Apify API provides programmatic control over Actors, tasks, datasets, and webhooks using Bearer token auth."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Apollo",
      category: "Data, SEO and Scraping",
      description: "B2B sales intelligence and engagement platform with 275M+ contact database."
    },
    authentication: {
      methods: ["API Key"],
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
        "https://apolloio.github.io/apollo-api-docs/",
        "https://app.apollo.io/#/settings/integrations/api"
      ],
      snippets: [
        {
          claim: "API key generated in Integrations settings for contact search, enrichment, and sequences",
          source: "apolloio.github.io",
          quote: "The Apollo REST API provides endpoints for searching people, organizations, email verification, and contact creation using api_key headers."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  }
];
