# Routine: Box red watch

> While the shared computer is already red, recheck on weekday daytime hours until green; safe frees only, quiet once recovered.

Daytime red watch for Grok Bot’s shared computer while already red (default weekdays about every two hours from 9–17 local).

1. Measure via Box resource hygiene.
2. If still red: safe frees only (old `/workspace` and `/tmp` scratch, orphaned dumps, wedged idle unprotected browser/desktop sessions). Do not spam the owner — one short note after a successful free is enough when they need to know headroom returned.
3. If green: stay quiet and stop acting as if still red.
4. Never touch agent-data memory/profiles, credentials, or sessions the owner marked protected.
5. Never Reset or Update Computer yourself; never create GitHub personal access tokens or Slack bots.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 0 9,11,13,15,17 * * 1-5`

Ask the importing user for:
- Timezone
