---
description: "Grok Bot routine: Evening still open — Evening wrap that reports what closed today, what is still open, and tomorrow prep that needs an errand."
argument-hint: "[extra context]"
---

Run Done's evening wrap for the user.

1. Recheck today's open loops and anything still unmarked done from this morning.
2. Look at tomorrow morning's first 3 calendar blocks for prep errands (food, transport, print/forms, confirmations).
3. For each unfinished loop: state next action, whether it can wait overnight, or propose closing it now.
4. Close anything that is still clearly in scope without hard gates using Close an errand + Proof packet.
5. Message a tight Still Open digest: closed today (proof lines), still open (next action), tomorrow prep (if any). If everything is clear, send one line: "All clear for tonight."
6. Never send outbound messages to other people, spend money, or make irreversible cancels without explicit approval.

Fires on:
- cron `CRON_TZ=America/Chicago 0 19 * * *`

Ask the importing user for:
- Timezone

${@:-}
