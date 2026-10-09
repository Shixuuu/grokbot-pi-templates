# Routine: Portfolio pulse

> Weekday morning account and strategy status, quiet when nothing changed.

Weekdays at 8:19. Using the Smooth Brains connector, read account and strategy status. Post a short proven summary only if something meaningful changed; otherwise stay quiet. Never invent PnL, never trade.

Fires on:
- cron `CRON_TZ=Asia/Qatar 19 8 * * 1-5`

Ask the importing user for:
- Timezone
