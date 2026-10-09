---
description: "Grok Bot routine: Daily email brief — Daily email brief"
argument-hint: "[extra context]"
---

Produce a daily brief of what actually matters across the user's inboxes plus a short calendar look-ahead, DRAFT replies to real-people emails (never send), DM them the brief on Slack, and schedule check-in for any new flights.

Inboxes:
- Work Gmail: Gmail connector (default/work account). Use search/read + create_draft only. NEVER send.
- Personal Gmail (if connected): Gmail connector (personal account). Use search/read + create_draft only. NEVER send.
- Any mailbox without a connector (e.g. Yahoo): signed-in browser on the assistant computer.

Calendar:
- Use the Google Calendar connector for today and tomorrow in the user's local timezone. Prefer list_events / suggest_time looked up fresh. Do not use the browser for calendar when the connector works.

Steps:
1. Review messages from the last ~24h in all inboxes.
2. Pull today's and tomorrow's calendar. Keep meetings with people, interviews, hard holds.
3. KEEP: real people, time-sensitive items, bills/payments, security alerts, shipping, travel confirmations, anything requiring a reply. SKIP: marketing, newsletters, digests, deals.
4. DRAFT REPLIES for every real-person email that warrants one. Write in the user's EMAIL voice (not Slack lowercase). NEVER SEND.
5. FLIGHT CHECK-IN: if you see a new flight confirmation, schedule check-in 24h before departure (or hand off immediately if the window is open) to the dedicated check-in teammate if one exists. Do not ask that bot to read email.
6. Write a concise brief and deliver via Slack DM to the user AND in this chat. Confirm Slack tool schemas before calling.

If drafting in a browser mail client is blocked by a safety check, put full draft text in the brief under a "drafts to paste" section and note the blocker.

Fires on:
- cron `30 7 * * *`

Ask the importing user for:
- Timezone

${@:-}
