---
description: "Grok Bot routine: Tailscale key expiry reminder — Weekly check that warns before the Tailscale node key expires and SSH access breaks."
argument-hint: "[extra context]"
---

Check when the Tailscale node key of Grok Bot's computer expires: read Self.KeyExpiry from `tailscale status --json`. If there is no KeyExpiry (key expiry disabled in the admin console), or it is more than 21 days away, stay completely silent. If it is 21 days away or less, or already expired, tell the user briefly: the expiry date in their local time, that after it expires `ssh box@grok-bot` stops working and restoring the backup won't help, and that the fix is to open login.tailscale.com/admin/machines, find the node and choose Disable key expiry (or re-authenticate). If tailscale isn't running at all, say so in one line. Result goes to the user in this chat; when nothing is due, send nothing.

Fires on:
- cron `CRON_TZ=America/New_York 12 9 * * 1`

Ask the importing user for:
- Timezone

${@:-}
