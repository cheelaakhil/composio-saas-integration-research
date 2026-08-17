/**
 * Part 2: Communications and Messaging (10 apps) & Marketing, Ads, Email and Social (10 apps)
 */

export const APPS_DATA_PART2 = [
  // =========================================================================
  // 3. Communications and Messaging (10 apps)
  // =========================================================================
  {
    app: {
      name: "Slack",
      category: "Communications and Messaging",
      description: "Enterprise messaging, channel collaboration, and workflow automation platform."
    },
    authentication: {
      methods: ["OAuth2", "Bearer/PAT"],
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
      source_url: "https://github.com/modelcontextprotocol/servers/tree/main/src/slack"
    },
    buildability: {
      verdict: "Easy Win",
      primary_blocker: null,
      effort_estimate: "Low"
    },
    evidence: {
      urls: [
        "https://api.slack.com/",
        "https://api.slack.com/apps"
      ],
      snippets: [
        {
          claim: "Self-serve Slack App creation with bot tokens (xoxb) and full Web API access",
          source: "api.slack.com",
          quote: "Create a Slack app, install it to your workspace, and use your bot user OAuth token to call Web API methods."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Discord",
      category: "Communications and Messaging",
      description: "Voice, video, and text communication platform with programmable bot gateways."
    },
    authentication: {
      methods: ["Bearer/PAT", "OAuth2"],
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
        "https://discord.com/developers/docs/intro",
        "https://discord.com/developers/applications"
      ],
      snippets: [
        {
          claim: "Self-serve bot token creation in Developer Portal with WebSocket Gateway & REST APIs",
          source: "discord.com/developers",
          quote: "Discord applications allow you to interact with Discord APIs, listen to gateway events, and post messages via bot tokens."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Twilio",
      category: "Communications and Messaging",
      description: "Cloud communications platform for programmable SMS, voice, video, and WhatsApp."
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
        "https://www.twilio.com/docs/usage/api",
        "https://console.twilio.com/"
      ],
      snippets: [
        {
          claim: "Account SID and Auth Token available immediately upon free account registration",
          source: "twilio.com/docs",
          quote: "Twilio uses standard HTTP Basic Authentication with your Account SID as username and Auth Token as password."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "SendGrid",
      category: "Communications and Messaging",
      description: "Cloud-based customer communication platform for transactional and marketing email."
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
        "https://docs.sendgrid.com/api-reference",
        "https://app.sendgrid.com/settings/api_keys"
      ],
      snippets: [
        {
          claim: "Scoped API keys generated in Settings with immediate REST v3 mail send access",
          source: "docs.sendgrid.com",
          quote: "SendGrid uses API keys passed in Authorization: Bearer headers for secure API authentication."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Zoho Cliq",
      category: "Communications and Messaging",
      description: "Team communication and business collaboration chat software by Zoho."
    },
    authentication: {
      methods: ["OAuth2", "Bearer/PAT"],
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
        "https://www.zoho.com/cliq/help/restapi/",
        "https://cliq.zoho.com/company/settings"
      ],
      snippets: [
        {
          claim: "Bot tokens and OAuth 2.0 credentials for channel messages, cards, and mentions",
          source: "zoho.com/cliq",
          quote: "Zoho Cliq REST APIs allow developers to post messages, manage channels, and build bots using authtoken or OAuth."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Lark",
      category: "Communications and Messaging",
      description: "Enterprise collaboration suite integrating chat, docs, video conferencing, and calendar."
    },
    authentication: {
      methods: ["OAuth2", "Bearer/PAT"],
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
      source_url: "https://github.com/larksuite"
    },
    buildability: {
      verdict: "Easy Win",
      primary_blocker: null,
      effort_estimate: "Low"
    },
    evidence: {
      urls: [
        "https://open.larksuite.com/document/home/index",
        "https://open.larksuite.com/app"
      ],
      snippets: [
        {
          claim: "Self-serve custom app creation with App ID/Secret in Lark Developer Console",
          source: "open.larksuite.com",
          quote: "Lark Open Platform offers REST APIs for messages, meetings, Bitable databases, and approval workflows using tenant_access_token."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Pumble",
      category: "Communications and Messaging",
      description: "Team chat and messaging platform for workplace communication."
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
        "https://pumble.com/help/integrations/api/",
        "https://pumble.com/api"
      ],
      snippets: [
        {
          claim: "API tokens and webhooks in workspace settings for messaging and channel management",
          source: "pumble.com/api",
          quote: "Pumble REST API enables developers to automate channel creation, post messages, and invite users via Bearer token auth."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Aircall",
      category: "Communications and Messaging",
      description: "Cloud-based business phone system and call center software for support and sales."
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
        "https://developer.aircall.io/api-references/",
        "https://dashboard.aircall.io/integrations/api-keys"
      ],
      snippets: [
        {
          claim: "API ID and API Token generated in Dashboard with HTTP Basic Auth for calls and contacts",
          source: "developer.aircall.io",
          quote: "Aircall Public API uses HTTP Basic Authentication with your API ID as the username and API Token as the password."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Vonage",
      category: "Communications and Messaging",
      description: "Communications APIs for SMS, voice, video, verify, and conversational messaging."
    },
    authentication: {
      methods: ["Basic", "Bearer/PAT", "API Key"],
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
        "https://developer.vonage.com/en/api",
        "https://dashboard.nexmo.com/settings"
      ],
      snippets: [
        {
          claim: "Instant API Key and API Secret with free test credit upon registration",
          source: "developer.vonage.com",
          quote: "Vonage APIs authenticate requests using API key/secret in query params or JWT Bearer tokens signed with a private key."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Telegram",
      category: "Communications and Messaging",
      description: "Cloud-based instant messaging service with bot HTTP API."
    },
    authentication: {
      methods: ["API Key"],
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
        "https://core.telegram.org/bots/api",
        "https://t.me/BotFather"
      ],
      snippets: [
        {
          claim: "Zero-barrier bot token generation via @BotFather in Telegram client",
          source: "core.telegram.org/bots/api",
          quote: "The Bot API is an HTTP-based interface created for developers keen on building bots for Telegram."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },

  // =========================================================================
  // 4. Marketing, Ads, Email and Social (10 apps)
  // =========================================================================
  {
    app: {
      name: "Mailchimp",
      category: "Marketing, Ads, Email and Social",
      description: "Marketing automation platform and email marketing service."
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
        "https://mailchimp.com/developer/marketing/api/",
        "https://mailchimp.com/developer/marketing/guides/quick-start/"
      ],
      snippets: [
        {
          claim: "Self-serve API keys generated in Account > Extras > API keys with datacenter prefix routing",
          source: "mailchimp.com/developer",
          quote: "Each Mailchimp API key is tied to a specific data center, identified by the suffix after the hyphen."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "ActiveCampaign",
      category: "Marketing, Ads, Email and Social",
      description: "Customer experience automation, email marketing, and CRM platform."
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
        "https://developers.activecampaign.com/reference/overview",
        "https://help.activecampaign.com/hc/en-us/articles/207317590-Where-do-I-find-my-API-credentials-"
      ],
      snippets: [
        {
          claim: "API Key and account URL available immediately in Settings > Developer",
          source: "developers.activecampaign.com",
          quote: "The ActiveCampaign API v3 allows developers to manage contacts, deals, automations, and campaigns using Api-Token headers."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Klaviyo",
      category: "Marketing, Ads, Email and Social",
      description: "Intelligent marketing automation platform for ecommerce email and SMS marketing."
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
      available: true,
      type: "Community",
      agent_callable: true,
      source_url: "https://github.com/klaviyo"
    },
    buildability: {
      verdict: "Easy Win",
      primary_blocker: null,
      effort_estimate: "Low"
    },
    evidence: {
      urls: [
        "https://developers.klaviyo.com/en/reference/api_overview",
        "https://www.klaviyo.com/settings/account/api-keys"
      ],
      snippets: [
        {
          claim: "Private API keys generated instantly in Account Settings with REST v2024 endpoints",
          source: "developers.klaviyo.com",
          quote: "Klaviyo APIs authenticate via Authorization: Klaviyo-API-Key or Bearer tokens for profile, list, and campaign management."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "systeme.io",
      category: "Marketing, Ads, Email and Social",
      description: "All-in-one marketing platform for sales funnels, email marketing, courses, and affiliate management."
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
        "https://systeme.io/api-docs",
        "https://systeme.io/dashboard/settings/api-keys"
      ],
      snippets: [
        {
          claim: "Public API keys generated in Settings > Public API Keys with full contacts and tags endpoints",
          source: "systeme.io/api-docs",
          quote: "Systeme.io REST API uses X-API-KEY header authentication to query and create contacts, tags, and course enrollments."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Buffer",
      category: "Marketing, Ads, Email and Social",
      description: "Social media management tool for scheduling posts and analyzing performance."
    },
    authentication: {
      methods: ["OAuth2", "Bearer/PAT"],
      credential_setup: "Free tier available",
      self_serve: true,
      gated: false,
      gating_reason: null
    },
    api: {
      type: "GraphQL",
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
        "https://buffer.com/developers/api",
        "https://buffer.com/developers/graphql"
      ],
      snippets: [
        {
          claim: "GraphQL API for queueing social updates, profile management, and analytics",
          source: "buffer.com/developers",
          quote: "The Buffer GraphQL API provides programmatic access to schedule posts, manage channels, and retrieve analytics."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Hootsuite",
      category: "Marketing, Ads, Email and Social",
      description: "Enterprise social media marketing and multi-channel scheduling dashboard."
    },
    authentication: {
      methods: ["OAuth2"],
      credential_setup: "Paid plan required",
      self_serve: false,
      gated: true,
      gating_reason: "Developer portal requires an active enterprise subscription or Hootsuite App Directory partner application."
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
      primary_blocker: "App Directory partner approval and enterprise tier required for API credentials.",
      effort_estimate: "High"
    },
    evidence: {
      urls: [
        "https://developer.hootsuite.com/docs/api-documentation",
        "https://developer.hootsuite.com/docs/getting-started"
      ],
      snippets: [
        {
          claim: "Hootsuite developer account requires partner review or enterprise account linkage",
          source: "developer.hootsuite.com",
          quote: "Access to Hootsuite's APIs requires approval through the Hootsuite Developer Portal."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Pinterest",
      category: "Marketing, Ads, Email and Social",
      description: "Visual discovery engine, social bookmarking, and advertising platform."
    },
    authentication: {
      methods: ["OAuth2", "Bearer/PAT"],
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
        "https://developers.pinterest.com/docs/api/v5/",
        "https://developers.pinterest.com/apps/"
      ],
      snippets: [
        {
          claim: "Self-serve developer app creation in Pinterest Developer Portal with Trial Access tokens",
          source: "developers.pinterest.com",
          quote: "Pinterest API v5 provides endpoints to create Pins, boards, and manage ad campaigns using Bearer OAuth tokens."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Threads",
      category: "Marketing, Ads, Email and Social",
      description: "Text-based social conversation platform developed by Instagram / Meta."
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
        "https://developers.facebook.com/docs/threads",
        "https://developers.facebook.com/docs/threads/overview"
      ],
      snippets: [
        {
          claim: "Official Threads API allows publishing posts, retrieving insights, and replying to conversations",
          source: "developers.facebook.com/docs/threads",
          quote: "The Threads API enables creators and developers to manage Threads posts, retrieve replies, and view metrics using user access tokens."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Google Ads",
      category: "Marketing, Ads, Email and Social",
      description: "Online advertising platform developed by Google for search, display, and video ads."
    },
    authentication: {
      methods: ["OAuth2"],
      credential_setup: "Admin approval",
      self_serve: false,
      gated: true,
      gating_reason: "Requires Google Developer Token application approval and Google Cloud OAuth2 credentials."
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
      primary_blocker: "Developer Token review and production access approval by Google Ads API compliance team.",
      effort_estimate: "Very High"
    },
    evidence: {
      urls: [
        "https://developers.google.com/google-ads/api/docs/first-call/overview",
        "https://developers.google.com/google-ads/api/docs/access-levels"
      ],
      snippets: [
        {
          claim: "Developer Token required alongside OAuth2 client ID/secret to make API calls",
          source: "developers.google.com/google-ads/api",
          quote: "To use the Google Ads API, you need a developer token, OAuth2 client ID, client secret, and refresh token."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  },
  {
    app: {
      name: "Meta Ads",
      category: "Marketing, Ads, Email and Social",
      description: "Digital advertising platform for Instagram and Facebook marketing campaigns."
    },
    authentication: {
      methods: ["Bearer/PAT", "OAuth2"],
      credential_setup: "Admin approval",
      self_serve: false,
      gated: true,
      gating_reason: "Requires Meta App Review, Business Verification, and ads_management permission approval for production."
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
      primary_blocker: "Meta App Review, business verification, and ads_management permission review.",
      effort_estimate: "Very High"
    },
    evidence: {
      urls: [
        "https://developers.facebook.com/docs/marketing-apis",
        "https://developers.facebook.com/docs/marketing-api/overview/authentication"
      ],
      snippets: [
        {
          claim: "Marketing API requires App Review and Business Verification for production ads management",
          source: "developers.facebook.com/docs/marketing-apis",
          quote: "To access live campaign management outside of sandbox test accounts, you must submit your app for App Review."
        }
      ],
      confidence: "HIGH",
      verification_status: "Verified",
      last_checked: new Date().toISOString()
    }
  }
];
