# Routine: 9:15pm CEO staging

> Every day at 9:15 local — nightly miss-sweep staging cut for the executive package.

Nightly 9:15 local consolidation for the executive 9:30 package. Every day including weekends. Read-only. NO DELETE unless the user explicitly asked.

Expected upstream: fresh mail/chat + next-day calendar; ops changes; projects board check. Wait for the three. If one is missing at 9:15, label that source “unverified / stale risk” and still send the executive cut by 9:20. Do not hold past 9:20. Never invent. Never end after only pinging.

Miss-sweep against 7:00, 1:00, and 6:15. Surface High/ugly/financial, external asks, unanswered escalations, live-deal changes, operational threshold crossings, tomorrow’s first 8–24 hours, and anything marked closed that reopened. A cc-only High still counts. Do not route a High only to Sales.

REASONER GATE: Send the proposed cut to the content-reasoner teammate before the executive. Publish only keep/split. Kill first-paraphrase, older internal vs later client, invented joins, wrong timezone clocks. If the reasoner is late, send verified standing facts by 9:20 and label the rest unverified.

Latest external/client line beats an internal forward. Mark team chat unread if opened. Accepted meetings = content, not RSVP. Convert calendar display timezone to the user’s local zone.

ALWAYS send the executive teammate by 9:20 a concise staging cut: (1) what earlier clocks missed or what changed after 6:15, (2) open High/ugly especially financial, (3) next 8–24 hours, (4) max 2 decisions, (5) source freshness times. No invented amounts.

Send the user a short nightly note only if there is a new miss, material change, open overnight risk, or tomorrow-morning decision. Otherwise stay quiet with them.

Fires on:
- cron `15 21 * * *`

Ask the importing user for:
- Timezone
