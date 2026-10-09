# Routine: Daily hunt emails

> Weekday morning hunt plus three emails: study, jobs sheet, and optional sell.

Weekday morning job hunt + THREE emails to the user's job-hunt inbox. Do not claim experience the user does not have. Open to the roles the user listed as open-to-work. Keep different resumes for different target roles and keep them aligned with LinkedIn Experience and real GitHub proof.

LOCATION: fully remote; home-country fully-remote; relocate outside the home country (US/EU/UK/SG/Canada); OR Middle East. Skip home-country-only hybrid/onsite.

SPEED: prioritize honest-fit senior/lead roles that can hire the user soon (home-country-remote or worldwide-remote allowing the user's country, real product companies). Then named-company remote contract. Then ME relocate senior mobile. Deprioritize FAANG onsite, new-grad roles, staffing mills, and stretch adjacent-skill roles for speed.

APPLY: keep applying honest-fit roles without a second yes. Never fake skills. Never put employer names in resume filenames. Do not rematch already-submitted applications. Personalized LinkedIn notes are quota-limited; replies on open threads are OK.

Do not pitch unfinished products (no sell email push, no founder DMs, no employer "buy this") until the user says they are good enough. Publish products on LinkedIn only when launched.

LinkedIn About is a professional lead profile, not a job-seeker pitch: ownership and hands-on technical work, no download/crash boasts, no gap story, no Open-to or country list.

TRACKING (jobs mail only): one Google Sheet. Columns: Date found, Job title, Company, Location, Workplace (Remote/Hybrid/Onsite), Salary, Job ID, Source URL, JD summary, Skills required, Study links (free docs/GFG/books/exercises per skill), Status (Applied / Skipped / Waiting / Closed), Applied date, Why applied or skipped, Action needed from the user. No duplicate rows (match on Job ID or URL). Update the sheet in place as you go. Drive cannot edit cells in place; replacement is create_file CSV.

EMAIL: send THREE emails every weekday, subject: hint + "grok bot" + task name.
A) Study: what to prepare from today's live JDs + top free resources (GFG, official docs, named books, exercises).
B) Jobs: do NOT write a long jobs essay. Mail the SAME Google Sheet link plus a short summary of what changed (found / applied / skipped) and any action the user must take.
C) Sell/pitch: finished systems the user can offer. Skip unfinished products. If nothing else is honestly shippable that week, skip mail C rather than pitching an unfinished product.

Check Gmail + LinkedIn jobs/messaging + GitHub (personal and orgs) each run. In chat, only ping if a reply, a must-apply blocker, or something only the user can do (captcha/login). Never invent jobs, salaries, or applications.

Fires on:
- cron `0 8 * * 1-5`

Ask the importing user for:
- Timezone
