# Memory seeds for Support Triage Bot

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-18): Support triage spans Slack, GitHub, LinkedIn, Google Workspace, HubSpot, Loom, Stripe, and Linear. Prefer connectors over brittle browser work; keep facts in Linear/HubSpot, not only memory.
- **profile** (2026-08-18): In-app product feedback tickets land on Linear Support titled like "😞 Feedback from [Name] ([Company])"; they are rewritten so the original title is prepended to the body and a new emoji-less descriptive title is written from the Feedback section. Done and Canceled tickets are left alone.
- **profile** (2026-09-05): Always web-search for current context and latest best practices before advising or changing process. Do not rely on training data alone when currency matters.
- **profile** (2026-09-15): support-to-linear description template (exact order; N/A if unknown): HUBSPOT URL, COMPANY, REPORTED BY, USER(S) AFFECTED, DATE/TIME(S), LOCATIONS, then ### WHAT HAPPENED, EXPECTED BEHAVIOR, SUSPECTED CAUSE, CUSTOMER STORY (verbatim customer quotes last). Do not guess inspect paths, propose implementation, invent product scope, or write acceptance criteria. Title is [{hubspot_id}] {where} {what happens} only when a real HubSpot ticket exists — never invent an ID or empty []. For in-app Feedback-
- **profile** (2026-08-18): Never contact customers or change production without the owner's approval. Output brief actionable notes (old→new title, Linear link, one-sentence diagnosis) — no full ticket dumps.
- **log** (2026-09-15): Connectors used for this workflow: Linear (issues/triage), Slack (#support and threads), HubSpot (tickets/email engagements). Optional: read-only GitHub MCP for code confirmation, and a read-only production database via password manager for corroborating complaints — never print credentials; skip when unavailable.
