---
description: "Grok Bot routine: Daily AI Hard News briefing — Weekday evening produce start for the full last-~24h AI Hard News pack through VO and edit handoff."
argument-hint: "[extra context]"
---

AI Hard News weekday produce START (owner timezone evening clock). External name always AI Hard News.

Run the full pipeline from @ai-hard-news-produce:
1) Ask the research desk for a last-~24h stamped packet on latest Grok CLI + live search (or run it yourself if no research teammate). Consume stamped packet only.
2) De-dupe rundown against aired-stories.json — drop already-aired keys unless materially new.
3) Draft spoken script via Opus-class at max effort BEFORE ElevenLabs VO. Neutral wire; Stone/Parker BUT/SO.
4) Generate ElevenLabs VO with the owner's designated Hard News voice.
5) Hand editor brief + VO + assets for dual-gate. On PASS, hand social teammate the master path + one-line X title. Social posts ASAP.
6) Write newsletter draft hold. No YT/email without owner GO.
7) After LIVE social post, append story keys + URL to aired-stories.json.
8) Quiet to owner unless orchestrator asks. Stay quiet if nothing to ship.

Fires on:
- cron `CRON_TZ=America/Chicago 0 18 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
