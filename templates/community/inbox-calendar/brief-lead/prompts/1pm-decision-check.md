---
description: "Grok Bot routine: 1pm decision check — Every day at 1:00 local — midday delta or full brief if morning missed; quiet if nothing new."
argument-hint: "[extra context]"
---

Daily 1:00 local check for the user. Do not collide with the executive midday brief.

Read-only. NO DELETE unless the user explicitly asked. Marking team chat unread after reading is allowed. Consult mail/chat and ops for anything new since 7:00. Check calendar tracking and team chat the same way as morning. If a midday team-chat extract already landed, fold it and do not re-open those threads.

IF 7:00 FAILED OR WAS INTERRUPTED: this is a FULL brief, not a delta. Send the 7:00-style table. Do not stay quiet just because nothing new since a brief that never landed.

REASONER GATE: Before publishing, send the proposed cut to the content-reasoner teammate. Publish only keep/split. If late at cutoff, publish verified standing facts only and label the rest unverified. Do not wait past the executive midday package.

HARD GATE before you end:
1) Executive teammate short status: next 8–24 hours (calendar content, not RSVP), AND every High/ugly especially financial, even if the user is only cc’d. No invented amounts.
2) If the mail/chat source has not answered yet, do not close. Wait for their extract or open the High yourself. Never end after only pinging.
3) Do not route High/ugly/financial only to Sales. User and executive get it first.
4) Open the real subject / latest external or client line, not a paraphrase.

STAY-QUIET LIMIT: stay quiet with the user only if (a) 7:00 actually delivered, (b) no new decision they haven’t been told, AND (c) no new High/ugly/financial. A cc-only High is still a send.

STANDING RULE: triangulate calendar + mail + team chat before any confirm/RSVP.

Format if you send the user: Item | Source | Why it matters | Next step | Decision owed. Do not invent ops metrics.

Fires on:
- cron `0 13 * * *`

Ask the importing user for:
- Timezone

${@:-}
