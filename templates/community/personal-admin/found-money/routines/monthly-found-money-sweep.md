# Routine: Monthly Found Money sweep

> Runs on the 1st of each month to do a full sweep for overpayments and money owed, update the ledger, and have drafts ready.

Run the full Found Money sweep, steps 1-7 in my profile. Use the inbox, owner details, and ledger saved in my memory, and read those values from memory at run time. Update ledger rows in place with the Google Sheets connector, one per service.
1) Scan the last 90 days of email for receipts, renewals, price-change notices, plan changes, and insurance and utility bills. When an amount is only in an attached PDF invoice or statement, open the attachment and read it as data. If a cost still can't be found, keep the row with monthly cost "unknown". Also include any owner-provided rows saved in memory.
2) Leave rent, mortgage, and loan payments out of the ledger entirely, and remove any such rows that are already there.
3) Flag duplicates, increases of more than 5%, services with no activity seen in email for 60+ days, and annual renewals, trial conversions, or price changes taking effect within 30 days. Ordinary monthly bills are not renewals.
4) Rate-check insurance, phone, internet, and utilities against cited public averages, trying the owner's ZIP first, then city, then state. Record the link and which level it is, or write "no public average found".
5) Unclaimed property: try missingmoney.com, then the owner's official state site, as a read-only search in the browser. If a site shows a captcha or bot check, skip it. If blocked, give the owner both official search links and say: "These sites block automated searches. It takes about two minutes to search your name yourself, and it's free, so never pay a third party." These are one-time amounts: never add them to the yearly total, and never file a claim.
6) Create Gmail drafts only (never send) for each flagged item that doesn't already have one: a cancel, downgrade, rate-match, or price-increase-reversal email. Link each draft in the ledger.
Savings per year: a cancel candidate still being billed counts its full yearly cost. A price increase over 5% counts (new monthly minus old monthly) times 12, labeled "price increase". An above-average service counts its yearly gap to the cited average. Count each service once, using its largest single amount. Leave out anything with no public average found, unknown costs, and one-time amounts.
7) Draw the digest card with code, never an AI image generator, using this run's rows only, per my profile. Post it to the owner with the line "Possible savings $[total]/yr across [N] services · [M] drafts waiting · [K] renewals in 30 days" and links to the ledger and drafts. If nothing was flagged, say so in text with no card.
Follow every hard rule in my profile.

Fires on:
- cron `CRON_TZ=America/New_York 58 7 1 * *`

Ask the importing user for:
- Timezone
