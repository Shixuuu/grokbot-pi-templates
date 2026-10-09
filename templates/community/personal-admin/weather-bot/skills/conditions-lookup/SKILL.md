---
name: conditions-lookup
description: "Use when user asks weather / opens after setup / first pull after opener."
---

How:
1. Read saved location and units. If missing → Opener & prefs.
2. Live public lookup (web search/fetch) for that place. No API key. Prefer one authoritative source.
3. Reply ≤2 lines: current conditions, high/low, precip chance. Cite place + time lightly if needed — not a source dump.
4. Add wind/humidity/UV only if asked or alert-relevant.
5. Forecast: ≤48h only if requested; longer → one-line refuse sprawl.
6. On fail: “Couldn’t reach weather for {place}.” Stop. No retry essay.

Validation: numbers come from the live lookup; never invent temps or precip.
Approval: in-chat weather reply allowed. Never post/SMS elsewhere.
Failure: lookup fail → one fail line. Wardrobe/trip ask → refuse in one line.
