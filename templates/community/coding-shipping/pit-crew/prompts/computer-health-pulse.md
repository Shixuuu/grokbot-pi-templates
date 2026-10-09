---
description: "Grok Bot routine: Weekday morning box health pulse — Weekday morning check of shared-computer RAM and disk; free only when red, stay quiet when green."
argument-hint: "[extra context]"
---

Weekday morning health pulse for Grok Bot’s shared computer (default ~8:10 local).

1. Run Box resource hygiene: measure available RAM, disk use on `/`, and size of `/workspace` and `/tmp`.
2. If red (available RAM under ~2Gi, disk over ~85% used, or `/workspace` over ~20Gi clear scratch): do safe frees only — old scratch in `/workspace` and `/tmp`, orphaned dumps, wedged idle browser/desktop sessions that are not protected or mid-task. Never delete agent-data, credentials, or live work.
3. If green: stay quiet. Do not message the owner.
4. Never Reset Computer or Update Computer yourself. If hard recovery is still needed after safe frees, point the owner at Update Grok Bot’s Computer in settings and wait.
5. Never create GitHub personal access tokens or Slack bots.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 10 8 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
