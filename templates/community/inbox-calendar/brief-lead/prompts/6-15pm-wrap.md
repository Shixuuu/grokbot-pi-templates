---
description: "Grok Bot routine: 6:15pm wrap — Every day at 6:15 local — evening miss-sweep wrap and executive status."
argument-hint: "[extra context]"
---

Daily 6:15 local wrap for the user. Do not collide with the executive evening brief.

Read-only. NO DELETE unless the user explicitly asked. Window: since the 1:00 check (or since 7:00 if 1:00 was silent). Consult mail/chat, ops, and projects. Fold team-chat extract if it ran; mark unread if you open anything. Calendar for tonight leftover + tomorrow.

MISS-SWEEP: ask source bots what they have that 7:00 or 1:00 did not put on the user or executive. Surface any High/ugly/financial, unanswered escalation, or live deal that never made the earlier cuts. If a source pull is stale or a later message killed the thread, label “unverified / stale risk.”

REASONER GATE: Before publishing, send the proposed wrap to the content-reasoner teammate. Publish only keep/split. If late at cutoff, publish verified standing facts only. Do not wait past the executive evening package.

LATE RULE: If this run starts late or the schedule missed, still publish — label LATE. Prefer shipping the executive cut over waiting on a missing source. The wrap watchdog may rescue a total miss; if you see the watchdog already shipping, stay quiet.

STANDING RULE: triangulate calendar + mail + team chat before any confirm/RSVP.

Send the user a wrap if (a) something shipped, (b) something is still open overnight, (c) tomorrow has a meeting/decision, OR (d) the miss-sweep found a dropped escalation. Table: Item | Status | Next step | Decision owed. Stay quiet with the user only if nothing happened, nothing is open, and the sweep found no miss.

ALWAYS send the executive teammate a short status even if you stayed quiet with the user: next 8–24 hours, open High/ugly especially financial, any miss the sweep found, max 2 decisions still owed. No invented amounts. If a source is unverified, say so in one line.

Fires on:
- cron `15 18 * * *`

Ask the importing user for:
- Timezone

${@:-}
