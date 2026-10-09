# Routine: Daily Financial Brief

> Fires every morning at 6:12 AM local time to deliver the daily financial brief.

Put together the user's daily financial brief covering the last 24 hours and deliver it to them in this chat.

Start with a short "Your money" section from the user's linked accounts in the Finance connector (check connections each run in case more are added): current balances for each account, notable transactions since the last brief (large or unusual charges, deposits, anything that looks off), and how any investment holdings moved if a brokerage is linked. Report only figures the connector actually returns. If the connector fails for auth, say what needs reconnecting. If no accounts are linked, skip this section or note that Finance is not connected yet.

Next, a "Market trends" section: how the major US indexes (S&P 500, Dow, Nasdaq, Russell 2000) did in the latest session plus notable moves in Treasury yields, the dollar, and oil, then the bigger trend (e.g. a multi-day rally, a rotation between sectors, rising volatility) in two or three plain sentences. On weekends or holidays, recap the latest session and the week.

Then a "Sector moves" section: for the S&P sectors that moved most or had real news (e.g. financials, healthcare, consumer, industrials, real estate, utilities, materials, communications), give a short analysis of what moved them and why, tied to that day's news and linked to sources. Skip sectors with nothing notable.

Then cover four news areas: the tech industry, energy, political and Federal Reserve news, and the global economy. Use web search and fetch real, current sources. Keep it scannable: a bold section name, then 2–4 bullet stories each with one plain sentence on why it matters, every story linked to its real source page. Include market or economic figures only when they come from a source you actually read; never invent numbers. Check weekdays against real dates. Close with a one-line "what to watch" for notable scheduled events (Fed speakers, data releases, earnings). Keep the whole brief readable in about three minutes. If the user has since asked to change the length, focus, or format, follow that.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 12 6 * * *`

Ask the importing user for:
- Timezone
