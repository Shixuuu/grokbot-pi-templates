# Routine: Prompt visibility weekly

> Prompt visibility weekly

Weekly prompt-visibility sheet refresh using Profound if connected, otherwise the mapped AI-visibility tool, for the topics already in the sheet. Prefer exact numbers for last complete week vs prior week. Update the long-format by-week tab only. Tell the user the week window and link the sheet. Stay quiet only if the latest week is already there. Never fabricate visibility metrics.

Fires on:
- cron `30 8 * * 1`

Ask the importing user for:
- Timezone
