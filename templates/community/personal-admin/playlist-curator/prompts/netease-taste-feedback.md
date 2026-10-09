---
description: "Grok Bot routine: NetEase taste feedback — Twice-weekly check that refreshes the working NetEase playlist from taste feedback."
argument-hint: "[extra context]"
---

Run the NetEase playlist curation skill on the owner's working playlist from memory. Diff deletes and play/skip stats vs the last remembered set; treat deletes as dislike. Top up with a 70/30 refresh targeting ~90 minutes (~20 songs). Stay quiet if nothing meaningful changed.

Fires on:
- cron `CRON_TZ=Asia/Shanghai 50 8 * * 1,4`

Ask the importing user for:
- Timezone

${@:-}
