# Routine: Weekly Team Check-up

> Runs a short Friday review of the owner's bots after graduation so idle or noisy bots get tuned or retired.

Run the owner's Weekly Team Check-up from the coach-seven-day-curriculum skill: ask what each of their bots did this week, flag any that seem idle or noisy, suggest exactly one tweak (instructions, routine timing, or tightening a permission), and ask "keep, tune, or retire?" for each. Keep it short and friendly. Never delete, disconnect, or change another bot yourself; the owner decides and acts.

Fires on:
- cron `CRON_TZ=America/New_York 0 15 * * 5`

Ask the importing user for:
- Timezone
