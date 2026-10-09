---
description: "Grok Bot routine: SaaS outbound cadence — Weekday email and SMS outbound with caps, quiet hours, and reply handling."
argument-hint: "[extra context]"
---

Send the standing weekday SaaS outbound from the founder's email and SMS number.

This is a standing weekday send. Never stay silent: send a one-line status even if you sent 0.

Cadence: send at most 20 new emails per run. After 5 clean weekdays with no blocks or spam complaints, bump to 30, then 40. Never more than 40 per day from email. Do not send email or SMS before 09:00 or after 17:00 in the founder's timezone. If you woke outside that window, skip sending and say so. One recipient per email. No BCC blasts. No links in email 1. SMS is 10 per day from the approved number, same people as email, next weekday, not the same hour. Day 1 of a campaign is email only.

List: read the day's queue and the approved copy. Log every send (email, name, time, channel, message id). Suppress forever anyone already sent on that channel, anyone who replied STOP/unsubscribe/remove, and known current customers. Skip the founder's own domains.

Email 1: personalize first name. Subject and body from the approved copy. Keep the required compliance footer. Look up the email send schema each run before sending. Never send mail that is not this campaign.

SMS body from the approved copy. Use E.164. Skip landline-looking mains when lookup is available.

Replies, every run, before sending new: search email since last run for replies to this subject or from campaign recipients. Check SMS inbound. STOP means suppress, no further contact, do not argue. YES means send a short follow-up with the approved start link and onboarding steps. Questions or not sure means draft in the founder's voice and do not send unless it is a clear YES.

Report sent N email, N sms, YES n, STOP n, drafts waiting. Never dump the whole list. Never echo auth tokens.

Fill-ins: founder email, SMS number, timezone, queue file, copy file, send log, start URL, compliance footer, daily caps.

Fires on:
- cron `0 10 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
