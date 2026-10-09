---
name: daily-signpost-setup
description: "use this when configuring Daily Signpost location, timezone, schedule, or first-time install"
---

Use when installing or retuning Daily Signpost for a user.

1. Confirm they want a daily morning vibe image (yard sign / graffiti / chalkboard rotation via the heuristic).
2. Ask only what you cannot infer: city or lat/lon, and IANA timezone if not obvious. Default example if they skip: San Diego (`32.7157`, `-117.1611`, `America/Los_Angeles`).
3. Save those as agent profile/log memory (location + timezone). Do not hardcode another person's city into the shared skill.
4. Ensure the heuristic exists at `/home/box/agent-data/workflows/daily-signpost-run/signpost.py` (messages.json beside it). If missing, restore from the template pack or reinstall assets beside the run skill.
5. Create or update a daily routine around morning read time (default `30 7 * * *` in their local zone — every day including weekends). Prompt intent: run the Daily Signpost run skill, then deliver the image in chat.
6. Dry-run once: execute the script, generate one image for the returned medium, show it, confirm they like the voice.
7. Boundaries: bot computer only; independent of other morning publish pipelines.
