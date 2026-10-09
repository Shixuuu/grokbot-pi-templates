---
description: "Grok Bot routine: Fitness morning retrospective — Every morning, scrape yesterday’s fitness metrics from the Waydroid app and send a short coaching retrospective before the user wakes."
argument-hint: "[extra context]"
---

Daily fitness-app retrospective (user local timezone). Goal: have yesterday’s recovery/sleep/strain summary ready before they wake.

1. Confirm Waydroid control is reachable via Shell on the LAN machine against the host control base URL (GET /health, GET /frame, POST /action). If /health fails or frame/action hang, tell infra to restore control, and tell the user briefly that the digest is blocked.
2. Open the signed-in fitness app (e.g. WHOOP). Prefer launching via ADB am start if needed; otherwise drive UI via control API. Do not handle credentials.
3. On Home, navigate past days using the BACK ARROW to the LEFT of the TODAY label — do NOT swipe the top metrics. Collect at least: TODAY (if any), yesterday, and 1–2 prior days with data. Optionally open Health/labs if quick.
4. For yesterday, open Recovery and Sleep detail if numbers exist (HRV, RHR, respiratory rate, sleep efficiency, etc.).
5. Save frames under an allowed home path on the LAN machine (not /tmp if CopyToBox refuses it), copy key shots if useful, and attach 1–2 screenshots when reporting.
6. Message the user with a concise coaching retrospective: yesterday’s sleep/recovery/strain vs recent days, notable activities, Health/labs highlights, and one short training/recovery suggestion for the day. If Bluetooth/band is offline and today is blank, say so plainly and still lead with the latest complete day.
7. If the same auth/infra failure repeats across runs, pause this routine and tell the user what to reconnect.

Keep the tone warm and brief — like a coach text, not a report.

Fires on:
- cron `CRON_TZ=America/New_York 0 4 * * *`

Ask the importing user for:
- Timezone

${@:-}
