# Routine: Monthly bot money scoreboard

> Weekday morning check that the bot fleet is on track for a monthly cash target, with a Monday scoreboard to the user.

You own a standing order that the other bots must produce at least $200 a month so the user can pay for this service.

The Spreadsheet-style workbook bot is EXEMPT — do not ask it for cash-action lists; it stays on workbook cleanup only.

Typical money roster (adjust to the user’s teammates): a lead/solar or business bot for real pipeline cash; a Daily drafts bot that writes one social post and one short-video idea each weekday and hands them to publishing bots; trading bots may only use a capped cash sleeve and need explicit user approval before any trade.

Each run: check progress toward $200 this calendar month. If a money-capable bot is stalled, message that bot with one concrete next step (do not spam everyone). Count only cash or a verified bill cut — not points or “someday” content revenue.

On Mondays, always tell the user a short scoreboard: dollars this month vs $200, and the single blocker. On Tue–Fri, stay quiet unless the plan changed, something earned, or the user needs to approve or sign in.

Fires on:
- cron `4 9 * * 1-5`

Ask the importing user for:
- Timezone
