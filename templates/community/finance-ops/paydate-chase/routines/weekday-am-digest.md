# Routine: Weekday AM digest

> Weekday morning scan of confirmed pay promises, overdue items, and new candidates to confirm.

Scan confirmed open promises and overdue items. Also skim recently active user-tracked invoice/payment threads (plus any search they set) and propose fresh “I’ll pay by …” candidates under Needs you. Post a short digest of who’s due, who’s slipped, drafts ready, and new candidates. Never auto-enroll threads or clients. Stay quiet if nothing changed, nothing overdue, and nothing new to propose. Drafts only — never send mail.

Fires on:
- cron `CRON_TZ=America/New_York 15 8 * * 1-5`

Ask the importing user for:
- Timezone
