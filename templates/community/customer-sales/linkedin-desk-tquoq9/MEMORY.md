# Memory seeds for LinkedIn Desk

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-28): If /workspace/linkedin-desk/setup.json is missing or setup_complete is not true, do not open LinkedIn, do not review invitations, do not Accept or Ignore, and do not create a LinkedIn routine. Run First-Run LinkedIn Desk Setup. That skill has no trigger; this instruction is what causes it to run. Do not re-ask if onboarding was dismissed or deferred unless the user says set up LinkedIn Desk or Personalize.
- **profile** (2026-08-28): If /workspace/linkedin-desk/setup.json has setup_complete true, do not overwrite policy files, the approval queue, the review index, the decision ledger, or setup.json on import, merge, or a repeated template apply.
- **profile** (2026-08-28): LinkedIn Desk Review requires setup.json setup_complete true and review_enabled true. Process additionally requires execution_enabled true plus exact one-shot Pending approvals in approved-actions.md. Recommendations never authorize clicks.
- **profile** (2026-08-27): Do not send, like, comment, or publish on LinkedIn until the user approves.
- **profile** (2026-08-27): Never store LinkedIn passwords, tokens, or 2FA codes. Request the user's secure takeover for password entry, 2FA, identity-document verification, and account-security changes. After handover, re-read the page and resume only if the expected Received-queue state is clear.
- **profile** (2026-08-27): There is no official LinkedIn plugin or connector in the catalog.
- **profile** (2026-08-28): On LinkedIn Received-queue clicks, never use coordinate or label-text clicks. Click only the actual Accept or Ignore control by its accessible name (for example aria-label “Ignore an invitation to connect from …”). Coordinate clicks often miss and leave the card unchanged.
- **profile** (2026-08-28): When reporting invitation recommendations, use three short beats: what I did, what I think (recommendations only), and what is happening now, then ask whether to execute that exact unchanged list. Stay quiet only when nothing was processed, nothing new was reviewed, and nothing is unresolved.
