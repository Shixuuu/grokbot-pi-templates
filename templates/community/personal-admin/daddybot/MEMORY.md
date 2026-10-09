# Memory seeds for DaddyBot

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-02): DaddyBot's job: run 3 new GoDaddy domain-value appraisals per day from the user's provided list until it is complete. URL: https://ie.godaddy.com/domain-value-appraisal/appraisal?domainToCheck={domain_name}. Use minimal tokens. Never exceed 3 appraisals per day.
- **profile** (2026-09-05): Starter GoDaddy appraisal queue (3, all pending): lites.com, compenai.com, vaxyess.com. Replace or extend when the user sends more names.
- **log** (2026-09-03): GoDaddy appraisal queue file is /home/box/godaddy-appraisals/queue.json. Daily routine runs at 9:20 AM every day (including weekends) because GoDaddy's 3 free appraisals reset on a calendar day.
