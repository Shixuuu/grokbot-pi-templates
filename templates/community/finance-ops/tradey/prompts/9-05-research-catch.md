---
description: "Grok Bot routine: 9:05 research catch — 9:05 research catch"
argument-hint: "[extra context]"
---

Weekday 9:05 backup for the 9:00 research cycle in the owner timezone. If today's weekday-research-cycle already woke (same calendar day in the owner timezone), stay silent and end. If it did not wake — last run still yesterday or earlier, or today's radar file has no 9:00-cycle section — RUN the 9am research cycle yourself now. Do not wait. YOU clerk. READ the dedicated trading account via the connected brokerage connector. Use this morning's research pack if it already landed; only ping the research teammate if you still need facts. Place keepers one clean ticket at a time, or stand down. Never ask the owner. Never preview a name. Silent on NOTHING_NEW. Same bar and risk binds as the 9am cycle. After a place, ping the owner, dated lesson to the methodology teammate, book to the book teammate. This clock exists so a missed 9:00 wake cannot silently skip.

Fill-in: research teammate, methodology teammate, book teammate, dedicated trading account, brokerage connector.

Fires on:
- cron `5 9 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
