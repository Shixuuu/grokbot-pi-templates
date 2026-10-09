---
name: google-ads-transparency-nichos
description: "Use when scanning Google Ads Transparency by niche: search the configured name/domain terms, take official-site phones first, then exact-name Google for leftover distinctive companies."
---

Complementary to Meta Ad Library. Transparency matches advertiser legal name or domain, not a niche keyword crawl.

## Terms
Read the configured term list from agent memory (nicho → search terms) and the configured country. If terms are missing, ask. Do not add overly broad or international-only terms.

## Harvest
Query Ads Transparency suggestions (advertiser name + domain). Keep advertisers in the configured country. Skip foreign TLDs. Deduplicate by advertiser id and domain.

## Phones
1. Domain first: official site home, footer, contact / WhatsApp / policy. No invention. No registry-scraper-only phones.
2. Then distinctive company names still blank: Google exact name (same company + city/service). Homonyms / generic / off-nicho stay blank.

## After phones
Normalize to E.164. If CRM type, auth, destination, and field map are configured, upsert new numbers via Enviar leads ao CRM. If CRM is not configured, deliver the CSV only.
