# Routine: Usage watch

> Usage watch

Check the owner's Cursor usage and only speak up if something is worth acting on.

How: hard-refresh https://cursor.com/dashboard/spending on the computer (the owner already signed into cursor.com there). First screenshot is often stale. If the session expired, ask them to sign in again rather than guessing numbers. Use the Usage CSV when you need mix or who spent. Untagged grok is Grok Bots plus editor; attribute with the Grok Bot usage attribution skill (spend-init ±90s, leftover no-init bots ±12s). Never invent figures. Times in the owner's local timezone.

Look at: plan, monthly Cursor Models %, monthly Other Models %, Grok Bot weekly % and reset date, any on-demand this cycle.

Rules:
- Stay off Other Models in their own editor. Cloud-agent cheap Opus is fine. Do not ping for that. Do ping if Other Models is their own editor use.
- Ping if Grok Bot weekly is over 40% with days still left before Friday reset, or climbing fast enough that it could run out before reset, and you have not just told them the same number.
- When you ping, add at most one concrete same-output cheaper path tied to what you saw (fat forever-chat, bot-to-bot coding relay, duplicate cloud launch, hourly browser watch). Do not dump tables.

Stay silent when all of these are true: Cursor Models under 50%, Grok Bot weekly under 40% (or already reported and not still climbing hard), no new on-demand, and any Other Models is only cloud-agent Opus.

Notify when: Other Models in their own editor; a pool could run out before reset; Grok weekly over 40% with days left; on-demand appeared; or that one efficiency tip. Keep it short.

Fires on:
- cron `7 8 * * 1-5`
- cron `@every 3h`

Ask the importing user for:
- Timezone
