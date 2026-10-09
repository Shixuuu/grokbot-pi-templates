---
name: outsrc-add-machine
description: "use this when Outsrc should add or register a second computer (e.g. MacBook beside Mac Studio) — Grok Bot Local Execution + per-machine outsrc@0.2.1+ init"
---

# Outsrc add machine

Use this when the owner wants Outsrc on a **second (or additional) computer** alongside one that already works — e.g. a second Mac next to your Mac. First-time owners use [getting-started](sand-workflow:getting-started) instead.

Each desktop has its own `~/.outsrc` and repo allowlist. Nothing copies from another machine. Decision questions use widgets only.

## A. Register the computer with Grok Bot (platform)

Outsrc can only Shell a machine that ListMachines shows as **connected**.

1. On that computer, open the **Grok Bot desktop app** (the machine must run the app; chat-from-phone is not enough).
2. Turn on **Local Execution**: open Settings (sidebar account button, Cmd+, or command palette → Open settings) → **General** → [Local Execution](grokbot://app/v1/settings?id=local-execution). Enable it if off.
3. Confirm the computer is listed under Settings → **Computer** → [Computers](grokbot://app/v1/settings?id=computers). First-time pairing may need the owner to approve local-exec on that machine.
4. In this chat, call **ListMachines**. Wait until the target desktop’s `connected` is true. If it stays false: owner keeps the desktop app open and signed in on that Mac; do not invent a remote tunnel or webmcp path.
5. Note `machineId` and label. All later Shell/Read for this setup use that `machineId`.

## B. Install outsrc on that machine (harness)

Run via Shell with the new `machineId` (same recipe as getting-started, fresh allowlist):

1. **Requirements:** `node --version` ≥ 22.12 (22.x / 24.x / 26+); `git --version`; at least one of `claude`, `codex`, `grok` on PATH. If missing, tell the owner what to install and stop.
2. **Install:** `npm install -g outsrc@latest` (never npx). Confirm `outsrc --help` and version **≥ 0.2.1** (streams, usage, updates, doctor `update_available`, model cache). If older → [outsrc-upgrade](sand-workflow:outsrc-upgrade).
3. **Owner choices (widgets):** absolute repo paths **on this machine** + short aliases; `limits.max_jobs` (default 4); `limits.max_run_minutes` (default 120). Do not reuse another machine’s paths.
4. **Init:** `outsrc init --json --repo <path> … [--max-jobs …] [--max-run-minutes …]`. Omit `--local` unless they also want MCP on a local CLI. Never `--remote` / webmcp. Exit 0 = done; exit 3 = relay `needs_human`, wait, rerun same command; exit 1 = report, no blind retry.
5. **Doctor + models:** `outsrc doctor --json`, then `outsrc list_targets --caller outsrc-bot --json`. Optionally `outsrc models refresh` once. Only use `available: true`. Mention plugin `verified: false` once. Note `update_available` if set.
6. **Settings:** offer defaults (auto_commit, setup, retention, permissions, effort); change only after widget yes via `outsrc config set`.
7. **Smoke (recommended):** one small `--kind review` send with `--caller outsrc-bot --json` and a stable `--request-id`; poll inbox; report with evidence + usage if present. Mention `outsrc streams` runs **on this machine** for live logs.
8. **Memory:** save `alias → machineId` for **this** machine (merge into the map; keep Studio entries). Caller stays `outsrc-bot`.

## C. Dispatch after that

[outsrc-dispatch](sand-workflow:outsrc-dispatch): ListMachines → pick the `machineId` for that alias → Shell there. If disconnected, use [outsrc-failures](sand-workflow:outsrc-failures) (reconnect app; no remote relay). Streams/usage/updates are per-machine (`~/.outsrc` on that desktop).

## Do not
- Copy another machine’s `~/.outsrc` or repo paths.
- Raise limits or change settings without a widget yes.
- Use webmcp / `--remote` / invent tunnels.
