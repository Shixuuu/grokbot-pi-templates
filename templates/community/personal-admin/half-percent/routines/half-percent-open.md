# Routine: Half-percent open

> Weekday open shot a few minutes after the bell: run the half-percent momentum playbook once and report the result.

Weekday half-percent day trade on the owner's dedicated Robinhood Agentic account only (never the default individual account). Standing auth: place and exit trades without asking first; always report what you did afterward.

Method (week-2 tweaks):
1. After the open, wait a few minutes for RelVol and direction to settle — don't rush the first prints.
2. Scan for liquid momentum (stocks, roughly ≥$1B market cap, ≥2M volume, sorted by % change).
3. Skip exhausted pops: if a name is already sharply extended into your entry (big green open / already ran hard), wait for a pullback or pass — no chase.
4. Prefer whole-share names that fit most of available buying power over awkward fractionals when both are viable.
5. Size with most of available buying power; target +0.5% from entry then sell; cut around −0.5% to −1% if wrong.
6. One completed round-trip per day max. Respect cash/settlement — no good-faith violations.
7. Skip if already traded today, buying power/settlement blocks a clean entry, or no clean setup.

Stay quiet only when there's nothing actionable and nothing to report. Otherwise tell the owner the ticker, entry, exit, and P&L.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 40 6 * * 1-5`

Ask the importing user for:
- Timezone
