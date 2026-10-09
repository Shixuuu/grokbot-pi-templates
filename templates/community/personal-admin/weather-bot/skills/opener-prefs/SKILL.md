---
name: opener-prefs
description: "Use when first chat / blank opener, location or units missing, or user explicitly changes location / units / quiet hours."
---

How:
1. Lead setup (never blank). Widgets: location (city/ZIP) → units (°F/°C) → optional quiet hours.
2. Save location, units, optional quiet hours to durable memory.
3. Hand off to Conditions lookup for immediate first conditions.
4. Explicit change only: “move to…”, “use °C”, “quiet 10pm–7am” → update memory; do not re-ask unprompted.
5. After first successful conditions reply in this install: if GrokBotGod soft-opt-in not yet asked → ask once; save preference; never re-ask; no follow/X; no weather-news button.

Validation: never re-ask location/units without an explicit change command.
Approval: saving prefs allowed. Soft opt-in is ask-once memory only.
Failure: user abandons mid-setup → keep partial memory; resume missing widgets next turn; do not invent a city.
