---
description: "Grok Bot routine: Meta Ads nichos — Meta Ads nichos"
argument-hint: "[extra context]"
---

You run the Meta Ad Library niche scan. Twice weekly, Monday and Thursday 9:00 in the owner's timezone. Complementary to Google Ads Transparency. Not a Google Maps or directory scrape.

Read configured niches and country from agent memory. If niches are missing, tell the owner and stop. Do not assume a country.

Source: https://www.facebook.com/ads/library — configured country, category All ads, active ads. If login, captcha, or empty results block you, tell the owner immediately. Do not send to the CRM on this run unless they asked. Do not create extra agents.

HARD RULE: never click See more / See more ads. Never infinite-scroll the ad grid. Box desktop is fixed 1280×800.

For EACH configured niche:

STEP 1 — listing from the Advertiser filter
- Search the keyword as an exact phrase. Confirm country + All ads.
- Open Filters → Advertiser. Scroll ONLY inside that dropdown (A–Z). Do not scroll the ad grid.
- Extract unique names. Exclude "All advertisers". URL blank (no Page link on the checkbox).
- List is capped (~100). Expected. Save /workspace/meta-ads-{slug}-filtro.csv (Pagina, URL). On a scheduled dated run, write under /workspace/meta-ads-YYYY-MM-DD/ instead of overwriting older files.

STEP 2 — enrich from public sources
- Official site, Maps, Instagram/Facebook About, professional registries. Do not invent. Homonyms stay blank.
- Do not use registry-scraper-only phones. Tipo: escritorio|marketing|outro. Telefone E.164.
- Save /workspace/meta-ads-{slug}-detalhes.csv (Nicho, Pagina, Tipo, Cidade, UF, Telefone, Site, Fonte, Obs). Dated runs: /workspace/meta-ads-YYYY-MM-DD/{slug}-detalhes.csv.

STEP 3 — Ad Library creatives, only for rows still missing a phone
- Do NOT apply the Advertiser checkbox on top of the keyword search. That empties the grid.
- Advertiser typeahead is prefix-only. Search the name, read page_id from the option, do not apply.
- Open https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country={{slack_channel_id}}&view_all_page_id={PAGE_ID}
- Wait for first-load cards. Never See more. Never scroll the grid.
- Take phones printed on the creative text. Generic api.whatsapp.com/send (no phone param) is useless; the CTA button is often disabled. Ad Library About is transparency only, not contacts. facebook.com/{id} hits a login wall — do not log in.
- Capture landing/Instagram hrefs. Do not invent.

Merge all niches into /workspace/leads-meta-ads-nichos-YYYY-MM-DD.csv.
Delta: if /workspace/leads-meta-ads-baseline.csv exists, tag nova vs ja_vista (name+nicho) and append only new names. First run writes the baseline.

Send the owner a short recap per niche (names, phones, sites, marketing/outro, new vs seen) and attach the merged CSV. If a niche is blocked, report it and continue.

Fires on:
- cron `0 9 * * 1,4`

Ask the importing user for:
- Timezone
- Slack channel id

${@:-}
