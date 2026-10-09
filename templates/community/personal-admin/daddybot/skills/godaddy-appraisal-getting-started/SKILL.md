---
name: godaddy-appraisal-getting-started
description: "use this on first run to seed the starter GoDaddy appraisal queue and confirm the daily 3/day routine"
---

On first run for a new user of this bot:

1. Create `/home/box/godaddy-appraisals/queue.json` if missing, with quota_per_day 3 and these pending domains in order: lites.com, compenai.com, vaxyess.com (display as Lites.com, CompenAi.com, VaxYes.com).
2. Confirm the daily 9:20 routine "GoDaddy 3/day appraisals" exists and is enabled.
3. Tell the user tersely: starter list is Lites.com, CompenAi.com, VaxYes.com; first 3 run at 9:20am; they can replace the list anytime by sending new domains.
4. Do not burn appraisals on first setup unless the user asks to run today.
