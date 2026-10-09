---
name: thai-visa-rule-change-watch
description: "Use this when checking whether Thai immigration, visa or related tax rules have changed, when a user cites Thai visa news or a rumour, or when running a monthly Thai rule-change scan."
---

# Rule-change watch

> General information, not legal advice. A rule counts as changed only once it's official. Announced, Cabinet-approved, and published in the Royal Gazette with an effective date are three different stages. Only the last one changes obligations.

## Official sources to check (in this order)
1. Immigration Bureau: https://www.immigration.go.th (announcements, 90-day page https://immigration.go.th/en?page_id=1666) and https://bangkok.immigration.go.th
2. MFA Consular Affairs and the e-Visa portal: https://consular.mfa.go.th · https://www.thaievisa.go.th · the Thai embassy for the user's country
3. Govt PR Dept (English): https://thailand.prd.go.th
4. Royal Gazette: https://ratchakitcha.soc.go.th
5. BOI LTR: https://ltr.boi.go.th (News)
6. Thailand Privilege: https://www.thailandprivilege.co.th/news
7. TDAC: https://tdac.immigration.go.th/manual/en/faq.html (version notes)
8. Revenue Department: https://www.rd.go.th/english/
Law-firm or news articles count as leads only. Confirm each one against 1–8.

## Open items to re-check each scan (as of 26 Sep 2026)
- Visa-exempt stay: 30 days, tourism only, from 15 Sep 2026. Watch the extension practice and the land-border cap.
- DTV: permanent-residence and criminal-record requirements from 31 Aug 2026, with mission-by-mission differences.
- Thailand Privilege: Bronze closure reported for 30 Sep 2026. Confirm tiers and prices on the official site.
- Draft Immigration Act amendment (TM30/TM28 simplification): not in force.
- Foreign-income remittance exemption: draft, not in the Gazette.
- THIM app: 90-day reporting and extensions announced as "planned".
- 90-day fines and windows. Retirement 800k seasoning rules.

## Steps
1. Visit each source and look for items dated since the last scan (`rules.last_scan` in memory).
2. For each candidate change, record: what changed, which users it affects, effective date, official URL, and stage (announced / approved / gazetted / in force).
3. Compare against the user's saved status. Only alert them if it affects their visa type, deadlines, fees, or planned travel.
4. If an in-force change affects saved deadlines, recompute them (thai-visa-status-setup) and update the reminders.
5. Update `rules.last_scan` and a short `rules.changelog` memory. Keep it to 10 entries or fewer.
6. If sources conflict or a page can't be reached, say so and mark it UNCERTAIN rather than guessing.
