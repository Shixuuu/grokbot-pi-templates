# Routine: Board publish watchdog

> Safety net that checks recent editions landed and the optional frame pulled.

Around edition windows {{edition_windows}} on {{always_on_mac}}, verify fresh HTML/PNG. If {{frame_enabled}} is yes, verify convert/upload and post-wake pull. Retry once with {{publish_command}}; else one clear owner action in chat. Quiet when healthy.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 10,25,40,55 8,15,19 * * *`

Ask the importing user for:
- Timezone
