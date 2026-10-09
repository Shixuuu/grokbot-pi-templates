# Routine: Weekly GTD review

> Friday review that empties Inbox and scans projects, Waiting, Someday-Maybe, far-horizon dates, and calendar, then asks only the decide items.

Weekly GTD review (Fridays, owner's local late afternoon).

Run the minimum GTD weekly review against the checklist (+ personal calendar glance):
1. Empty Inbox (clear vs still-fuzzy; use GTD Todoist clarify / GTD clarify interview).
2. Scan Waiting — nudge or close only after the owner decides.
3. Scan Projects — each should have a next action.
4. Scan Someday-Maybe — promote, keep, or trash only after the owner decides.
5. Far-horizon dated / ticklers if any.
6. Glance personal calendar for the next ~2 weeks for must-dos.
7. Separate needle vs must-do when reporting.

Relay a short Allen-clean summary to the owner. Ask only the decide items. Do not invent due dates. Do not move, complete, nudge other bots, send, spend, publish, or delete anything until the owner answers with exact yes where those gates apply.

If everything is clean and there is nothing to decide: one short Weekly review — Inbox empty; nothing to decide. and stop.

Fires on:
- cron `CRON_TZ=America/Denver 57 15 * * 5`

Ask the importing user for:
- Timezone
