---
name: outsrc-upgrade
description: "use this when Outsrc should check for a pending CLI upgrade on first CLI handshake (updates.json or doctor update_available) or owner ask — no Grok poll routine; install latest only after widget yes; expect outsrc@0.2.1+"
---

# Outsrc CLI upgrade

Detect and apply upgrades for the global `outsrc` package (and related products via `outsrc updates`) on the owner’s machine. Widget yes required before any upgrade.

**Baseline:** Exchange templates expect **outsrc@0.2.1+** (streams, doctor `update_available`/`version`, `outsrc updates`, finished-run usage tokens, model cache). If installed is older, treat upgrade as high priority before promising those features.

## When
- **Handshake (default):** on the first Outsrc CLI call in a conversation with the owner (doctor, list_targets, send, inbox, or `updates --json`), fold in a cheap pending-update read — do **not** burn tokens on a separate Grok Bot poll routine.
- Owner asks “is outsrc outdated?” / “upgrade outsrc”
- Setup doctor reports update available
- Before relying on a 0.2.1+ feature the installed CLI lacks

## No token polling
Do **not** create or run a Grok Bot routine that periodically checks for CLI updates. Studio may cron `outsrc updates refresh` (writes `~/.outsrc/updates.json` without calling models). The bot only **reads** that signal (or doctor) when it already talks to the CLI / owner asks.

## Prefer updates + doctor (0.2.1+)
1. **`outsrc updates --json`** (or `--caller outsrc-bot --json`): print last check; list **unread** pending (product, installed, latest). After the owner has seen them (or declines), `outsrc updates ack <id>…` or `--all` so they don’t repeat.
2. **`outsrc updates refresh`**: token-free version probe (vendor `--version` / npm registry). Never installs. Use when the owner asks for a fresh check or Studio cron hasn’t run.
3. **`outsrc doctor --caller outsrc-bot --json`**: includes `update_available` (true only when installed outsrc is behind npm) and `version: {status, installed, latest}` (`status`: current | outdated | ahead | unknown). Doctor never upgrades. Registry timeout → `unknown`, `update_available` false, exit unaffected. Doctor may also summarize `updates` for other products.
4. **npm fallback** only if doctor/updates unavailable (ancient install): `npm outdated -g outsrc --json` or `npm view outsrc version` vs installed.

## Steps (upgrade path)
1. **Machine.** ListMachines → connected desktop where outsrc is installed.
2. **Installed.** Confirm `outsrc` on PATH / `npm list -g outsrc --depth=0`. If missing → getting-started install, not upgrade.
3. **Pending?** Handshake read above.
4. **Report.** Current vs latest; pending or not. Do not upgrade yet.
5. **Widget.** If pending: **Upgrade to <latest> now** | **Not now** | **Skip**. Note: global npm on this machine; may interrupt in-flight CLIs; re-run doctor after.
6. **Upgrade (only on Yes).** `npm install -g outsrc@latest` (never npx). Confirm version + `outsrc doctor`.
7. **After.** Surface doctor/plugin warnings once; no engine pin without separate owner yes. Ack updates so the same notice doesn’t repeat every handshake.

## Notes
- Caller for mailbox tools stays `outsrc-bot`; upgrade does not change caller.
- After upgrade to 0.2.1+, mention once: `outsrc streams` / `watch`, `outsrc usage`, `outsrc models refresh`, and doctor/`updates` are available.
