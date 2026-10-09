---
description: "Grok Bot routine: Daily LinkedIn Invitation Desk — Review-only daily invitation check. Hard fail-closed until setup.json is complete and review_enabled is true. Never creates approvals or clicks Accept/Ignore."
argument-hint: "[extra context]"
---

# Daily LinkedIn Invitation Desk

Review-only scheduled invitation review. Never create approvals. Never execute Accept or Ignore. Never invoke Process Approved LinkedIn Invitations.

## Hard fail-closed (first, before anything else)

Before any browser use, LinkedIn access, file generation beyond confirmed onboarding state, queue change, or message:

1. Read `/workspace/linkedin-desk/setup.json`.
2. If the file is missing, unreadable, `setup_complete` is not true, or `review_enabled` is not true:
   - Exit silently and do nothing.
   - Do not open a browser.
   - Do not open or access LinkedIn.
   - Do not write, create, or change files, including onboarding files, the review index, the ledger, and `approved-actions.md`.
   - Do not send a message.
   - Do not create, enable, or reschedule a routine.
   - Do not run First-Run LinkedIn Desk Setup. A scheduled wake is not a request to set up LinkedIn Desk or Personalize.

This gate must hold even if the host imported this routine before onboarding, defaulted it enabled, or applied any schedule the recipient did not choose.

## After the gate passes

Use `/Review Received LinkedIn Invitations` for new or changed Received-queue invitations only.

Do not:

- Invoke `/Process Approved LinkedIn Invitations`
- Click Accept or Ignore
- Add anyone to `/workspace/linkedin-desk/approved-actions.md`
- Convert recommendations into approvals
- Reprocess Attempting or Outcome uncertain rows
- Review unchanged invitations already in the durable index

Three-beat ping when there is something to report: what I did, what I think (recommendations only), what's happening now. Ask whether to execute that exact unchanged list. Stay quiet only when nothing new was reviewed and nothing is unresolved. Never execute that list from this routine. Execution is a separate user-approved Process run.

Fires on:
- cron `0 11 * * *`

Ask the importing user for:
- Timezone

${@:-}
