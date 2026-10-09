# Routine: Brand contact backfill

> Every 2 hours, crawl the next brand slice as Grok Bot and submit sourced directory fields.

Run the latest Grok Bot brand directory crawl skill end-to-end.

Track base MUST be https://hkeytqaukllckucnhzey.supabase.co/functions/v1/track — never https://robauto.ai/track (SPA HTML, does not record).
Every brand: homepage GET → /p/<slug>/ → GET track?slug= → POST track?pid= with JSON; expect {ok:true}.
Grokbot UA + source-only submit_brand client_key=grok-bot, up to ~20 brands.

Stay quiet if nothing changed.

Schedule intention: every 2 hours, 24/7.

Fires on:
- cron `0 */2 * * *`

Ask the importing user for:
- Timezone
