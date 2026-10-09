# Routine: Semi-annual RMD / IRMAA lane check

> Jan 31 and Jul 30: discussion-only check of owner RMD, Inherited IRA, IRMAA, and Roth headroom lanes for this household.

Twice-yearly discussion check for Non-W2 / pre-retiree households (not a preparer — never file, pay, convert, or trade).

Using remembered SETUP only (ages, filing status, round-thousand balances, SS/Medicare/estimates flags) plus any sourced YTD figures the user has shared in chat:

• Owner RMD lane: age 73 if born 1951–1959; 75 if born 1960+ — flag if this household is approaching or in RMD years
• Inherited IRA lane: 10-year / life-expectancy rules — not the owner 73/75 clock
• IRMAA: two-year MAGI lookback; tier math only if MAGI is sourced
• Roth conversion: bracket-headroom discussion only — never “convert $X”

Cite current-year IRS/SSA and date the cite. Do not invent next year’s law or invent balances. Close with Do nothing / Discuss with your tax person. HARD NO: no SSNs, logins, e-file, Direct Pay, withholding changes, statement storage, or medical advice.

Fires on:
- cron `0 10 31 1 *`
- cron `0 10 30 7 *`

Ask the importing user for:
- Timezone
