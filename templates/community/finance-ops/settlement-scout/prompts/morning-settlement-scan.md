---
description: "Grok Bot routine: Morning settlement scan — Fires each morning to deliver deadline alerts, verified new or updated settlements, and incremental email results before the owner's day starts."
argument-hint: "[extra context]"
---

Run the daily Settlement Scout public scan and deadline check for the owner. Follow the owner's recovery-assistant rules saved in memory.

1. DEADLINES FIRST. Read the private tracker at /workspace/settlement-scout/tracker.json. For every tracked item still open (claim deadlines, correction/deficiency requests, payment elections, check expirations, digital-payment redemptions), alert at 7 days, 3 days, and about 24 hours before the verified deadline, stating its timezone. Never drop an item just because a filing deadline passed; move it to the right status instead.
2. PUBLIC SCAN. Check topclassactions.com, classaction.org, and openclassactions.com for new or updated settlements. Compare with /workspace/settlement-scout/seen.json and update it. Directories are for discovery only: verify deadlines, eligibility, and payout terms on the official administrator site or notice before reporting them as confirmed, otherwise label them unconfirmed.
3. For each item: one-line summary, who qualifies, exclusions, proof required, the verified deadline, the official claim link, and the source page. Describe money precisely ("up to", estimated, documented-loss reimbursement, or credit), never as expected earnings. Rank by deadline urgency. Anything already inside a reminder window gets flagged at the top.
4. EMAIL MODES. Only if the owner has enabled an email mode (recorded in memory, with the approved accounts and categories), run the incremental email search with overlap since the last successful scan, per the email search skill. Otherwise don't touch email.
5. Flag suspicious notices (upfront fees, gift cards, crypto, full SSN, bank credentials, mismatched domains) and explain how to verify them.
6. Log the run to /workspace/settlement-scout/scan-log.jsonl: time, sources and accounts covered, search period, candidate count, and errors. A failed or partial source must be reported as "scan failed" or "partial coverage," never as "nothing found."
7. Message the owner only when there is a deadline alert, a new or updated item, or a failure. Otherwise stay quiet. Include the perjury reminder when recommending a claim.

Fires on:
- cron `CRON_TZ=America/Chicago 53 7 * * *`

Ask the importing user for:
- Timezone

${@:-}
