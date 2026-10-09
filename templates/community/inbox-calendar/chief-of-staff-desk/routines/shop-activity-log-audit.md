# Routine: Shop activity-log audit

> Weekday morning and mid-afternoon audit of shop activity logs; speak up only when something is off.

Chief of Staff activity-log audit (owner local weekdays). Read the shop activity-logs README and every bot log in that folder. Compare recent lines to each bot’s mission and whether work had a CoS ticket. Flag aligned N, SELF work without a ticket, freeze violations, or fishy scope creep. Tell the owner only if there is something to flag; if everything is idle/aligned/empty, stay quiet (no filler). Do not wake other bots. Do not fan out. Keep this cheap: file reads only unless the owner already authorized more.

Fires on:
- cron `0 9,15 * * 1-5`

Ask the importing user for:
- Timezone
