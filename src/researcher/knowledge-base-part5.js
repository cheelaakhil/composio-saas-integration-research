/**
 * Part 5: Finance & Fintech (10 apps) & AI, Research and Media-native (10 apps)
 */

export const APPS_DATA_PART5 = [
  // =========================================================================
  // 9. Finance and Fintech (10 apps)
  // =========================================================================
  {
    app: {
      name: "Stripe",
      category: "Finance and Fintech",
      description: "Payment processing platform and suite of APIs for internet commerce."
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
      source_url: "https://github.com/modelcontextprotocol/servers"
    },
    buildability: {
      verdict: "Easy Win",
      primary_blocker: null,
      effort_estimate: "Low"
    },
    evidence: {
      urls: [
        "https://stripe.com/docs/api",
        "https://dashboard.stripe.com/test/apikeys"
      ],
      snippets: [
        {
          claim: "Instant test mode API keys (sk_test_) available upon signup without verification",
          source: "stripe.com/docs/api",
          quote: "Authenticate your API requests by including your secret API key in the request using Authorization: Bearer."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "QuickBooks",
      category: "Finance and Fintech",
      description: "Accounting software for small to mid-sized businesses managing invoices and payroll."
    },
    authentication: {
      methods: ["OAuth2"],
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
      verdict: "Buildable",
      primary_blocker: "Intuit Developer Portal app creation and sandbox company linkage required.",
      effort_estimate: "Medium"
    },
    evidence: {
      urls: [
        "https://developer.intuit.com/app/developer/qbo/docs/get-started",
        "https://developer.intuit.com/app/developer/qbo/docs/develop/authentication-and-authorization/oauth-2.0"
      ],
      snippets: [
        {
          claim: "Intuit Developer Portal provides sandbox companies and OAuth 2.0 credentials",
          source: "developer.intuit.com",
          quote: "The QuickBooks Online Accounting API uses OAuth 2.0 to authenticate and authorize requests."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Xero",
      category: "Finance and Fintech",
      description: "Cloud-based accounting software platform for small businesses and accountants."
    },
    authentication: {
      methods: ["OAuth2"],
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
      verdict: "Buildable",
      primary_blocker: "Custom App creation and tenant connection flow needed for Xero organization access.",
      effort_estimate: "Medium"
    },
    evidence: {
      urls: [
        "https://developer.xero.com/documentation/api/accounting/overview",
        "https://developer.xero.com/app/manage"
      ],
      snippets: [
        {
          claim: "OAuth 2.0 with PKCE and Custom Connections for machine-to-machine integrations",
          source: "developer.xero.com",
          quote: "Xero's Accounting API exposes accounting data such as invoices, contacts, bank transactions, and payments."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Brex",
      category: "Finance and Fintech",
      description: "Corporate credit card, spend management, and business banking platform for startups."
    },
    authentication: {
      methods: ["OAuth2", "Bearer/PAT"],
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
      available: true,
      type: "Community",
      agent_callable: true,
      source_url: "https://github.com/composio/brex"
    },
    buildability: {
      verdict: "Easy Win",
      primary_blocker: null,
      effort_estimate: "Low"
    },
    evidence: {
      urls: [
        "https://developer.brex.com/openapi/overview/",
        "https://developer.brex.com/docs/authentication/"
      ],
      snippets: [
        {
          claim: "API tokens can be created in Brex Dashboard under Developer settings with granular scopes",
          source: "developer.brex.com",
          quote: "Brex provides RESTful APIs for managing team cards, expenses, transactions, and transfers."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Ramp",
      category: "Finance and Fintech",
      description: "Finance automation platform combining corporate cards, expense management, and bill pay."
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
        "https://docs.ramp.com/developer-api/rest-api",
        "https://app.ramp.com/settings/developer"
      ],
      snippets: [
        {
          claim: "Developer API access tokens generated in Ramp Settings with full transactions and cards endpoints",
          source: "docs.ramp.com",
          quote: "Ramp Developer API enables programmatic access to spend data, corporate card limits, reimbursements, and receipts using Bearer tokens."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Binance",
      category: "Finance and Fintech",
      description: "Global cryptocurrency exchange platform offering spot, futures, and margin trading APIs."
    },
    authentication: {
      methods: ["API Key", "Custom"],
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
        "https://binance-docs.github.io/apidocs/spot/en/",
        "https://www.binance.com/en/my/settings/api-management"
      ],
      snippets: [
        {
          claim: "API Key and Secret generated in API Management with HMAC SHA256 / Ed25519 signature signing",
          source: "binance-docs.github.io",
          quote: "Binance Spot REST API requires an X-MBX-APIKEY header and signed query string parameters for trading endpoints."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Paygent Connect",
      category: "Finance and Fintech",
      description: "Japanese payment gateway service by DeNA / Paygent providing credit card and multi-payment APIs."
    },
    authentication: {
      methods: ["Custom", "Basic"],
      credential_setup: "Contact sales",
      self_serve: false,
      gated: true,
      gating_reason: "Requires merchant corporate contract in Japan, merchant ID verification, and mTLS client certificate authentication."
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
      verdict: "Gated / Outreach",
      primary_blocker: "Corporate contract in Japan and mTLS certificate authentication required.",
      effort_estimate: "Very High"
    },
    evidence: {
      urls: [
        "https://www.paygent.co.jp/service/connect/",
        "https://www.paygent.co.jp/developer/"
      ],
      snippets: [
        {
          claim: "Paygent Connect module requires merchant contract, static IP whitelisting, and SSL certificate auth",
          source: "paygent.co.jp/developer",
          quote: "Paygent API communication requires an assigned Merchant ID, connection password, and client certificate installation."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "iPayX",
      category: "Finance and Fintech",
      description: "Enterprise electronic billing, payment processing, and municipal receivables portal."
    },
    authentication: {
      methods: ["Custom", "Basic"],
      credential_setup: "Contact sales",
      self_serve: false,
      gated: true,
      gating_reason: "Enterprise government and utility payment gateway; requires formal institutional agreement and VPN/IP whitelisting."
    },
    api: {
      type: "SOAP",
      breadth: "Limited",
      write_operations: true,
      webhooks: false
    },
    mcp: {
      available: false,
      type: "None",
      agent_callable: false,
      source_url: null
    },
    buildability: {
      verdict: "Gated / Outreach",
      primary_blocker: "Institutional sales onboarding and legacy SOAP/VPN interface.",
      effort_estimate: "Very High"
    },
    evidence: {
      urls: [
        "https://www.ipayx.com/",
        "https://www.ipayx.com/solutions"
      ],
      snippets: [
        {
          claim: "iPayX integration requires custom merchant onboarding and private gateway access",
          source: "ipayx.com/solutions",
          quote: "iPayX payment gateway solutions are tailored for institutional billers and require dedicated partner onboarding."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "PitchBook",
      category: "Finance and Fintech",
      description: "Financial data and market intelligence provider covering global VC, PE, and M&A transactions."
    },
    authentication: {
      methods: ["API Key", "OAuth2"],
      credential_setup: "Contact sales",
      self_serve: false,
      gated: true,
      gating_reason: "Enterprise institutional data platform; API access requires dedicated Direct Data / API enterprise contract."
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
      verdict: "Gated / Outreach",
      primary_blocker: "Enterprise contract ($25k+/yr) and institutional data license required.",
      effort_estimate: "Very High"
    },
    evidence: {
      urls: [
        "https://pitchbook.com/products/data/api",
        "https://pitchbook.com/direct-data"
      ],
      snippets: [
        {
          claim: "PitchBook Direct Data API requires enterprise subscription and custom API key provisioning",
          source: "pitchbook.com/products/data/api",
          quote: "PitchBook's API provides raw data feeds on companies, deals, investors, and funds directly to enterprise data warehouses."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Plaid",
      category: "Finance and Fintech",
      description: "Financial services company facilitating communication between fintech apps and bank accounts."
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
        "https://plaid.com/docs/api/",
        "https://dashboard.plaid.com/keys"
      ],
      snippets: [
        {
          claim: "Immediate Sandbox Client ID and Secret with 100 free test accounts",
          source: "plaid.com/docs/api",
          quote: "Authenticate requests by passing your client_id and secret in the JSON request body or custom headers."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },

  // =========================================================================
  // 10. AI, Research and Media-native (10 apps)
  // =========================================================================
  {
    app: {
      name: "NotebookLM",
      category: "AI, Research and Media-native",
      description: "Google's AI-first personalized research assistant and document grounding notebook."
    },
    authentication: {
      methods: ["Session", "OAuth2"],
      credential_setup: "Free tier available",
      self_serve: false,
      gated: true,
      gating_reason: "Consumer / web-only Google product; lacks public standalone REST API credentials (requires browser automation or internal Gemini APIs)."
    },
    api: {
      type: "None",
      breadth: "None",
      write_operations: false,
      webhooks: false
    },
    mcp: {
      available: false,
      type: "None",
      agent_callable: false,
      source_url: null
    },
    buildability: {
      verdict: "Not Practical",
      primary_blocker: "No public developer API or programmatic token generation; consumer web interface only.",
      effort_estimate: "Very High"
    },
    evidence: {
      urls: [
        "https://notebooklm.google.com/",
        "https://support.google.com/notebooklm"
      ],
      snippets: [
        {
          claim: "NotebookLM operates as an end-user web application without a public REST API surface",
          source: "notebooklm.google.com",
          quote: "NotebookLM is an experimental web application. Currently, no public developer API keys or programmatic access points are available."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Otter AI",
      category: "AI, Research and Media-native",
      description: "AI meeting assistant for live audio transcription, notes, and collaborative summaries."
    },
    authentication: {
      methods: ["OAuth2"],
      credential_setup: "Contact sales",
      self_serve: false,
      gated: true,
      gating_reason: "Otter API access is restricted to Otter Business/Enterprise plans and requires enterprise partnership approval."
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
      verdict: "Gated / Outreach",
      primary_blocker: "Enterprise contract and Otter partnership developer onboarding required.",
      effort_estimate: "High"
    },
    evidence: {
      urls: [
        "https://otter.ai/enterprise",
        "https://help.otter.ai/hc/en-us/articles/360049281694-Otter-Integrations"
      ],
      snippets: [
        {
          claim: "Otter direct API integration requires enterprise tier contract and commercial access approval",
          source: "help.otter.ai",
          quote: "Direct API access for Otter transcription and speech indexing is available on custom enterprise agreements."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Fathom",
      category: "AI, Research and Media-native",
      description: "AI meeting recorder that transcribes, highlights, and syncs call summaries directly to CRMs."
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
        "https://developers.fathom.video/",
        "https://fathom.video/docs/api"
      ],
      snippets: [
        {
          claim: "API key generated in user settings for instant meeting recordings, transcripts, and summaries access",
          source: "developers.fathom.video",
          quote: "Fathom API provides REST endpoints to query meetings, transcripts, action items, and register webhooks using Bearer API keys."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Consensus",
      category: "AI, Research and Media-native",
      description: "AI-powered academic search engine extracting scientific research consensus."
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
      breadth: "Moderate",
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
      verdict: "Easy Win",
      primary_blocker: null,
      effort_estimate: "Low"
    },
    evidence: {
      urls: [
        "https://consensus.app/api",
        "https://consensus.app/docs"
      ],
      snippets: [
        {
          claim: "REST API for querying peer-reviewed research papers and consensus scores authenticated via API key",
          source: "consensus.app/api",
          quote: "The Consensus API enables developers to search over 200M academic papers and retrieve synthesized claims."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Reducto",
      category: "AI, Research and Media-native",
      description: "AI document parsing and OCR extraction API for complex PDFs, spreadsheets, and diagrams."
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
        "https://docs.reducto.ai/",
        "https://app.reducto.ai/keys"
      ],
      snippets: [
        {
          claim: "Self-serve API keys generated in dashboard with 1,000 free credits for async document parsing",
          source: "docs.reducto.ai",
          quote: "Reducto provides high-performance document parsing APIs authenticated via Authorization: Bearer or api-key headers."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Devin",
      category: "AI, Research and Media-native",
      description: "Autonomous AI software engineer platform developed by Cognition AI."
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
      available: true,
      type: "Community",
      agent_callable: true,
      source_url: "https://github.com/cognition-ai"
    },
    buildability: {
      verdict: "Easy Win",
      primary_blocker: null,
      effort_estimate: "Low"
    },
    evidence: {
      urls: [
        "https://docs.devin.ai/",
        "https://app.devin.ai/settings/api-keys"
      ],
      snippets: [
        {
          claim: "Devin REST API enables programmatic creation of sessions, sending prompt inputs, and polling task execution status",
          source: "docs.devin.ai",
          quote: "The Devin API allows developers to spawn autonomous developer agents, attach GitHub repos, and retrieve execution diffs using Bearer tokens."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Higgsfield",
      category: "AI, Research and Media-native",
      description: "AI video foundation models and video generation developer platform."
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
      source_url: "https://github.com/higgsfield-ai"
    },
    buildability: {
      verdict: "Easy Win",
      primary_blocker: null,
      effort_estimate: "Low"
    },
    evidence: {
      urls: [
        "https://docs.higgsfield.ai/",
        "https://higgsfield.ai/developers"
      ],
      snippets: [
        {
          claim: "Higgsfield provides REST APIs and MCP servers for video motion generation and character rigging",
          source: "docs.higgsfield.ai",
          quote: "The Higgsfield Developer API allows programmatic generation of realistic character video and camera dynamics via Bearer token auth."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Mermaid CLI",
      category: "AI, Research and Media-native",
      description: "Command-line and library interface for rendering text-based diagrams, flowcharts, and sequence models."
    },
    authentication: {
      methods: ["CLI/Local"],
      credential_setup: "Open Source / Local",
      self_serve: true,
      gated: false,
      gating_reason: null
    },
    api: {
      type: "CLI/Node",
      breadth: "Comprehensive",
      write_operations: true,
      webhooks: false
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
        "https://github.com/mermaid-js/mermaid-cli",
        "https://mermaid.js.org/config/usage.html"
      ],
      snippets: [
        {
          claim: "Zero-credential open-source CLI/NPM package for local or serverless diagram rendering to SVG/PNG",
          source: "github.com/mermaid-js/mermaid-cli",
          quote: "Mermaid-CLI allows you to render Mermaid diagrams to PNG, SVG, or PDF from the command line or node scripts without authentication."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "YouTube Transcript",
      category: "AI, Research and Media-native",
      description: "API for extracting full textual transcripts, timestamps, and closed captions from video IDs."
    },
    authentication: {
      methods: ["None", "API Key"],
      credential_setup: "Open Source / Local",
      self_serve: true,
      gated: false,
      gating_reason: null
    },
    api: {
      type: "REST",
      breadth: "Limited",
      write_operations: false,
      webhooks: false
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
        "https://developers.google.com/youtube/v3/docs/captions",
        "https://github.com/jdepoix/youtube-transcript-api"
      ],
      snippets: [
        {
          claim: "Direct access to video transcripts via YouTube Data API v3 (API key) or open-source transcript scraping endpoints",
          source: "developers.google.com/youtube",
          quote: "The YouTube Captions API allows developers to download captions and subtitles for video analysis."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Grain",
      category: "AI, Research and Media-native",
      description: "AI meeting recorder, clip creator, and transcript integration tool for revenue teams."
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
        "https://grain.com/integrations",
        "https://grain.com/docs/api"
      ],
      snippets: [
        {
          claim: "Grain API provides endpoints for searching meeting recordings, extracting AI highlights, and syncing notes via API keys",
          source: "grain.com/docs",
          quote: "Grain REST API allows developers to programmatically fetch highlights, transcripts, and meeting summaries using Bearer authentication."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  }
];
