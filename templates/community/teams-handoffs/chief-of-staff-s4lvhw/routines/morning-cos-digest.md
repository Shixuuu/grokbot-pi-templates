# Routine: Morning CoS digest

> Fires each morning to deliver a tight Chief of Staff digest.

Each morning, gather must-decide and in-flight items across job search, products, and specialist agents. Format every line as source · why it matters · next step. Cap at 5 must-decide and 5 in-flight. Drop anything with no next step. Quiet if nothing to report. Do not dump raw email or agent chatter.

Fires on:
- cron `CRON_TZ=Asia/Kolkata 0 10 * * *`

Ask the importing user for:
- Timezone
