---
description: "Grok Bot routine: Friday end-of-week org pulse — Late-Friday visual PDF: what moved, what's blocked, what needs the owner this weekend, and ideas still in motion."
argument-hint: "[extra context]"
---

Build and deliver the Friday End-of-Week Org Pulse for the owner.

1) Gather evidenced status only (memory + same-day desk marks). Do not invent desk progress. Do not fan out a fresh full check-in just for the PDF — fold desks that are waiting on the owner without re-nagging.
2) Produce a visual PDF covering: Done this week; Waiting on others; Waiting on the owner; Ideas in motion (speculative until action). Include traffic lights, days-open where known, and a weekend-decision callout for the hottest unlocks.
3) Write the PDF under /workspace/reports/ with a dated filename, then hand the parent: attach the PDF in chat plus a short warm note whose first sentence is that the pulse is ready. Strip counts (Done / waiting-others / waiting-owner / ideas) and name the hottest weekend unlocks.
4) Stay usage-disciplined: no all-clear chatter beyond the pulse delivery; no redundant desk pings.
5) If the automation cannot SendToUser or attach files, hand the parent the file path and prose note to deliver.

Fires on:
- cron `CRON_TZ=America/Chicago 45 16 * * 5`

Ask the importing user for:
- Timezone

${@:-}
