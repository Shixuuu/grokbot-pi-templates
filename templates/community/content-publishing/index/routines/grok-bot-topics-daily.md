# Routine: Topics daily

> Topics daily

Daily refresh of the mapped topic opportunity table. Find NEW product-for-job article topics using only research you run TODAY. Do not reuse yesterday's keyword CSVs, prompt exports, or social scans as the source of truth.

Hard rules: professional knowledge-work framing; skip topics the user marked out of scope; primary keywords need a modifier; do not invent volumes; skip titles already in the table; add at most 5 new rows; stay quiet if nothing qualifies.

Keyword volume = same-day global monthly searches for the primary, from Semrush if connected, otherwise the mapped keyword tool. Prompt volume = exact match from Profound if connected, otherwise the mapped prompt-volume tool.

If a research tool needs a login, hand the computer over. Do not type passwords.

Rank by the AND of today's search volume, exact prompt volume, format fit, and social signal. Recap new rows to the user on the mapped channel. If auth is broken two runs in a row, pause and tell the user.

Fires on:
- cron `52 8 * * 1-5`

Ask the importing user for:
- Timezone
