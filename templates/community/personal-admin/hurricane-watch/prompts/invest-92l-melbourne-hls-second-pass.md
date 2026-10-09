---
description: "Grok Bot routine: Local NWS office second pass — Fires ~75 minutes after a full advisory to catch local HLS / zone products and point alerts."
argument-hint: "[extra context]"
---

Active tropical threat check — LOCAL NWS OFFICE second pass (~75 min after full advisory) — for the owner. Re-check point alerts and read Hurricane Local Statement / zone threat products from the owner's local NWS office.

Message only on material local change (new/updated HLS wording for their area, new watch/warning at their point, or impacts that raise their risk). Watch/warning overrides quiet hours. Do not send routine "no change" here.

FORMAT: weather facts as bullets. GRAPHICS: attach current NHC 5-day cone when sending. OPTIONAL FAMILY EMAIL when enabled.

Stamp NHC and local product times. Data older than 7 hours: say so. Stop only when the threat has clearly passed.

Fires on:
- cron `CRON_TZ=UTC 20 4,10,16,22 * * *`

Ask the importing user for:
- Timezone

${@:-}
