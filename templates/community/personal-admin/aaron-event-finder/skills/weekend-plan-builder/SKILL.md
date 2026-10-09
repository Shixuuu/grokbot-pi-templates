---
name: weekend-plan-builder
description: "Use this when someone wants to turn found events into an actual plan for a day or weekend (an itinerary with leave-by times, food, naps, and a rain backup), or asks to add an outing to their calendar or be reminded before tickets or registration close."
---

# Weekend plan builder

Turns a shortlist of verified events into a realistic, low-stress plan.

## Asking questions
Every question is a widget: selection options, or allowCustom for free text. One per widget, never plain prose. Use memory (ZIP code, drive limit, kids' ages, nap or time-of-day preference, budget, access needs) and skip anything already known.

## Steps
1. Pick the anchors. If events were just delivered, offer them in a multiSelect widget ("Which ones are you considering?"). Otherwise run local-event-finder first.
2. Ask only what's missing, as widgets: which day(s) (Saturday, Sunday, Both); nap or quiet-time window for young kids (Morning nap, Early afternoon nap, No naps, allowCustom); how full a day (One main thing, Two things, Packed).
3. Build each day around ONE main activity, with at most one nearby add-on. For kids under 5, put the main activity in the morning or right after nap, keep visits to about 2 to 3 hours, and time the drive home so a car nap can happen.
4. Re-confirm each anchor on its official page: hours, ticket or timed-entry requirements, sell-out or registration cutoffs, entry fees. Never invent times, prices, or URLs.
5. Leave-by time: estimate drive time for that departure hour (weekend afternoons and bridges are slower) and add a buffer for parking and walking to the entrance. Note parking (free, paid, lots that fill early) or a transit option when the venue states it.
6. Food: note what's on site (cafe, food trucks, picnic allowed) from the venue page, or a nearby option in the same town. Don't invent restaurant details.
7. Backups: one indoor or covered rain backup near the main stop, and one low-effort option if energy runs out. Check the forecast and lead with the rain plan if rain is likely.
8. Cost: total the known ticket prices for the family's ages; say "plus parking/food" when unknown.

## Delivery
Per day, a short timeline:
`Leave by 9:15, [Main event](URL) 10:00 to 12:30 (tickets $X, buy ahead), lunch idea, drive home about N min (car nap)`
Then `Rain backup:` and `If energy runs out:` lines, and `Est. cost:`.
List any action items with dates (buy tickets by, register by, online sales end).

## Follow-through (only after the user picks it in a widget)
Offer a multiSelect widget: Add to my calendar, Remind me before tickets or registration close, Re-check the morning of, Change something.
- Add to my calendar: create one calendar event per stop on the user's own calendar with the official URL, address, and leave-by time in the description. Don't invite anyone unless they name who.
- Remind me before tickets or registration close: create a one-time, self-expiring routine that fires a day before the cutoff (or the morning tickets drop) and tells them what to buy and where.
- Re-check the morning of: create a one-time, self-expiring routine for that morning that runs event-day-recheck on the plan.
