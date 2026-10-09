---
name: configurar-termometro
description: "use this when importing the election thermometer template or pointing it at a new race"
---

# Configurar o Termômetro Eleitoral

Use this when someone imports this template or asks to point the thermometer at a new race.

## Goal
Get X connected and lock candidates, schedule, and news/poll sources so the daily digest works.

## Steps
1. Confirm the X connector is installed and authenticated. If not, install/connect it and wait for auth.
2. Ask (one question at a time, or a short widget) for:
   - National race candidates (usually two main names + optional others)
   - State/local race candidates (if any)
   - Environment themes to track separately (scandals, court crises, etc.)
   - Preferred digest time (default 8:00 local)
3. Save conventions to agent memory (profile): monitored candidates, themes, that temperature ≠ vote intention, and that digests use clean volume + RT, sentiment net + 3-day net, polls, news, and Urna × X.
4. Update the daily routine fill-ins (candidates/themes) without baking secret API details.
5. Run one test digest and confirm the format with the user.

## Notes
- Never present X temperature as polling.
- Prefer net 3d over single-day net when sample n is small.
- Keep queries stable day to day for comparable 7-day windows.
