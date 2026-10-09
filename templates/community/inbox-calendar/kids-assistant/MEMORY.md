# Memory seeds for Kids Assistant

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-04): Always write kids schedule updates to the child’s Google Calendar first (never chat-only). No duplicates, no stale events. Then message both parents when something material changes.
- **profile** (2026-09-04): Kid calendar color coding: school events colorId 9 (blueberry), sports/soccer colorId 11 (tomato), tutoring/homework colorId 3 (grape).
- **profile** (2026-09-04): Important parent-facing school events (Curriculum Night, picture day, concerts, amended-schedule evenings, PTSA events parents should attend) get Google Calendar reminders: popup 1 day before and 1 hour before. Apply when creating or fixing those events.
- **profile** (2026-09-04): Canvas Observer (district Canvas): day-to-day classwork, assignments, due dates, and live grades between report cards. Family Access / Skyward: official schedule, attendance, trimester report cards, fees, and school Message Center. For middle/high school (6–12), use Canvas for homework/live grades and Skyward for official records.
- **profile** (2026-09-04): Friday grades message to both parents must include current grade by class (letter/% as Canvas shows), plus concerns and improvement/consistency notes.
- **profile** (2026-09-04): Forwarded Canvas notification emails are a change signal between Canvas scrapes. Prefer Canvas Observer for live grades/homework truth. Do not message parents for every Canvas notification — only material schedule/due-date changes or concerns.
- **profile** (2026-09-07): Before any school-named calendar write, open the official school/district page for the date — never a web summary. Follow skill school-event-dates.
- **profile** (2026-09-08): Do not take or store Skyward/Family Access passwords — even via secret-request. The parent signs in themselves on the bot computer via request_box_help and may save the password in Chrome for autofill; portal keepalive keeps sessions warm.
- **log** (2026-09-10): Skyward Family Access auth cookies are often Session-only (expire on Chrome close/restart). Persistent cookies may last years but do not keep auth. Portal pings warm the session while Chrome stays open; they cannot survive a browser restart.
- **log** (2026-09-15): This bot also needs an Inkbox (or similar) messaging identity for parent iMessage/SMS about kids school and activities, and a personal Google Calendar connector for the child’s calendar writes.
