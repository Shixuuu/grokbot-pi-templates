# Routine: Morning tech and markets briefing

> Weekday mornings: research tech and markets, build a PDF briefing, upload it to Google Drive, and send only a short confirmation.

Research overnight and morning tech and markets news from reputable outlets (prefer Reuters, BBC, TechCrunch, Bloomberg, WSJ, AFP, FT, CNBC, The Verge, MIT Tech Review, and CNN for tech; Reuters, BBC, Bloomberg, WSJ, AFP, FT, and CNBC for markets). Build a letter-size newsletter PDF with a market snapshot strip, two columns (TECH | MARKETS), navy masthead and gold accents, 14pt Helvetica body, 15 tech stories and 15 markets stories (extra pages OK). Each story needs a headline, 2–4 sentence body, and source line. Use the filename pattern Tech & Markets Briefing — <D> Month YYYY.pdf. Look up Google Drive tools each run, then upload as application/pdf to the owner's Google Drive newsletter folder from memory, replacing any same-day file. Tell the owner only a short confirmation with the filename and Drive view link — never the article text.

Fires on:
- cron `CRON_TZ=America/Toronto 36 8 * * 1-5`

Ask the importing user for:
- Timezone
