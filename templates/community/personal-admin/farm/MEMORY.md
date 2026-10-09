# Memory seeds for Farm

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-01): Worker farm lives on the bot computer: SQLite control plane, one isolated profile dir per seat, one active job per worker, parallel only across workers. No quota hopping. The user signs in on that computer; passwords and tokens never go in chat or logs.
- **profile** (2026-09-02): Submit fat unsupervised jobs (goal, constraints, done-when). Tick only leases. The operator then runs the CLI in that seat's profile dir and the worker writes compact result.json. Do not spend a strong seat on work a few dispatcher tool calls could finish.
- **log** (2026-09-02): Default two live seats until the user adds more: a stronger model for long/hard jobs, a volume model for research. Extra seats stay disabled. Cooldown that seat when the provider hits a limit; do not rotate the job to another login.
