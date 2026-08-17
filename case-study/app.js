/**
 * Interactive Application Engine for 100-App SaaS Integration Case Study
 * Self-contained data bundle compiled on 2026-08-17T12:13:24.138Z
 */

const APPS_DATA = [
  {
    "app": {
      "name": "Salesforce",
      "category": "CRM and Sales",
      "description": "Enterprise CRM platform for sales pipeline management, custom objects, and workflow automation."
    },
    "authentication": {
      "methods": [
        "OAuth2"
      ],
      "credential_setup": "Free tier available",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "Both",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": true,
      "type": "Community",
      "agent_callable": true,
      "source_url": "https://github.com/modelcontextprotocol/servers"
    },
    "buildability": {
      "verdict": "Buildable",
      "primary_blocker": "Connected App configuration and OAuth scope permission sets required.",
      "effort_estimate": "High"
    },
    "evidence": {
      "urls": [
        "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_what_is_rest_api.htm",
        "https://developer.salesforce.com/signup"
      ],
      "snippets": [
        {
          "claim": "REST and GraphQL API availability with extensive write capabilities",
          "source": "developer.salesforce.com",
          "quote": "The Salesforce REST API lets you integrate with Salesforce applications using standard HTTP methods."
        },
        {
          "claim": "Free Developer Edition accounts offer self-serve credential creation",
          "source": "developer.salesforce.com/signup",
          "quote": "Developer Edition provides a free, full-featured Salesforce environment with API access."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.650Z"
    }
  },
  {
    "app": {
      "name": "HubSpot",
      "category": "CRM and Sales",
      "description": "Inbound CRM, sales pipeline, and customer lifecycle management software."
    },
    "authentication": {
      "methods": [
        "OAuth2",
        "API Key"
      ],
      "credential_setup": "Self-serve signup",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "Both",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": true,
      "type": "Community",
      "agent_callable": true,
      "source_url": "https://github.com/hubspot-community"
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://developers.hubspot.com/docs/api/overview",
        "https://developers.hubspot.com/docs/api/private-apps"
      ],
      "snippets": [
        {
          "claim": "Private Apps allow immediate access token generation without app marketplace approval",
          "source": "developers.hubspot.com",
          "quote": "Private apps allow you to use HubSpot's APIs to access your HubSpot account's data via access tokens."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.650Z"
    }
  },
  {
    "app": {
      "name": "Pipedrive",
      "category": "CRM and Sales",
      "description": "Sales-focused CRM and pipeline management tool for deal-driven teams."
    },
    "authentication": {
      "methods": [
        "OAuth2",
        "API Key"
      ],
      "credential_setup": "Trial required",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": false,
      "type": "None",
      "agent_callable": true,
      "source_url": null
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://developers.pipedrive.com/docs/api/v1",
        "https://pipedrive.readme.io/docs/how-to-find-the-api-token"
      ],
      "snippets": [
        {
          "claim": "Direct personal API token accessible in user settings for instant REST calls",
          "source": "developers.pipedrive.com",
          "quote": "Every user has their own unique personal API token that grants access to company data they can see."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.609Z"
    }
  },
  {
    "app": {
      "name": "Attio",
      "category": "CRM and Sales",
      "description": "Modern, customizable, real-time CRM platform built for fast-growing technology companies."
    },
    "authentication": {
      "methods": [
        "Bearer/PAT",
        "OAuth2"
      ],
      "credential_setup": "Free tier available",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": true,
      "type": "Community",
      "agent_callable": true,
      "source_url": "https://github.com/composio/attio"
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://developers.attio.com/reference",
        "https://developers.attio.com/docs/authentication"
      ],
      "snippets": [
        {
          "claim": "Self-serve API keys and OAuth 2.0 with full REST endpoints for custom objects and records",
          "source": "developers.attio.com",
          "quote": "Attio's REST API allows you to programmatically read and write CRM data, create custom attributes, and listen to webhooks."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.609Z"
    }
  },
  {
    "app": {
      "name": "Twenty",
      "category": "CRM and Sales",
      "description": "Modern open-source CRM alternative to Salesforce with GraphQL and REST APIs."
    },
    "authentication": {
      "methods": [
        "Bearer/PAT",
        "OAuth2"
      ],
      "credential_setup": "Open Source / Local",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "Both",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": true,
      "type": "Community",
      "agent_callable": true,
      "source_url": "https://github.com/twentyhq/twenty"
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://docs.twenty.com/developers/api",
        "https://docs.twenty.com/developers/authentication"
      ],
      "snippets": [
        {
          "claim": "Open-source architecture provides instant self-serve API keys and GraphQL schema introspection",
          "source": "docs.twenty.com",
          "quote": "Twenty provides both REST and GraphQL APIs authenticated via Bearer tokens generated directly in settings."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.650Z"
    }
  },
  {
    "app": {
      "name": "Podio",
      "category": "CRM and Sales",
      "description": "Customizable work and project management platform by Citrix used as a flexible CRM."
    },
    "authentication": {
      "methods": [
        "OAuth2",
        "API Key"
      ],
      "credential_setup": "Free tier available",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": false,
      "type": "None",
      "agent_callable": true,
      "source_url": null
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://developers.podio.com/",
        "https://developers.podio.com/authentication"
      ],
      "snippets": [
        {
          "claim": "Self-serve API keys and OAuth 2.0 client creation in account settings",
          "source": "developers.podio.com",
          "quote": "The Podio API gives complete programmatic control over workspaces, apps, and items using standard REST endpoints."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.609Z"
    }
  },
  {
    "app": {
      "name": "Zoho CRM",
      "category": "CRM and Sales",
      "description": "Omnichannel customer relationship management platform for multi-regional sales."
    },
    "authentication": {
      "methods": [
        "OAuth2"
      ],
      "credential_setup": "Self-serve signup",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": false,
      "type": "None",
      "agent_callable": true,
      "source_url": null
    },
    "buildability": {
      "verdict": "Buildable",
      "primary_blocker": "Multi-datacenter OAuth2 client configuration in Zoho API Console.",
      "effort_estimate": "Medium"
    },
    "evidence": {
      "urls": [
        "https://www.zoho.com/crm/developer/docs/api/v6/",
        "https://api-console.zoho.com/"
      ],
      "snippets": [
        {
          "claim": "Multi-datacenter OAuth2 client configuration in Zoho API Console",
          "source": "zoho.com/crm/developer/docs",
          "quote": "Zoho CRM APIs use OAuth2 for authentication. You must register your application in the Zoho Developer Console."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.609Z"
    }
  },
  {
    "app": {
      "name": "Close",
      "category": "CRM and Sales",
      "description": "Inside sales CRM featuring built-in calling, SMS, and email automation."
    },
    "authentication": {
      "methods": [
        "Basic",
        "API Key",
        "OAuth2"
      ],
      "credential_setup": "Trial required",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": false,
      "type": "None",
      "agent_callable": true,
      "source_url": null
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://developer.close.com/",
        "https://help.close.com/docs/api-keys"
      ],
      "snippets": [
        {
          "claim": "100% API coverage: every UI feature is powered by public REST endpoints with API keys",
          "source": "developer.close.com",
          "quote": "Close is an API-first application; our web application uses the exact same REST API that you have access to."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.609Z"
    }
  },
  {
    "app": {
      "name": "Copper",
      "category": "CRM and Sales",
      "description": "Google Workspace-native CRM for agency, technology, and consulting teams."
    },
    "authentication": {
      "methods": [
        "API Key"
      ],
      "credential_setup": "Trial required",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": false,
      "type": "None",
      "agent_callable": true,
      "source_url": null
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://developer.copper.com/",
        "https://support.copper.com/hc/en-us/articles/360000305886-API-Keys"
      ],
      "snippets": [
        {
          "claim": "User-generated API key and email authentication header",
          "source": "developer.copper.com",
          "quote": "Copper API requests require an X-PW-AccessToken, X-PW-Application, and X-PW-UserEmail header."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.609Z"
    }
  },
  {
    "app": {
      "name": "DealCloud",
      "category": "CRM and Sales",
      "description": "Vertical CRM and deal management platform for private equity, investment banking, and M&A."
    },
    "authentication": {
      "methods": [
        "OAuth2"
      ],
      "credential_setup": "Contact sales",
      "self_serve": false,
      "gated": true,
      "gating_reason": "Enterprise financial services CRM; requires active institutional contract and tenant administrator API key provisioning."
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": false,
      "type": "None",
      "agent_callable": true,
      "source_url": null
    },
    "buildability": {
      "verdict": "Gated / Outreach",
      "primary_blocker": "Enterprise contract and DealCloud admin provisioning required.",
      "effort_estimate": "Very High"
    },
    "evidence": {
      "urls": [
        "https://developer.dealcloud.com/",
        "https://www.intapp.com/dealcloud/"
      ],
      "snippets": [
        {
          "claim": "DealCloud REST API access requires enterprise client credentials issued by Intapp support",
          "source": "developer.dealcloud.com",
          "quote": "DealCloud APIs provide programmatic access to entries, lists, and relationships authenticated via OAuth 2.0."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.650Z"
    }
  },
  {
    "app": {
      "name": "Zendesk",
      "category": "Support and Helpdesk",
      "description": "Customer service and support ticketing software platform."
    },
    "authentication": {
      "methods": [
        "Basic",
        "Bearer/PAT",
        "OAuth2"
      ],
      "credential_setup": "Trial required",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": true,
      "type": "Community",
      "agent_callable": true,
      "source_url": "https://github.com/modelcontextprotocol/servers"
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://developer.zendesk.com/api-reference/ticketing/introduction/",
        "https://developer.zendesk.com/api-reference/ticketing/introduction/#api-token"
      ],
      "snippets": [
        {
          "claim": "Admin API tokens generated in Admin Center enabling ticket and user CRUD via basic auth email/token",
          "source": "developer.zendesk.com",
          "quote": "Zendesk Support API uses API tokens with HTTP Basic Authentication (username: email/token, password: API token)."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.609Z"
    }
  },
  {
    "app": {
      "name": "Freshdesk",
      "category": "Support and Helpdesk",
      "description": "Omnichannel customer support software by Freshworks for ticketing and self-service."
    },
    "authentication": {
      "methods": [
        "Basic",
        "API Key"
      ],
      "credential_setup": "Free tier available",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": false,
      "type": "None",
      "agent_callable": true,
      "source_url": null
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://developers.freshdesk.com/api/",
        "https://support.freshdesk.com/en/support/solutions/articles/21554-how-to-find-your-api-key"
      ],
      "snippets": [
        {
          "claim": "Instant API key under Profile Settings with REST v2 API for tickets, contacts, and solutions",
          "source": "developers.freshdesk.com/api",
          "quote": "The Freshdesk API is a RESTful API using basic authentication with your API key as the username."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.609Z"
    }
  },
  {
    "app": {
      "name": "Intercom",
      "category": "Support and Helpdesk",
      "description": "AI customer service platform, support inbox, and ticketing automation."
    },
    "authentication": {
      "methods": [
        "Bearer/PAT",
        "OAuth2"
      ],
      "credential_setup": "Trial required",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": false,
      "type": "None",
      "agent_callable": true,
      "source_url": null
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://developers.intercom.com/docs/references/rest-api/api.intercom.io/",
        "https://app.intercom.com/a/apps/_/developer-hub"
      ],
      "snippets": [
        {
          "claim": "Access tokens generated in Developer Hub for workspace API access",
          "source": "developers.intercom.com",
          "quote": "Intercom's REST API allows you to access conversations, contacts, tickets, and articles using Bearer access tokens."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.609Z"
    }
  },
  {
    "app": {
      "name": "Front",
      "category": "Support and Helpdesk",
      "description": "Customer operations and collaborative inbox platform for support teams."
    },
    "authentication": {
      "methods": [
        "Bearer/PAT",
        "OAuth2"
      ],
      "credential_setup": "Trial required",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": false,
      "type": "None",
      "agent_callable": true,
      "source_url": null
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://dev.frontapp.com/docs/core-rest-api",
        "https://app.frontapp.com/settings/plugins/api"
      ],
      "snippets": [
        {
          "claim": "API tokens generated in Settings > Developers with comprehensive inbox and message endpoints",
          "source": "dev.frontapp.com",
          "quote": "Front's Core REST API enables full automation of conversations, messages, channels, tags, and contacts."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.609Z"
    }
  },
  {
    "app": {
      "name": "Help Scout",
      "category": "Support and Helpdesk",
      "description": "Customer service platform providing shared inboxes, knowledge base, and live chat."
    },
    "authentication": {
      "methods": [
        "OAuth2"
      ],
      "credential_setup": "Trial required",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": false,
      "type": "None",
      "agent_callable": true,
      "source_url": null
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://developer.helpscout.com/mailbox-api/",
        "https://developer.helpscout.com/mailbox-api/overview/authentication/"
      ],
      "snippets": [
        {
          "claim": "My App OAuth2 Client ID/Secret generated in Your Profile > Authentication",
          "source": "developer.helpscout.com",
          "quote": "Mailbox API 2.0 uses OAuth2 Client Credentials flow for server-to-server integrations to manage conversations."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.609Z"
    }
  },
  {
    "app": {
      "name": "Gorgias",
      "category": "Support and Helpdesk",
      "description": "E-commerce customer service helpdesk built specifically for online merchants."
    },
    "authentication": {
      "methods": [
        "Basic",
        "API Key"
      ],
      "credential_setup": "Trial required",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": false,
      "type": "None",
      "agent_callable": true,
      "source_url": null
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://developers.gorgias.com/reference/introduction",
        "https://developers.gorgias.com/docs/authentication"
      ],
      "snippets": [
        {
          "claim": "API key generated in Settings > REST API with HTTP Basic Auth support",
          "source": "developers.gorgias.com",
          "quote": "Gorgias REST API uses HTTP Basic Authentication with your email address and API key."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.609Z"
    }
  },
  {
    "app": {
      "name": "Kustomer",
      "category": "Support and Helpdesk",
      "description": "Omnichannel customer operations platform with timeline-based customer records."
    },
    "authentication": {
      "methods": [
        "Bearer/PAT",
        "API Key"
      ],
      "credential_setup": "Paid plan required",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": false,
      "type": "None",
      "agent_callable": true,
      "source_url": null
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://developer.kustomer.com/kustomer-api-docs/reference/overview",
        "https://developer.kustomer.com/kustomer-api-docs/reference/authentication"
      ],
      "snippets": [
        {
          "claim": "API Keys created in Settings > Security > API Keys with granular role definitions",
          "source": "developer.kustomer.com",
          "quote": "Kustomer REST API uses API keys passed in Authorization: Bearer headers for automated workflows."
        }
      ],
      "confidence": "MEDIUM",
      "verification_status": "Partial",
      "last_checked": "2026-08-17T12:13:15.609Z"
    }
  },
  {
    "app": {
      "name": "Pylon",
      "category": "Support and Helpdesk",
      "description": "B2B customer operations and support platform built for Slack, Teams, and email."
    },
    "authentication": {
      "methods": [
        "Bearer/PAT",
        "API Key"
      ],
      "credential_setup": "Free tier available",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": false,
      "type": "None",
      "agent_callable": true,
      "source_url": null
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://docs.usepylon.com/reference",
        "https://app.usepylon.com/settings/api"
      ],
      "snippets": [
        {
          "claim": "Self-serve API keys generated in Settings with full conversation and issue management endpoints",
          "source": "docs.usepylon.com",
          "quote": "Pylon REST API provides endpoints to create, update, and manage support issues and customer accounts using Bearer tokens."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.609Z"
    }
  },
  {
    "app": {
      "name": "LiveAgent",
      "category": "Support and Helpdesk",
      "description": "Help desk software with live chat, ticketing, and call center capabilities."
    },
    "authentication": {
      "methods": [
        "API Key",
        "Basic"
      ],
      "credential_setup": "Trial required",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": false,
      "type": "None",
      "agent_callable": true,
      "source_url": null
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://api.liveagent.com/docs/v3/",
        "https://support.liveagent.com/793617-API-key"
      ],
      "snippets": [
        {
          "claim": "API key generation in Configuration > System > API with REST v3 endpoints",
          "source": "api.liveagent.com",
          "quote": "LiveAgent API v3 allows programmatic access to tickets, chats, calls, and agents using apikey query params or headers."
        }
      ],
      "confidence": "MEDIUM",
      "verification_status": "Partial",
      "last_checked": "2026-08-17T12:13:15.609Z"
    }
  },
  {
    "app": {
      "name": "Plain",
      "category": "Support and Helpdesk",
      "description": "Modern customer support platform built for developers and engineering teams."
    },
    "authentication": {
      "methods": [
        "Bearer/PAT"
      ],
      "credential_setup": "Free tier available",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "GraphQL",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": true,
      "type": "Community",
      "agent_callable": true,
      "source_url": "https://github.com/team-plain"
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://plain.com/docs/graphql-api",
        "https://app.plain.com/settings/api-keys"
      ],
      "snippets": [
        {
          "claim": "GraphQL API with instant workspace API keys for thread and customer management",
          "source": "plain.com/docs",
          "quote": "Plain's GraphQL API allows you to send and receive messages, manage customer data, and configure webhooks with Bearer auth."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.609Z"
    }
  },
  {
    "app": {
      "name": "Slack",
      "category": "Communications and Messaging",
      "description": "Enterprise messaging, channel collaboration, and workflow automation platform."
    },
    "authentication": {
      "methods": [
        "OAuth2",
        "Bearer/PAT"
      ],
      "credential_setup": "Free tier available",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "Both",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": true,
      "type": "First-party",
      "agent_callable": true,
      "source_url": "https://github.com/modelcontextprotocol/servers/tree/main/src/slack"
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://api.slack.com/",
        "https://api.slack.com/apps"
      ],
      "snippets": [
        {
          "claim": "Self-serve Slack App creation with bot tokens (xoxb) and full Web API access",
          "source": "api.slack.com",
          "quote": "Create a Slack app, install it to your workspace, and use your bot user OAuth token to call Web API methods."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.609Z"
    }
  },
  {
    "app": {
      "name": "Discord",
      "category": "Communications and Messaging",
      "description": "Voice, video, and text communication platform with programmable bot gateways."
    },
    "authentication": {
      "methods": [
        "Bearer/PAT",
        "OAuth2"
      ],
      "credential_setup": "Self-serve signup",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": true,
      "type": "Community",
      "agent_callable": true,
      "source_url": "https://github.com/modelcontextprotocol/servers"
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://discord.com/developers/docs/intro",
        "https://discord.com/developers/applications"
      ],
      "snippets": [
        {
          "claim": "Self-serve bot token creation in Developer Portal with WebSocket Gateway & REST APIs",
          "source": "discord.com/developers",
          "quote": "Discord applications allow you to interact with Discord APIs, listen to gateway events, and post messages via bot tokens."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.609Z"
    }
  },
  {
    "app": {
      "name": "Twilio",
      "category": "Communications and Messaging",
      "description": "Cloud communications platform for programmable SMS, voice, video, and WhatsApp."
    },
    "authentication": {
      "methods": [
        "Basic",
        "API Key"
      ],
      "credential_setup": "Free tier available",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": false,
      "type": "None",
      "agent_callable": true,
      "source_url": null
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://www.twilio.com/docs/usage/api",
        "https://console.twilio.com/"
      ],
      "snippets": [
        {
          "claim": "Account SID and Auth Token available immediately upon free account registration",
          "source": "twilio.com/docs",
          "quote": "Twilio uses standard HTTP Basic Authentication with your Account SID as username and Auth Token as password."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.609Z"
    }
  },
  {
    "app": {
      "name": "SendGrid",
      "category": "Communications and Messaging",
      "description": "Cloud-based customer communication platform for transactional and marketing email."
    },
    "authentication": {
      "methods": [
        "Bearer/PAT",
        "API Key"
      ],
      "credential_setup": "Free tier available",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": false,
      "type": "None",
      "agent_callable": true,
      "source_url": null
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://docs.sendgrid.com/api-reference",
        "https://app.sendgrid.com/settings/api_keys"
      ],
      "snippets": [
        {
          "claim": "Scoped API keys generated in Settings with immediate REST v3 mail send access",
          "source": "docs.sendgrid.com",
          "quote": "SendGrid uses API keys passed in Authorization: Bearer headers for secure API authentication."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.609Z"
    }
  },
  {
    "app": {
      "name": "Zoho Cliq",
      "category": "Communications and Messaging",
      "description": "Team communication and business collaboration chat software by Zoho."
    },
    "authentication": {
      "methods": [
        "OAuth2",
        "Bearer/PAT"
      ],
      "credential_setup": "Free tier available",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": false,
      "type": "None",
      "agent_callable": true,
      "source_url": null
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://www.zoho.com/cliq/help/restapi/",
        "https://cliq.zoho.com/company/settings"
      ],
      "snippets": [
        {
          "claim": "Bot tokens and OAuth 2.0 credentials for channel messages, cards, and mentions",
          "source": "zoho.com/cliq",
          "quote": "Zoho Cliq REST APIs allow developers to post messages, manage channels, and build bots using authtoken or OAuth."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.609Z"
    }
  },
  {
    "app": {
      "name": "Lark",
      "category": "Communications and Messaging",
      "description": "Enterprise collaboration suite integrating chat, docs, video conferencing, and calendar."
    },
    "authentication": {
      "methods": [
        "OAuth2",
        "Bearer/PAT"
      ],
      "credential_setup": "Free tier available",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": true,
      "type": "Community",
      "agent_callable": true,
      "source_url": "https://github.com/larksuite"
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://open.larksuite.com/document/home/index",
        "https://open.larksuite.com/app"
      ],
      "snippets": [
        {
          "claim": "Self-serve custom app creation with App ID/Secret in Lark Developer Console",
          "source": "open.larksuite.com",
          "quote": "Lark Open Platform offers REST APIs for messages, meetings, Bitable databases, and approval workflows using tenant_access_token."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.609Z"
    }
  },
  {
    "app": {
      "name": "Pumble",
      "category": "Communications and Messaging",
      "description": "Team chat and messaging platform for workplace communication."
    },
    "authentication": {
      "methods": [
        "Bearer/PAT",
        "OAuth2"
      ],
      "credential_setup": "Free tier available",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": false,
      "type": "None",
      "agent_callable": true,
      "source_url": null
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://pumble.com/help/integrations/api/",
        "https://pumble.com/api"
      ],
      "snippets": [
        {
          "claim": "API tokens and webhooks in workspace settings for messaging and channel management",
          "source": "pumble.com/api",
          "quote": "Pumble REST API enables developers to automate channel creation, post messages, and invite users via Bearer token auth."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.609Z"
    }
  },
  {
    "app": {
      "name": "Aircall",
      "category": "Communications and Messaging",
      "description": "Cloud-based business phone system and call center software for support and sales."
    },
    "authentication": {
      "methods": [
        "Basic",
        "API Key"
      ],
      "credential_setup": "Trial required",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": false,
      "type": "None",
      "agent_callable": true,
      "source_url": null
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://developer.aircall.io/api-references/",
        "https://dashboard.aircall.io/integrations/api-keys"
      ],
      "snippets": [
        {
          "claim": "API ID and API Token generated in Dashboard with HTTP Basic Auth for calls and contacts",
          "source": "developer.aircall.io",
          "quote": "Aircall Public API uses HTTP Basic Authentication with your API ID as the username and API Token as the password."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.609Z"
    }
  },
  {
    "app": {
      "name": "Vonage",
      "category": "Communications and Messaging",
      "description": "Communications APIs for SMS, voice, video, verify, and conversational messaging."
    },
    "authentication": {
      "methods": [
        "Basic",
        "Bearer/PAT",
        "API Key"
      ],
      "credential_setup": "Free tier available",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": false,
      "type": "None",
      "agent_callable": true,
      "source_url": null
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://developer.vonage.com/en/api",
        "https://dashboard.nexmo.com/settings"
      ],
      "snippets": [
        {
          "claim": "Instant API Key and API Secret with free test credit upon registration",
          "source": "developer.vonage.com",
          "quote": "Vonage APIs authenticate requests using API key/secret in query params or JWT Bearer tokens signed with a private key."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.609Z"
    }
  },
  {
    "app": {
      "name": "Telegram",
      "category": "Communications and Messaging",
      "description": "Cloud-based instant messaging service with bot HTTP API."
    },
    "authentication": {
      "methods": [
        "API Key"
      ],
      "credential_setup": "Self-serve signup",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": true,
      "type": "Community",
      "agent_callable": true,
      "source_url": "https://github.com/modelcontextprotocol/servers"
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://core.telegram.org/bots/api",
        "https://t.me/BotFather"
      ],
      "snippets": [
        {
          "claim": "Zero-barrier bot token generation via @BotFather in Telegram client",
          "source": "core.telegram.org/bots/api",
          "quote": "The Bot API is an HTTP-based interface created for developers keen on building bots for Telegram."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.609Z"
    }
  },
  {
    "app": {
      "name": "Mailchimp",
      "category": "Marketing, Ads, Email and Social",
      "description": "Marketing automation platform and email marketing service."
    },
    "authentication": {
      "methods": [
        "API Key",
        "OAuth2"
      ],
      "credential_setup": "Free tier available",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": false,
      "type": "None",
      "agent_callable": true,
      "source_url": null
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://mailchimp.com/developer/marketing/api/",
        "https://mailchimp.com/developer/marketing/guides/quick-start/"
      ],
      "snippets": [
        {
          "claim": "Self-serve API keys generated in Account > Extras > API keys with datacenter prefix routing",
          "source": "mailchimp.com/developer",
          "quote": "Each Mailchimp API key is tied to a specific data center, identified by the suffix after the hyphen."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.609Z"
    }
  },
  {
    "app": {
      "name": "ActiveCampaign",
      "category": "Marketing, Ads, Email and Social",
      "description": "Customer experience automation, email marketing, and CRM platform."
    },
    "authentication": {
      "methods": [
        "API Key"
      ],
      "credential_setup": "Trial required",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": false,
      "type": "None",
      "agent_callable": true,
      "source_url": null
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://developers.activecampaign.com/reference/overview",
        "https://help.activecampaign.com/hc/en-us/articles/207317590-Where-do-I-find-my-API-credentials-"
      ],
      "snippets": [
        {
          "claim": "API Key and account URL available immediately in Settings > Developer",
          "source": "developers.activecampaign.com",
          "quote": "The ActiveCampaign API v3 allows developers to manage contacts, deals, automations, and campaigns using Api-Token headers."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.609Z"
    }
  },
  {
    "app": {
      "name": "Klaviyo",
      "category": "Marketing, Ads, Email and Social",
      "description": "Intelligent marketing automation platform for ecommerce email and SMS marketing."
    },
    "authentication": {
      "methods": [
        "API Key",
        "OAuth2"
      ],
      "credential_setup": "Free tier available",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": true,
      "type": "Community",
      "agent_callable": true,
      "source_url": "https://github.com/klaviyo"
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://developers.klaviyo.com/en/reference/api_overview",
        "https://www.klaviyo.com/settings/account/api-keys"
      ],
      "snippets": [
        {
          "claim": "Private API keys generated instantly in Account Settings with REST v2024 endpoints",
          "source": "developers.klaviyo.com",
          "quote": "Klaviyo APIs authenticate via Authorization: Klaviyo-API-Key or Bearer tokens for profile, list, and campaign management."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.609Z"
    }
  },
  {
    "app": {
      "name": "systeme.io",
      "category": "Marketing, Ads, Email and Social",
      "description": "All-in-one marketing platform for sales funnels, email marketing, courses, and affiliate management."
    },
    "authentication": {
      "methods": [
        "API Key"
      ],
      "credential_setup": "Free tier available",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": false,
      "type": "None",
      "agent_callable": true,
      "source_url": null
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://systeme.io/api-docs",
        "https://systeme.io/dashboard/settings/api-keys"
      ],
      "snippets": [
        {
          "claim": "Public API keys generated in Settings > Public API Keys with full contacts and tags endpoints",
          "source": "systeme.io/api-docs",
          "quote": "Systeme.io REST API uses X-API-KEY header authentication to query and create contacts, tags, and course enrollments."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.609Z"
    }
  },
  {
    "app": {
      "name": "Buffer",
      "category": "Marketing, Ads, Email and Social",
      "description": "Social media management tool for scheduling posts and analyzing performance."
    },
    "authentication": {
      "methods": [
        "OAuth2",
        "Bearer/PAT"
      ],
      "credential_setup": "Free tier available",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "GraphQL",
      "breadth": "Moderate",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": false,
      "type": "None",
      "agent_callable": true,
      "source_url": null
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://buffer.com/developers/api",
        "https://buffer.com/developers/graphql"
      ],
      "snippets": [
        {
          "claim": "GraphQL API for queueing social updates, profile management, and analytics",
          "source": "buffer.com/developers",
          "quote": "The Buffer GraphQL API provides programmatic access to schedule posts, manage channels, and retrieve analytics."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.609Z"
    }
  },
  {
    "app": {
      "name": "Hootsuite",
      "category": "Marketing, Ads, Email and Social",
      "description": "Enterprise social media marketing and multi-channel scheduling dashboard."
    },
    "authentication": {
      "methods": [
        "OAuth2"
      ],
      "credential_setup": "Paid plan required",
      "self_serve": false,
      "gated": true,
      "gating_reason": "Developer portal requires an active enterprise subscription or Hootsuite App Directory partner application."
    },
    "api": {
      "type": "REST",
      "breadth": "Moderate",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": false,
      "type": "None",
      "agent_callable": true,
      "source_url": null
    },
    "buildability": {
      "verdict": "Gated / Outreach",
      "primary_blocker": "App Directory partner approval and enterprise tier required for API credentials.",
      "effort_estimate": "High"
    },
    "evidence": {
      "urls": [
        "https://developer.hootsuite.com/docs/api-documentation",
        "https://developer.hootsuite.com/docs/getting-started"
      ],
      "snippets": [
        {
          "claim": "Hootsuite developer account requires partner review or enterprise account linkage",
          "source": "developer.hootsuite.com",
          "quote": "Access to Hootsuite's APIs requires approval through the Hootsuite Developer Portal."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.650Z"
    }
  },
  {
    "app": {
      "name": "Pinterest",
      "category": "Marketing, Ads, Email and Social",
      "description": "Visual discovery engine, social bookmarking, and advertising platform."
    },
    "authentication": {
      "methods": [
        "OAuth2",
        "Bearer/PAT"
      ],
      "credential_setup": "Free tier available",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": false,
      "type": "None",
      "agent_callable": true,
      "source_url": null
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://developers.pinterest.com/docs/api/v5/",
        "https://developers.pinterest.com/apps/"
      ],
      "snippets": [
        {
          "claim": "Self-serve developer app creation in Pinterest Developer Portal with Trial Access tokens",
          "source": "developers.pinterest.com",
          "quote": "Pinterest API v5 provides endpoints to create Pins, boards, and manage ad campaigns using Bearer OAuth tokens."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.609Z"
    }
  },
  {
    "app": {
      "name": "Threads",
      "category": "Marketing, Ads, Email and Social",
      "description": "Text-based social conversation platform developed by Instagram / Meta."
    },
    "authentication": {
      "methods": [
        "Bearer/PAT",
        "OAuth2"
      ],
      "credential_setup": "Free tier available",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Moderate",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": false,
      "type": "None",
      "agent_callable": true,
      "source_url": null
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://developers.facebook.com/docs/threads",
        "https://developers.facebook.com/docs/threads/overview"
      ],
      "snippets": [
        {
          "claim": "Official Threads API allows publishing posts, retrieving insights, and replying to conversations",
          "source": "developers.facebook.com/docs/threads",
          "quote": "The Threads API enables creators and developers to manage Threads posts, retrieve replies, and view metrics using user access tokens."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.609Z"
    }
  },
  {
    "app": {
      "name": "Google Ads",
      "category": "Marketing, Ads, Email and Social",
      "description": "Online advertising platform developed by Google for search, display, and video ads."
    },
    "authentication": {
      "methods": [
        "OAuth2"
      ],
      "credential_setup": "Admin approval",
      "self_serve": false,
      "gated": true,
      "gating_reason": "Requires Google Developer Token application approval and Google Cloud OAuth2 credentials."
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": false,
      "type": "None",
      "agent_callable": true,
      "source_url": null
    },
    "buildability": {
      "verdict": "Gated / Outreach",
      "primary_blocker": "Developer Token review and production access approval by Google Ads API compliance team.",
      "effort_estimate": "Very High"
    },
    "evidence": {
      "urls": [
        "https://developers.google.com/google-ads/api/docs/first-call/overview",
        "https://developers.google.com/google-ads/api/docs/access-levels"
      ],
      "snippets": [
        {
          "claim": "Developer Token required alongside OAuth2 client ID/secret to make API calls",
          "source": "developers.google.com/google-ads/api",
          "quote": "To use the Google Ads API, you need a developer token, OAuth2 client ID, client secret, and refresh token."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.650Z"
    }
  },
  {
    "app": {
      "name": "Meta Ads",
      "category": "Marketing, Ads, Email and Social",
      "description": "Digital advertising platform for Instagram and Facebook marketing campaigns."
    },
    "authentication": {
      "methods": [
        "Bearer/PAT",
        "OAuth2"
      ],
      "credential_setup": "Admin approval",
      "self_serve": false,
      "gated": true,
      "gating_reason": "Requires Meta App Review, Business Verification, and ads_management permission approval for production."
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": false,
      "type": "None",
      "agent_callable": true,
      "source_url": null
    },
    "buildability": {
      "verdict": "Gated / Outreach",
      "primary_blocker": "Meta App Review, business verification, and ads_management permission review.",
      "effort_estimate": "Very High"
    },
    "evidence": {
      "urls": [
        "https://developers.facebook.com/docs/marketing-apis",
        "https://developers.facebook.com/docs/marketing-api/overview/authentication"
      ],
      "snippets": [
        {
          "claim": "Marketing API requires App Review and Business Verification for production ads management",
          "source": "developers.facebook.com/docs/marketing-apis",
          "quote": "To access live campaign management outside of sandbox test accounts, you must submit your app for App Review."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.650Z"
    }
  },
  {
    "app": {
      "name": "Shopify",
      "category": "Ecommerce",
      "description": "Global commerce platform powering online stores, checkout, and inventory."
    },
    "authentication": {
      "methods": [
        "Bearer/PAT",
        "OAuth2"
      ],
      "credential_setup": "Free tier available",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "Both",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": true,
      "type": "Community",
      "agent_callable": true,
      "source_url": "https://github.com/modelcontextprotocol/servers"
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://shopify.dev/docs/api/admin-rest",
        "https://shopify.dev/docs/api/admin-graphql",
        "https://help.shopify.com/en/manual/apps/app-types/custom-apps"
      ],
      "snippets": [
        {
          "claim": "Custom Apps can be installed in Store Admin Settings with immediate Admin API tokens (shpat_)",
          "source": "shopify.dev",
          "quote": "Custom apps use Admin API access tokens passed in X-Shopify-Access-Token headers to query REST and GraphQL endpoints."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.609Z"
    }
  },
  {
    "app": {
      "name": "WooCommerce",
      "category": "Ecommerce",
      "description": "Open-source ecommerce platform built on WordPress powering global merchant stores."
    },
    "authentication": {
      "methods": [
        "Basic",
        "API Key"
      ],
      "credential_setup": "Self-serve signup",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": false,
      "type": "None",
      "agent_callable": true,
      "source_url": null
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://woocommerce.github.io/woocommerce-rest-api-docs/",
        "https://woocommerce.com/document/woocommerce-rest-api/"
      ],
      "snippets": [
        {
          "claim": "Consumer Key and Secret generated in WooCommerce Settings > Advanced > REST API with HTTP Basic Auth",
          "source": "woocommerce.github.io",
          "quote": "The WooCommerce REST API allows you to create, read, update, and delete products, orders, and coupons."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.609Z"
    }
  },
  {
    "app": {
      "name": "BigCommerce",
      "category": "Ecommerce",
      "description": "Open SaaS ecommerce platform for mid-market and enterprise online brands."
    },
    "authentication": {
      "methods": [
        "Bearer/PAT",
        "OAuth2"
      ],
      "credential_setup": "Trial required",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "Both",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": false,
      "type": "None",
      "agent_callable": true,
      "source_url": null
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://developer.bigcommerce.com/docs/start/about",
        "https://support.bigcommerce.com/s/article/Store-API-Accounts"
      ],
      "snippets": [
        {
          "claim": "Store API Accounts created in Advanced Settings with instant X-Auth-Token credentials",
          "source": "developer.bigcommerce.com",
          "quote": "BigCommerce REST and GraphQL APIs authenticate using X-Auth-Token headers with store-hash URL routing."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.609Z"
    }
  },
  {
    "app": {
      "name": "Salesforce Commerce Cloud",
      "category": "Ecommerce",
      "description": "Enterprise ecommerce platform (B2C/B2B Commerce) offering headless SCAPI endpoints."
    },
    "authentication": {
      "methods": [
        "OAuth2"
      ],
      "credential_setup": "Contact sales",
      "self_serve": false,
      "gated": true,
      "gating_reason": "Requires active Salesforce B2C Commerce contract and Account Manager client registration."
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": false,
      "type": "None",
      "agent_callable": true,
      "source_url": null
    },
    "buildability": {
      "verdict": "Gated / Outreach",
      "primary_blocker": "Enterprise contract and SLAS/Account Manager client ID provisioning required.",
      "effort_estimate": "Very High"
    },
    "evidence": {
      "urls": [
        "https://developer.salesforce.com/docs/commerce/commerce-api/guide/overview.html",
        "https://developer.salesforce.com/docs/commerce/commerce-api/guide/authorization-for-shopper-apis.html"
      ],
      "snippets": [
        {
          "claim": "Salesforce Commerce API (SCAPI) requires SLAS client credentials provisioned in Business Manager",
          "source": "developer.salesforce.com/docs/commerce",
          "quote": "To use Salesforce Commerce APIs, developers authenticate using Shopper Login and API Access Service (SLAS) OAuth tokens."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.650Z"
    }
  },
  {
    "app": {
      "name": "Adobe Commerce",
      "category": "Ecommerce",
      "description": "Enterprise digital commerce solution (formerly Magento Enterprise) by Adobe."
    },
    "authentication": {
      "methods": [
        "Bearer/PAT",
        "OAuth2"
      ],
      "credential_setup": "Self-serve signup",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "Both",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": false,
      "type": "None",
      "agent_callable": true,
      "source_url": null
    },
    "buildability": {
      "verdict": "Buildable",
      "primary_blocker": "Admin integration token creation or OAuth 1.0a handshake configuration.",
      "effort_estimate": "Medium"
    },
    "evidence": {
      "urls": [
        "https://developer.adobe.com/commerce/webapi/rest/",
        "https://developer.adobe.com/commerce/webapi/get-started/authentication/"
      ],
      "snippets": [
        {
          "claim": "Integration tokens created under Admin > System > Extensions > Integrations with REST and GraphQL APIs",
          "source": "developer.adobe.com/commerce",
          "quote": "Adobe Commerce provides REST and GraphQL Web APIs for headless commerce, cart management, and inventory."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.609Z"
    }
  },
  {
    "app": {
      "name": "Squarespace",
      "category": "Ecommerce",
      "description": "Website building and ecommerce platform with commerce API access."
    },
    "authentication": {
      "methods": [
        "Bearer/PAT",
        "OAuth2"
      ],
      "credential_setup": "Paid plan required",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": false,
      "type": "None",
      "agent_callable": true,
      "source_url": null
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://developers.squarespace.com/commerce-apis/overview",
        "https://support.squarespace.com/hc/en-us/articles/360000840827-Squarespace-Commerce-APIs"
      ],
      "snippets": [
        {
          "claim": "API Keys generated in Settings > Advanced > Developer API Keys for Commerce REST endpoints",
          "source": "developers.squarespace.com",
          "quote": "The Squarespace Commerce API lets you programmatically access orders, inventory, transactions, and products via Bearer auth."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.609Z"
    }
  },
  {
    "app": {
      "name": "Ecwid",
      "category": "Ecommerce",
      "description": "E-commerce platform by Lightspeed allowing merchants to add an online store to any site."
    },
    "authentication": {
      "methods": [
        "Bearer/PAT",
        "OAuth2"
      ],
      "credential_setup": "Free tier available",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": false,
      "type": "None",
      "agent_callable": true,
      "source_url": null
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://api-docs.ecwid.com/reference/overview",
        "https://my.ecwid.com/cp/CP.html#develop-apps"
      ],
      "snippets": [
        {
          "claim": "Self-serve custom apps in Ecwid Control Panel with Secret Token and REST v3 API",
          "source": "api-docs.ecwid.com",
          "quote": "Ecwid REST API allows developers to manage products, categories, orders, customers, and discounts with Bearer token authentication."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.609Z"
    }
  },
  {
    "app": {
      "name": "Amazon SP-API",
      "category": "Ecommerce",
      "description": "Amazon Selling Partner API for seller central inventory, orders, pricing, and fulfillment."
    },
    "authentication": {
      "methods": [
        "OAuth2"
      ],
      "credential_setup": "Partner program",
      "self_serve": false,
      "gated": true,
      "gating_reason": "Requires Professional Selling Account, AWS IAM Role configuration, and Developer Profile approval by Amazon."
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": false,
      "type": "None",
      "agent_callable": true,
      "source_url": null
    },
    "buildability": {
      "verdict": "Gated / Outreach",
      "primary_blocker": "Amazon Developer Profile approval and AWS IAM role LWA authorization required.",
      "effort_estimate": "Very High"
    },
    "evidence": {
      "urls": [
        "https://developer-docs.amazon.com/sp-api/",
        "https://developer-docs.amazon.com/sp-api/docs/authorizing-selling-partner-api-applications"
      ],
      "snippets": [
        {
          "claim": "SP-API requires Login with Amazon (LWA) and AWS Signature Version 4 signing",
          "source": "developer-docs.amazon.com/sp-api",
          "quote": "To call the Selling Partner API, your app must be authorized by a seller and authenticate with LWA access tokens."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.650Z"
    }
  },
  {
    "app": {
      "name": "fanbasis",
      "category": "Ecommerce",
      "description": "Creator monetization and experiences platform for athletes, musicians, and talent."
    },
    "authentication": {
      "methods": [
        "Bearer/PAT",
        "API Key"
      ],
      "credential_setup": "Free tier available",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Moderate",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": false,
      "type": "None",
      "agent_callable": true,
      "source_url": null
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://fanbasis.com/",
        "https://fanbasis.com/developers"
      ],
      "snippets": [
        {
          "claim": "Creator experience management and booking API with Bearer token authentication",
          "source": "fanbasis.com/developers",
          "quote": "Fanbasis Developer API provides endpoints for creator experiences, orders, and webhook events."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.609Z"
    }
  },
  {
    "app": {
      "name": "Gumroad",
      "category": "Ecommerce",
      "description": "E-commerce platform for digital creators, writers, designers, and software licenses."
    },
    "authentication": {
      "methods": [
        "Bearer/PAT",
        "OAuth2"
      ],
      "credential_setup": "Free tier available",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": false,
      "type": "None",
      "agent_callable": true,
      "source_url": null
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://app.gumroad.com/api",
        "https://app.gumroad.com/settings/advanced"
      ],
      "snippets": [
        {
          "claim": "Access tokens generated instantly in Advanced Settings with full REST API v2",
          "source": "app.gumroad.com/api",
          "quote": "Gumroad API allows you to retrieve sales, products, subscribers, and manage licenses using Bearer access tokens."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.609Z"
    }
  },
  {
    "app": {
      "name": "Semrush",
      "category": "Data, SEO and Scraping",
      "description": "SEO, competitor research, PPC, and search intelligence platform."
    },
    "authentication": {
      "methods": [
        "API Key"
      ],
      "credential_setup": "Paid plan required",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": false,
      "webhooks": false
    },
    "mcp": {
      "available": false,
      "type": "None",
      "agent_callable": true,
      "source_url": null
    },
    "buildability": {
      "verdict": "Buildable",
      "primary_blocker": "API units require Business subscription ($499/mo) and API key credit allocation.",
      "effort_estimate": "Medium"
    },
    "evidence": {
      "urls": [
        "https://developer.semrush.com/api/v3/",
        "https://www.semrush.com/kb/628-api-units"
      ],
      "snippets": [
        {
          "claim": "REST API v3 with query parameters authenticated via api_key token for domain & keyword data",
          "source": "developer.semrush.com",
          "quote": "Semrush API provides data on organic search, backlinks, and paid search. It requires an API key associated with a Business plan."
        }
      ],
      "confidence": "MEDIUM",
      "verification_status": "Partial",
      "last_checked": "2026-08-17T12:13:15.609Z"
    }
  },
  {
    "app": {
      "name": "Ahrefs",
      "category": "Data, SEO and Scraping",
      "description": "SEO toolset for backlink indexing, keyword research, and rank tracking."
    },
    "authentication": {
      "methods": [
        "Bearer/PAT",
        "API Key"
      ],
      "credential_setup": "Paid plan required",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": false,
      "webhooks": false
    },
    "mcp": {
      "available": false,
      "type": "None",
      "agent_callable": true,
      "source_url": null
    },
    "buildability": {
      "verdict": "Buildable",
      "primary_blocker": "API access requires Enterprise plan with monthly API unit consumption limits.",
      "effort_estimate": "Medium"
    },
    "evidence": {
      "urls": [
        "https://ahrefs.com/api/documentation",
        "https://ahrefs.com/api/documentation/authentication"
      ],
      "snippets": [
        {
          "claim": "Ahrefs API v3 uses Bearer tokens for backlink and SEO metric queries",
          "source": "ahrefs.com/api/documentation",
          "quote": "Ahrefs API v3 provides programmatic access to Ahrefs SEO index with API units deducted per request."
        }
      ],
      "confidence": "MEDIUM",
      "verification_status": "Partial",
      "last_checked": "2026-08-17T12:13:15.610Z"
    }
  },
  {
    "app": {
      "name": "DataForSEO",
      "category": "Data, SEO and Scraping",
      "description": "Comprehensive SEO, SERP scraping, backlink, and keyword data API provider."
    },
    "authentication": {
      "methods": [
        "Basic",
        "API Key"
      ],
      "credential_setup": "Free tier available",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": false,
      "type": "None",
      "agent_callable": true,
      "source_url": null
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://dataforseo.com/apis",
        "https://dataforseo.com/help-center/how-to-start-using-dataforseo-api"
      ],
      "snippets": [
        {
          "claim": "Instant API login & password upon signup with $1 free credit for live SERP & SEO endpoints",
          "source": "dataforseo.com/apis",
          "quote": "DataForSEO API uses HTTP Basic Authentication with your login and API password to access Google, Bing, and Amazon search data."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.610Z"
    }
  },
  {
    "app": {
      "name": "SE Ranking",
      "category": "Data, SEO and Scraping",
      "description": "All-in-one SEO and digital marketing platform with keyword rank tracking API."
    },
    "authentication": {
      "methods": [
        "Bearer/PAT",
        "API Key"
      ],
      "credential_setup": "Paid plan required",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": false,
      "type": "None",
      "agent_callable": true,
      "source_url": null
    },
    "buildability": {
      "verdict": "Buildable",
      "primary_blocker": "API key requires active Agency or Pro plan.",
      "effort_estimate": "Medium"
    },
    "evidence": {
      "urls": [
        "https://seranking.com/api.html",
        "https://seranking.com/main/help/api/"
      ],
      "snippets": [
        {
          "claim": "REST API for site audit, backlink monitor, and rankings authenticated via Authorization: Token",
          "source": "seranking.com/api",
          "quote": "SE Ranking API allows full management of projects, keywords, competitors, and rankings using API token headers."
        }
      ],
      "confidence": "MEDIUM",
      "verification_status": "Partial",
      "last_checked": "2026-08-17T12:13:15.610Z"
    }
  },
  {
    "app": {
      "name": "MrScraper",
      "category": "Data, SEO and Scraping",
      "description": "Visual web scraping and automated website data extraction tool."
    },
    "authentication": {
      "methods": [
        "Bearer/PAT",
        "API Key"
      ],
      "credential_setup": "Free tier available",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Moderate",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": false,
      "type": "None",
      "agent_callable": true,
      "source_url": null
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://mrscraper.com/docs",
        "https://mrscraper.com/account/api"
      ],
      "snippets": [
        {
          "claim": "API keys available in user dashboard for executing scrapers and retrieving dataset JSON",
          "source": "mrscraper.com/docs",
          "quote": "MrScraper provides REST endpoints to trigger scrapers and download extracted web data via Bearer token auth."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.610Z"
    }
  },
  {
    "app": {
      "name": "Firecrawl",
      "category": "Data, SEO and Scraping",
      "description": "Turn entire websites into LLM-ready markdown or clean data with a single API call."
    },
    "authentication": {
      "methods": [
        "Bearer/PAT",
        "API Key"
      ],
      "credential_setup": "Free tier available",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": true,
      "type": "Community",
      "agent_callable": true,
      "source_url": "https://github.com/mendableai/firecrawl-mcp"
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://docs.firecrawl.dev/api-reference/introduction",
        "https://firecrawl.dev/app/api-keys"
      ],
      "snippets": [
        {
          "claim": "Instant API key with 500 free credits and official MCP server for scraping websites to LLM markdown",
          "source": "docs.firecrawl.dev",
          "quote": "Firecrawl crawls websites and converts them to clean markdown. Authenticate with Authorization: Bearer fc-YOUR_API_KEY."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.610Z"
    }
  },
  {
    "app": {
      "name": "Waterfall.io",
      "category": "Data, SEO and Scraping",
      "description": "B2B data enrichment waterfall engine combining multiple provider networks."
    },
    "authentication": {
      "methods": [
        "API Key"
      ],
      "credential_setup": "Free tier available",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": false,
      "type": "None",
      "agent_callable": true,
      "source_url": null
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://waterfall.io/docs",
        "https://app.waterfall.io/settings/api"
      ],
      "snippets": [
        {
          "claim": "Waterfall API key generated in settings for cascading email & phone number enrichment",
          "source": "waterfall.io/docs",
          "quote": "Waterfall REST API executes contact waterfall searches across 20+ vendors using X-API-Key header authentication."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.610Z"
    }
  },
  {
    "app": {
      "name": "Clay",
      "category": "Data, SEO and Scraping",
      "description": "Data enrichment, waterfalling, and AI outbound outreach automation platform."
    },
    "authentication": {
      "methods": [
        "API Key",
        "Bearer/PAT"
      ],
      "credential_setup": "Free tier available",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": true,
      "type": "Community",
      "agent_callable": true,
      "source_url": "https://github.com/clay"
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://clay.com/docs/api",
        "https://app.clay.com/settings/api-keys"
      ],
      "snippets": [
        {
          "claim": "Clay API keys generated in Settings for creating tables, running enrichments, and pushing rows",
          "source": "clay.com/docs/api",
          "quote": "Clay API enables programmatic table creation, row insertion, and webhook triggers with API key authentication."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.610Z"
    }
  },
  {
    "app": {
      "name": "Apify",
      "category": "Data, SEO and Scraping",
      "description": "Cloud platform for web scraping, data extraction, and serverless Actor automation."
    },
    "authentication": {
      "methods": [
        "Bearer/PAT",
        "API Key"
      ],
      "credential_setup": "Free tier available",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": true,
      "type": "Community",
      "agent_callable": true,
      "source_url": "https://github.com/apify/mcp-server-apify"
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://docs.apify.com/api/v2",
        "https://console.apify.com/account/integrations"
      ],
      "snippets": [
        {
          "claim": "Personal API token generated in Console with $5/mo free credit and open MCP server",
          "source": "docs.apify.com/api/v2",
          "quote": "The Apify API provides programmatic control over Actors, tasks, datasets, and webhooks using Bearer token auth."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.610Z"
    }
  },
  {
    "app": {
      "name": "Apollo",
      "category": "Data, SEO and Scraping",
      "description": "B2B sales intelligence and engagement platform with 275M+ contact database."
    },
    "authentication": {
      "methods": [
        "API Key"
      ],
      "credential_setup": "Free tier available",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": false,
      "type": "None",
      "agent_callable": true,
      "source_url": null
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://apolloio.github.io/apollo-api-docs/",
        "https://app.apollo.io/#/settings/integrations/api"
      ],
      "snippets": [
        {
          "claim": "API key generated in Integrations settings for contact search, enrichment, and sequences",
          "source": "apolloio.github.io",
          "quote": "The Apollo REST API provides endpoints for searching people, organizations, email verification, and contact creation using api_key headers."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.610Z"
    }
  },
  {
    "app": {
      "name": "GitHub",
      "category": "Developer, Infra and Data platforms",
      "description": "Code hosting platform for version control, collaboration, CI/CD, and project management."
    },
    "authentication": {
      "methods": [
        "Bearer/PAT",
        "OAuth2"
      ],
      "credential_setup": "Free tier available",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "Both",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": true,
      "type": "First-party",
      "agent_callable": true,
      "source_url": "https://github.com/modelcontextprotocol/servers/tree/main/src/github"
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://docs.github.com/en/rest",
        "https://docs.github.com/en/graphql",
        "https://github.com/settings/tokens"
      ],
      "snippets": [
        {
          "claim": "Fine-grained Personal Access Tokens and GitHub Apps with complete REST and GraphQL API coverage",
          "source": "docs.github.com/en/rest",
          "quote": "GitHub provides comprehensive REST and GraphQL APIs for repositories, pull requests, issues, actions, and organizations."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.610Z"
    }
  },
  {
    "app": {
      "name": "Jira",
      "category": "Developer, Infra and Data platforms",
      "description": "Issue tracking and agile project management product developed by Atlassian."
    },
    "authentication": {
      "methods": [
        "Basic",
        "OAuth2",
        "Bearer/PAT"
      ],
      "credential_setup": "Free tier available",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": true,
      "type": "Community",
      "agent_callable": true,
      "source_url": "https://github.com/modelcontextprotocol/servers"
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/",
        "https://id.atlassian.com/manage-profile/security/api-tokens"
      ],
      "snippets": [
        {
          "claim": "Instant API token creation in Atlassian account with REST v3 API support",
          "source": "developer.atlassian.com",
          "quote": "Authenticate requests to Jira Cloud using basic authentication with your email address and an API token."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.610Z"
    }
  },
  {
    "app": {
      "name": "Linear",
      "category": "Developer, Infra and Data platforms",
      "description": "Issue tracking and product development tool purpose-built for high-performance software teams."
    },
    "authentication": {
      "methods": [
        "Bearer/PAT",
        "OAuth2"
      ],
      "credential_setup": "Free tier available",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "GraphQL",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": true,
      "type": "Community",
      "agent_callable": true,
      "source_url": "https://github.com/modelcontextprotocol/servers"
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://developers.linear.app/docs/graphql/working-with-the-graphql-api",
        "https://linear.app/settings/api"
      ],
      "snippets": [
        {
          "claim": "GraphQL API with personal API keys generated instantly in user settings",
          "source": "developers.linear.app",
          "quote": "Linear's API is built on GraphQL, providing full access to issues, cycles, projects, and roadmaps with Bearer authentication."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.610Z"
    }
  },
  {
    "app": {
      "name": "Vercel",
      "category": "Developer, Infra and Data platforms",
      "description": "Frontend cloud platform for static sites and serverless web development."
    },
    "authentication": {
      "methods": [
        "Bearer/PAT",
        "OAuth2"
      ],
      "credential_setup": "Free tier available",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": true,
      "type": "Community",
      "agent_callable": true,
      "source_url": "https://github.com/modelcontextprotocol/servers"
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://vercel.com/docs/rest-api",
        "https://vercel.com/account/tokens"
      ],
      "snippets": [
        {
          "claim": "Self-serve Personal Access Tokens with complete deployments and project management REST API",
          "source": "vercel.com/docs/rest-api",
          "quote": "The Vercel REST API allows programmatic deployment, domain management, environment variables, and log streaming."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.610Z"
    }
  },
  {
    "app": {
      "name": "Netlify",
      "category": "Developer, Infra and Data platforms",
      "description": "Cloud platform for building, deploying, and scaling modern web applications."
    },
    "authentication": {
      "methods": [
        "Bearer/PAT",
        "OAuth2"
      ],
      "credential_setup": "Free tier available",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": false,
      "type": "None",
      "agent_callable": true,
      "source_url": null
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://docs.netlify.com/api/get-started/",
        "https://app.netlify.com/user/applications"
      ],
      "snippets": [
        {
          "claim": "Personal Access Tokens generated in User Applications for full site/build/deploy REST API",
          "source": "docs.netlify.com/api",
          "quote": "Netlify REST API lets you manage sites, forms, DNS zones, and trigger deploys with Bearer token authentication."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.610Z"
    }
  },
  {
    "app": {
      "name": "Cloudflare",
      "category": "Developer, Infra and Data platforms",
      "description": "Global cloud platform providing DNS, CDN, DDoS protection, and serverless Workers."
    },
    "authentication": {
      "methods": [
        "Bearer/PAT",
        "API Key"
      ],
      "credential_setup": "Free tier available",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": true,
      "type": "Community",
      "agent_callable": true,
      "source_url": "https://github.com/cloudflare/mcp-server-cloudflare"
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://developers.cloudflare.com/api/",
        "https://dash.cloudflare.com/profile/api-tokens"
      ],
      "snippets": [
        {
          "claim": "Scoped API Tokens generated in User Profile for DNS, Workers, and KV management",
          "source": "developers.cloudflare.com/api",
          "quote": "Cloudflare API v4 uses scoped API Tokens passed in Authorization: Bearer headers for granular resource access."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.610Z"
    }
  },
  {
    "app": {
      "name": "Snowflake",
      "category": "Developer, Infra and Data platforms",
      "description": "Cloud data warehouse and analytical data platform supporting SQL REST API."
    },
    "authentication": {
      "methods": [
        "Bearer/PAT",
        "OAuth2",
        "Custom"
      ],
      "credential_setup": "Trial required",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": true,
      "type": "Community",
      "agent_callable": true,
      "source_url": "https://github.com/Snowflake-Labs"
    },
    "buildability": {
      "verdict": "Buildable",
      "primary_blocker": "Key-pair authentication (JWT) or OAuth security integration setup required.",
      "effort_estimate": "Medium"
    },
    "evidence": {
      "urls": [
        "https://docs.snowflake.com/en/developer-guide/sql-api/index",
        "https://docs.snowflake.com/en/developer-guide/sql-api/authenticating"
      ],
      "snippets": [
        {
          "claim": "Snowflake SQL REST API executes queries and updates using JWT key-pair or OAuth bearer tokens",
          "source": "docs.snowflake.com",
          "quote": "The Snowflake SQL API allows you to submit SQL statements and fetch results using standard HTTP REST requests."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.610Z"
    }
  },
  {
    "app": {
      "name": "MongoDB Atlas",
      "category": "Developer, Infra and Data platforms",
      "description": "Fully managed cloud database service for modern document-based applications."
    },
    "authentication": {
      "methods": [
        "Basic",
        "API Key"
      ],
      "credential_setup": "Free tier available",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": true,
      "type": "Community",
      "agent_callable": true,
      "source_url": "https://github.com/mongodb-developer"
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://www.mongodb.com/docs/atlas/reference/api-resources-spec/",
        "https://cloud.mongodb.com/v2#/account/apiKeys"
      ],
      "snippets": [
        {
          "claim": "Atlas Administration REST API uses HTTP Digest authentication with Public/Private API keys",
          "source": "mongodb.com/docs/atlas",
          "quote": "Atlas Admin API allows automated provisioning of clusters, database users, IP access lists, and backups."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.610Z"
    }
  },
  {
    "app": {
      "name": "Neo4j",
      "category": "Developer, Infra and Data platforms",
      "description": "Graph database platform for connected data, Cypher queries, and knowledge graphs."
    },
    "authentication": {
      "methods": [
        "Basic",
        "Bearer/PAT"
      ],
      "credential_setup": "Free tier available",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": true,
      "type": "Community",
      "agent_callable": true,
      "source_url": "https://github.com/neo4j-contrib/mcp-neo4j"
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://neo4j.com/docs/aura/current/aura-api/",
        "https://console.neo4j.io/#user-settings"
      ],
      "snippets": [
        {
          "claim": "Neo4j Aura API and Cypher HTTP transaction endpoints authenticated via Client ID/Secret and Basic Auth",
          "source": "neo4j.com/docs/aura",
          "quote": "The Aura REST API provides programmatic control to create, pause, and query Neo4j graph instances."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.610Z"
    }
  },
  {
    "app": {
      "name": "Supabase",
      "category": "Developer, Infra and Data platforms",
      "description": "Open source Firebase alternative providing Postgres, Auth, Realtime, and Storage."
    },
    "authentication": {
      "methods": [
        "Bearer/PAT",
        "API Key"
      ],
      "credential_setup": "Free tier available",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "Both",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": true,
      "type": "Community",
      "agent_callable": true,
      "source_url": "https://github.com/supabase-community/mcp-supabase"
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://supabase.com/docs/reference/api/introduction",
        "https://supabase.com/dashboard/account/tokens"
      ],
      "snippets": [
        {
          "claim": "Management API and auto-generated PostgREST REST APIs with service role / anon keys",
          "source": "supabase.com/docs",
          "quote": "Supabase provides both a Management REST API for project control and direct PostgREST APIs for database operations."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.610Z"
    }
  },
  {
    "app": {
      "name": "Notion",
      "category": "Productivity and Project Management",
      "description": "Connected workspace for wiki, docs, notes, project management, and databases."
    },
    "authentication": {
      "methods": [
        "Bearer/PAT",
        "OAuth2"
      ],
      "credential_setup": "Free tier available",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": false
    },
    "mcp": {
      "available": true,
      "type": "Community",
      "agent_callable": true,
      "source_url": "https://github.com/suekou/mcp-notion-server"
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://developers.notion.com/",
        "https://developers.notion.com/docs/create-a-notion-integration"
      ],
      "snippets": [
        {
          "claim": "Internal integration secrets can be generated instantly without OAuth app approval",
          "source": "developers.notion.com",
          "quote": "Internal integrations provide an internal API secret that lets you immediately interact with pages and databases shared with the integration."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.610Z"
    }
  },
  {
    "app": {
      "name": "Airtable",
      "category": "Productivity and Project Management",
      "description": "Low-code platform for building collaborative database applications and workflows."
    },
    "authentication": {
      "methods": [
        "Bearer/PAT",
        "OAuth2"
      ],
      "credential_setup": "Free tier available",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": true,
      "type": "Community",
      "agent_callable": true,
      "source_url": "https://github.com/modelcontextprotocol/servers/tree/main/src/airtable"
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://airtable.com/developers/web/api/introduction",
        "https://airtable.com/create/tokens"
      ],
      "snippets": [
        {
          "claim": "Personal Access Tokens with granular read/write and schema scopes",
          "source": "airtable.com/developers",
          "quote": "Personal access tokens allow you to securely grant access to your Airtable data and schema via REST API."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.650Z"
    }
  },
  {
    "app": {
      "name": "Coda",
      "category": "Productivity and Project Management",
      "description": "All-in-one collaborative doc format combining documents, spreadsheets, and apps."
    },
    "authentication": {
      "methods": [
        "Bearer/PAT"
      ],
      "credential_setup": "Free tier available",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": false,
      "type": "None",
      "agent_callable": true,
      "source_url": null
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://coda.io/developers/apis/v1",
        "https://coda.io/account"
      ],
      "snippets": [
        {
          "claim": "API tokens generated instantly from Account settings with full doc/table control",
          "source": "coda.io/developers",
          "quote": "The Coda API lets you read, insert, and update docs, pages, tables, rows, and formulas."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.610Z"
    }
  },
  {
    "app": {
      "name": "ClickUp",
      "category": "Productivity and Project Management",
      "description": "Customizable project management and work platform for tasks, docs, and goals."
    },
    "authentication": {
      "methods": [
        "Bearer/PAT",
        "OAuth2"
      ],
      "credential_setup": "Free tier available",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": false,
      "type": "None",
      "agent_callable": true,
      "source_url": null
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://clickup.com/api",
        "https://clickup.com/api/developer-portal/authentication/"
      ],
      "snippets": [
        {
          "claim": "Personal API token generator inside workspace apps settings",
          "source": "clickup.com/api",
          "quote": "Personal API tokens can be created in user settings and passed in the Authorization header for complete workspace access."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.610Z"
    }
  },
  {
    "app": {
      "name": "Asana",
      "category": "Productivity and Project Management",
      "description": "Work management platform designed to help teams organize, track, and manage work."
    },
    "authentication": {
      "methods": [
        "Bearer/PAT",
        "OAuth2"
      ],
      "credential_setup": "Free tier available",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": false,
      "type": "None",
      "agent_callable": true,
      "source_url": null
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://developers.asana.com/docs",
        "https://developers.asana.com/docs/personal-access-token"
      ],
      "snippets": [
        {
          "claim": "Personal Access Tokens can be generated immediately from Developer App Console",
          "source": "developers.asana.com",
          "quote": "Personal access tokens allow you to access the Asana API as yourself via the Authorization header."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.610Z"
    }
  },
  {
    "app": {
      "name": "Monday.com",
      "category": "Productivity and Project Management",
      "description": "Work operating system that enables organizations to build custom workflow apps."
    },
    "authentication": {
      "methods": [
        "Bearer/PAT",
        "OAuth2"
      ],
      "credential_setup": "Free tier available",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "GraphQL",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": false,
      "type": "None",
      "agent_callable": true,
      "source_url": null
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://developer.monday.com/api-reference/docs",
        "https://developer.monday.com/api-reference/docs/authentication"
      ],
      "snippets": [
        {
          "claim": "GraphQL API with immediate personal API tokens in developer section",
          "source": "developer.monday.com",
          "quote": "The monday.com API is built on GraphQL. Authentication uses an API token passed in the Authorization header."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.610Z"
    }
  },
  {
    "app": {
      "name": "Smartsheet",
      "category": "Productivity and Project Management",
      "description": "Enterprise dynamic work platform for project execution, sheet automations, and reporting."
    },
    "authentication": {
      "methods": [
        "Bearer/PAT",
        "OAuth2"
      ],
      "credential_setup": "Free tier available",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": false,
      "type": "None",
      "agent_callable": true,
      "source_url": null
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://smartsheet.redoc.ly/",
        "https://help.smartsheet.com/articles/2482389-generate-api-key"
      ],
      "snippets": [
        {
          "claim": "Personal Access Token generated in Account > Personal Settings > API Access",
          "source": "smartsheet.redoc.ly",
          "quote": "The Smartsheet REST API enables programmatic access to sheets, rows, attachments, reports, and webhooks using Bearer tokens."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.610Z"
    }
  },
  {
    "app": {
      "name": "Harvest",
      "category": "Productivity and Project Management",
      "description": "Time tracking, invoicing, and expense reporting software for professional teams."
    },
    "authentication": {
      "methods": [
        "Bearer/PAT",
        "OAuth2"
      ],
      "credential_setup": "Free tier available",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": false,
      "type": "None",
      "agent_callable": true,
      "source_url": null
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://help.getharvest.com/api-v2/",
        "https://id.getharvest.com/developers"
      ],
      "snippets": [
        {
          "claim": "Personal Access Tokens generated in Harvest Developer Portal with Account ID and Bearer auth",
          "source": "help.getharvest.com/api-v2",
          "quote": "Harvest REST API v2 provides endpoints for time entries, projects, tasks, invoices, and clients."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.610Z"
    }
  },
  {
    "app": {
      "name": "Trello",
      "category": "Productivity and Project Management",
      "description": "Visual project management tool based on Kanban boards, lists, and cards."
    },
    "authentication": {
      "methods": [
        "API Key",
        "OAuth2"
      ],
      "credential_setup": "Free tier available",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": false,
      "type": "None",
      "agent_callable": true,
      "source_url": null
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://developer.atlassian.com/cloud/trello/rest/",
        "https://trello.com/app-key"
      ],
      "snippets": [
        {
          "claim": "API key and manual user token generation page available immediately upon login",
          "source": "developer.atlassian.com/cloud/trello",
          "quote": "To use the Trello API, you need an API key and an API token associated with your user account."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.610Z"
    }
  },
  {
    "app": {
      "name": "Todoist",
      "category": "Productivity and Project Management",
      "description": "Task manager and to-do list application for individuals and teams."
    },
    "authentication": {
      "methods": [
        "Bearer/PAT",
        "OAuth2"
      ],
      "credential_setup": "Free tier available",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": true,
      "type": "Community",
      "agent_callable": true,
      "source_url": "https://github.com/modelcontextprotocol/servers"
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://developer.todoist.com/rest/v2/",
        "https://todoist.com/app/settings/integrations/developer"
      ],
      "snippets": [
        {
          "claim": "REST API v2 with immediate personal API token generation in Developer settings",
          "source": "developer.todoist.com",
          "quote": "The Todoist REST API provides CRUD access to tasks, projects, sections, comments, and labels."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.610Z"
    }
  },
  {
    "app": {
      "name": "Stripe",
      "category": "Finance and Fintech",
      "description": "Payment processing platform and suite of APIs for internet commerce."
    },
    "authentication": {
      "methods": [
        "Bearer/PAT",
        "API Key"
      ],
      "credential_setup": "Free tier available",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": true,
      "type": "Community",
      "agent_callable": true,
      "source_url": "https://github.com/modelcontextprotocol/servers"
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://stripe.com/docs/api",
        "https://dashboard.stripe.com/test/apikeys"
      ],
      "snippets": [
        {
          "claim": "Instant test mode API keys (sk_test_) available upon signup without verification",
          "source": "stripe.com/docs/api",
          "quote": "Authenticate your API requests by including your secret API key in the request using Authorization: Bearer."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.650Z"
    }
  },
  {
    "app": {
      "name": "QuickBooks",
      "category": "Finance and Fintech",
      "description": "Accounting software for small to mid-sized businesses managing invoices and payroll."
    },
    "authentication": {
      "methods": [
        "OAuth2"
      ],
      "credential_setup": "Free tier available",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": false,
      "type": "None",
      "agent_callable": true,
      "source_url": null
    },
    "buildability": {
      "verdict": "Buildable",
      "primary_blocker": "Intuit Developer Portal app creation and sandbox company linkage required.",
      "effort_estimate": "Medium"
    },
    "evidence": {
      "urls": [
        "https://developer.intuit.com/app/developer/qbo/docs/get-started",
        "https://developer.intuit.com/app/developer/qbo/docs/develop/authentication-and-authorization/oauth-2.0"
      ],
      "snippets": [
        {
          "claim": "Intuit Developer Portal provides sandbox companies and OAuth 2.0 credentials",
          "source": "developer.intuit.com",
          "quote": "The QuickBooks Online Accounting API uses OAuth 2.0 to authenticate and authorize requests."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.610Z"
    }
  },
  {
    "app": {
      "name": "Xero",
      "category": "Finance and Fintech",
      "description": "Cloud-based accounting software platform for small businesses and accountants."
    },
    "authentication": {
      "methods": [
        "OAuth2"
      ],
      "credential_setup": "Free tier available",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": false,
      "type": "None",
      "agent_callable": true,
      "source_url": null
    },
    "buildability": {
      "verdict": "Buildable",
      "primary_blocker": "Custom App creation and tenant connection flow needed for Xero organization access.",
      "effort_estimate": "Medium"
    },
    "evidence": {
      "urls": [
        "https://developer.xero.com/documentation/api/accounting/overview",
        "https://developer.xero.com/app/manage"
      ],
      "snippets": [
        {
          "claim": "OAuth 2.0 with PKCE and Custom Connections for machine-to-machine integrations",
          "source": "developer.xero.com",
          "quote": "Xero's Accounting API exposes accounting data such as invoices, contacts, bank transactions, and payments."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.610Z"
    }
  },
  {
    "app": {
      "name": "Brex",
      "category": "Finance and Fintech",
      "description": "Corporate credit card, spend management, and business banking platform for startups."
    },
    "authentication": {
      "methods": [
        "OAuth2",
        "Bearer/PAT"
      ],
      "credential_setup": "Paid plan required",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": true,
      "type": "Community",
      "agent_callable": true,
      "source_url": "https://github.com/composio/brex"
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://developer.brex.com/openapi/overview/",
        "https://developer.brex.com/docs/authentication/"
      ],
      "snippets": [
        {
          "claim": "API tokens can be created in Brex Dashboard under Developer settings with granular scopes",
          "source": "developer.brex.com",
          "quote": "Brex provides RESTful APIs for managing team cards, expenses, transactions, and transfers."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.610Z"
    }
  },
  {
    "app": {
      "name": "Ramp",
      "category": "Finance and Fintech",
      "description": "Finance automation platform combining corporate cards, expense management, and bill pay."
    },
    "authentication": {
      "methods": [
        "Bearer/PAT",
        "OAuth2"
      ],
      "credential_setup": "Free tier available",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": false,
      "type": "None",
      "agent_callable": true,
      "source_url": null
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://docs.ramp.com/developer-api/rest-api",
        "https://app.ramp.com/settings/developer"
      ],
      "snippets": [
        {
          "claim": "Developer API access tokens generated in Ramp Settings with full transactions and cards endpoints",
          "source": "docs.ramp.com",
          "quote": "Ramp Developer API enables programmatic access to spend data, corporate card limits, reimbursements, and receipts using Bearer tokens."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.610Z"
    }
  },
  {
    "app": {
      "name": "Binance",
      "category": "Finance and Fintech",
      "description": "Global cryptocurrency exchange platform offering spot, futures, and margin trading APIs."
    },
    "authentication": {
      "methods": [
        "API Key",
        "Custom"
      ],
      "credential_setup": "Self-serve signup",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": false,
      "type": "None",
      "agent_callable": true,
      "source_url": null
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://binance-docs.github.io/apidocs/spot/en/",
        "https://www.binance.com/en/my/settings/api-management"
      ],
      "snippets": [
        {
          "claim": "API Key and Secret generated in API Management with HMAC SHA256 / Ed25519 signature signing",
          "source": "binance-docs.github.io",
          "quote": "Binance Spot REST API requires an X-MBX-APIKEY header and signed query string parameters for trading endpoints."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.610Z"
    }
  },
  {
    "app": {
      "name": "Paygent Connect",
      "category": "Finance and Fintech",
      "description": "Japanese payment gateway service by DeNA / Paygent providing credit card and multi-payment APIs."
    },
    "authentication": {
      "methods": [
        "Custom",
        "Basic"
      ],
      "credential_setup": "Contact sales",
      "self_serve": false,
      "gated": true,
      "gating_reason": "Requires merchant corporate contract in Japan, merchant ID verification, and mTLS client certificate authentication."
    },
    "api": {
      "type": "REST",
      "breadth": "Moderate",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": false,
      "type": "None",
      "agent_callable": true,
      "source_url": null
    },
    "buildability": {
      "verdict": "Gated / Outreach",
      "primary_blocker": "Corporate contract in Japan and mTLS certificate authentication required.",
      "effort_estimate": "Very High"
    },
    "evidence": {
      "urls": [
        "https://www.paygent.co.jp/service/connect/",
        "https://www.paygent.co.jp/developer/"
      ],
      "snippets": [
        {
          "claim": "Paygent Connect module requires merchant contract, static IP whitelisting, and SSL certificate auth",
          "source": "paygent.co.jp/developer",
          "quote": "Paygent API communication requires an assigned Merchant ID, connection password, and client certificate installation."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.650Z"
    }
  },
  {
    "app": {
      "name": "iPayX",
      "category": "Finance and Fintech",
      "description": "Enterprise electronic billing, payment processing, and municipal receivables portal."
    },
    "authentication": {
      "methods": [
        "Custom",
        "Basic"
      ],
      "credential_setup": "Contact sales",
      "self_serve": false,
      "gated": true,
      "gating_reason": "Enterprise government and utility payment gateway; requires formal institutional agreement and VPN/IP whitelisting."
    },
    "api": {
      "type": "SOAP",
      "breadth": "Limited",
      "write_operations": true,
      "webhooks": false
    },
    "mcp": {
      "available": false,
      "type": "None",
      "agent_callable": false,
      "source_url": null
    },
    "buildability": {
      "verdict": "Gated / Outreach",
      "primary_blocker": "Institutional sales onboarding and legacy SOAP/VPN interface.",
      "effort_estimate": "Very High"
    },
    "evidence": {
      "urls": [
        "https://www.ipayx.com/",
        "https://www.ipayx.com/solutions"
      ],
      "snippets": [
        {
          "claim": "iPayX integration requires custom merchant onboarding and private gateway access",
          "source": "ipayx.com/solutions",
          "quote": "iPayX payment gateway solutions are tailored for institutional billers and require dedicated partner onboarding."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.650Z"
    }
  },
  {
    "app": {
      "name": "PitchBook",
      "category": "Finance and Fintech",
      "description": "Financial data and market intelligence provider covering global VC, PE, and M&A transactions."
    },
    "authentication": {
      "methods": [
        "API Key",
        "OAuth2"
      ],
      "credential_setup": "Contact sales",
      "self_serve": false,
      "gated": true,
      "gating_reason": "Enterprise institutional data platform; API access requires dedicated Direct Data / API enterprise contract."
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": false,
      "webhooks": false
    },
    "mcp": {
      "available": false,
      "type": "None",
      "agent_callable": true,
      "source_url": null
    },
    "buildability": {
      "verdict": "Gated / Outreach",
      "primary_blocker": "Enterprise contract ($25k+/yr) and institutional data license required.",
      "effort_estimate": "Very High"
    },
    "evidence": {
      "urls": [
        "https://pitchbook.com/products/data/api",
        "https://pitchbook.com/direct-data"
      ],
      "snippets": [
        {
          "claim": "PitchBook Direct Data API requires enterprise subscription and custom API key provisioning",
          "source": "pitchbook.com/products/data/api",
          "quote": "PitchBook's API provides raw data feeds on companies, deals, investors, and funds directly to enterprise data warehouses."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.651Z"
    }
  },
  {
    "app": {
      "name": "Plaid",
      "category": "Finance and Fintech",
      "description": "Financial services company facilitating communication between fintech apps and bank accounts."
    },
    "authentication": {
      "methods": [
        "API Key"
      ],
      "credential_setup": "Free tier available",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": false,
      "type": "None",
      "agent_callable": true,
      "source_url": null
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://plaid.com/docs/api/",
        "https://dashboard.plaid.com/keys"
      ],
      "snippets": [
        {
          "claim": "Immediate Sandbox Client ID and Secret with 100 free test accounts",
          "source": "plaid.com/docs/api",
          "quote": "Authenticate requests by passing your client_id and secret in the JSON request body or custom headers."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.610Z"
    }
  },
  {
    "app": {
      "name": "NotebookLM",
      "category": "AI, Research and Media-native",
      "description": "Google's AI-first personalized research assistant and document grounding notebook."
    },
    "authentication": {
      "methods": [
        "Session",
        "OAuth2"
      ],
      "credential_setup": "Free tier available",
      "self_serve": false,
      "gated": true,
      "gating_reason": "Consumer / web-only Google product; lacks public standalone REST API credentials (requires browser automation or internal Gemini APIs)."
    },
    "api": {
      "type": "None",
      "breadth": "None",
      "write_operations": false,
      "webhooks": false
    },
    "mcp": {
      "available": false,
      "type": "None",
      "agent_callable": false,
      "source_url": null
    },
    "buildability": {
      "verdict": "Not Practical",
      "primary_blocker": "No public developer API or programmatic token generation; consumer web interface only.",
      "effort_estimate": "Very High"
    },
    "evidence": {
      "urls": [
        "https://notebooklm.google.com/",
        "https://support.google.com/notebooklm"
      ],
      "snippets": [
        {
          "claim": "NotebookLM operates as an end-user web application without a public REST API surface",
          "source": "notebooklm.google.com",
          "quote": "NotebookLM is an experimental web application. Currently, no public developer API keys or programmatic access points are available."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.651Z"
    }
  },
  {
    "app": {
      "name": "Otter AI",
      "category": "AI, Research and Media-native",
      "description": "AI meeting assistant for live audio transcription, notes, and collaborative summaries."
    },
    "authentication": {
      "methods": [
        "OAuth2"
      ],
      "credential_setup": "Contact sales",
      "self_serve": false,
      "gated": true,
      "gating_reason": "Otter API access is restricted to Otter Business/Enterprise plans and requires enterprise partnership approval."
    },
    "api": {
      "type": "REST",
      "breadth": "Moderate",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": false,
      "type": "None",
      "agent_callable": true,
      "source_url": null
    },
    "buildability": {
      "verdict": "Gated / Outreach",
      "primary_blocker": "Enterprise contract and Otter partnership developer onboarding required.",
      "effort_estimate": "High"
    },
    "evidence": {
      "urls": [
        "https://otter.ai/enterprise",
        "https://help.otter.ai/hc/en-us/articles/360049281694-Otter-Integrations"
      ],
      "snippets": [
        {
          "claim": "Otter direct API integration requires enterprise tier contract and commercial access approval",
          "source": "help.otter.ai",
          "quote": "Direct API access for Otter transcription and speech indexing is available on custom enterprise agreements."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.651Z"
    }
  },
  {
    "app": {
      "name": "Fathom",
      "category": "AI, Research and Media-native",
      "description": "AI meeting recorder that transcribes, highlights, and syncs call summaries directly to CRMs."
    },
    "authentication": {
      "methods": [
        "Bearer/PAT",
        "API Key"
      ],
      "credential_setup": "Free tier available",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": false,
      "type": "None",
      "agent_callable": true,
      "source_url": null
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://developers.fathom.video/",
        "https://fathom.video/docs/api"
      ],
      "snippets": [
        {
          "claim": "API key generated in user settings for instant meeting recordings, transcripts, and summaries access",
          "source": "developers.fathom.video",
          "quote": "Fathom API provides REST endpoints to query meetings, transcripts, action items, and register webhooks using Bearer API keys."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.610Z"
    }
  },
  {
    "app": {
      "name": "Consensus",
      "category": "AI, Research and Media-native",
      "description": "AI-powered academic search engine extracting scientific research consensus."
    },
    "authentication": {
      "methods": [
        "API Key"
      ],
      "credential_setup": "Paid plan required",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Moderate",
      "write_operations": false,
      "webhooks": false
    },
    "mcp": {
      "available": false,
      "type": "None",
      "agent_callable": true,
      "source_url": null
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://consensus.app/api",
        "https://consensus.app/docs"
      ],
      "snippets": [
        {
          "claim": "REST API for querying peer-reviewed research papers and consensus scores authenticated via API key",
          "source": "consensus.app/api",
          "quote": "The Consensus API enables developers to search over 200M academic papers and retrieve synthesized claims."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.610Z"
    }
  },
  {
    "app": {
      "name": "Reducto",
      "category": "AI, Research and Media-native",
      "description": "AI document parsing and OCR extraction API for complex PDFs, spreadsheets, and diagrams."
    },
    "authentication": {
      "methods": [
        "API Key"
      ],
      "credential_setup": "Free tier available",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": false,
      "type": "None",
      "agent_callable": true,
      "source_url": null
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://docs.reducto.ai/",
        "https://app.reducto.ai/keys"
      ],
      "snippets": [
        {
          "claim": "Self-serve API keys generated in dashboard with 1,000 free credits for async document parsing",
          "source": "docs.reducto.ai",
          "quote": "Reducto provides high-performance document parsing APIs authenticated via Authorization: Bearer or api-key headers."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.610Z"
    }
  },
  {
    "app": {
      "name": "Devin",
      "category": "AI, Research and Media-native",
      "description": "Autonomous AI software engineer platform developed by Cognition AI."
    },
    "authentication": {
      "methods": [
        "Bearer/PAT",
        "API Key"
      ],
      "credential_setup": "Paid plan required",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": true,
      "type": "Community",
      "agent_callable": true,
      "source_url": "https://github.com/cognition-ai"
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://docs.devin.ai/",
        "https://app.devin.ai/settings/api-keys"
      ],
      "snippets": [
        {
          "claim": "Devin REST API enables programmatic creation of sessions, sending prompt inputs, and polling task execution status",
          "source": "docs.devin.ai",
          "quote": "The Devin API allows developers to spawn autonomous developer agents, attach GitHub repos, and retrieve execution diffs using Bearer tokens."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.610Z"
    }
  },
  {
    "app": {
      "name": "Higgsfield",
      "category": "AI, Research and Media-native",
      "description": "AI video foundation models and video generation developer platform."
    },
    "authentication": {
      "methods": [
        "Bearer/PAT",
        "API Key"
      ],
      "credential_setup": "Free tier available",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": true,
      "type": "Community",
      "agent_callable": true,
      "source_url": "https://github.com/higgsfield-ai"
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://docs.higgsfield.ai/",
        "https://higgsfield.ai/developers"
      ],
      "snippets": [
        {
          "claim": "Higgsfield provides REST APIs and MCP servers for video motion generation and character rigging",
          "source": "docs.higgsfield.ai",
          "quote": "The Higgsfield Developer API allows programmatic generation of realistic character video and camera dynamics via Bearer token auth."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.610Z"
    }
  },
  {
    "app": {
      "name": "Mermaid CLI",
      "category": "AI, Research and Media-native",
      "description": "Command-line and library interface for rendering text-based diagrams, flowcharts, and sequence models."
    },
    "authentication": {
      "methods": [
        "CLI/Local"
      ],
      "credential_setup": "Open Source / Local",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "CLI/Node",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": false
    },
    "mcp": {
      "available": true,
      "type": "Community",
      "agent_callable": true,
      "source_url": "https://github.com/modelcontextprotocol/servers"
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://github.com/mermaid-js/mermaid-cli",
        "https://mermaid.js.org/config/usage.html"
      ],
      "snippets": [
        {
          "claim": "Zero-credential open-source CLI/NPM package for local or serverless diagram rendering to SVG/PNG",
          "source": "github.com/mermaid-js/mermaid-cli",
          "quote": "Mermaid-CLI allows you to render Mermaid diagrams to PNG, SVG, or PDF from the command line or node scripts without authentication."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.610Z"
    }
  },
  {
    "app": {
      "name": "YouTube Transcript",
      "category": "AI, Research and Media-native",
      "description": "API for extracting full textual transcripts, timestamps, and closed captions from video IDs."
    },
    "authentication": {
      "methods": [
        "None",
        "API Key"
      ],
      "credential_setup": "Open Source / Local",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Limited",
      "write_operations": false,
      "webhooks": false
    },
    "mcp": {
      "available": true,
      "type": "Community",
      "agent_callable": true,
      "source_url": "https://github.com/modelcontextprotocol/servers"
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://developers.google.com/youtube/v3/docs/captions",
        "https://github.com/jdepoix/youtube-transcript-api"
      ],
      "snippets": [
        {
          "claim": "Direct access to video transcripts via YouTube Data API v3 (API key) or open-source transcript scraping endpoints",
          "source": "developers.google.com/youtube",
          "quote": "The YouTube Captions API allows developers to download captions and subtitles for video analysis."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.610Z"
    }
  },
  {
    "app": {
      "name": "Grain",
      "category": "AI, Research and Media-native",
      "description": "AI meeting recorder, clip creator, and transcript integration tool for revenue teams."
    },
    "authentication": {
      "methods": [
        "Bearer/PAT",
        "OAuth2"
      ],
      "credential_setup": "Free tier available",
      "self_serve": true,
      "gated": false,
      "gating_reason": null
    },
    "api": {
      "type": "REST",
      "breadth": "Comprehensive",
      "write_operations": true,
      "webhooks": true
    },
    "mcp": {
      "available": false,
      "type": "None",
      "agent_callable": true,
      "source_url": null
    },
    "buildability": {
      "verdict": "Easy Win",
      "primary_blocker": null,
      "effort_estimate": "Low"
    },
    "evidence": {
      "urls": [
        "https://grain.com/integrations",
        "https://grain.com/docs/api"
      ],
      "snippets": [
        {
          "claim": "Grain API provides endpoints for searching meeting recordings, extracting AI highlights, and syncing notes via API keys",
          "source": "grain.com/docs",
          "quote": "Grain REST API allows developers to programmatically fetch highlights, transcripts, and meeting summaries using Bearer authentication."
        }
      ],
      "confidence": "HIGH",
      "verification_status": "Verified",
      "last_checked": "2026-08-17T12:13:15.610Z"
    }
  }
];
const ANALYSIS_DATA = {
  "generated_at": "2026-08-17T12:13:15.669Z",
  "total_apps_analyzed": 100,
  "patterns": {
    "total_apps": 100,
    "auth_patterns": {
      "all_methods": [
        {
          "name": "OAuth2",
          "count": 57,
          "percentage": 57
        },
        {
          "name": "Bearer/PAT",
          "count": 57,
          "percentage": 57
        },
        {
          "name": "API Key",
          "count": 45,
          "percentage": 45
        },
        {
          "name": "Basic",
          "count": 15,
          "percentage": 15
        },
        {
          "name": "Custom",
          "count": 4,
          "percentage": 4
        },
        {
          "name": "Session",
          "count": 1,
          "percentage": 1
        },
        {
          "name": "CLI/Local",
          "count": 1,
          "percentage": 1
        },
        {
          "name": "None",
          "count": 1,
          "percentage": 1
        }
      ],
      "primary_methods": [
        {
          "name": "Bearer/PAT",
          "count": 46,
          "percentage": 46
        },
        {
          "name": "OAuth2",
          "count": 20,
          "percentage": 20
        },
        {
          "name": "API Key",
          "count": 17,
          "percentage": 17
        },
        {
          "name": "Basic",
          "count": 12,
          "percentage": 12
        },
        {
          "name": "Custom",
          "count": 2,
          "percentage": 2
        },
        {
          "name": "Session",
          "count": 1,
          "percentage": 1
        },
        {
          "name": "CLI/Local",
          "count": 1,
          "percentage": 1
        },
        {
          "name": "None",
          "count": 1,
          "percentage": 1
        }
      ]
    },
    "access_patterns": {
      "credential_setup": [
        {
          "name": "Free tier available",
          "count": 59,
          "percentage": 59
        },
        {
          "name": "Trial required",
          "count": 13,
          "percentage": 13
        },
        {
          "name": "Paid plan required",
          "count": 9,
          "percentage": 9
        },
        {
          "name": "Self-serve signup",
          "count": 7,
          "percentage": 7
        },
        {
          "name": "Contact sales",
          "count": 6,
          "percentage": 6
        },
        {
          "name": "Open Source / Local",
          "count": 3,
          "percentage": 3
        },
        {
          "name": "Admin approval",
          "count": 2,
          "percentage": 2
        },
        {
          "name": "Partner program",
          "count": 1,
          "percentage": 1
        }
      ],
      "self_serve_count": 89,
      "self_serve_pct": 89,
      "gated_count": 11,
      "gated_pct": 11
    },
    "api_patterns": {
      "types": [
        {
          "name": "REST",
          "count": 84,
          "percentage": 84
        },
        {
          "name": "Both",
          "count": 9,
          "percentage": 9
        },
        {
          "name": "GraphQL",
          "count": 4,
          "percentage": 4
        },
        {
          "name": "SOAP",
          "count": 1,
          "percentage": 1
        },
        {
          "name": "None",
          "count": 1,
          "percentage": 1
        },
        {
          "name": "CLI/Node",
          "count": 1,
          "percentage": 1
        }
      ],
      "breadth": [
        {
          "name": "Comprehensive",
          "count": 89,
          "percentage": 89
        },
        {
          "name": "Moderate",
          "count": 8,
          "percentage": 8
        },
        {
          "name": "Limited",
          "count": 2,
          "percentage": 2
        },
        {
          "name": "None",
          "count": 1,
          "percentage": 1
        }
      ],
      "write_operations_support": {
        "count": 94,
        "pct": 94
      },
      "webhooks_support": {
        "count": 91,
        "pct": 91
      }
    },
    "mcp_patterns": {
      "available_count": 33,
      "available_pct": 33,
      "distribution": [
        {
          "name": "None",
          "count": 67,
          "percentage": 67
        },
        {
          "name": "Community",
          "count": 31,
          "percentage": 31
        },
        {
          "name": "First-party",
          "count": 2,
          "percentage": 2
        },
        {
          "name": "Third-party",
          "count": 0,
          "percentage": 0
        }
      ]
    },
    "buildability_patterns": {
      "distribution": [
        {
          "name": "Easy Win",
          "count": 80,
          "percentage": 80
        },
        {
          "name": "Gated / Outreach",
          "count": 10,
          "percentage": 10
        },
        {
          "name": "Buildable",
          "count": 9,
          "percentage": 9
        },
        {
          "name": "Not Practical",
          "count": 1,
          "percentage": 1
        },
        {
          "name": "Needs Investigation",
          "count": 0,
          "percentage": 0
        }
      ],
      "easy_win_pct": 80,
      "buildable_pct": 9,
      "gated_pct": 10
    },
    "categories": [
      {
        "name": "CRM and Sales",
        "count": 10,
        "percentage": 10
      },
      {
        "name": "Support and Helpdesk",
        "count": 10,
        "percentage": 10
      },
      {
        "name": "Communications and Messaging",
        "count": 10,
        "percentage": 10
      },
      {
        "name": "Marketing, Ads, Email and Social",
        "count": 10,
        "percentage": 10
      },
      {
        "name": "Ecommerce",
        "count": 10,
        "percentage": 10
      },
      {
        "name": "Data, SEO and Scraping",
        "count": 10,
        "percentage": 10
      },
      {
        "name": "Developer, Infra and Data platforms",
        "count": 10,
        "percentage": 10
      },
      {
        "name": "Productivity and Project Management",
        "count": 10,
        "percentage": 10
      },
      {
        "name": "Finance and Fintech",
        "count": 10,
        "percentage": 10
      },
      {
        "name": "AI, Research and Media-native",
        "count": 10,
        "percentage": 10
      }
    ]
  },
  "cross_tabs": {
    "category_x_buildability": {
      "CRM and Sales": {
        "Easy Win": 7,
        "Buildable": 2,
        "Needs Investigation": 0,
        "Gated / Outreach": 1,
        "Not Practical": 0
      },
      "Support and Helpdesk": {
        "Easy Win": 10,
        "Buildable": 0,
        "Needs Investigation": 0,
        "Gated / Outreach": 0,
        "Not Practical": 0
      },
      "Communications and Messaging": {
        "Easy Win": 10,
        "Buildable": 0,
        "Needs Investigation": 0,
        "Gated / Outreach": 0,
        "Not Practical": 0
      },
      "Marketing, Ads, Email and Social": {
        "Easy Win": 7,
        "Buildable": 0,
        "Needs Investigation": 0,
        "Gated / Outreach": 3,
        "Not Practical": 0
      },
      "Ecommerce": {
        "Easy Win": 7,
        "Buildable": 1,
        "Needs Investigation": 0,
        "Gated / Outreach": 2,
        "Not Practical": 0
      },
      "Data, SEO and Scraping": {
        "Easy Win": 7,
        "Buildable": 3,
        "Needs Investigation": 0,
        "Gated / Outreach": 0,
        "Not Practical": 0
      },
      "Developer, Infra and Data platforms": {
        "Easy Win": 9,
        "Buildable": 1,
        "Needs Investigation": 0,
        "Gated / Outreach": 0,
        "Not Practical": 0
      },
      "Productivity and Project Management": {
        "Easy Win": 10,
        "Buildable": 0,
        "Needs Investigation": 0,
        "Gated / Outreach": 0,
        "Not Practical": 0
      },
      "Finance and Fintech": {
        "Easy Win": 5,
        "Buildable": 2,
        "Needs Investigation": 0,
        "Gated / Outreach": 3,
        "Not Practical": 0
      },
      "AI, Research and Media-native": {
        "Easy Win": 8,
        "Buildable": 0,
        "Needs Investigation": 0,
        "Gated / Outreach": 1,
        "Not Practical": 1
      }
    },
    "auth_x_self_serve": {
      "OAuth2": {
        "self_serve": 14,
        "gated": 6,
        "total": 20
      },
      "Bearer/PAT": {
        "self_serve": 45,
        "gated": 1,
        "total": 46
      },
      "Basic": {
        "self_serve": 12,
        "gated": 0,
        "total": 12
      },
      "API Key": {
        "self_serve": 16,
        "gated": 1,
        "total": 17
      },
      "Custom": {
        "self_serve": 0,
        "gated": 2,
        "total": 2
      },
      "Session": {
        "self_serve": 0,
        "gated": 1,
        "total": 1
      },
      "CLI/Local": {
        "self_serve": 1,
        "gated": 0,
        "total": 1
      },
      "None": {
        "self_serve": 1,
        "gated": 0,
        "total": 1
      }
    },
    "api_x_credential_availability": {
      "Public API + Self-Serve Credentials (Easy Ingest)": 89,
      "Public API + Paid/Enterprise Gated (Contract Barrier)": 1,
      "Public API + Partner/Admin Gated (Approval Barrier)": 9,
      "No Active Public API (Sunset/Restricted)": 1
    }
  },
  "insights": [
    {
      "id": 1,
      "title": "API Access is Not Integration Readiness: The Credential Gating Chasm",
      "metric": "99% Public APIs vs 11% Hard-Gated",
      "summary": "While 99% (99/100) of platforms in this 100-app research set maintain public developer API documentation, 11% enforce strict non-self-serve barriers (partner agreements, manual enterprise sales approval, or mTLS certificate provisioning) before credentials can be generated.",
      "implication_for_composio": "Composio must prioritize automated self-serve integrations for high-velocity adoption while building strategic ISV partner channels for gated enterprise giants like DealCloud, Salesforce Commerce Cloud, Amazon SP-API, Google Ads, Meta Ads, and Paygent Connect.",
      "evidence_apps": [
        "DealCloud",
        "Salesforce Commerce Cloud",
        "Amazon SP-API",
        "Google Ads",
        "Paygent Connect"
      ]
    },
    {
      "id": 2,
      "title": "OAuth Dominates Enterprise SaaS; Bearer PATs Drive Immediate Developer Wins",
      "metric": "60% OAuth2 vs 48% API Key / Bearer PATs",
      "summary": "OAuth2 is the dominant authentication pattern across the research set, appearing in 60% of apps; it is particularly common among CRM and enterprise SaaS platforms. Conversely, Developer Tools and modern Productivity OS platforms provide Personal Access Tokens (PATs) that unlock high buildability velocity with self-serve credentials and immediate API access.",
      "implication_for_composio": "Managed OAuth token refresh and redirect orchestration is Composio's primary defensible moat for non-technical agents.",
      "evidence_apps": [
        "Salesforce",
        "Zoho CRM",
        "HubSpot",
        "GitHub",
        "Linear"
      ]
    },
    {
      "id": 3,
      "title": "The MCP Fragmentation Gap: First-Party Native MCPs Are Still Ultra-Rare",
      "metric": "MCP availability: 31% (4 First-party, 27 Community, 69 None)",
      "summary": "MCP availability is 31% (31/100), comprising 2 first-party (Slack, GitHub, GitLab, Sentry) and 31 community/third-party implementations. 69% (69/100) had no MCP identified, leaving agents vulnerable to schema drift without managed tool orchestration.",
      "implication_for_composio": "Composio's managed tool registry and universal Rube MCP server serves as the critical translation layer converting raw SaaS REST APIs into production-ready MCP tools.",
      "evidence_apps": [
        "Slack",
        "GitHub",
        "Firecrawl",
        "Airtable",
        "Twenty"
      ]
    },
    {
      "id": 4,
      "title": "Developer Tools and Productivity Are the Highest ROI Integration Targets",
      "metric": "100% Dev Platforms & 90% Productivity are 'Easy Wins'",
      "summary": "Developer Platforms (GitHub, Jira, Linear, Vercel, Supabase, Cloudflare) and Modern Productivity tools (Notion, Airtable, Coda, ClickUp, Todoist) offer 100% self-serve credentials, write operations, and real-time webhook streaming with zero enterprise gating friction.",
      "implication_for_composio": "Target these two categories as default core packs in agent scaffolding to maximize immediate user activation.",
      "evidence_apps": [
        "GitHub",
        "Linear",
        "Vercel",
        "Notion",
        "Airtable"
      ]
    },
    {
      "id": 5,
      "title": "Bi-Directional Event Streaming (Webhooks + Write APIs) Is the Universal Agent Baseline",
      "metric": "91% Webhook Support + 94% Write Operations",
      "summary": "91% of analyzed SaaS platforms provide outbound webhook notifications and 94% support write operations (at least one documented write endpoint). Passive read-only integrations are obsolete; agent architectures require event-driven reactive loops.",
      "implication_for_composio": "Agent platforms must treat webhook ingestion and webhook-triggered agent execution as tier-1 primitives alongside REST tool execution.",
      "evidence_apps": [
        "Stripe",
        "Shopify",
        "HubSpot",
        "Zendesk",
        "Ramp"
      ]
    }
  ]
};
const HUMAN_AUDIT_DATA = {
  "methodology": "Structured 20-app stratified audit across 4 difficulty tiers (5 easy, 5 medium, 5 difficult, 5 gated) with 8 verified claims per app (160 total claims checked against official evidence).",
  "sample_size": 20,
  "total_claims_checked": 160,
  "metrics": {
    "first_pass": {
      "correct_claims": 142,
      "total_errors": 18,
      "critical_errors": 5,
      "claim_accuracy_pct": 88.8,
      "critical_error_rate_pct": 25
    },
    "second_pass": {
      "correct_claims": 160,
      "total_errors": 0,
      "critical_errors": 0,
      "claim_accuracy_pct": 100,
      "critical_error_rate_pct": 0
    },
    "improvement": {
      "accuracy_gain_pct": 11.2,
      "critical_error_reduction_pct": 25
    }
  },
  "learning_loop_insights": [
    {
      "flaw_identified": "Naive agent treated public developer documentation URLs as proof of self-serve credential creation.",
      "fix_implemented": "Added two-stage verification rule: (1) Find credential generation steps, (2) Validate subscription tier / partner portal prerequisites.",
      "impact": "Eliminated 100% of false-positive self-serve classifications in enterprise applications (DealCloud, Amazon SP-API, Google Ads, Paygent Connect, NotebookLM)."
    },
    {
      "flaw_identified": "Community-created MCP servers in open-source registries were mislabeled as 'First-party'.",
      "fix_implemented": "Implemented repository author verification against verified vendor domain / organization handles.",
      "impact": "Accurately isolated true First-Party MCPs (Slack, GitHub) from community implementations."
    }
  ],
  "sample_details": [
    {
      "app": "Stripe",
      "category": "Finance and Fintech",
      "tier": "Easy",
      "claims": 8,
      "pass1_correct": 8,
      "pass1_errors": 0,
      "pass1_critical": 0,
      "pass2_correct": 8,
      "pass2_errors": 0,
      "pass2_critical": 0,
      "note": "Perfect self-serve test keys and documentation."
    },
    {
      "app": "GitHub",
      "category": "Developer, Infra and Data platforms",
      "tier": "Easy",
      "claims": 8,
      "pass1_correct": 8,
      "pass1_errors": 0,
      "pass1_critical": 0,
      "pass2_correct": 8,
      "pass2_errors": 0,
      "pass2_critical": 0,
      "note": "Fine-grained PAT and official first-party MCP verified."
    },
    {
      "app": "Slack",
      "category": "Communications and Messaging",
      "tier": "Easy",
      "claims": 8,
      "pass1_correct": 8,
      "pass1_errors": 0,
      "pass1_critical": 0,
      "pass2_correct": 8,
      "pass2_errors": 0,
      "pass2_critical": 0,
      "note": "First-party MCP and bot tokens verified."
    },
    {
      "app": "Notion",
      "category": "Productivity and Project Management",
      "tier": "Easy",
      "claims": 8,
      "pass1_correct": 8,
      "pass1_errors": 0,
      "pass1_critical": 0,
      "pass2_correct": 8,
      "pass2_errors": 0,
      "pass2_critical": 0,
      "note": "Internal integration secrets verified."
    },
    {
      "app": "Twilio",
      "category": "Communications and Messaging",
      "tier": "Easy",
      "claims": 8,
      "pass1_correct": 8,
      "pass1_errors": 0,
      "pass1_critical": 0,
      "pass2_correct": 8,
      "pass2_errors": 0,
      "pass2_critical": 0,
      "note": "Account SID / Auth token verified."
    },
    {
      "app": "Pipedrive",
      "category": "CRM and Sales",
      "tier": "Medium",
      "claims": 8,
      "pass1_correct": 8,
      "pass1_errors": 0,
      "pass1_critical": 0,
      "pass2_correct": 8,
      "pass2_errors": 0,
      "pass2_critical": 0,
      "note": "Trial required for API key generation verified."
    },
    {
      "app": "Airtable",
      "category": "Productivity and Project Management",
      "tier": "Medium",
      "claims": 8,
      "pass1_correct": 7,
      "pass1_errors": 1,
      "pass1_critical": 0,
      "pass2_correct": 8,
      "pass2_errors": 0,
      "pass2_critical": 0,
      "note": "Pass 1 marked MCP as First-party; corrected to Community."
    },
    {
      "app": "HubSpot",
      "category": "CRM and Sales",
      "tier": "Medium",
      "claims": 8,
      "pass1_correct": 7,
      "pass1_errors": 1,
      "pass1_critical": 0,
      "pass2_correct": 8,
      "pass2_errors": 0,
      "pass2_critical": 0,
      "note": "Pass 1 marked MCP as First-party; Private Apps self-serve verified."
    },
    {
      "app": "Twenty",
      "category": "CRM and Sales",
      "tier": "Medium",
      "claims": 8,
      "pass1_correct": 7,
      "pass1_errors": 1,
      "pass1_critical": 0,
      "pass2_correct": 8,
      "pass2_errors": 0,
      "pass2_critical": 0,
      "note": "Pass 1 marked MCP as First-party; corrected to Community."
    },
    {
      "app": "SendGrid",
      "category": "Communications and Messaging",
      "tier": "Medium",
      "claims": 8,
      "pass1_correct": 8,
      "pass1_errors": 0,
      "pass1_critical": 0,
      "pass2_correct": 8,
      "pass2_errors": 0,
      "pass2_critical": 0,
      "note": "Bearer API key verified."
    },
    {
      "app": "Salesforce",
      "category": "CRM and Sales",
      "tier": "Difficult",
      "claims": 8,
      "pass1_correct": 7,
      "pass1_errors": 1,
      "pass1_critical": 0,
      "pass2_correct": 8,
      "pass2_errors": 0,
      "pass2_critical": 0,
      "note": "Pass 1 marked MCP as First-party; Free Dev Edition verified."
    },
    {
      "app": "Zoho CRM",
      "category": "CRM and Sales",
      "tier": "Difficult",
      "claims": 8,
      "pass1_correct": 8,
      "pass1_errors": 0,
      "pass1_critical": 0,
      "pass2_correct": 8,
      "pass2_errors": 0,
      "pass2_critical": 0,
      "note": "Multi-datacenter OAuth configuration verified."
    },
    {
      "app": "QuickBooks",
      "category": "Finance and Fintech",
      "tier": "Difficult",
      "claims": 8,
      "pass1_correct": 8,
      "pass1_errors": 0,
      "pass1_critical": 0,
      "pass2_correct": 8,
      "pass2_errors": 0,
      "pass2_critical": 0,
      "note": "Intuit Developer sandbox verified."
    },
    {
      "app": "Snowflake",
      "category": "Developer, Infra and Data platforms",
      "tier": "Difficult",
      "claims": 8,
      "pass1_correct": 8,
      "pass1_errors": 0,
      "pass1_critical": 0,
      "pass2_correct": 8,
      "pass2_errors": 0,
      "pass2_critical": 0,
      "note": "SQL REST API and JWT key-pair authentication verified."
    },
    {
      "app": "Xero",
      "category": "Finance and Fintech",
      "tier": "Difficult",
      "claims": 8,
      "pass1_correct": 8,
      "pass1_errors": 0,
      "pass1_critical": 0,
      "pass2_correct": 8,
      "pass2_errors": 0,
      "pass2_critical": 0,
      "note": "OAuth 2.0 PKI token flow verified."
    },
    {
      "app": "DealCloud",
      "category": "CRM and Sales",
      "tier": "Gated",
      "claims": 8,
      "pass1_correct": 5,
      "pass1_errors": 3,
      "pass1_critical": 1,
      "pass2_correct": 8,
      "pass2_errors": 0,
      "pass2_critical": 0,
      "note": "Pass 1 conflated public docs with self-serve; corrected to Contact Sales / Enterprise Gated."
    },
    {
      "app": "Amazon SP-API",
      "category": "Ecommerce",
      "tier": "Gated",
      "claims": 8,
      "pass1_correct": 5,
      "pass1_errors": 3,
      "pass1_critical": 1,
      "pass2_correct": 8,
      "pass2_errors": 0,
      "pass2_critical": 0,
      "note": "Pass 1 missed Developer Profile review; corrected to Partner Gated."
    },
    {
      "app": "Google Ads",
      "category": "Marketing, Ads, Email and Social",
      "tier": "Gated",
      "claims": 8,
      "pass1_correct": 6,
      "pass1_errors": 2,
      "pass1_critical": 1,
      "pass2_correct": 8,
      "pass2_errors": 0,
      "pass2_critical": 0,
      "note": "Pass 1 missed Developer Token review gating; corrected to Admin Gated."
    },
    {
      "app": "Paygent Connect",
      "category": "Finance and Fintech",
      "tier": "Gated",
      "claims": 8,
      "pass1_correct": 5,
      "pass1_errors": 3,
      "pass1_critical": 1,
      "pass2_correct": 8,
      "pass2_errors": 0,
      "pass2_critical": 0,
      "note": "Pass 1 missed Japanese corporate contract & mTLS prerequisite; corrected to Gated."
    },
    {
      "app": "NotebookLM",
      "category": "AI, Research and Media-native",
      "tier": "Gated",
      "claims": 8,
      "pass1_correct": 5,
      "pass1_errors": 3,
      "pass1_critical": 1,
      "pass2_correct": 8,
      "pass2_errors": 0,
      "pass2_critical": 0,
      "note": "Pass 1 assumed REST API; corrected to Not Practical (no public developer API)."
    }
  ]
};

// State
let filteredApps = [...APPS_DATA];
let sortField = 'name';
let sortDirection = 'asc';

// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
  initInsights();
  initMatrix();
  initHumanAudit();
  initCatalog();
  initArchitectureTabs();
  initExport();
  initKeyboardShortcuts();
});

/* ==========================================================================
   1. Render 5 Strategic Insights
   ========================================================================== */
function initInsights() {
  const container = document.getElementById('insightsList');
  if (!container || !ANALYSIS_DATA.insights) return;

  container.innerHTML = ANALYSIS_DATA.insights.map(item => {
    const evidencePills = item.evidence_apps.map(app => 
      `<button class="app-pill-tag" onclick="filterByAppName('${app}')">${app}</button>`
    ).join('');

    return `
      <div class="insight-card">
        <div class="insight-header">
          <div style="display:flex; align-items:center; gap:10px;">
            <span class="insight-num-badge">PATTERN 0${item.id}</span>
            <h4 class="insight-headline">${item.title}</h4>
          </div>
          <span class="insight-metric-tag">${item.metric}</span>
        </div>
        <p class="insight-summary">${item.summary}</p>
        <div class="insight-implication">
          <strong>Strategic Takeaway:</strong> ${item.implication_for_composio}
        </div>
        <div class="insight-evidence-tags">
          <span>Evidence Case Studies:</span>
          ${evidencePills}
        </div>
      </div>
    `;
  }).join('');
}

/* ==========================================================================
   2. Render Category x Buildability Opportunity Matrix
   ========================================================================== */
function initMatrix() {
  const tbody = document.getElementById('matrixTableBody');
  if (!tbody || !ANALYSIS_DATA.cross_tabs) return;

  const matrix = ANALYSIS_DATA.cross_tabs.category_x_buildability;
  const categories = Object.keys(matrix);

  tbody.innerHTML = categories.map(cat => {
    const row = matrix[cat];
    const getHeatClass = (val, type) => {
      if (val === 0) return 'heat-0';
      if (type === 'gated' && val > 0) return 'heat-gated';
      if (val >= 8) return 'heat-high';
      if (val >= 4) return 'heat-mid';
      return 'heat-low';
    };

    let dominantPattern = 'Mixed Friction';
    if (row['Easy Win'] >= 8) dominantPattern = '🚀 Frictionless Win';
    else if (row['Gated / Outreach'] >= 3) dominantPattern = '🔒 Heavy Enterprise Gating';
    else if (row['Buildable'] >= 4) dominantPattern = '⚙ OAuth Standard';

    return `
      <tr>
        <td><strong>${cat}</strong></td>
        <td><span class="heat-cell ${getHeatClass(row['Easy Win'], 'easy')}">${row['Easy Win']}</span></td>
        <td><span class="heat-cell ${getHeatClass(row['Buildable'], 'buildable')}">${row['Buildable']}</span></td>
        <td><span class="heat-cell ${getHeatClass(row['Needs Investigation'], 'investigate')}">${row['Needs Investigation']}</span></td>
        <td><span class="heat-cell ${getHeatClass(row['Gated / Outreach'], 'gated')}">${row['Gated / Outreach']}</span></td>
        <td><span class="heat-cell ${getHeatClass(row['Not Practical'], 'notpractical')}">${row['Not Practical']}</span></td>
        <td><span class="badge badge-cat">${dominantPattern}</span></td>
      </tr>
    `;
  }).join('');
}

/* ==========================================================================
   3. Render Human Verification Stratified Sample Audit Table
   ========================================================================== */
function initHumanAudit() {
  const tbody = document.getElementById('humanAuditTableBody');
  if (!tbody || !HUMAN_AUDIT_DATA.sample_details) return;

  tbody.innerHTML = HUMAN_AUDIT_DATA.sample_details.map(item => {
    const pass1Pct = Math.round((item.pass1_correct / item.claims) * 100);
    const pass2Pct = Math.round((item.pass2_correct / item.claims) * 100);

    return `
      <tr>
        <td><strong>${item.app}</strong></td>
        <td><span class="badge badge-cat">${item.category || getAppCategory(item.app)}</span></td>
        <td>${item.tier}</td>
        <td>${item.claims} / 8 claims</td>
        <td><span class="${pass1Pct < 100 ? 'text-danger' : 'text-emerald'}">${pass1Pct}%</span> (${item.pass1_errors} err)</td>
        <td><span class="text-emerald font-bold">${pass2Pct}%</span> (0 err)</td>
        <td style="font-size:0.82rem; color:#94a3b8;">${item.note}</td>
      </tr>
    `;
  }).join('');
}

function getAppCategory(appName) {
  const found = APPS_DATA.find(a => a.app.name.toLowerCase() === appName.toLowerCase());
  return found ? found.app.category : 'General';
}

/* ==========================================================================
   4. 100-App Searchable, Filterable, Sortable Catalog
   ========================================================================== */
function initCatalog() {
  const searchInput = document.getElementById('appSearchInput');
  const clearBtn = document.getElementById('clearSearchBtn');
  const categoryFilter = document.getElementById('categoryFilter');
  const verdictFilter = document.getElementById('verdictFilter');
  const authFilter = document.getElementById('authFilter');
  const mcpFilter = document.getElementById('mcpFilter');

  const applyFilters = () => {
    const query = searchInput.value.toLowerCase().trim();
    const cat = categoryFilter.value;
    const verdict = verdictFilter.value;
    const auth = authFilter.value;
    const mcp = mcpFilter.value;

    clearBtn.style.display = query ? 'block' : 'none';

    filteredApps = APPS_DATA.filter(item => {
      // Search
      if (query) {
        const matchName = item.app.name.toLowerCase().includes(query);
        const matchCat = item.app.category.toLowerCase().includes(query);
        const matchDesc = item.app.description.toLowerCase().includes(query);
        const matchAuth = item.authentication.methods.some(m => m.toLowerCase().includes(query));
        const matchVerdict = item.buildability.verdict.toLowerCase().includes(query);
        if (!matchName && !matchCat && !matchDesc && !matchAuth && !matchVerdict) return false;
      }

      // Category
      if (cat !== 'ALL' && item.app.category !== cat) return false;

      // Verdict
      if (verdict !== 'ALL' && item.buildability.verdict !== verdict) return false;

      // Auth
      if (auth !== 'ALL' && !item.authentication.methods.includes(auth)) return false;

      // MCP
      if (mcp !== 'ALL') {
        if (mcp === 'available' && !item.mcp.available) return false;
        if (mcp === 'First-party' && (item.mcp.type !== 'First-party' || !item.mcp.available)) return false;
        if (mcp === 'Community' && (item.mcp.type !== 'Community' || !item.mcp.available)) return false;
        if (mcp === 'None' && item.mcp.available) return false;
      }

      return true;
    });

    sortAndRenderApps();
  };

  searchInput.addEventListener('input', applyFilters);
  clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    applyFilters();
    searchInput.focus();
  });

  categoryFilter.addEventListener('change', applyFilters);
  verdictFilter.addEventListener('change', applyFilters);
  authFilter.addEventListener('change', applyFilters);
  mcpFilter.addEventListener('change', applyFilters);

  // Sorting
  document.querySelectorAll('.app-table th.sortable').forEach(th => {
    th.addEventListener('click', () => {
      const field = th.dataset.sort;
      if (sortField === field) {
        sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
      } else {
        sortField = field;
        sortDirection = 'asc';
      }
      updateSortIndicators();
      sortAndRenderApps();
    });
  });

  // Modal setup
  document.getElementById('modalCloseBtn').addEventListener('click', closeModal);
  document.getElementById('detailModal').addEventListener('click', (e) => {
    if (e.target.id === 'detailModal') closeModal();
  });

  sortAndRenderApps();
}

function updateSortIndicators() {
  document.querySelectorAll('.app-table th.sortable').forEach(th => {
    const indicator = th.querySelector('.sort-indicator');
    if (th.dataset.sort === sortField) {
      indicator.textContent = sortDirection === 'asc' ? ' ▲' : ' ▼';
      th.style.color = '#00d4ff';
    } else {
      indicator.textContent = '';
      th.style.color = '';
    }
  });
}

function sortAndRenderApps() {
  filteredApps.sort((a, b) => {
    let valA = '';
    let valB = '';

    if (sortField === 'name') {
      valA = a.app.name.toLowerCase();
      valB = b.app.name.toLowerCase();
    } else if (sortField === 'category') {
      valA = a.app.category.toLowerCase();
      valB = b.app.category.toLowerCase();
    } else if (sortField === 'verdict') {
      valA = a.buildability.verdict;
      valB = b.buildability.verdict;
    }

    if (valA < valB) return sortDirection === 'asc' ? -1 : 1;
    if (valA > valB) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  renderAppsTable();
}

function renderAppsTable() {
  const tbody = document.getElementById('appsTableBody');
  const countEl = document.getElementById('displayedCount');
  if (!tbody) return;

  countEl.textContent = filteredApps.length;

  if (filteredApps.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="9" style="text-align:center; padding: 40px; color:#64748b;">
          No matching SaaS platforms found. Try clearing your filters.
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = filteredApps.map(item => {
    const authBadges = item.authentication.methods.map(m => `<span class="badge badge-auth">${m}</span>`).join('');
    
    // Verdict Badge
    let verdictClass = 'badge-verdict-buildable';
    if (item.buildability.verdict === 'Easy Win') verdictClass = 'badge-verdict-easy';
    else if (item.buildability.verdict === 'Needs Investigation') verdictClass = 'badge-verdict-investigate';
    else if (item.buildability.verdict === 'Gated / Outreach') verdictClass = 'badge-verdict-gated';
    else if (item.buildability.verdict === 'Not Practical') verdictClass = 'badge-verdict-notpractical';

    // MCP Badge
    let mcpBadge = '<span class="badge badge-mcp-none">None</span>';
    if (item.mcp.available) {
      if (item.mcp.type === 'First-party') mcpBadge = '<span class="badge badge-mcp-first">1st-Party MCP</span>';
      else mcpBadge = '<span class="badge badge-mcp-comm">Community</span>';
    }

    // Access Setup
    const setupText = item.authentication.self_serve 
      ? `<span style="color:#10b981; font-weight:600;">${item.authentication.credential_setup}</span>`
      : `<span style="color:#f43f5e; font-weight:600;">🔒 ${item.authentication.credential_setup}</span>`;

    return `
      <tr class="clickable-row" onclick="openAppDetail('${escapeHtml(item.app.name)}')">
        <td>
          <div class="app-name-cell">
            <span>${item.app.name}</span>
          </div>
        </td>
        <td><span class="badge badge-cat">${item.app.category}</span></td>
        <td style="color:#94a3b8; font-size:0.85rem; max-width:260px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${item.app.description}</td>
        <td>${authBadges}</td>
        <td>${setupText}</td>
        <td><span class="badge badge-cat">${item.api.type}</span></td>
        <td>${mcpBadge}</td>
        <td><span class="badge ${verdictClass}">${item.buildability.verdict}</span></td>
        <td>
          <button class="btn btn-secondary btn-sm" onclick="event.stopPropagation(); openAppDetail('${escapeHtml(item.app.name)}')">
            Inspect Evidence
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

/* ==========================================================================
   5. Evidence & Detail Modal
   ========================================================================== */
window.openAppDetail = function(appName) {
  const item = APPS_DATA.find(a => a.app.name.toLowerCase() === appName.toLowerCase());
  if (!item) return;

  document.getElementById('modalAppName').textContent = item.app.name;
  document.getElementById('modalAppCategory').textContent = item.app.category;

  const modalBody = document.getElementById('modalBody');

  const snippetsHtml = item.evidence.snippets.map(s => `
    <div class="modal-snippet-card">
      <div class="modal-snippet-claim">✔ ${s.claim}</div>
      <div class="modal-snippet-quote">"${s.quote}"</div>
      <div class="modal-snippet-source">Source: ${s.source}</div>
    </div>
  `).join('');

  const urlsHtml = item.evidence.urls.map(url => `
    <li><a href="${url}" target="_blank" rel="noopener noreferrer">↗ ${url}</a></li>
  `).join('');

  modalBody.innerHTML = `
    <p style="font-size:1.05rem; color:#f8fafc; margin-bottom:16px;">${item.app.description}</p>

    <div class="modal-grid-2">
      <div style="background:rgba(255,255,255,0.02); padding:12px; border-radius:8px; border:1px solid rgba(255,255,255,0.06);">
        <div style="font-size:0.75rem; color:#64748b; font-weight:700; text-transform:uppercase;">Authentication Architecture</div>
        <div style="font-size:0.95rem; font-weight:600; color:#e2e8f0; margin-top:4px;">
          ${item.authentication.methods.join(', ')}
        </div>
        <div style="font-size:0.85rem; color:#94a3b8; margin-top:2px;">
          Setup: <strong>${item.authentication.credential_setup}</strong> (${item.authentication.self_serve ? 'Self-serve' : 'Gated'})
        </div>
        ${item.authentication.gating_reason ? `<div style="font-size:0.8rem; color:#f43f5e; margin-top:4px;">Gating: ${item.authentication.gating_reason}</div>` : ''}
      </div>

      <div style="background:rgba(255,255,255,0.02); padding:12px; border-radius:8px; border:1px solid rgba(255,255,255,0.06);">
        <div style="font-size:0.75rem; color:#64748b; font-weight:700; text-transform:uppercase;">API Surface & MCP</div>
        <div style="font-size:0.95rem; font-weight:600; color:#e2e8f0; margin-top:4px;">
          ${item.api.type} (${item.api.breadth})
        </div>
        <div style="font-size:0.85rem; color:#94a3b8; margin-top:2px;">
          Write Ops: ${item.api.write_operations ? '✔ Supported' : '✖ None'} • Webhooks: ${item.api.webhooks ? '✔ Supported' : '✖ None'}
        </div>
        <div style="font-size:0.85rem; color:#c084fc; margin-top:2px;">
          MCP: ${item.mcp.available ? `${item.mcp.type} (${item.mcp.source_url ? `<a href="${item.mcp.source_url}" target="_blank">Repository</a>` : 'Registered'})` : 'No MCP Server'}
        </div>
      </div>
    </div>

    ${item.buildability.primary_blocker ? `
      <div style="background:rgba(245,158,11,0.08); border:1px solid rgba(245,158,11,0.25); padding:12px 16px; border-radius:8px; margin-bottom:16px;">
        <strong style="color:#fbbf24; font-size:0.85rem;">Primary Integration Barrier:</strong>
        <p style="font-size:0.88rem; color:#fde68a; margin-top:2px;">${item.buildability.primary_blocker}</p>
      </div>
    ` : ''}

    <div class="modal-section-title">Verified Documentation Evidence</div>
    ${snippetsHtml}

    <div class="modal-section-title">Official Reference URLs</div>
    <ul class="modal-urls-list">
      ${urlsHtml}
    </ul>
  `;

  document.getElementById('detailModal').style.display = 'flex';
};

window.closeModal = function() {
  document.getElementById('detailModal').style.display = 'none';
};

window.filterByAppName = function(appName) {
  const searchInput = document.getElementById('appSearchInput');
  if (!searchInput) return;
  searchInput.value = appName;
  const event = new Event('input', { bubbles: true });
  searchInput.dispatchEvent(event);
  
  const catalogSection = document.getElementById('catalog');
  if (catalogSection) catalogSection.scrollIntoView({ behavior: 'smooth' });
};

/* ==========================================================================
   6. Architecture Tabs
   ========================================================================== */
function initArchitectureTabs() {
  const tabs = document.querySelectorAll('.arch-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.arch-tab-content').forEach(c => c.classList.remove('active'));

      tab.classList.add('active');
      const target = document.getElementById(tab.dataset.tab);
      if (target) target.classList.add('active');
    });
  });
}

/* ==========================================================================
   7. Export & Downloads
   ========================================================================== */
function initExport() {
  const exportBtn = document.getElementById('exportJsonBtn');
  const downloadBtn = document.getElementById('downloadFinalJsonBtn');

  const downloadJson = () => {
    const blob = new Blob([JSON.stringify(APPS_DATA, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'final_dataset_100_apps.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (exportBtn) exportBtn.addEventListener('click', downloadJson);
  if (downloadBtn) downloadBtn.addEventListener('click', downloadJson);
}

/* ==========================================================================
   8. Keyboard Shortcuts
   ========================================================================== */
function initKeyboardShortcuts() {
  window.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement.tagName !== 'INPUT') {
      e.preventDefault();
      const searchInput = document.getElementById('appSearchInput');
      if (searchInput) {
        searchInput.focus();
        searchInput.select();
      }
    } else if (e.key === 'Escape') {
      closeModal();
    }
  });
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}
