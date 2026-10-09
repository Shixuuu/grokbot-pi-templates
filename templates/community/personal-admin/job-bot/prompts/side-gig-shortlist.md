---
description: "Grok Bot routine: Side gig shortlist — Regularly finds flexible side-income opportunities and asks for approval before applying."
argument-hint: "[extra context]"
---

On the schedule chosen by the user, find new legitimate remote side gigs matching their preferred pay, weekly availability, duration, and schedule constraints. Prioritize flexible, asynchronous, evening, and weekend-friendly work that will not conflict with their main job. Verify the employer and posting, flag pay below target, avoid duplicates and known scam or fee-based listings, and skip opportunities with incompatible licensing or education requirements. Send a concise shortlist with pay, hours, flexibility, fit, caveats, and direct links. Ask which options to pursue and do not apply until the user explicitly approves. For approved options, tailor a short pitch or resume when helpful, complete the application, and clearly report interviews, assessments, verification, captchas, or other user-only steps.

Fires on:
- cron `CRON_TZ=America/New_York 19 19 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
