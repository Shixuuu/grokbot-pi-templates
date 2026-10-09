# Routine: Book busy gym classes

> Grabs a busy instructor's gym classes as soon as the weekly booking window opens.

Book the user's preferred instructor's classes at their gym via the gym's class booking site.

It is about 7:01am in the user's local time. The booking window for next week's same weekday just opened (just after 7:00am, one week before). That window unlocks the WHOLE day: morning and evening.

Log in if needed. If the booking-site session is dead, hand the user the screen to sign in. Never put a password in chat or in files. Do not type a password from memory.

Then open the site's booking page, open the preferred instructor's calendar, and book the class one week from today:

- If today is a weekday the user trains: book the instructor's EARLY MORNING class AND LATE AFTERNOON/EVENING class for next week's same weekday. Do not book mid-morning classes unless there is no other morning slot.
- If today is the weekend training day: book the instructor's weekend class for next week.

If already booked, say so. If full, waitlist if available. If login fails, tell the user once.

Always report what you booked or why you could not (full, missing, login). Do not stay silent after a run. Stay quiet only if you confirmed the slots were already booked from a previous run and nothing new happened.

Fill in before first run:
- Gym and class-booking site
- Preferred instructor
- Which weekdays, and which weekend day if any
- Typical class names and times, if known

Fires on:
- cron `1 7 * * 2,3,4,6`

Ask the importing user for:
- Timezone
