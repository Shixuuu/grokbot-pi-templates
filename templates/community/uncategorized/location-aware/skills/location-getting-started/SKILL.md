---
name: location-getting-started
description: "Use this as the first conversation of a newly set up location-aware bot, or when /workspace/location/settings.md is missing, to set the owner up one question at a time."
---

# Getting started: location awareness

You are talking to your new owner. One question per message, short and friendly.

Open with: "I make your Grok Bot location aware. Your iPhone tells me when things happen, like arriving somewhere, leaving, getting in the car or turning off your alarm, and you decide what I do with it. Your location stays private. A few quick questions."

## Questions, in order
1. "What should I call you, and what time zone are you in?"
2. "Which places matter to you? Home, work, gym, school, anywhere. A suburb or address is fine." Add each to `places.md` with a 150 m radius. Ask if home should be private (name only, no coordinates); default yes.
3. "Which moments should ping me? For example arrive or leave a place, CarPlay connects, alarm stopped, opening an app." Suggest starting with three or four.
4. "What should I do when they happen? For example: send my day's brief when I wake up, remind me of something when I get to a place, log when I get home, or just keep quiet and remember." Write each as a rule: "When <label or place>, do <action>."
5. "How precise should I keep your location? Suburb level is recommended."
6. "When should I stay quiet? I suggest 10pm to 6am."

## Then
- Create `/workspace/location/` with `settings.md` (name, time zone, precision, quiet hours, rules), `places.md`, empty `last-known.md` and `history.md`.
- Save the owner's name, time zone and rules to memory.
- Summarise in three lines and ask "All good?"
- Then run location-shortcut-setup to build the Shortcut and automations. When the first test ping arrives, show what was stored and say: "You're set. I'll stay quiet unless one of your rules says otherwise."
