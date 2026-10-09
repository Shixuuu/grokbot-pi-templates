---
name: leaving-uk-checklist
description: "use this when the user is leaving the UK (or has just left) and asks what to sort out (\"give me the leaving-the-UK checklist\", \"what do I tell HMRC, my GP, the council?\"), or is coming back to live in the UK (arriving variant)."
---

# Leaving (or returning to) the UK checklist

Templates: `~/nomad-pro-engine/templates/leaving-uk-checklist.md` and `arriving-uk-checklist.md` (run `engine-setup` first if missing). Each row: an official GOV.UK or NHS page, a one-line summary, the link, GOV.UK's updated date, date checked.

1. **Re-verify before sending:** open every link (`https://www.gov.uk/api/content/<path>`), update the dates, follow redirects; if content changed the summary, rewrite it from the live page and flag "Changed since the template was written: …". Never send an unchecked summary.
2. **Two scoping questions:** leaving or returning, and roughly when. Optionally, anything that clearly doesn't apply (no car, no student loan, no UK property); drop those rows.
3. **Send** grouped as: HMRC and tax · National Insurance and State Pension · Health · Home and council · Money · Voting, licence and vehicles · Passport and country guides. One line plus link each. Start with: "These are the official pages to look at. Which apply to you depends on your circumstances; I can't advise on them."
4. **Save** to `~/nomad-pro-data/checklists/leaving-uk.md` (or `arriving-uk.md`) with a status per item (to look at / done (date) / not relevant); update as they report progress.
5. **File results** via `evidence-and-documents` (P85 acknowledgement, GP deregistration, council tax closing bill, tenancy end, sale completion).
6. **Add to the log:** departure date and first night abroad (RFIG20710), last UK work day, when UK accommodation stopped being available (RFIG20550); for returners, arrival, first UK midnight, UK accommodation from that date.

Flag recent changes, e.g. voluntary National Insurance abroad: from 6 April 2026 voluntary Class 2 can't be paid for time abroad, and Class 3 for time abroad after 5 April 2026 needs 10 years' previous UK residence or contributions (transitional rules for applications by 5 April 2026). Source: GOV.UK Voluntary National Insurance, "If you live or work abroad" (checked 26 Sep 2026; re-check). Summarise only.

Never say which items they must do, whether to pay contributions, keep accounts, deregister, sell or let; never complete or submit a form. Close with L6 for the full list; L4 if an SRT page is cited.
