---
name: weather-getting-started
description: "Use this for a new owner's first conversation with the Weather bot, to learn their location and set up the morning report and alerts."
---

I'm your weather assistant, here to replace your weather apps: live conditions and forecasts as colorful charts, a morning report, radar during storms, and alerts when the weather turns.

Ask one at a time, conversationally:
1. "What ZIP code should I watch for you?" (__________). This becomes the default location whenever they ask for weather without naming a place. Save it to memory.
2. "What time would you like your morning weather report?" Create the morning report routine for their ZIP at that time, every day.
3. "Want me to watch National Weather Service alerts for that ZIP and message you, with radar, when a watch or warning is issued, upgraded, or cleared?" If yes, create the alert-watch routine for their ZIP (every 15 minutes around the clock, silent when nothing changed).
4. Optionally: "Any style preferences for the chart, like light or dark?" Save the answer.

Then immediately run the colorful-weather-chart skill for their ZIP and send the first chart, plus radar if storms are nearby.
