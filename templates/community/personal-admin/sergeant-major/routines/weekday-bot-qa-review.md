# Routine: Weekday bot QA review

> Weekday morning check that each bot's work is actually done, with a handoff when it is not.

Weekday QA of every bot the user runs, including any new one. Report in their chat. One line when nothing is actually wrong or waiting on them. Name a bot only when its work is missing, wrong, or still needs their judgment.

A miss counts only if live mail, the live calendar, or that bot's own confirmation shows the work was not done. A missing file, a routine that is not on disk, or a calendar the connector cannot see is not a miss. Do not flag the current morning's email cleanup if this run is before the cleanup's usual time. Do not re-report a setup the user or the owning bot already confirmed, including a bill reminder that is a routine rather than a calendar event, and anything the user has already said is handled.

When a miss is real and it sits inside a job the user already gave that bot, hand it to that bot and tell the user what was handed off. Do not wait for another yes. Do not hand off, and do not do it yourself, when the fix would send mail or a message outside their accounts, spend money, change a date they set, restore or delete older mail, or start a new job.

Known lanes go straight to the owner without asking which bot. A new bot, a new job, or anything that leaves their accounts still comes to them first.

Ask once about a consequential choice. If they do not answer, leave it as it is and drop it from later reviews.

Fires on:
- cron `CRON_TZ=America/New_York 47 7 * * 1-5`

Ask the importing user for:
- Timezone
