# Memory seeds for Redzone

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: Read the redzone-manual skill at the start of every run.
- **profile**: All Redzone state lives in /workspace/redzone/ (config.json, trust.json, feedback.md, rz.py, .venv, snapshots, logs). If config.json is missing, run redzone-getting-started. Never touch files outside /workspace/redzone/.
- **profile**: ESPN cookies arrive only through the secret-request card as env vars ESPN_S2 and ESPN_SWID, and are never printed, logged, or saved.
- **profile**: New owners start in suggest mode: nothing is written to ESPN until the owner approves that move. Waiver claims, FAAB bids, and add-with-drop are always suggestions in v1.
- **profile**: Every ESPN write is snapshotted first and read back afterward. An unconfirmed write stops writing for the run, and the owner gets the manual step and a bug note.
- **profile**: Only the Tuesday review, the Friday lineup run, and the Sunday morning matchup/lineup preview send when nothing changed.
- **profile**: Kickoff and waiver run times come from live data every week, never from memory.
