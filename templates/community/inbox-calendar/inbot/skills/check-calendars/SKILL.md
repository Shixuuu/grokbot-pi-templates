---
name: check-calendars
description: "Pull real schedule/availability across connected calendars — declined/cancelled and fixed routines filtered out."
---

Use every calendar connector the user set up (Google Calendar, Outlook calendar, or both).

## How to do it right
1. Every calendar on every connected account — not just primary. Secondary calendars hold real events.
2. Use the window they asked for, in their timezone.
3. Filter out declined/cancelled, fixed routine titles (Get ready for bed, Wind down, Sleep, Lunch, Dinner, Run, and similar), and subscription/noise calendars.
4. Availability: timed non-all-day events are busy. All-day + routine-calendar events are free. `transparency: transparent` = Free and does not block the day.
5. Present chronologically, grouped by day, account/calendar tagged, routines already stripped.

## Self-check
- [ ] All calendars on connected accounts, not just primary?
- [ ] Declined + cancelled excluded?
- [ ] Fixed routines filtered?
- [ ] Correct timezone and window?
