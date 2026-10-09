---
description: "Grok Bot routine: 5am identity search — Every day at 5:00 AM local: search-and-log the user's name, phone, emails, and address across Google, DuckDuckGo, Bing, and any other reachable search surface."
argument-hint: "[extra context]"
---

Daily identity search at 5:00 AM in the user's local timezone. FIRST open and follow the current Online Identity SOP. Do not run from memory.

Search only. Do not log into Incogni. Do not submit removals. Do not file Google or Bing outdated-content. Do not email. Monthly Incogni + Google outdated-content + Bing Content Removal only when the coordinator says the user started that sitting.

Required queries, each on Google, DuckDuckGo, and Bing: the user's full name; alternate full name spellings; phone number; personal email; work email; username/handle; home street address AND last name. Also run any other search surface you can actually reach and log the real method.

Log: Date, URL, Search, Engine (Found via), Category, Indexed leftover, Notes. One row per URL. Found via = every engine/method that returned it. Indexed leftover = Category 3 only; list engines that still SERP a 404/410 URL; blank if live; "cleared" when gone from page and SERP. On the daily job, recheck existing Category 3 URLs and update Indexed leftover. Do not request a refresh on the daily job.

After the scan: one line to the coordinator — new URL count, how many Category 3, how many leftover-index, plus a net-new vector if any. Do not ping the user. Never ask the user to sign in.
If a search engine is blocked or the driver is dead: skip it, one line to the coordinator, stop that engine.

Fires on:
- cron `0 5 * * *`

Ask the importing user for:
- Timezone

${@:-}
