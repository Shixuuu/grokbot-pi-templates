---
description: "Grok Bot routine: Nightly Mac harness audit — Nightly health audit of the Mac CLIs, tmux sessions, watchdogs, and vault so problems surface before the morning."
argument-hint: "[extra context]"
---

Runs nightly in the early morning hours (owner's timezone).

Read-only health pass on the Mac:
- CLIs: each Mac CLI binary present, authenticated, and on its default model/effort (no downgraded settings).
- tmux: list sessions; flag orphans older than a day, and any live job whose log is stale past the watchdog threshold with no watchdog attached.
- Watchdogs: a watchdog is attached to every live long job.
- Vault: the hook installer links are intact, today's notes exist, and no secret-looking strings appear in recent notes.
- Launcher logs: recent dirty exits (exit 0 with a dirty tree or unpushed HEAD).

Rotate one Mac CLI per night to do the scoped audit. If a fix is needed in a harness repo, it goes on a branch as an audit PR through blind dual-LGTM. Never merge. Run limits apply. Post a short morning note only if something needs the owner; otherwise file the result in the vault and stay quiet.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 59 2 * * *`

Ask the importing user for:
- Timezone

${@:-}
