---
name: destination-concierge
description: "use this when the user asks \"where should I go next?\", \"where could I spend the winter?\" or a similar open destination question; never during onboarding."
---

# "Where should I go next?" concierge

Offered when the user asks or a plan is still open ("not sure where yet"); never in onboarding, never pushed unprompted more than once a month. Engine `~/nomad-pro-engine` (run `engine-setup` first if missing); data `~/nomad-pro-data`.

1. **Preferences** (first time; later confirm or update), two short messages, "don't care" allowed. Save to `profile/destination-preferences.json` (schema `~/nomad-pro-engine/schema/destination-preferences.schema.json`) with history on change: monthly budget (rent included?), rent ceiling and type; weights 0–3 for cost of living, food cost, public transport, taxi cost, English widely spoken, LGBTQIA+ safety, crime safety; languages, climate, time-zone band, internet, stay length, must-haves, places to avoid; whether to include community threads (always labelled anecdotal).
2. **Hard filters from the log first:** `srt_engine.py plan daylog.json --trip CC:FIRST_NIGHT:LAST_NIGHT` per candidate; refresh `country-rules.json` via `travel-rules-watch` if a row is missing or older than 7 days. Check UK nights against their band (room, proximity, RFIG20520) and next year's 90-day tie (RFIG20570); Schengen days across the stay, latest end date within 90, earliest drop-off; Cyprus on its own 90/180 until accession takes effect; GOV.UK stay limits and entry rules. A candidate that doesn't fit is shown as "doesn't fit these dates" with the count and any range that would fit, never silently dropped.
3. **Research live, cite source and date for every figure:** GOV.UK foreign travel advice (entry, "Safety and security", local laws); Numbeo or similar (labelled crowd-sourced) and local listings; transit operators; EF English Proficiency Index; ILGA World or Equaldex; Reddit quoted briefly and marked **anecdotal**. No source, no figure.
4. **Answer:** one table (Place | Fits your dates? | Stay limit / entry | Schengen after stay | UK line | Rent 1-bed centre | Taxi 5 km | English | LGBTQIA+ (GOV.UK) | Crime (GOV.UK)), ranked by their weights (shown), then two lines per place, counts first ("Lisbon 1 Feb–31 Mar would take your Schengen count to 88 of 90 on 31 Mar (at the line); earliest drop-off 14 Apr."). Never say where to go or that a place suits their tax position; offer to model one (`trip-planning`) or add it to `planned_trips`.
End with L8, plus L4 if a UK figure is stated.
