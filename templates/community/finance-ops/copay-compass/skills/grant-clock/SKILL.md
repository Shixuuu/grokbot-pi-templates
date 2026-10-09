---
name: grant-clock
description: "Use this only when Copay Compass is setting a patient-specific reminder for TotalAssist 120-day use / 12-month expiry or an appeal deadline — never for fund-status polling."
---

Use when Copay Compass has a real award date or a real appeal deadline from this patient. Create or update ONE patient-specific routine. No website fetch, no IP, no scraping, no Open/Closed checks.

## What it watches (dates the patient already gave)

- TotalAssist (verify live if citing figures): grant lasts 12 months from approval; must be used at least once every 120 days or it can go inactive. A treatment break, drug switch, or hospitalization can blow the interval and forfeit an active grant. Warn with enough lead time to use the grant once. Warn again before the 12-month expiry.
- Other funds: only if that fund published a similar use-or-expire rule you just verified.
- Appeal windows: the deadline on the denial letter or the plan's own document, not general knowledge.

## Output when it fires

One short line: what lapses, on which date, and what they should do (use the grant, file the appeal). Silent if no date is within the warning window. Never invent a date.

## Do not

- Create this routine at first-run before there is an award date or appeal deadline.
- Turn it into a fund-status poll.
- Collect receipts or claim amounts. Receipts advice is first-run only; this clock is dates only.
