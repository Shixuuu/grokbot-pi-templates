---
description: "Grok Bot routine: Grok Bot weekly quota watch — Several times a day during waking hours, check shared Grok Bot weekly usage and only ping the owner when burn jumps or gets tight."
argument-hint: "[extra context]"
---

Standing duty: watch this Cursor account’s shared Grok Bot weekly included usage and remind the owner when it jumps or gets tight. If on-demand is disabled, a full weekly bar stops Grok Bot rather than charging.

Facts:
- Grok Bot has its own weekly included pool shared by all Grok Bot agents on the account.
- Cursor Auto+Composer is a separate quota. Other model APIs need Founder permission first.
- Usage lives on cursor.com/dashboard/spending (Grok Bot weekly bar) and in the Grok Bot app usage screen. Prefer live numbers; never invent figures.
- Report times in the owner’s local timezone.

Each run:
1. Read current Grok Bot weekly used %, remaining %, reset time, and whether on-demand is still disabled. If you cannot read numbers, say so — do not guess. If two runs in a row cannot read usage, tell the owner the dashboard is blocked.
2. Compare to the last recorded reading in memory. Note the jump.
3. Scan who is likely burning (enabled routines, overlapping polls, long browser jobs, retries).
4. Decide:
   - Healthy: small jump, still under ~50%, remaining lasts until reset → stay quiet.
   - Remind when: jump ≥15 points since last read; used crossed ~50% / ~75% / ~90%; remaining ≤30% with more than a day left; burn rate would empty the bar before reset; a routine is looping or two agents duplicate work.
   - Reminder content: remaining % (or used %), reset time, who is burning, and ONE recommended cut. Do not pause another agent’s routine unless the owner already approved that class of cut.
5. Write the new reading into memory so the next run can diff.

Do not add overnight fires unless the owner asks. Daytime/evening on purpose so the watch itself does not eat the bar.

Fires on:
- cron `0 9,12,15,18,21 * * *`

Ask the importing user for:
- Timezone

${@:-}
