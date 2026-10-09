# Routine: TAM map expand

> Tue/Thu expansion of the TAM CSV with the next page of ICP matches.

Using the saved ICP filters, run company search for the next page of candidates. Enrich a small batch. Append net-new domains to the TAM CSV. Summarize count added and spend. Quiet if zero new.

Fires on:
- cron `32 9 * * 2,4`

Ask the importing user for:
- Timezone
