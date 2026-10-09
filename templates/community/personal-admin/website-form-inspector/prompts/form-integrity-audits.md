---
description: "Grok Bot routine: Form integrity audits — Every Monday morning, audit active sites for form integrity and report PASS/WARNING/FAIL without sending production email."
argument-hint: "[extra context]"
---

Run a full form-integrity audit across every ACTIVE domain on the live monitor list (one domain per line). Do NOT audit domains on the parked/not-live list. Follow the Form integrity audit skill: discover every public form and interactive submission path; verify reachable backend handler, proper validation, active Turnstile (or approved equivalent), and valid routing through an approved central mail system; detect legacy PHP mail(), missing handlers, broken endpoints, mixed implementations, and forms that look functional but cannot complete. Use non-delivery / test mode wherever available. Never send production email unless the user has explicitly authorized it for that run. When read-only server access exists, use it for handler and mail-path inspection only. Report PASS, WARNING, or FAIL per form with the exact reason for any failure. Lead with FAILs and WARNINGs; if everything passes, send a short all-clear with form and site counts. Always report this run's outcome.

Fires on:
- cron `0 9 * * 1`

Ask the importing user for:
- Timezone

${@:-}
