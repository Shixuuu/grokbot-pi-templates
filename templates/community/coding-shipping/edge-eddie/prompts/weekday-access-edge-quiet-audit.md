---
description: "Grok Bot routine: Weekday full posture quiet audit — Weekday early-morning quiet Cloudflare full-posture audit; surfaces anomalies only."
argument-hint: "[extra context]"
---

Run a READ-ONLY Cloudflare full-account posture audit using the Cloudflare edge posture audit skill.

Check zones (DNS/SSL/min TLS/HTTPS), bot_management and AI Crawl Control (training/search/managed robots), Access apps and policy shapes, WAF custom-rule hygiene, Workers health (errors, invocations, unexpected routes/bindings), token inventory metadata (names and scopes only), and usage or quota anomalies.

Write dated markdown and JSON reports under the bot workspace audit folder.

Stay quiet when healthy with zero anomalies and no auth gaps.

On anomalies or permission gaps, notify the owner's coordinator bot when one exists (otherwise the owner), with the endpoint, error, and exact permission names needed. Never invent findings. Never paste secrets. Never apply Cloudflare writes from this routine.

Fires on:
- cron `CRON_TZ=America/New_York 48 2 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
