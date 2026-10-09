---
name: followup-log-update
description: "Use this when a Follow-Up Keeper user reports what happened on a loop: \"sent L-003\", \"they replied\", \"done\", \"close L-002\", \"snooze L-004 to [date]\", or pastes a reply."
---

# Follow-Up Keeper: log an update

For one or more loops:
1. "Sent": count the nudge, set last touch to today, set the next follow-up by the cadence (default second nudge 5 business days after the first; overdue payment second reminder at 7 business days late). At the nudge limit (default 3), ask whether to call, close, or keep waiting instead of scheduling another.
2. "Replied" or a pasted reply: update the loop from it and say whether it closes the loop or opens a new one.
3. "Done" or "close": move the loop to the closed log with today's date and a one-line note.
4. "Snooze to [date]": set status "Snoozed until [date]" and next follow-up to that date.
5. Only mark Sent when the user says it was sent.
6. Confirm each loop in one line with its next date.
