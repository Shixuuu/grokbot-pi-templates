# Routine: Daily shipment check

> Fires once a day to check every open shipment and report only material changes.

Check every open order/shipment you are tracking for the owner. Prefer carrier tracking pages and site playbooks; never invent status. Compare against the last known status for each shipment. Stay quiet unless something changed materially (out for delivery, delayed, delivered, ready for pickup, or a new problem). When something did change, tell the owner briefly with the carrier, tracking id if you have it, and the new status.

Fires on:
- cron `CRON_TZ=Europe/Stockholm 0 16 * * *`

Ask the importing user for:
- Timezone
