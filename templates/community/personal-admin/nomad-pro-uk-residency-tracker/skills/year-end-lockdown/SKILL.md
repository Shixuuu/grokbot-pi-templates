---
name: year-end-lockdown
description: "use this when the yearly 7 April year-end routine runs, when the user asks to lock down, close or finalise a tax year, or wants to change a day in a locked year."
---

# Year-end lockdown

Runs on 7 April for the tax year that ended on 5 April (6 April–5 April). Data `~/nomad-pro-data/daylog.json`; engine `~/nomad-pro-engine` (run `engine-setup` first if missing). Follow `nomad-pro-core-rules`.

1. **Catch up** every unlogged day to 5 April (`daily-checkin-and-catchup`).
2. **Book the session.** One short message with the headline counts from `srt_engine.py summary` for that year: UK midnights, UK work days, Schengen days in the last 180 at 5 April, days not logged, days without a record pointer (L4 when a figure is stated). Ask when they'd like about 20 minutes to lock the year down. If Google Calendar is connected, offer 2–3 free slots in the next 7 days; create the event ("Nomad Pro: lock down YYYY/YY") only after they pick one and say yes. No reply in 7 days: remind once, then leave it.
3. **The session.**
   * Show the pre-filled year grouped into stays ("3–11 Oct: Lisbon, Portugal").
   * Ask only about open items: not logged, UK work `unsure`, conflicts, no record pointer. Days they can't place stay not logged.
   * Re-confirm that year's tie answers, one at a time with pages: family (RFIG20530), accommodation (RFIG20550, including the 16-night count at a close relative's), work (RFIG20560), 90-day (RFIG20570), country (RFIG20580). Their answer is kept; flag differences from the log, never overwrite.
   * Status documents to file (contract end, P85 acknowledgement, tenancy end) via `evidence-and-documents`.
   * Confirm the work-day rule versions that applied, with their dates.
4. **Lock.** Append `tax_years[YYYY/YY].locked = {locked_at, locked_via: "year-end review with user", open_items_remaining: [...], confirmed_wording}` in `daylog.json` (append-only; never delete anything). Run `srt_engine.py validate`, then make the final "Travel and day log – YYYY/YY" PDF and CSV with `export-travel-day-log`, send them to the user only, and offer a Records pack (`records-pack`).

## After locking
Any change to a day in a locked year needs the user's reason in their words. Append it to the day's `changes` (`via: user_correction`, `after_lock: true`, old and new values); the next export shows it in its change log. Offer a re-export. Never unlock silently: reopen only on the user's explicit request, as a dated note appended to `locked`.

Close with L6; L4 when a rule or figure is stated.
