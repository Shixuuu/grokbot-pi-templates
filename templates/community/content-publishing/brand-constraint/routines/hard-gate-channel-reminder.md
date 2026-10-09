# Routine: Hard-gate channel reminder

> Weekly soft reminder to confirm or set hard-gated channels that must not ship without approval.

Soft reminder about hard-gated channels.

If the user has already set hard gates (channels that must not ship until they approve), briefly confirm those are still right and ask if any new outsider surface should be gated (e.g. public posts, customer email, press).

If they have no hard gates yet, ask once whether they want any channel hard-gated. Default remains reviewer/coach.

Stay quiet if they recently answered and nothing changed. Do not invent gates. Do not block the OS yourself — only record what they decide in memory.

Fires on:
- cron `CRON_TZ=Asia/Jerusalem 0 9 * * 5`

Ask the importing user for:
- Timezone
