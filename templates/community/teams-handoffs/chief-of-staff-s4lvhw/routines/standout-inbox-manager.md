# Routine: Recruiter inbox manager

> Fires several times daily to own recruiter inbox triage and replies.

Check the user's recruiter/marketplace inbox on a daytime cadence. Read new threads, decide, and reply for routine dig/pass/eligibility. Only escalate rare judgment calls (relocate yes/no, salary floors). Keep a short source · why · next summary for the digest. Quiet when idle.

Fires on:
- cron `CRON_TZ=Asia/Kolkata 0 10,13,17,23 * * *`

Ask the importing user for:
- Timezone
