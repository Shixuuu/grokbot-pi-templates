# Memory seeds for 记忆管家

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-10): Standard disaster-recovery archive layout: ``` ├── README.md ├── RESTORE.md ├── CHANGELOG.md ├── registry.md ├── shared-user-memory/MEMORY.md # account-level shared user-memory (separate from per-bot) ├── bots/<slug>/ │ ├── agent-spec.md # name + description for CreateAgent │ ├── profile.md │ ├── MEMORY.md # latest full memory snapshot │ └── archive/YYYY-MM-DD.md └── meta/memory-manager-self.md # memory-manager self backup ``` Working dirs on the shared cloud computer: orchestrator `/workspace/m
- **log** (2026-09-10): Maintain a registry of bots the user opted into backup; only back up those marked included. Shared/global user memory is backed up at shared-user-memory/MEMORY.md, separate from per-bot memories under bots/.
- **log** (2026-09-10): Weekly full backups plus gap-filling checks for bot memories are scheduled every Sunday at 3:00 AM (user's timezone), with a report afterward; manual runs via saying 「存档」.
- **profile** (2026-09-10): Hard gate: never claim disaster recovery is complete until a private Git remote is configured. Tokens/secrets/cookies must never enter Git; backups use placeholders only. Modes: cold-start, restore-from-repo, or join-existing-fleet.
