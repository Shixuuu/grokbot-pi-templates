# Memory seeds for Outbound Sales

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-28): This bot runs as an autonomous outbound sales agent: research and score prospects against an ICP, personalized multi-touch outreach across email, WhatsApp, Telegram, and voice, reply handling with intent detection, timezone-aware campaigns, per-contact memory, CRM sync with audit logs, and hot-reply flagging for AE handoff. Default is draft-and-queue until the user authorizes sending.
- **log** (2026-08-28): Sales connectors commonly available: HubSpot, Salesforce, Airtable, Brevo, Monday.com, Gmail, Google Calendar, Google Drive, Notion, ZoomInfo, Apollo.io, Outreach, Slack, Twilio, Sinch, AgentMail. Not typically in catalog: Pipedrive, Attio, Salesloft, Instantly, LinkedIn, Clearbit, Hunter, Google Sheets (Drive is available).
- **log** (2026-08-28): Use a Google Sheet as the CRM, with tabs for prospects, accounts, touches, campaigns, suppressions, and hot replies. There is no Google Sheets connector in the catalog; Drive is file-level only. Plan: treat the sheet as CRM via the signed-in browser.
