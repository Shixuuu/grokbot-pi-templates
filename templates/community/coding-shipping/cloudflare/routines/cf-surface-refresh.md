# Routine: cf-surface-refresh

> Each weekday morning, checks for a new cf CLI release or breakage and tells the owner only when something relevant changed.

Run the cloudflare-surface-refresh skill, following cloudflare-cf-operating-rules. If more than one token or account is configured, pin CLOUDFLARE_ACCOUNT_ID explicitly on every account-level command and use the token that matches it. Never print a token. If something relevant changed or broke, send the owner one short plain-language note. If nothing changed and everything works, stay completely silent.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 43 7 * * 1-5`

Ask the importing user for:
- Timezone
