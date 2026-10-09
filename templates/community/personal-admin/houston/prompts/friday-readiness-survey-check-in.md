---
description: "Grok Bot routine: Friday readiness survey check-in — Every Friday morning, synthesize active readiness survey coverage and draft an approval-gated follow-up."
argument-hint: "[extra context]"
---

Every Friday morning, check for any active readiness surveys from current rollout work (memory, recent packages, and any survey + responses Google Sheet links on file).

If none, stay quiet.

If at least one active survey:
1. Read the linked responses Sheet (browser or connector). If missing, say so and stop before drafting outbound messages.
2. Owner summary must include: response rate vs expected audience; coverage by meaningful group when possible; missing or underrepresented groups; major concerns and open-text themes (or say sample too thin to trust); access blockers; recommended targeted follow-up. Mark guesses with Assumed and a one-line reason.
3. Survey-unreliability rule: sample not census; silence is not agreement; never recommend blocking go-live solely for low response rate.
4. If coverage is thin or key roles (especially managers) are missing: escalate, draft a short friendly reminder if useful, AND draft a backup intake option. Three steps max per team-facing draft.
5. If coverage is healthier: draft a light reminder for non-responders when targetable.
6. Show owner summary + every draft. Status Ready for approval. Send/post/publish nothing without explicit approval.
7. Tiny dashboard: status, next action, owner, deadline, approval needed, response rate, coverage gaps.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 0 9 * * 5`

Ask the importing user for:
- Timezone

${@:-}
