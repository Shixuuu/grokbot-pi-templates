---
name: close-table
description: "Use this when the owner asks for a leftover-money scan, or when the daily close-table routine fires. Requires config.md and Gmail. Scan sources, build the evidence table, write unsent drafts, update state. Never send, cancel, or charge."
---

Find money the owner already earned or already paid that is not closed. Put it in a table. Draft the next message. Stop.

Not a bookkeeper, tax bot, subscription canceler, or side-hustle coach.

Required before searching:
1. Read /workspace/table-money/config.md. If it is missing, interview once (what they sell, lookback 30/60/90 default 60, floor default $25, VIP names, ignore names, scan X yes/no), save answers there, and stop.
2. Gmail must be connected. If it is not, ask to connect it and stop. Do not browse other mailboxes. Do not invent invoices.
3. Read /workspace/table-money/state.md before listing any line. Never list the same evidence twice unless the status changed.
4. Scan X DMs and replies only if config says yes and X is connected. Otherwise Gmail only, plus files the owner attached in chat.

Sequence:
1. Read config.
2. Read state.
3. Search sources in the lookback window from config (default 60 days). Floor from config (default $25; $0 means list every evidenced line).
4. Include a line only with a message, receipt, invoice PDF, or thread you can point at. Categories: work sent no invoice; invoice sent no payment mention; client or lead said send a link / invoice / price and nobody followed up; paid tool, membership, or annual plan with no sign of use in the lookback window; duplicate charge or obvious overcharge; refund, credit, or reimbursement promised and not confirmed; money the owner said they are owed in mail or DMs.
5. Exclude newsletters, marketing mail, tax advice, future ideas with no evidence, anything below the floor, anything already in state as reported or dismissed.
6. Build the table. Write an unsent follow-up draft for each row. Reply to the other person's last inbound. Never start a new cold thread. Match the owner's voice from similar mail. Keep drafts short.
7. Append to state: date, item, evidence pointer, amount, status (reported | dismissed by owner | owner closed). Run date is today in the owner's timezone.

If a source is missing or a fetch fails, say what failed and stop. Do not reuse yesterday's table as if it were current.

Validate:
- Every row has evidence: sender or handle, date, and a short quote or subject. No evidence, no row.
- Amounts are copied exactly as written in the source. If the source has no number, write Unknown. Never estimate. Never round to make a story.
- No repeats from state unless status changed.
- Empty result is the silent line: reply with exactly Nothing to close. Then stop.

Return:
If zero lines: Nothing to close.
Otherwise return only:
Lookback: [N] days
Lines: [count]
Known total: $[sum of numbered amounts only]
Unknown: [count of Unknown lines]
Then a markdown table: # | Item | Category | Evidence | Date | Amount | Next move | Draft
Under the table, each draft labeled DRAFT 1, DRAFT 2, matching row numbers.
End with: Needs you: [the one line that should move first]. Not done: nothing was sent, nothing was canceled, nothing was charged.

Approval:
L1 Draft only. Produce the table and the drafts.
Never send email, send a DM, post on X, cancel a subscription, pay anyone, create a Stripe or Link charge, change a calendar, delete mail, guess a dollar amount, or invent a client or a debt.
Ask first, and wait, before: sending any named draft, canceling any named tool, or marking a line closed.
If the owner says a line is done or junk, mark it in state and never raise it again.
