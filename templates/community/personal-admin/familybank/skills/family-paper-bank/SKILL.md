---
name: family-paper-bank
description: "Use when running a pretend family \"paper bank\" ledger: adding members, recording deposits or withdrawals, posting interest at a set APY, answering balance questions, projections, or making statements."
---

# Family paper bank

A pretend bank ledger that tracks money for each family member (kids, adults, anyone the owner adds) and pays interest at the APY the owner sets. No real bank, brokerage, card, or payment account is ever involved.

## Access needed
Only Shell and Python 3 on the box (Pillow for statement images). No connectors or accounts.

## Files
- Ledger (source of truth): `/workspace/family-bank/ledger.csv` with columns `date,member,type,amount,balance_after,note`. Type is one of deposit, withdrawal, interest, adjustment, or rate_change.
- Settings: `/workspace/family-bank/settings.json` (members, APY per member, compounding frequency, start dates, active flag, `carry`, `last_interest_through`, `earning_start`).
- Before every change, copy both files to `/workspace/family-bank/backups/` with a timestamp in the name.
- Only append rows. Never rewrite or delete old rows. A correction is a new adjustment row with a note. A note about an existing entry (what a debit was for) is a $0.00 adjustment row.

## Members
- Each member has a name, starting balance, start date, and their own APY. To open an account, you need the starting amount and the APY; ask for whichever is missing. The start date defaults to today if not given.
- Balances may start negative (money a member owes); record that as an opening withdrawal with its purpose in the note.
- Members can be added any time. Removing one keeps their history and marks them inactive in settings.

## Recording rules
- One entry touches exactly one account. Never create transfers or matching entries between accounts, even when the note names other members.
- If the direction is unclear (a gift, "for birthday," a bare amount), ask whether it's money in or money out and show both resulting balances before writing. "Credit" or "deposit" means in; "debit," "spent," or "withdraw" means out.
- A run of short follow-ups ("then $40…", "then credit $120…") continues the account most recently named. If it's truly unclear which account, ask; don't guess across accounts.
- Use the owner's own words for the note. Date defaults to today.
- When the owner corrects a balance or entry, re-open the ledger and answer from it, not from memory.

## Interest math (exact, never estimated)
- Rate per period = `(1 + APY)^(1/n) - 1`, with n = 12 monthly, 52 weekly, 365 daily.
- Default: monthly, posted on the 1st.
- Post only for full periods that have passed since the last interest row. Catch up missed periods in order, one row per period. Never post the same period twice.
- Money that arrives mid-period earns from the next period on, unless compounding is daily. So an account opened on the 1st earns that month (first interest the next 1st); one opened mid-month first earns the following month.
- Calculate with Python, never mentally. Round to cents only when writing a row; keep sub-cent remainders in settings as `carry`.
- A rate change applies from the next period and gets its own rate_change row.
- 0% APY or negative balances earn and owe nothing unless the owner says otherwise.

## Every change
1. If anything about member, direction, amount, or rate is unclear, ask first (one question, both outcomes shown). If the owner stated it plainly, record it.
2. Back up, append the row, update settings.
3. Reply with the new balance in one or two sentences. Never touch a balance the owner didn't mention.

## Common asks
"add $20 to Ana," "Mateo spent $5," "post interest," "what's everyone's balance," "show Ana's history," "change the rate to 5%," "what will Ana have by June if she adds $10 a month" (a what-if projection, clearly labeled and never saved), "make a statement."

## Statements
- Write `/workspace/family-bank/statements/<member>-<YYYY-MM>.md` plus a PNG (Pillow works if matplotlib isn't installed), and attach the PNG. Regenerate the current month's statement when new activity arrives; back up the old one first.
- Include: an activity list (date, description, amount, running balance), then a summary (starting balance, deposits, withdrawals, interest this period and all-time, ending balance), next expected interest if any, purpose notes, and one plain line about compounding or 0% APY.
- Negative balances are shown in red, with "Left to pay back" and a progress line (paid back so far out of the original debt, with a percent). Deposits are green.
- Check the result: open the PNG and confirm every line sits inside the border and the numbers match the ledger before sending.

## Hard lines and where to stop
- Never connect to or move real money, bank accounts, payment apps, or cards.
- Never invent a balance, transaction, or rate. If the ledger is missing or broken, say so and offer to rebuild it from what the owner says.
- No investing, tax, or legal advice. Don't message family members or anyone else; statements go only to the owner in chat.

## Routines
None by default. After interest has been posted by hand once, offer one monthly routine that posts interest on the 1st (safe to run twice) and sends a one-line summary of who got what. Create it only on a yes.

Created by CarolinaDill (X: @CarolinaDill).
