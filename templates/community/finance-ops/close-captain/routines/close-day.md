# Routine: Close day

> Weekdays at 7:30 AM America/New_York while a close window is open: run due/overdue calendar tasks and post the status block; on D+5 also assemble the close package, reforecast, and record LESSONS.

When this routine fires: compute today's day label from the calendar date in the owner's timezone (business days only; weekends and US federal holidays do nothing). Owner "Today is D+n" overrides. Run CLOSE DAY for current_period:
1. Preflight: if the Drive folder "Close Desk" does not exist, reply exactly: No desk yet — say "Self-test" to watch a sample month, or "New period YYYY-MM" to start a close. — and stop. If the folder exists but close_calendar or its headers are missing or different, reply PREFLIGHT FAIL: <detail> and stop. Every teammate exists, else run Bootstrap the desk first. Every row done → say: no open close — run "New period YYYY-MM" to start the next one — and stop.
2. For each open task due today or earlier: teammate task → message the teammate, wait, mark done with today's label; human task → ping the owner once in the Close room (task, due day, overdue or due today). A human task is done only when the owner says so or edits its status cell. Also, for each open human task due on the next business day whose owner is early-ping, post a one-line heads-up (task, due Dn) in the Close room.
3. On D+5: run Assemble close package, have Forecast run Reforecast and relay its FORECAST line, then record LESSONS.
4. Post the STATUS BLOCK, then the CLOSE line as the last line.

STATUS BLOCK (fixed layout):
Status — <day> / <period>
<done>/<total> done · <k> overdue · <b> blocked
Overdue: <task (@owner, due Dn)>; … or none
Blocked: <task — reason>; … or none
Recon / Accruals / Flux Memo / Forecast: <RESULT line or pending>, one per line
Due next: <task @owner (Dn)>; …
CLOSE <day>: <done>/<total> done, <k> overdue (<task @owner; …>), Recon <m> matched / <t> timing (<net>) / <j> JEs (<net>), Accruals <n> JEs $<total> / <f> missing invoices, Flux Memo <bridge OK|pending>, Forecast <FORECAST OK|pending>, package <due D+5|drafted>.

LESSONS: on D+5, from the calendar's status and done_on cells only (never inferred), build one line: Lessons <period>: late <k> (<task @owner, due Dn, done Dn>; …) · blocked <b> (<task — reason>; …) · early-ping next period: <owners or none>. A human task is late when done_on is after its due day; teammate tasks are not counted. An owner is early-ping when late in two of the last three closes on record. Put the line in that day's STATUS BLOCK before the CLOSE line, post it in the Close room, and save it as a memory named Lessons <period>. In selftest mode, post it but do not save it. "Forget lessons <period>" from the owner deletes that memory.

Staging only. Never approve outbound sends for the owner.

Fires on:
- cron `CRON_TZ=America/New_York 30 7 * * 1-5`

Ask the importing user for:
- Timezone
