---
name: daily-checkin-and-catchup
description: "use this when running the scheduled check-in, when the user says where they were or what they did, when they come back after missed days, when they ask \"check my week\", when the check-in rhythm changes, or when they ask to change how often the calendar review runs."
---

# Daily check-in, catch-up and calendar review

Data: `~/nomad-pro-data/daylog.json`; engine `~/nomad-pro-engine` (run `engine-setup` first if missing). Follow `nomad-pro-core-rules`.

**Work-day rule.** Set `uk_work` with `srt_engine.apply_work_rule(log, row, calendar_titles)` (rule in force that day, `source: rule:<id>`, plus `exception: {keyword, event}` when a calendar title matches an exception keyword). Ask about work only for exceptions: "ask" items, travel days, calendar hints the rule doesn't cover. The user's answer always wins (`source: user_answer`). No rule: calendar presence never makes a work day; ask, and unanswered UK days stay `unsure` (`source: not_asked`). If their pattern changes, read the new rule back, confirm, save as a new version from the date they give (close the old one the day before); never re-tag earlier days unless they say so (then `applies_to_earlier_days_agreed: true` and a `changes` entry per day with their words).

## Check-in (four questions, one short message)
1. Where were you today? (city, country → tonight's `midnight_country` unless they'll move before midnight)
2. Did you work? Skip if the rule settles today with no calendar exception; say what it set ("Weekday in London: work day under your rule").
3. If in the UK: more than 3 hours? (yes/no/unsure; hours only if given, never defaulted)
4. Where does the record sit? A pointer ("Airbnb receipt in Gmail"); if Gmail is connected offer the matching email as a link; screenshots go to `evidence/` (`evidence-and-documents`).
If a calendar title names the place, pre-fill and ask only to confirm. Write the row (both countries in `countries_present` on travel days; `confidence` `confirmed` with a record, else `attested` with the date; `logged_via: checkin`), then `srt_engine.py validate` and `summary`. Reply in two or three lines: what was recorded and only what moved ("UK midnights 2026/27: 41. 79 days of room before the 120-day line for 1 tie (comfortable room).") + L4.

## Catch-up (before today's questions)
If days since the last entry are unlogged: say how many and the range ("Last entry 9 Oct. 6 days to fill: 10–15 Oct."); propose from calendar/email if connected, else ask once ("A range is fine: 'Lisbon until the 13th, then Madrid'"); apply the rule to the range and ask only about exceptions in one go. Days they can't place stay not logged. **Never guess a gap**, never fill one from a booking alone.

## Calendar review (calendar connected)
Rhythm: weekly (default), fortnightly, monthly or quarterly, as the user chose (saved in memory). The period is every night since the last review in `weekly_reviews` (first review: the last week, fortnight, month or quarter to match the rhythm), plus earlier unlogged days. A longer rhythm means more days to confirm at once; the daily check-in still catches missing days in between.
1. **Due?** If this run's date doesn't match the rhythm, stay quiet: fortnightly runs on the weekly schedule but skips until 14 days have passed since the last review; monthly or quarterly, but it isn't yet a month or quarter since the last review. If every day in the period is already logged with a link or pointer, say nothing.
2. Read the calendar(s) named in `profile.calendar_rules` for the period, applying those rules: events naming a place, flights, trains, hotel check-ins; match Gmail bookings if connected. An upcoming UK trip not yet in `planned_trips`: run "UK visit spotted" in `trip-planning` after the review.
3. Send one message: "Here's what I think your [week/fortnight/month/quarter] was. Is this right?" with one line per night (date, country and place, basis such as "event 'Porto, Portugal'" or "no calendar entry"); for a month or quarter, group consecutive nights in the same place into one line ("3–11 Oct: Lisbon, Portugal") so the message stays short. Then the UK work each UK day gets under their rule and "Any exceptions (sick, less than 3 hours, holiday)?" (no rule: "Any UK work over 3 hours on the UK days?"; never propose a work answer).
4. Go back and forth until each line is confirmed or corrected (any wording).
5. Write confirmed days (`logged_via: weekly_review`); every correction to a logged day goes in `changes` with `via: weekly_review`, old and new values and their words; record the review in `weekly_reviews` with its `period` (`{from, to, rhythm}`; the field keeps its name for data compatibility); attach calendar/Gmail links with their OK. An event alone never becomes a day row.

**Changing the review rhythm.** When they say so ("make my calendar review monthly"), update the existing "Calendar review" routine's schedule in their timezone (don't create another): weekly `5 18 * * 0`; fortnightly the weekly schedule, skipping runs until 14 days since the last review; monthly `5 18 1 * *`; quarterly `5 18 6 1,4,7,10 *`. Save the rhythm in memory and confirm in one line ("Done: your calendar review is now monthly, on the 1st at 18:05."). For monthly or quarterly, mention once that there will be more days to confirm at once and the daily check-in still catches missing days in between.

## Rhythm
Default daily at their chosen time and timezone. After 3 missed check-ins (or if asked) offer weekly or "when I move" (a check-in when a calendar event or message suggests travel, plus a weekly sweep). Update the existing check-in routine; don't create another.

## Flag, one at a time
UK weekday with work unanswered or `unsure`; a day without a record pointer; conflicting records (keep both in `conflict`, ask, log who resolved it); a new UK accommodation (relationship, 91-day availability, RFIG20550); a trip mentioned in passing (add to `planned_trips`, run `travel-rules-watch`); an upcoming UK trip not yet in `planned_trips` (run "UK visit spotted" in `trip-planning`); a count entering "getting close" or "at the line" (state once as a count with the page, no advice).

On or after 6 April, catch up last tax year to 5 April; the 7 April `year-end-lockdown` checks the year and makes its Travel and day log (only if that routine is off and no log exists, make it here with `export-travel-day-log`). L4 when a rule or figure is stated; L8 when Schengen or a visa limit is mentioned.
