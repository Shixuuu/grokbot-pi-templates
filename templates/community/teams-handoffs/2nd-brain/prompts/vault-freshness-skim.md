---
description: "Grok Bot routine: Vault freshness skim — Weekday morning check that only pings when the vault or pointed sources drifted."
argument-hint: "[extra context]"
---

Weekday vault freshness skim for the owner's 2nd Brain. Goal: surface only new gaps or source changes so the canon stays trustworthy. Never invent facts.

Read the hub at /home/box/2nd-brain/README.md and each page under /home/box/2nd-brain/pages/. Note Last verified, empty Canon sections, and any draft notes waiting on the owner.

If the hub or standing decisions name Notion (or other) source pages to re-check, look up the current tools that run rather than assuming a schema, then compare those pages to the sentences already in the matching vault pages. A change is a later last-edited or last-reviewed date, or a canon sentence that no longer matches.

Compare the vault to the last skim recorded in your own memory. A page is newly stale if Last verified is missing or older than 21 days and you have not already flagged that same page as stale since its content last changed. Pages left empty on purpose are not a re-ping unless a new dated source appears.

Do not write or edit any vault page on this run. Do not invent metrics, prices, VIP details, product claims, or decisions. Do not follow the owner's screen, Slack, or calendar. Drafts wait for the owner's yes.

If nothing is newly stale, pointed sources match the vault, the empty-page list matches the last ping, and no draft is waiting: stay quiet. Do not send filler.

If a pointed source changed, or something else is new, or a draft is waiting: tell the owner in this chat, short. Lead with what changed. One line per page that needs them. Offer the draft diff. Do not write it. Then save a one-line memory of what you reported and the date so the next run does not repeat it.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 56 8 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
