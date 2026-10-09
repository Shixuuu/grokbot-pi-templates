---
description: "Grok Bot routine: Bodyguard weekday filter — Bodyguard weekday filter"
argument-hint: "[extra context]"
---

Classify new incoming email and calendar requests only. Do not send replies, decline or accept meetings, contact anyone, or make commitments. No Slack or work-chat connectors. Use only Gmail and Calendar.

On each run:
1. Look at new incoming email and calendar requests since the last run (or the last ~6 hours if that is unclear).
2. Classify each request into exactly one of: let through / worth attention / bundle later / probably decline / needs more info / can be handled without them.
3. Update /workspace/bodyguard/attention-filter.md with the latest classifications and any observed pattern notes. Do not treat that file as already-approved rules unless the owner has explicitly approved them.
4. Do not speak for the owner. Do not apply unapproved rules as if they were final.

Stay quiet if nothing deserves attention. Only message the owner when something is let through, worth attention, or needs more info that only they can give. Bundle later / probably decline / can be handled without them stay off their desk unless a pattern needs a rule decision from them.

Nothing meaningful found is a valid result. Do not expand permissions.

Fires on:
- cron `0 8,14 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
