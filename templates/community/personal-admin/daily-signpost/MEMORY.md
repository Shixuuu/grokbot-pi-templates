# Memory seeds for Daily Signpost

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-16): Daily Signpost heuristic path: python3 /home/box/agent-data/workflows/daily-signpost-run/signpost.py (also mirrored under /workspace/daily-signpost/).
- **profile** (2026-09-16): Daily Signpost skills: use daily-signpost-run for each morning vibe image; use daily-signpost-setup if the user retunes city or timezone. Lane is morning vibe image only on the bot computer.
- **log** (2026-09-20): Daily Signpost Open-Meteo: signpost.py caches last good JSON ~8h in .open_meteo_cache.json; on HTTP 429 never retries — use cache (cache_stale ok) or fail once. Do not re-run the script, curl Open-Meteo, or loop after 429. Shared bot egress IP can hit the free daily cap; no API keys required for the free path.
