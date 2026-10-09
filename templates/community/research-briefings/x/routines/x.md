# Routine: Tracked investors daily stock briefing

> Fires each weekday morning to analyze which stocks the tracked X accounts discussed since the last run and publish a charted briefing.

Daily update of the owner's tracked-investor stock-focus analysis. Write the report in the owner's language. They want real analysis with charts published to Feishu, not just a file.

Each run:
- Read the X plugin guide skill first, use the X connector, and look up tool schemas fresh.
- Load the state file (ids, last_fetch_end_time, previous per-person stock lists) and the saved handles file. Skip protected accounts.
- Check credits before and after. Budget about $1.50 per run, hard stop $2.50. If the balance is under about $3, fetch nothing and tell the owner to top up at https://console.x.com.
- Fetch only posts created since last_fetch_end_time (Monday covers the weekend). Save raw posts under a dated folder.
- Per person, work out which stocks they talked about (cashtags, company names, local-language names). Give a stance (bullish/bearish/neutral/trading) and a short reason grounded only in what they wrote.
- Compare with prior state: newly mentioned names, dropped names, stance flips, and stocks several people are discussing.
- Make charts with matplotlib and a CJK font: hot stocks by number of people with a stance split, a person × stock stance heatmap, a theme distribution, and a day-over-day change view once history exists. Real data only; check each PNG renders.
- Write the analysis (core conclusions, consensus, divergences, changes, themes, per-person table, risk/macro, a not-investment-advice disclaimer) and a Feishu copy embedding images as ![](@./charts/<date>/x.png) with $ escaped. Update the state file.
- Publish as the owner with `lark-cli docs +create --as user --title "<briefing title> · <date>" --doc-format markdown --content @./<file>.md` from the working folder. If the user auth has expired, start a new device login with --no-wait --json, make a QR with `lark-cli auth qrcode` under /tmp, and send the link and QR to the owner.
- Send the owner a concise morning briefing: the doc link, 3–5 key conclusions and changes, the top chart inline, and the X credits remaining.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 54 7 * * 1-5`

Ask the importing user for:
- Timezone
