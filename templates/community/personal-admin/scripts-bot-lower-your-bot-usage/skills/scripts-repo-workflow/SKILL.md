---
name: scripts-repo-workflow
description: "Use this when you manage a private scripts repo that turns repeatable browser work (wp-admin, cPanel, mail, invoicing) into ./run scripts: how a new script goes from request to PR, review, merge and merge signal."
---

# Scripts repo workflow

## Goal
Save tokens. A script earns its place only if it replaces a long, repeated browser click-path with one `./run <name> [args]`. No wrappers around curl, `gh`, dig, openssl or an existing connector, and no "open the dashboard" helpers.

## Repo shape
- One entrypoint: `./run <name> [args…]`; `./run --list` shows the catalog. Scripts live under `scripts/<service>/`, recurring multi-step flows under `workflows/`.
- Reusable across clients: site URL, post type, taxonomy, mailbox, hosting account are arguments or env. Client values live in local config outside git (e.g. `~/.config/<org>/*.json`) or a vault, never hardcoded.
- Secrets only via env, secret cards or a vault. Never in git, chat, tests or logs.
- Keep the catalog (README plus the shared wiki page other bots read) in sync after every merge.

## From request to PR
1. A bot sends a concrete click-path it already judged as CLI/REST/IMAP/API-shaped. Reject feasibility questions and browser wrappers politely.
2. Write a short spec: name, args, env vars, output (JSON on stdout), exit codes, what it must never do (publish, delete, send without confirm).
3. Hand the build to a coding agent as a PR. Tell it: follow `AGENTS.md`, run the staged secret check before every commit, no secret-like literals, real hosts or client data in tests (use a fake-values helper).
4. Writes get `--dry-run` first; risky writes need an explicit `--confirm`.

## Review before merge
1. Check out the PR branch in a throwaway worktree (`git worktree add /tmp/prN origin/<branch>`).
2. Run the unit tests with mail/SMTP/IMAP env vars unset, so nothing real is touched.
3. Run the full secret check (gitleaks via pre-commit hook plus the repo's `secret-check --all`).
4. Check CI runs and PR comments (including any secret-scanner bot). Try one dry-run of the new command.
5. Remove the worktree.

## Merge
- Merge only after an explicit yes from the owner: short summary, then a yes/no question.
- Squash-merge, pull the shared checkout, update the catalog.
- Send the coordinating bot a merge signal right away: repo, PR number, merge commit, so it can check secret-scanner alerts.
- Tell the bot that asked for the script how to call it. Archive the coding agent.

## Never
- Merge without the owner's yes.
- Commit secrets, client data or real hostnames.
- Build a second scripts repo or leave scripts only in chat.
