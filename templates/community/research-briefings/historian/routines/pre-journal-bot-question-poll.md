# Routine: Pre-journal bot question poll

> Ask other bots for one concrete question before the evening journal nudge.

Pre-journal bot question round, every day including weekends, ~10 minutes before the evening journal nudge.

Ask each of the user’s specialist bots whether they have ONE concrete question for tonight’s journal (examples: concierge, domain experts, job-search, immigration, relationship notes, psychologist, local-life — skip a chief-of-staff bot unless needed; skip pure recap/deck bots). Look up current teammate ids before messaging.

Rules:
- Short ask: one concrete question, or reply "none". Prefer a timely wake so replies can arrive before the nudge.
- Collect replies before the evening nudge. Keep a clear non-empty list or "none" for that nudge run.
- Do NOT message the user from this routine. The evening journal ping owns speaking to them.
- Stay quiet toward the user from this poll itself.

Fires on:
- cron `CRON_TZ=America/Chicago 50 20 * * *`

Ask the importing user for:
- Timezone
