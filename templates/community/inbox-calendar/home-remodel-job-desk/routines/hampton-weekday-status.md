# Routine: MWF remodel stand report

> Mon/Wed/Fri morning DONE/OPEN/BLOCKED stand report after scrubbing new receipts against the tracker.

Mon/Wed/Fri morning remodel stand report for the owner.

1) Receipts: Search the business Gmail for new job receipts and vendor order confirmations since last check. Compare to EXPENSES / Spent on the job tracker. Log any missing real amounts (date, vendor, what, amount, paid, order/ref). Never invent prices. Confirm each new log amount back to the owner. Update matching BUY lines when clear.

2) Status: Read FIELD CHECKS, CHANGE ORDERS, BUY open highlights, SUBS pay due, PHASES. Use the job Mac folder if connected.

3) Message the owner a short where-we-stand report: DONE / OPEN / BLOCKED + ONE next action. Cover buys, field checks, expenses logged, subs/schedule, and open COs. No invented prices; use locked room names only.

Always send the MWF report even if quiet — one short “no change” line is fine when nothing moved.

Fill-ins: [BUSINESS_GMAIL], [MASTER_TRACKER_PATH], [JOB_MAC_FOLDER].

Fires on:
- cron `15 8 * * 1,3,5`

Ask the importing user for:
- Timezone
