---
name: travel-rules-watch
description: "use this when the user mentions a trip or destination, arrives in a new country, the weekly travel-rules routine runs, or they ask about visa or stay limits (Schengen 90/180, Cyprus, Thailand and others)."
---

# Travel rules watch

Keeps `~/nomad-pro-data/country-rules.json` current for every country the user is in or heading to, and alerts on rule changes or plan conflicts. Engine `~/nomad-pro-engine` (run `engine-setup` first if missing); starter table and field notes in `~/nomad-pro-engine/schema/country-rules.md`.

Each row carries the rule, limit and window, `effective_from` + `previous` for a recent change, `source_url` (GOV.UK foreign travel advice **Entry requirements** for their passport), `source_updated`, `last_verified`, `finding` (short quote) and `legal: L8`.

## Trip mentioned (immediately)
1. Add or update it in `planned_trips` (country, first night, last night, status, pointer).
2. If the country has no row or it's older than 7 days: `python3 ~/nomad-pro-engine/tools/travel_rules_check.py --daylog daylog.json --country <gov.uk slug>`, read the Visa requirements text, update the row with source and today's date. Never from memory.
3. `srt_engine.py plan daylog.json --trip CC:FIRST_NIGHT:LAST_NIGHT` and report the stay-limit count on the last day (departure day included), Schengen days in the window and entries where GOV.UK sets a limit. Counts and proximity only.

## Weekly
Run `travel_rules_check.py` for all rows plus current and upcoming countries. For a changed section, read it, update the row (old version under `previous` with dates), add a `rule_watch_log` entry, then plan all upcoming trips. Run "UK visit spotted" (`trip-planning`) for any upcoming UK trip not yet checked. **Quiet if nothing changed and no conflicts**; otherwise one message: what changed (quote, link, date checked) and which trips it touches, as counts.

## Document expiry (weekly)
For each entry in `profile.documents_expiry` (passports, visas, permits): a reminder 6 months and 3 months before `expires_on`, once each (record `reminders_sent: {"6m": at, "3m": at}`): "Your British passport expires on 14 Mar 2027 (6 months)." For each planned trip, read the passport validity requirement from the destination's GOV.UK Entry requirements (store it on the row as `passport_validity`); if the passport falls short on the entry or departure date it names, flag it once with the link and date checked. L8.

## Counting
* **Schengen 90/180:** rolling 180 days ending each day; any part of a day counts, entry and exit included; members from the SCHENGEN row (29 countries; Bulgaria and Romania since 1 Jan 2025). Report used, room, earliest drop-off, longest stay from a date.
* **Cyprus:** its own 90/180 until its Schengen accession takes effect; then set CY's `from` date in the members. Check the European Commission and GOV.UK Cyprus pages weekly.
* **Thailand:** read the current exemption length from GOV.UK and the Thai Ministry of Foreign Affairs weekly; `previous` applies to earlier entries. Report entries per calendar year where GOV.UK gives a usual limit.
* Others: whatever GOV.UK states for their passport; if unclear, say so and link it.

Alert shape: "This booking would add 12 Schengen days: 71 of 90 in the 180 days to 2 Nov (getting close)." Never suggest a route, date or visa to get round a limit. Every visa, Schengen or immigration message ends with L8: Not tax or immigration advice — check your own position.
