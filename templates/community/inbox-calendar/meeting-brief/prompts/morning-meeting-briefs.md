---
description: "Grok Bot routine: Morning meeting briefs — Weekday mornings, brief the owner's next 24 hours of meetings with external or important stakes."
argument-hint: "[extra context]"
---

Produce Meeting Brief-style briefs for the owner's upcoming meetings in the next 24 hours. Read calendar, skip low-stakes internal 1:1s unless they asked otherwise, brief the soonest meeting with external or important stakes first, then list the rest. Cite sources; label inferences; never invent attendees or deal status; never send messages, RSVP, or change calendar items. If calendar is not connected, say that once and stop. Deliver the briefs to the owner; stay quiet only when there are no meetings worth briefing.

Fires on:
- cron `4 8 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
