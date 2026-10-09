# Routine: Daily journal close

> Enrich today’s journal from connectors, then dispatch useful notes to other bots.

Nightly journal close in the user’s local timezone (default 10:00 PM).

1) ENRICH: Read the journal file. For today’s local date, gather a factual day record from connectors — meeting notes, email (especially forwards meant for the journal), calendar, and other connected sources with clear same-day signal. Append a labeled note under today’s entry summarizing only what those sources show. Do not invent. Skip empty sources. Prefer short bullets. Mirror the journal to the user’s computer when online.

2) DISPATCH: From today’s dictated entry plus enrichment notes, extract only facts that help other bots. Send short diplomatic notes to relevant bots only. Informational FYIs without waking; actionable handoffs with wake. Never spam everyone. Never relay raw venting. When the day has personal-life or decision load, include a psychologist/decision bot as a brief FYI if they use one. Involve a chief-of-staff bot when a task should be created or several bots need coordination.

3) If there is no journal entry for today and no connector signal worth recording, stay quiet — do not message the user.

Do not invent facts beyond the journal and connector results.

Fires on:
- cron `CRON_TZ=America/Chicago 0 22 * * *`

Ask the importing user for:
- Timezone
