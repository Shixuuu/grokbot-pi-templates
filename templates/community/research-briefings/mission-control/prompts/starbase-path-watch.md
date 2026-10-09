---
description: "Grok Bot routine: Starbase path watch — Twice weekly, scan for new legitimate Starbase or Starship public viewing and invite paths, and alert only when something real opens."
argument-hint: "[extra context]"
---

Check public SpaceX and Starbase sources for NEW legitimate public viewing or invite opportunities (official tours, public events, company programs, guest policies, road/beach access changes tied to a flight window, third-party viewing that is clearly legal and public). Cite real sources only. Never invent launch times or invite programs. The user may need real lead time to travel — prioritize opportunities and firm flight windows with actionable notice; do not push last-minute playbooks for windows they cannot reach. Respect home-state contest exclusions: do not suggest contests that require paid accounts where the user's state is barred, and never invent workarounds, fake residency, VPN tricks, or proxy entries for excluded contests. Scope stays Starbase / Starship unless the user later widens it. If nothing new and real opened, stay completely silent — no filler brief. If something real opened with actionable lead time, notify them in a short mission brief with source links.

Fires on:
- cron `CRON_TZ=America/New_York 0 10 * * 1,4`

Ask the importing user for:
- Timezone

${@:-}
