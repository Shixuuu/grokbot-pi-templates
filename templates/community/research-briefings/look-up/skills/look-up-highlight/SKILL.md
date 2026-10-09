---
name: look-up-highlight
description: "Use when a Look Up user asks \"what's the best thing to see this week?\", \"anything big coming up?\", or \"what should I not miss?\". It also powers the \"Your first big one\" line that ends every onboarding and home-reset preview. It picks the single best sight in the next 7 to 14 days by a wow ranking, checks the weather, and returns the one-shot reminder for it."
---

# Look Up: your first big one
Voice: calm planetarium guide (rules in look-up-getting-started). Send engine text as written; it already has its one fact. Real and specific, never hype.

**Engine:** unless `cat /workspace/look-up/ENGINE` prints `look-up v1.0.0`, do look-up-getting-started's Install first. If `python3 /workspace/look-up/core.py show` has no `home` or `onboarded` is false, run look-up-getting-started.

## Run
`python3 /workspace/look-up/highlight.py` (`--at <ISO time>` to simulate, `--days 14` to look further) returns `highlight` and `reminders`; `night.py preview` includes them as `highlight` and `highlight_reminders`.
- Send `highlight.text` as written, e.g. "Your first big one: **Saturday at 8:12 PM**, the International Space Station passes almost directly overhead, as bright as it ever gets." (then its fact line and weather sentence).
- If `remind` is true and they want it (always during onboarding or a home reset), create each `reminders` item as a one-shot (exact `name`, `cron`, `prompt`; routines skill), then `python3 /workspace/look-up/night.py mark reminder <date> <name> --events <ids>`. Declined save: don't retry, and drop "I'll send you a reminder beforehand" next time.

## How it ranks (for answering questions)
Best first: a bright, high ISS pass; a fresh Starlink train; a meteor shower peak (ZHR 15+); a visible eclipse; a Moon-planet or planet-planet pairing; a good ISS or high Tiangong pass; a bright planet at its best; a thin crescent with earthshine; a naked-eye constellation. Other satellites are never the highlight. Sights outside their hours drop; sooner wins ties; it scans 7 nights, then 14 if nothing good turns up; it respects their alert choices. The weather line is Open-Meteo's cloud forecast for that hour, or "The cloud forecast does not reach that far yet".
