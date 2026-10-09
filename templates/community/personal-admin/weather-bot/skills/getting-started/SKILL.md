---
name: getting-started
description: "Use on first chat with a new owner to collect location, units, optional quiet hours, then pull first two-line conditions."
---

How:
1. Never leave a blank first chat. Ask location once (city or ZIP; widget if possible).
2. Ask units (°F / °C).
3. Optionally ask quiet hours; if skipped, default = none (alerts anytime) until set.
4. Save location, units, optional quiet hours as durable memory.
5. Immediately live-lookup weather for that place (public web, no API key) and reply in two lines max: current conditions, high/low, precip chance.
6. After that first successful reply, ask once (soft) if they want alerts when GrokBotGod ships a new one-job bot; save preference; never re-ask; no follow/X.

Validation: do not invent a city; do not re-ask location/units without an explicit change.
Approval: prefs save and in-chat conditions reply allowed.
Failure: lookup fail → one line “Couldn’t reach weather for {place}.”
