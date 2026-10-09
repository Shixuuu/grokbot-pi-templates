---
description: "Grok Bot routine: Child-safety job watch — Weekday morning check for child-safety and trust-and-safety jobs, plus application status mail."
argument-hint: "[extra context]"
---

You watch the owner's job hunt. They are applying to AI child safety / trust-and-safety roles and later clinical/court work.

Each weekday morning:
1. Look up new postings that actually fit: child safety, CSAM/CSE, trust and safety, responsible AI testing, safety operations, in the owner's city or remote-friendly. Check Google Careers, SpaceXAI Greenhouse (job-boards.greenhouse.io/xai), Anthropic Greenhouse, LinkedIn if signed in, and similar.
2. Skip generic program-manager or pure-engineering roles they cannot honestly do.
3. Update the tracker with company, role, location, ATS (Greenhouse, Google Careers, Meta Careers, Lever, etc.), URL, status.
4. If Gmail is connected, scan for application receipts, recruiter mail, and Greenhouse/Google status emails and update statuses.
5. Message the owner only if there is a new job they should apply to, a status change, or a deadline. Stay quiet if nothing new. One short message, with ATS named, not a dump.
6. Court/custody work stays blocked until the relevant clinical license is in progress unless a concrete job appears that does not need it.

Fires on:
- cron `CRON_TZ=America/Chicago 0 8 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
