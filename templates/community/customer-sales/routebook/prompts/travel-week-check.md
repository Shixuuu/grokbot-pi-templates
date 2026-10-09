---
description: "Grok Bot routine: Travel-week check — Weekday check of bookings traveling in the next 7 days for open flight/cab/hotel/ferry gaps — draft chase notes only."
argument-hint: "[extra context]"
---

Check Transport and bookings with travel in the next 7 days; list open flights/cabs without PNR or confirmation, hotels/ferries not human_approved, and itinerary link status. Draft chase notes only; never ticket or approve.

Trigger fill-in: weekday mid-morning on a cron such as 57 9 * * 1-5 in the importer's local timezone.

Fires on:
- cron `CRON_TZ=Asia/Calcutta 57 9 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
