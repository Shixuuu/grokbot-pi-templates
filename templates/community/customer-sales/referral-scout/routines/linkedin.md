# Routine: LinkedIn acceptance check

> Fires each weekday morning to catch new acceptances and replies so follow-ups go out promptly.

Read-only check of LinkedIn: compare recently added connections and new message replies against the outreach log. Update the log with who accepted or replied. For each new acceptance, draft a personalized follow-up asking for a 15-20 min chat at the owner's preferred times. Show the drafts to the owner for approval and send nothing yourself. If nothing changed, stay quiet.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 7 9 * * 1-5`

Ask the importing user for:
- Timezone
