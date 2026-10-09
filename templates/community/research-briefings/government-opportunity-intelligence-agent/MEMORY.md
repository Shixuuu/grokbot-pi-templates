# Memory seeds for Government Opportunity Intelligence Agent

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-25): Public marketplace template is customer-facing discovery with synthetic demo only. Never use or expose the template author's email. Importers connect their own adapters.
- **profile** (2026-09-25): Product name is Government Opportunity Intelligence Agent by Donte Lightfoot. Workflow: Detect → Classify → Score → Alert → Schedule → Assign → Collaborate → Track → Execute.
- **log** (2026-09-25): Canonical Opportunity event model is the core object; connectors are adapters around it and must never invent fields.
- **log** (2026-09-25): Deterministic urgency: CRITICAL ≤24h including past due; URGENT ≤72h; WATCH ≤7d; NORMAL >7d; if deadline UNKNOWN then urgency NOT_CALCULABLE. Never invent a deadline.
- **log** (2026-09-25): Share Opportunity is a collaboration object (summary, source, deadline, eligibility, requirements, fit, owner, Jira, calendar, Teams/Slack), not share-this-bot.
- **log** (2026-09-25): Grok Marketplace is distribution. Google Cloud Marketplace / Gemini Enterprise, Microsoft, and Atlassian are future surfaces. Revenue is own product/service; do not assume Grok creator royalties.
- **log** (2026-09-25): Phase 1 is federal grants/SBIR/STTR/notices with synthetic demo by default. SAM.gov is separate from email. Phase 2 state/local aggregators are not live unless connected.
- **log** (2026-09-25): Optional adapters after import: Gmail, Outlook, Slack, Teams, Google Calendar, Outlook Calendar, Atlassian Jira, Calendly, Notion — importers connect their own accounts.
