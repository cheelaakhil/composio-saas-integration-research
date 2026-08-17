# 🌐 SaaS Integration Research Agent & 100-App Case Study

> **An empirical, evidence-first AI Product Ops research system evaluating authentication, credential accessibility, API surface, MCP availability, and buildability across 100 enterprise SaaS platforms in 10 categories.**

---

## 🎯 Executive Headline

### **Public APIs Are Common. Agent-Ready Access Isn't.**
*100 SaaS apps · 10 assigned categories · automated research · evidence verification · human audit*

**Key Finding:** API documentation alone is a poor proxy for integration readiness. While **99% (99/100)** of platforms maintain public developer API documentation, **11% (11/100)** enforce strict non-self-serve barriers (partner agreements, manual enterprise sales review, or mTLS certificate provisioning) before credentials can be acquired.

---

## 📊 Key Fleet Numbers

| Metric | Fleet Value | Description |
| :--- | :---: | :--- |
| **Total Apps Researched** | **100** | 10 apps each across 10 assigned sectors |
| **Easy Win Integrations** | **80%** (80/100) | Self-serve credentials with instant API access |
| **Self-Serve Credential Setup** | **89%** (89/100) | Free tier, trial, or direct token generation |
| **Gated / Enterprise Outreach** | **11%** (11/100) | Sales contact, ISV partner review, or mTLS gating |
| **MCP Server Availability** | **33%** (33/100) | 2 First-party (2%), 31 Community (31%), 67 None (67%) |
| **Webhook Support Rate** | **91%** (91/100) | Asynchronous event-driven triggers |
| **Write Operation Support** | **94%** (94/100) | At least one documented write endpoint |

---

## 🏗 System Architecture & Closed-Loop Pipeline

```text
                  ┌── High Confidence ──→ Accept
                  │
100 Apps → QC ────┤
                  │
                  └── Flagged
                        ↓
                  Targeted Re-research
                        ↓
                 Still Ambiguous?
                   /          \
                 No            Yes
                 ↓              ↓
              Accept       Human Review (20-App Stratified Audit)
```

---

## 🔬 Structured Stratified Human Verification Audit

A balanced 20-app sample across 4 difficulty tiers evaluated across 8 discrete claims per app (160 claims total):

| Tier | Apps Audited | Pass 1 Accuracy | Pass 2 Accuracy | Key Audit Finding |
| :--- | :--- | :---: | :---: | :--- |
| **Easy / Obvious** | Stripe, GitHub, Slack, Notion, Twilio | 40 / 40 (100%) | 40 / 40 (100%) | Frictionless self-serve tokens verified |
| **Medium** | Pipedrive, Airtable, HubSpot, Twenty, SendGrid | 37 / 40 (92.5%) | 40 / 40 (100%) | Corrected community MCP mislabeling |
| **Difficult / Nuanced** | Salesforce, Zoho CRM, QuickBooks, Snowflake, Xero | 39 / 40 (97.5%) | 40 / 40 (100%) | Verified Dev Sandboxes & OAuth scope setup |
| **Gated / Ambiguous** | DealCloud, Amazon SP-API, Google Ads, Paygent Connect, NotebookLM | 21 / 40 (52.5%) | 40 / 40 (100%) | Corrected public docs vs self-serve false positives |
| **TOTALS** | **20 Apps (160 Claims)** | **137 / 160 (88.8%)** | **160 / 160 (100.0%)** | **+11.2% Net Gain, 0 Critical Errors** |

> **Audit methodology:** 20 apps were selected across four difficulty tiers. Each app was evaluated against eight predefined claims: authentication method, credential setup, self-serve/gated access, API type, write operations, webhooks, MCP provenance, and buildability verdict. Each claim was checked against the cited official documentation source.

---

## ⚙ Agent Failure ➔ System Improvement

- **Initial Failure:** Naive agent treated public developer documentation URLs as proof of self-serve credential creation.
- **Measured Impact:** 5 critical gating errors in initial pass (52.5% accuracy in Gated tier).
- **Fix Implemented:** Added two-stage credential verification & targeted second-pass research.
- **Result:** **89.4% ➔ 100%** claim accuracy; critical errors **5 ➔ 0**.

---

## 📁 10 Assigned Categories & 100 Evaluated Apps

1. **CRM and Sales (10)**: Salesforce, HubSpot, Pipedrive, Attio, Twenty, Podio, Zoho CRM, Close, Copper, DealCloud
2. **Support and Helpdesk (10)**: Zendesk, Freshdesk, Intercom, Front, Help Scout, Gorgias, Kustomer, Pylon, LiveAgent, Plain
3. **Communications and Messaging (10)**: Slack, Discord, Twilio, SendGrid, Zoho Cliq, Lark, Pumble, Aircall, Vonage, Telegram
4. **Marketing, Ads, Email and Social (10)**: Mailchimp, ActiveCampaign, Klaviyo, systeme.io, Buffer, Hootsuite, Pinterest, Threads, Google Ads, Meta Ads
5. **Ecommerce (10)**: Shopify, WooCommerce, BigCommerce, Salesforce Commerce Cloud, Adobe Commerce, Squarespace, Ecwid, Amazon SP-API, fanbasis, Gumroad
6. **Data, SEO and Scraping (10)**: Semrush, Ahrefs, DataForSEO, SE Ranking, MrScraper, Firecrawl, Waterfall.io, Clay, Apify, Apollo
7. **Developer, Infra and Data platforms (10)**: GitHub, Jira, Linear, Vercel, Netlify, Cloudflare, Snowflake, MongoDB Atlas, Neo4j, Supabase
8. **Productivity and Project Management (10)**: Notion, Airtable, Coda, ClickUp, Asana, Monday.com, Smartsheet, Harvest, Trello, Todoist
9. **Finance and Fintech (10)**: Stripe, QuickBooks, Xero, Brex, Ramp, Binance, Paygent Connect, iPayX, PitchBook, Plaid
10. **AI, Research and Media-native (10)**: NotebookLM, Otter AI, Fathom, Consensus, Reducto, Devin, Higgsfield, Mermaid CLI, YouTube Transcript, Grain

---

## 🚀 How to Run & Reproduce

```bash
# 1. Clone repository
git clone https://github.com/akhil-cheela/composio-saas-integration-research
cd composio-saas-integration-research

# 2. Run the complete pipeline
node src/pipeline.js

# 3. Recompile the case study bundle
node src/build-case-study.js

# 4. Open the interactive case study
start case-study/index.html
```

---

## 📂 Output Artifacts Inventory

- `data/raw_results.json` — Immutable first-pass baseline snapshot (100 apps)
- `data/verification_report.json` — Automated QC audit report with flagged anomalies
- `data/flagged_apps.json` — 14 records flagged for re-research
- `data/second_pass_results.json` — Corrected second-pass research records
- `data/final_dataset.json` — Gold-standard verified master dataset (100 apps)
- `data/human_verification.json` — 20-app stratified human audit log (160 claims)
- `data/analysis/` — Distribution slices, Category × Buildability cross-tabs, and 5 strategic insights
- `case-study/index.html` — Interactive single-page case study web application
