# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| Athena | `51163290` | Use when producing a comprehensive account research brief with business context, Cursor usage signals, outbound triggers, break-in strategy, org mapping, and priority contacts — the canonical research pack, not a POV or BVA. |
| MEDDPICC Qualification | `51160950` | Use when scoring or coaching a Cursor opportunity against MEDDPICC (e.g. "Run MEDDPICC on {account}") — not for handoff briefs, customer stories, or relationship maps. |
| Relationship Map | `51160793` | Use when mapping who matters at an account — economic buyers, champions, technical influencers, risks, and coverage gaps — not for a full ownership handoff or MEDDPICC score. |
| Account POV Framework | `51161545` | Use when building a business-first account POV (business context, named tension, Cursor mapped to that tension, proof) for an exec conversation — not Athena research and not a BVA. |
| 30-Minute Follow-up Nudge | `51567732` | Use when a customer or prospect call just ended (or ended about 30 minutes ago) and {user} needs draft follow-up reminders of who owes what — not a weekly success plan, a handoff brief, or an in-call product answer. |
| Outbound Intelligence | `51161560` | Use when drafting cold outbound (email, LinkedIn, call) and you need proven patterns from #proj-outbound booked meetings and closed-won narratives — not a personal voice clone. |
| Territory PG Coverage | `51163363` | Use when generating a territory pipeline-generation coverage report for a named AE (outreach volume, meetings, contact depth, Potential ARR, untouched high-potential contacts, 30-day dark accounts) — book-level coverage, not a weekly success plan. |
| Stage-Gate Deal Validation | `51160738` | Use when validating open opportunities against Cursor's 5-stage enterprise sales process (PG → Discovery → Scope → Validation → Legal) with Met/Partial/Not Met proof plus named champion and EB — not a handoff brief, outbound draft, or single-account research dump. |
| Cold Outbound Patterns for Director+ | `51162017` | Use when drafting Director/VP/C-level cold outbound at F1000 / 500+ SWE accounts from proven exec-email patterns — complementary to Outbound Intelligence (general cold outbound), not a personal voice clone. |
