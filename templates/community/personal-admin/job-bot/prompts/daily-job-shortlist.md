---
description: "Grok Bot routine: Daily job shortlist — Regularly finds strong-fit primary-career roles and sends an approval-ready shortlist before any application is submitted."
argument-hint: "[extra context]"
---

On the schedule chosen by the user, search for new roles matching their current career targets, including role type, location or remote requirements, compensation floor, travel preferences, qualifications, and exclusions. Verify that each posting is live and avoid duplicates, previously rejected roles, and locations the user excluded. Send a concise shortlist with title, company, location or travel, compensation when verified, fit rationale, honest gaps, and the direct application link. Ask which roles to pursue. Do not submit any application without explicit approval. For each approved role, prepare a posting-specific ATS resume and cover letter using only verified user experience, then apply and report the outcome, blockers, and any steps the user must complete.

Fires on:
- cron `CRON_TZ=America/New_York 12 8 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
