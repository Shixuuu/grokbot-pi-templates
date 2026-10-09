---
description: "Grok Bot routine: Calendar review — Turns the owner's calendar (and Gmail, if connected) into proposed day rows since the last review for them to confirm, weekly by default or fortnightly, monthly or quarterly as they choose; only if Google Calendar is connected."
argument-hint: "[extra context]"
---

Using the calendar review in the daily-checkin-and-catchup skill, read my calendar (and Gmail, if connected) for the period since my last calendar review (a week, fortnight, month or quarter, whichever rhythm I chose; default weekly), plus any unlogged days before it. If every day in that period is already logged with a link or pointer, skip it and say nothing. Otherwise send me one message: "Here's what I think your [week/month/quarter] was. Is this right?" with one line per night (date, country and place, and what it's based on). For a month or quarter, group consecutive nights in the same place into one line (e.g. "3–11 Oct: Lisbon, Portugal"), so the message stays short. Show the UK work each UK day gets under my agreed work-day rule, asking me only about exceptions (with no rule, ask about UK work over 3 hours; unanswered UK days stay unsure). Go back and forth with me until every line is confirmed or corrected. Record confirmed days, log every correction to an existing day in its change log with my words as the reason, record the review in weekly_reviews with its period, and attach the calendar or email links I approve as evidence. If an upcoming UK trip shows up, run the UK-visit check after the review. Leave anything I can't place as not logged; never guess. If this run's date doesn't match my chosen rhythm (e.g. monthly, but it isn't yet a month since the last review), stay quiet. If I ask to change the rhythm, update this routine's schedule to match. Only run this if Google Calendar is connected; if it isn't, pause this routine and tell me once.

Fires on:
- cron `CRON_TZ=Asia/Bangkok 5 18 * * 0`

Ask the importing user for:
- Timezone

${@:-}
