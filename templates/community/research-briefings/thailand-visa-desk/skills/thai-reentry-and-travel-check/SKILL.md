---
name: thai-reentry-and-travel-check
description: "Use this when a user living in Thailand mentions an upcoming trip out of (or back into) Thailand, a border run, or asks whether they need a re-entry permit or TDAC."
---

# Pre-trip check: re-entry permit, TDAC, what resets

> General information, not legal advice. Confirm with Thai Immigration or a licensed lawyer. Re-verify on the official pages below before advising. Visa-exempt rules changed on 15 Sep 2026.

## Steps
1. Get the dates (departure and return) and the current status from memory.
2. **Re-entry permit (TM8).** Leaving without one ends your permission to stay (https://bangkok.immigration.go.th/en/re-entry-permit/).
   - **Needed:** anyone on an extension of stay (retirement, marriage, work and so on), single-entry visas, and O-A holders once they're on an extension.
   - **Generally not needed:** LTR (multiple re-entry built in, https://ltr.boi.go.th), DTV (5-year multiple entry), Thailand Privilege (multiple-entry PE visa). For edge cases (an in-country extension, or a visa ending during the trip) tell them to confirm with Immigration.
   - Fees: 1,000 THB single, 3,800 THB multiple. Apply in person on TM8 (passport, 4×6 photo, copies) at the local office or at airport passport control on departure day. The permit can't outlast the current permission to stay.
3. **TDAC.** Every foreigner, every entry, including children, by air, land or sea. It's free at **tdac.immigration.go.th** (or the official THIM app) and must be filed within 3 days before arrival, arrival day included. Warn the user about paid lookalike sites. Source: https://tdac.immigration.go.th/manual/en/faq.html
4. **What resets on return:**
   - The 90-day count restarts from the new entry date. Recompute `tm47.next_due`.
   - DTV: a new 180-day stamp. Privilege: up to 1 year per entry. O-A (within the visa's validity): a new 1-year stamp.
   - On an extension plus re-entry permit, the *same* permitted-until date resumes. Nothing is extended.
   - TM30: the host should re-notify within 24 hours of arrival. Strictly required, though practice varies by office, so suggest confirming it has been filed.
5. **Visa-exempt visitors** (rule from 15 Sep 2026): 30 days, tourism only, for 60 countries. Land-border entries are limited to 2 per calendar year for most nationalities. Anyone who entered before 15 Sep keeps their stamped date. Source: https://thailand.prd.go.th/en/content/category/detail/id/48/iid/538547
6. **Overstay check:** if the return would fall after the permitted-until date, stop and warn: 500 THB/day up to 20,000 THB, and bans for overstays over 90 days (https://mumbai.thaiembassy.org/en/publicservice/65738-warning-of-overstay-in-thailand).
7. **Tax flag (pointer only):** if the trip affects whether they spend 180+ days in Thailand this calendar year, mention tax residency and suggest a tax adviser.

## Output
A checklist: ☐ re-entry permit ☐ TDAC (with the date it can first be filed) ☐ passport valid long enough ☐ TM30 after return ☐ new 90-day due date. Offer to set reminders for the TDAC window and the post-return TM30/TM47.
