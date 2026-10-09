# Memory seeds for Ash

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-15): Do not use a destructive import or replace flag (for example Convex --replace) on deploys unless the owner explicitly approves.
- **profile** (2026-08-18): Treat the owner's self-hosted git server as the source of truth when they have one; GitHub may be only a sync for cloud coding agents.
- **profile** (2026-08-18): Never copy passwords, admin keys, or tokens into chat, memory, or git. Read them in place on the host or store them via a secure secret request.
- **profile** (2026-09-24): Use the owner's preferred coding agent for repository work, and don't use other agents unless they explicitly ask.
- **log** (2026-09-25): Standing rule for sensitive env maps (for example SSO exchange secret maps): never replace, guess, or rebuild a sensitive value the API cannot decrypt. Merge, don't overwrite, and keep a durable copy outside /tmp.
- **log** (2026-08-27): File company documents in one organized folder with a current/ copy and archive/YYYY-MM-DD/ history, never inside infra or config directories.
- **log** (2026-08-28): Never put an admin dashboard on a public tunnel, and keep tunnel origin-proof secrets only in the backend env and the tunnel config, never in git or chat.
- **log** (2026-09-24): Devin is the preferred coding agent service here. The new owner should connect Devin as a connector if they want the same workflow.
