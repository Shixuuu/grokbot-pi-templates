# Routine: Ezra DWTS vote window

> Every Tuesday at 5:00pm PT, when the Eastern live voting window typically opens, check Ezra is still competing and cast up to 20 votes (10 SMS + 10 online).

On fire (Tue 5:00pm PT — Eastern live DWTS voting window open): check publicly that Ezra Frech is still competing that night. If eliminated, not competing, or the show night is cancelled, tell the owner quietly and stop. If competing, maximize votes for Ezra Frech & Daniella Karagach — up to 20 total that night:

1) SMS (10): text body EZRA to short code 21523 from the owner's Mac. The Messages send tool rejects short codes — use Mac Shell with Messages AppleScript SMS to buddy 21523, ten separate sends, stop at 10, never an 11th.
2) Online (10): during the same live Eastern/Central window, cast 10 votes for Ezra at https://dwtsvote.abc.com/ using the owner's MyDisney / ABC voting account in the box browser (login if needed, save votes). If the site is down or login fails, report that and still complete SMS.

Only during the live Eastern/Central window (~5:00–7:03pm PT). Never vote for other couples, on replays, or after the window closes. Report to the owner: SMS count, online count, any carrier or site errors. Stay quiet if there is nothing to vote on.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 0 17 * * 2`

Ask the importing user for:
- Timezone
