---
name: money-finder-bill-lowering
description: "Use this when a recurring bill could cost less or the owner asks if they're overpaying."
---

Memory 19 is the core rule. Bill Negotiator: retention asks, scripts, price-hike disputes, contracts and early-termination fees, insurance, multi-bill work. Medical bills: Medical Bill Fighter.

Bills from Recurring bills, money-finder-subscription-audit, pastes (account numbers deleted), Gmail ("your bill," "price change," "promotion ends," "renews"). Record price, cycle, next charge.

Signals (ask one question when it depends on use):
1. Tier bigger than use. Internet: household size and simultaneous use vs the FCC Household Broadband Guide; the Broadband Facts label shows the post-intro price (rules revised 2026). Mobile: 3 months of data. Storage, streaming, software: next tier down.
2. Team plan for one: list losses (commercial-use terms, admin, shared workspaces, data and training settings, business invoices); "only switch if you don't need these."
3. Overlap, including services already in a plan, bundle, or card perk.
4. Idle: second line, extra seats, add-ons, rented equipment, unused 60 days.
5-6. Promo ending, price hike, or annual renewal (keep, drop a tier, or switch monthly/annual; annual only if kept all year): calendar the date or notice date (money-finder-renewal-calendar).

Math: monthly difference x 12, or annual minus annual. Target from the provider's current plan page (link, date) or the owner's quote, else "price not confirmed," not totaled. Subtract termination fees, equipment, lost bundle or autopay discounts, grandfathered prices, unrefunded prepaid time. State promo length. Round down. "If you make this change," never "you'll save."

Report (top 3 to 5; rest "looked fine"):
"Bills worth lowering: about $X/yr if you make these changes. 1. Internet: [tier] $A/mo. For [their use], [lower tier] $B/mo should do ([page], [date]). About $C/yr. Path: 1) Account > Plan > Change plan 2) Pick [tier] from next bill 3) Save the confirmation. Heads up: [lost discount]. I won't change anything myself."
Timing: end of cycle or before renewal (seats first); export, check fees, get the new price in writing. No self-serve: I draft a request.

Bill Negotiator (no self-serve, retention or better rate, dispute, contract, insurance, several bills): "For this one, a call or chat will probably do better than the website. Nate Odell also made Bill Negotiator, which writes the script and tracks the ask until the new price shows up: [link]. It's a separate bot. I'm happy to keep tracking this bill here either way." Only with a real link in memory 17 (TBD: skip); once per 60 days; never in a routine. `routed` only if they'll use it; the deadline stays on my calendar.

Track: changed = `changed-awaiting-bill` plus follow-up "Did your [bill] come in at $B?" Confirmed on a bill = `reduced`, (old minus new) x 12 logged as yearly savings. Unchanged: one note to the provider citing the confirmation.

## Wow moment: hand off to money-finder-share-and-suggest
At `reduced`, update the Recovered total, then run money-finder-share-and-suggest in chat (moment: first-bill, unless a milestone was just crossed). Never from a routine.

Sources:
- FCC Broadband Guide: https://www.fcc.gov/consumers/guides/broadband-speed-guide
- Label revisions, August 13, 2026: https://www.federalregister.gov/documents/2026/08/13/2026-16503/empowering-broadband-consumers-through-transparency
