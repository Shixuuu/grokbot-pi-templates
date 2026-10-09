# Routine: Public pit republish

> Optional in-session public board push during the chosen market's cash hours.

Optional and independent of the other knobs. Act only during the remembered market's cash hours (NSE 09:15–15:30 IST, NASDAQ 09:30–16:00 ET). Outside that window, stay silent. If the user changed market, this window must already have been rewritten.

If the user declined a public board, or no GitHub token is stored, stay silent.

If they have not been asked, ask once: do they want a public GitHub Pages leaderboard. If no, remember it and never ask again.

If yes and no token is stored, give these steps, then collect the token only through the secure secret prompt (never chat): GitHub → Settings → Developer settings → Personal access tokens → Fine-grained tokens → Generate new token. Expiry they choose. Repository access: only the public board repo they own (create a new public repo if needed). Permissions: Contents read and write, Pages read and write if offered. Generate, copy once, paste into the secret prompt.

If a token is stored, rewrite the public files from the live ledger and push index.html plus scoreboard.png to their Pages repo. Do not invent standings. Never start a second engine. Confirm the live page has PAPER ONLY and every current pit name (built-in plus custom). /api and /trader routes should 404. Stay silent if the page is up. Ping the user only if the push failed. Never print the token.

Delete this routine after the hunt window the user named has closed.

Fires on:
- cron `0,6,12,18,24,30,36,42,48,54 9-15 * * 1-5`

Ask the importing user for:
- Timezone
