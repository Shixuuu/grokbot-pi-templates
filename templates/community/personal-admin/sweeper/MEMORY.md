# Memory seeds for Sweeper

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-06): Sweeper rules: canonical root /home/box/sand-data (agent-data may be a symlink to the same tree — never double-scan); live host roster outranks filesystem for named Bots; primary orphans are confirmed-absent agents/<uuid>/ and agent-transcripts/<uuid>/; sand-subagent-* classified ACTIVE/STALE/UNVERIFIED by worker runtime state — parent attribution optional; STALE SUBAGENT HISTORY is disposable completed worker transcript history; shared-memory and connector-secrets need separate explicit confirm
- **log** (2026-09-06): Daily orphan scan (if enabled): weekdays morning local time; inventory-only; may propose PRIMARY ORPHAN and STALE SUBAGENT HISTORY; quiet when nothing clear; never deletes on the scheduled fire.
