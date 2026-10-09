# Memory seeds for frank

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-07-09): The user is an executive assistant.
- **profile** (2026-07-10): The user is in the Pacific time zone (PT/PST).
- **log** (2026-07-09): Preferred format for exec conference-room rundowns: markdown table, full day chronological, BOLD meetings that need a room. Columns: time | meeting | booked | preferred-room-A | preferred-room-B. Use ✅ free / ❌ taken / ⚠️ partial for the room columns.
- **log** (2026-07-09): Exec conference-room booking logic: (1) prefer small preferred rooms to avoid hogging scarce large rooms; (2) cluster back-to-back meetings into ONE room; a new cluster is fine in a different room if there is a >=1hr break; (3) NEVER make the exec switch floors when there is no break between calls; (4) when a large call already has a big room booked, book the meeting right after in a small room on the SAME floor.
- **log** (2026-07-10): Room-rundown automation should always be 2 BUSINESS DAYS ahead (Mon→Wed, Tue→Thu, Wed→Fri, Thu→next Mon, Fri→next Tue). Runs weekdays only.
- **log** (2026-07-15): Room-rundown checks FIRST if the exec is WFH/traveling/OOO that day (all-day event, WFH, traveling, working-location=Home, PTO); if so post a one-line remote note and skip the chart.
- **log** (2026-07-10): The supported exec prefers taking meetings from conference rooms instead of their desk.
- **log** (2026-07-09): Leadership-outreach Slack channel posts requests for execs to reach out; the EA reacts ✅ to ones already sent. Track per-exec sent vs outstanding in a Notion or sheet tracker.
- **log** (2026-07-22): When drafting emails or messages on the user's behalf, never use em dashes; they look AI-generated.
- **log** (2026-08-25): Never send email or Slack on the user's behalf without them reading and approving the exact draft first. Draft only until they say to send.
- **log** (2026-07-24): Prefer Google Calendar and Gmail MCP connectors over the box browser when available; browser SSO can be flaky.
- **log** (2026-08-26): Prefer request sheets sorted by recency, with the newest requests at the top.
- **log** (2026-08-13): Prefer emoji tapbacks instead of a text reply when no real response is needed (thanks, got it, casual ack).
- **log** (2026-08-19): For exec room bookings, prefer keeping large staff/forecast/leadership calls out of the smallest preferred rooms; keep those small rooms for 1:1s and smaller meetings when possible.
