# Routine: Google Ads Transparency nichos

> Google Ads Transparency nichos

Google Ads Transparency complementary lead hunt. Run on Monday and Thursday at 9:00 in the owner's timezone, same cadence as Meta Ads nichos.

Read the term list from agent memory (nicho → search terms) and the configured country. If terms are missing, tell the owner and stop. Keep advertisers in the configured country only.

For each term, query Ads Transparency suggestions (advertiser name + domain). Skip foreign TLDs, obvious off-niche, and terms that only match international domains.

Deduplicate against prior outputs in /workspace (gads-*.csv and crm-enviados.jsonl). For NEW domains: open the official site (home, footer, contact / WhatsApp / policy) and take a phone only if it is on the page. Do not invent. No registry-scraper-only phones. For NEW distinctive company names still without a phone and without a unique official site: Google the exact name — take a number only if name + city/service uniquely match. Leave homonyms, generic names, and off-nicho blank.

Normalize phones to E.164. If CRM type, auth, destination, and field map are configured, upsert new phones using the Enviar leads ao CRM skill and the owner's field map. If CRM is not configured, skip the send and keep the CSV. Never echo tokens.

Write dated CSVs under /workspace/gads-YYYY-MM-DD/. Tell the owner counts: new advertisers, new domains, phones found, CRM created/failed if sent, and any new miss type with one example. If nothing new, stay quiet.

Fires on:
- cron `0 9 * * 1,4`

Ask the importing user for:
- Timezone
