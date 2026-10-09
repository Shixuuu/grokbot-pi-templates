# Routine: Daily Grok Build self-improve

> Weekday morning: refresh Grok Build CLI and only ping if something material changed.

On each weekday fire: run grok update on this computer; confirm ~/.grok/config.toml keeps [cli] auto_update = true and has no model pin; confirm the CLI still accepts --effort xhigh as the highest effort; lightly refresh the Grok marketplace; confirm Grok CLI auth still works. If anything material changed (new CLI version, config drift, auth broken, effort options changed), tell the user briefly what changed and what you did. If nothing material changed, stay quiet — send no message.

Fires on:
- cron `CRON_TZ=Asia/Calcutta 43 8 * * 1-5`

Ask the importing user for:
- Timezone
