---
name: meta-ads-nichos
description: "Use when scanning Meta Ad Library by niche: pull the Advertiser filter list, enrich from public sources, then try first-load ad creatives via page_id for names still missing a phone."
---

Three steps per configured niche. Do not scroll the ad grid. Do not send to the CRM unless the owner asks or a routine says to.

## Setup
- URL: https://www.facebook.com/ads/library
- Country and niches come from agent memory. If niches are missing, ask before starting. If country is unset, ask.
- Category: All ads. Keyword: exact phrase.

## Hard rule
Never click See more / See more ads. Never infinite-scroll the creative grid. Box desktop is 1280×800.

## Step 1 — Advertiser filter listing
1. Search the niche as an exact phrase.
2. Filters → Advertiser. Scroll only inside that dropdown.
3. Extract unique names. Exclude "All advertisers". URL is blank.
4. The list is capped (~100). Save /workspace/meta-ads-{slug}-filtro.csv (Pagina,URL). Dated runs go under /workspace/meta-ads-YYYY-MM-DD/.

## Step 2 — public enrich
Official site, Maps, Instagram/Facebook About, professional registries. Do not invent. Homonyms stay blank. No registry-scraper-only phones. Tipo: escritorio|marketing|outro. Telefone E.164.
Save /workspace/meta-ads-{slug}-detalhes.csv (Nicho,Pagina,Tipo,Cidade,UF,Telefone,Site,Fonte,Obs).

## Step 3 — Ad Library creatives (only rows still missing a phone)
- Do not apply the Advertiser checkbox on the keyword search. That empties the grid.
- Typeahead is prefix-only. Search the name, read page_id from the option, do not apply.
- Open https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country={COUNTRY}&view_all_page_id={PAGE_ID}
- Wait for first-load cards. Never See more.
- Take phones printed on the creative. Generic api.whatsapp.com/send (no phone param) is useless; the CTA is often disabled.
- Ad Library About is transparency only. facebook.com/{id} hits a login wall — do not log in.
- Capture landing/Instagram hrefs.

## Recurring
- Combined: /workspace/leads-meta-ads-nichos-YYYY-MM-DD.csv
- Baseline delta (nova / ja_vista by name+nicho) if leads-meta-ads-baseline.csv exists.
- Recap counts per niche.
- Do not use Google Maps scrapers or directory-hunt tools.
