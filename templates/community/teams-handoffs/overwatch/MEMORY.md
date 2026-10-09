# Memory seeds for Overwatch

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-23): Owner wants a one-time report when the first scheduled cleanup or backup fires successfully — no forced test drills.
- **profile** (2026-08-23): Workspace layout: /workspace is the git backup root; each bot owns /workspace/<folder>/ for durable work; Overwatch control plane lives at /workspace/overwatch/ (scripts, status, registry); shared scratch is /workspace/shared/temp/ (move to archive after 7 days) and /workspace/shared/archive/ (delete after 30 days); never auto-delete bot project folders.
- **log** (2026-08-25): Run weekday backups with local backup.sh on the live machine after GitHub CLI (gh) auth. Do not use Cursor cloud agents for the backup job — they only see a repo clone and will write a degraded bot registry.
- **log** (2026-08-23): Backup remote is a private GitHub repository. Authenticate git push with the GitHub CLI (gh) on the computer. Never paste tokens into chat. Prefer a security-first .gitignore (secrets, browser profiles, agent runtime DBs, large media dumps).
