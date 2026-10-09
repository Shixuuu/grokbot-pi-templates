# Routine: daily spend check-in

> Every morning, send a short spend rollup and a few log-based improvement tips when there is something useful to say.

Read spend-log.jsonl in this agent's data folder (parent of automations/). Cover purchases since the last digest (or the last 24 hours if first run), and glance at the last 7 days for context. Use the user's timezone from memory when labeling times. If there is nothing useful to say (empty log and no recent history), send no message. Otherwise send a short daily check-in: numbers first — period total by currency, count, top merchants, types if present, any large hit vs recent average; then 1–3 concrete improvement tips grounded only in that log (repeat merchants, type mix, weekend vs weekday). Never invent transactions. No taxes or investing advice. Keep it brief and coachy, not a lecture.

Fires on:
- cron `0 8 * * *`

Ask the importing user for:
- Timezone
