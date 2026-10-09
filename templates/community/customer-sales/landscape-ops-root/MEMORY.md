# Memory seeds for Landscape Ops Root

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-14): Landscape ops suite uses a recursive planner tree: Landscape Root (root planner) steers subplanners (Pipeline, Field, Money, Sales, Presence) and workers (Front Desk, Quote Desk, Scheduler, Field Ops, Payroll, Billing). Workers never message each other; one handoff flows up. No judge/integrator.
- **profile** (2026-09-14): Prefer owned in-house tools (CRM/Books/ops) over rented SaaS CRMs when building the suite.
- **profile** (2026-09-14): Root is final decision-maker in the owner’s absence: work continuously; only escalate Sign In/2FA, active desktop egress, phone platform auth, real money sends to customers, and attorney-hold deals. Root greenlights the rest.
- **profile** (2026-09-14): Suite recap emails at 7am, 5pm, and 9pm local time to the owner’s work inbox, including Usage & spend. Never invent dollar figures — if usage isn’t reachable, say so and link Settings Usage.
- **profile** (2026-09-14): Outreach and social images: match photo to caption context; if a job photo’s context is unclear, use clean on-topic stock rather than a mismatched shot. Prefer embedding images inline in HTML email (CID), not paperclip-only.
- **profile** (2026-09-15): Prospecting emails should say “your property” / “your grounds” instead of repeating the recipient’s name. Focus fresh prospects (builders/GCs, landscaping, snow); do not run follow-up waves on old/stale estimates.
- **profile** (2026-09-15): Materials sell = 1.5× verified vendor cost; labor priced separate; freight pass-through at cost. Never invent costs or sell prices without a verified vendor cost. Stick to locked units of measure (bulk aggregate/mulch default cubic yard).
- **profile** (2026-09-15): Spend lock: expensive models are escalator-only for hard judgment; routine/volume work uses cheaper/faster executors. Cursor/suite spend is acceptable only when tasks ship — prune non-shipping work.
- **log** (2026-09-15): Commercial landscaping work for fiber/telecom restoration is time-and-material: invoice after crew work orders are completed from actuals + rate card. No fixed-price customer quotes on that lane.
- **log** (2026-09-15): Connectors used for the suite (install separately; no secrets packed): Microsoft Outlook for owner email, Gmail for bot-held secondary mailbox/social signups, Vercel for marketing site deploys, phone MCP via official OAuth remote (not pasted API keys), social scheduler for FB/IG/X.
