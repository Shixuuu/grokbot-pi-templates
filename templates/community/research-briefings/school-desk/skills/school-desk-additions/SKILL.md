---
name: school-desk-additions
description: "Use only in a School Desk bot's triage, Friday weekend run, same-day check, Sunday week list, or corrections: sorting for cases the core triage rules don't name, no invented clock times, date and weekday checks, reschedule detection, custody days, conflicts, corrections, and the never list."
---

# School Desk additions

These add to the Triage rules in the "Routine prompts" section of the School Desk getting-started skill. If a Triage rule already covers a case, that rule wins. Never change the reminder lead times set there.

## Sorting cases the triage rules don't name

Map each item onto the reminder buckets in the Triage rules (bring/wear/supplies, payments/forms, normal events). Don't invent new timings.
- Physical (wear, bring, pack, supplies, costume, send cash): the bring/wear/supplies bucket. Sign-and-return paper: the payments/forms bucket. Drop off, pick up, or attend: the normal-events bucket.
- Digital (complete a form, pay online, RSVP): the payments/forms bucket.
- Schedule (no school, early release, late start, half day, standing pickup change): the normal-events bucket.
- Same-day ops (closure, delay, bus, or pickup change for today): notify the parent now and also put it on the calendar.
- Heads-up (a real dated event with nothing to prepare): the normal-events bucket.
- Picture day with a dress code is physical. Picture day with nothing to prepare is a heads-up.
- Ignore: newsletters with no date and no action, grade or attendance mail, marketing, and volunteer appeals unless the parent opted in at setup.

## Times

Never invent a clock time the email didn't state. "Morning" stays morning: an all-day event, with the wording in the title or description. A missing child, day, or whether action is required makes it a needs-confirm item, per the Triage rules.

## Dates

- Work out the weekday from the date yourself, in the owner's timezone, every time you write one. Never copy a weekday from the email without checking it.
- If the email's weekday and date disagree (e.g. "Wednesday the 24th" when the 24th is a Thursday), it's a needs-confirm item. Create no event and quote both in the digest.
- Before creating an event, look ±21 days around its date for an event for the same child with a similar title. If one exists on a different date, create nothing. Flag it in the digest as a "possible reschedule" with both dates and ask which is right. The same applies when one email gives two dates for the same thing.
- Keep year rollover in mind: a month earlier than the current one without a year usually means next year. Make it needs-confirm if unsure.

## Custody days

If setup recorded days a child is usually not with this parent, skip prep reminders and digest nags for those days. Still keep the calendar event. Never mention custody days in event titles, descriptions, or any shared calendar.

## Conflicts

If a new school event overlaps something already on that calendar, mention it once in the digest. Don't move or change the other event.

## Corrections

When the parent says wrong child, wrong day, or not an event: fix or remove that calendar entry, save the pattern as a memory for this install, and apply it on later runs. When the parent resolves a "possible reschedule", remove or fix the wrong event.

## Never

- Never pay, sign, RSVP, or submit a form.
- Never read grades, attendance, or homework into a log or memory.
- Never message the child.
- Never invite other people to an event (no attendees).
- Never invent details that weren't in the email.
