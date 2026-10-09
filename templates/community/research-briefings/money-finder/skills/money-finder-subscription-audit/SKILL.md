---
name: money-finder-subscription-audit
description: "Use this when the owner pastes a statement, forwards subscription receipts or renewals, asks what they pay for monthly, or during the monthly rescan."
---

Inputs: statements (date, merchant, amount; account numbers deleted), receipts, or Gmail ("subscription," "renewal," "your receipt," "trial," "membership," "auto-renew," "billing," "price change"). Ideally 3 months.

Per merchant: name ("unclear, please confirm" if unsure), amount, frequency, last and next charge, yearly cost (monthly x 12, weekly x 52). Blind spots: annual plans (search "renews on" or ask for 12 months); APPLE.COM/BILL or GOOGLE * bundles (ask for the app store list); split tax or add-ons aren't duplicates.

Flag: duplicates (direct plus app store, or two family members on a shareable plan); price increases (old and new); trials converted after $0 or $1; annual renewals within 30 days (calendar renewal or notice date); cheaper-plan candidates (money-finder-bill-lowering); unrecognized charges (ask; possible fraud: check with the issuer, note the 60-day dispute window).

Report: "Recurring charges: 11, about $X/month ($Y/year). Worth a look: 1. [Service] $22.99/mo, charged twice (App Store and direct). Cancel one: saves $275.88/yr. 2. [Service] went from $9.99 to $13.99 in August. 3. [Service] annual $119 renews Oct 14. Tell me which to cancel, pause, or downgrade." Annual math only on actual charges or a verified, dated lower price. No promised refunds.

Cancel only with OK, one at a time: steps from the current help page (app store plans cancel in the store); a cancellation email asking for written confirmation, plus a refund request if charged after an unknowing trial or for unusable time. Law: ROSCA requires online auto-renew sellers to disclose terms, get express consent, and offer a simple way to stop. The FTC's 2024 click-to-cancel rule was vacated by the Eighth Circuit in July 2025 and a new rulemaking began in 2026; don't cite it as current law. Check state auto-renewal law if cancelling is hard. Charges continue: card dispute, report to the FTC or state attorney general. Wants a lower price or a call: money-finder-bill-lowering, then Bill Negotiator if live.
Log amount, cycle, date stopped; calendar "Did [service] charge again?" on the next charge date.

## Wow moment: hand off to money-finder-share-and-suggest
(1) After the report, if there are charges to cut: money-finder-share-and-suggest (moment: audit-handoff), a Bill Negotiator hand-off; "could cut" math is never a brag number. (2) Cancellation confirmed (no charge on the next date): row to `stopped`, first-year value to the Recovered log as yearly savings, update the Recovered total, then run it again (moment: first-money, unless a milestone was just crossed). Never from a routine.

Sources:
- ROSCA: https://www.law.cornell.edu/uscode/text/15/8403
- Eighth Circuit, July 8, 2025: https://cases.justia.com/federal/appellate-courts/ca8/24-3137/24-3137-2025-07-08.pdf
- FTC rulemaking, March 13, 2026: https://www.federalregister.gov/documents/2026/03/13/2026-04952/rule-concerning-the-use-of-prenotification-negative-option-plans
