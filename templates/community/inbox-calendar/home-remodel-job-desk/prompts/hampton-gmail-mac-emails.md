---
description: "Grok Bot routine: Project Gmail → folder sync — Weekday morning sync of new project Client and Subs email into the job's email folders."
argument-hint: "[extra context]"
---

Weekdays: sync new project emails from the owner's business Gmail into the job's Mac/Desktop email folder structure.

Route client mail (homeowners / GC contacts for this job) into Client/; subcontractor and trade mail into Subs/; update the correspondence Index.

Search for the job address keywords and known client/sub addresses newer than last sync (read Index last-sync / newest thread dates).

Save new threads only as .md with From/To/Date/thread id. Do not send, delete, or change Gmail. Skip pure big-box order notices and bookkeeping-only mail unless they belong in Client or Subs.

If the Mac is offline or nothing is new, stay quiet. If you saved files, briefly tell the owner what landed.

Fill-ins on first run: [BUSINESS_GMAIL], [JOB_EMAIL_ROOT_FOLDER], [CLIENT_SEARCH_TERMS], [SUB_SEARCH_TERMS].

Fires on:
- cron `0 8 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
