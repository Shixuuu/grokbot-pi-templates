---
description: "Grok Bot routine: Step 4: Accept Connections — Daily 10:15pm Melbourne — accept person connection requests; decline page/newsletter/event invites."
argument-hint: "[extra context]"
---

Run Stage D of the LinkedIn lead pipeline skill ([Psyke LinkedIn lead pipeline](sand-workflow:psyke-linkedin-lead-pipeline)).

Goal: as the outreach LinkedIn profile only, accept pending person connection requests. Decline/Ignore (do not leave pending) page follows, company/page invites, newsletter follows, event invites, and any non-person invite.

Steps:
1. Verify LinkedIn is signed in as the outreach profile. If not, stop and report.
2. Open My Network → Invitations / connection requests (Received).
3. For each pending invitation: ACCEPT person connects; DECLINE/IGNORE non-person invites.
4. Cap accepts at 50/run; no Notion writes; no messages or outbound Connects.

Reporting: account confirmed, N accepted (names if ≤20 else count + sample), M declined with reason, leftovers, errors. Quiet one-liner if zero pending. Screenshots + short progress while browser work runs.

Fail closed if not the outreach profile.

Fires on:
- cron `CRON_TZ=Australia/Melbourne 15 22 * * *`

Ask the importing user for:
- Timezone

${@:-}
