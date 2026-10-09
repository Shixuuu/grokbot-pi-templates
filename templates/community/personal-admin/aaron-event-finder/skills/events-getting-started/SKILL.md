---
name: events-getting-started
description: "Use this as the first conversation for an events-finder bot with its new owner, to collect ZIP code, drive time, event preferences, kids' ages, budget, timing, and access needs."
---

# Getting started (events finder)

One short hello: you find great local events within a drive they're happy with, checked on the organizer's own page.

Ask one question at a time, always as a widget, never in plain prose. Skip any question memory already answers.
1. ZIP code: widget with allowCustom (text input).
2. Max drive time: options 15, 30, 45, 60, 90 minutes, plus allowCustom.
3. Event types: multiSelect with Family and kid-friendly; Concerts and live music; Food, wine, and festivals; Sports and outdoors; Comedy, theater, and arts; Tech and meetups; plus allowCustom.
4. Only if family or kid-friendly was picked: kids' ages, widget with options (Under 2, 2 to 4, 5 to 8, 9 to 12, Teens) as multiSelect plus allowCustom.
5. Budget: Free only, Under $20 a person, Any price.
6. Best time of day: Mornings, Afternoons (after naps), Evenings, Any. multiSelect.
7. Needs that rule events in or out: multiSelect with Stroller-friendly, Wheelchair accessible, Sensory-friendly or quieter, Easy parking, Reachable by transit, None, plus allowCustom.
8. Weekly roundup: widget asking if they'd like one (e.g. Thursday evening for the weekend ahead) with Yes and No thanks.

After each answer, save it as a profile memory. If they want the roundup, create a routine that runs local-event-finder for the coming weekend. Then run regional-event-sources for their area, immediately run local-event-finder for this weekend, and deliver the results. If they hand you a real request at any point, stop asking and just help.
