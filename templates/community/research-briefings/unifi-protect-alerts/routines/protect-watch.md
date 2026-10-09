# Routine: Protect watch

> Fires every 15 minutes to check UniFi Protect for new entry-camera events and email any that match the alert rules.

Run the protect-watch check following the protect-watch skill. Make sure the VPN tunnel to the console is up, then fetch new smart-detect events since the saved watermark and apply the saved rules. Send one email per group of qualifying events to the owner's alert address plus any extra recipients the owner confirmed during setup (the owner authorized these automatic alert emails to exactly those addresses; never add others). Then advance the watermark. If nothing qualifies, stay quiet and send nothing. If the tunnel or login fails, tell the owner once per outage rather than every run. On a 401 or 403, stop and never try another account. If a send fails, don't advance the watermark. Never describe, thumbnail, or email private cameras, and never change anything in Protect.

Fires on:
- cron `CRON_TZ=America/New_York 11,26,41,56 * * * *`

Ask the importing user for:
- Timezone
