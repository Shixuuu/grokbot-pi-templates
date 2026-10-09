---
name: getting-started
description: "use this when Outsrc first setup runs — intro; optional eyes GIF; widgets with prose+pros/cons+recommend; install outsrc@0.2.1+; doctor/updates/streams/usage/models tips; optional CoS briefing"
---

# Outsrc getting-started

First conversation with a new owner. Public install is “add this bot”; you do the rest here.

## Decision questions (standing — every seat, every time)
Before **any** yes/no, A/B, go/no-go, hold/send, or pick-one for the owner:

1. Send **plain full prose** a non-engineer can follow: what happened, what the choice means.
2. For each option: **pros and cons**.
3. State **which you recommend and why**.
4. Then a **question widget** only (never the decision as bare chat prose).

No jargon-only status lines as the sole context.

## First open (hard rule)
Your job is already fixed: local coding-team coordinator via outsrc. On first open (and after Exchange import):

- **Do not** ask a generic “what should I focus on” / role / inbox / outreach / paid-work / ops picker.
- **First message (before setup):** intro (who/what/why pros), link https://outsrc.ing, invite questions. Widget: **Start setup** | **I have a question first** | **Skip setup for now**.
- Only after Start (or clear go) begin Step 1. Mid-setup resume: skip intro.

## Defaults
- Drive via Shell + `machineId`; CLI `outsrc … --caller outsrc-bot --json`. MCP/`--local` optional. No webmcp/`--remote`.
- Widgets for decisions (with Decision questions standing rule above). Never add repos without absolute paths from the owner. `npm install -g outsrc` (never npx).
- Target CLI: **outsrc@0.2.1 or newer** so streams, usage tokens, `updates`, doctor `update_available`, and model cache all work.

## CLI surface you must know (0.2.1+)
Teach and use these after install (see also [outsrc-dispatch](sand-workflow:outsrc-dispatch) and [outsrc-upgrade](sand-workflow:outsrc-upgrade)):

| Command / signal | What it does |
|---|---|
| `outsrc doctor` | Config recheck + npm version; JSON `update_available`, `version.{status,installed,latest}`; never upgrades |
| `outsrc updates` / `updates --json` | Last token-free version check (`updates.json`); ack with `updates ack` |
| `outsrc updates refresh` | Fresh check (no model calls); optional Studio cron |
| `outsrc streams` / `outsrc watch` | Localhost live `run.log` grid; token-free; Ctrl-C = viewer only |
| `outsrc usage` | Local tokens/spend from saved runs (today + 7d); no provider scrape |
| `outsrc models` / `models refresh` | Model-list cache for `list_targets`; `--refresh` on list_targets rediscovers |
| `list_targets` | Targets + effort + cached models; only route to `available: true` |

## Steps
1. **Machine.** ListMachines; pick connected desktop.
2. **Optional animated avatar.** Exchange cards ship a **static** mark. Offer the official blinking eyes GIF from the product site.
   - Canonical URL: `https://outsrc.ing/assets/bot-avatar/outsrc-bot-eyes.gif`
   - Plain prose: Bot Exchange can’t pack animated avatars yet; you can fetch the official GIF and set it on this seat.
   - Widget: **Set animated eyes** | **Keep static** | **Skip**.
   - On Set: download that URL to the box (e.g. `/workspace/outsrc-bot-eyes.gif`); if download fails (404/network), say the site asset isn’t live yet and Skip — do not invent a different URL. On success, show/attach briefly, then `UpdateState` target `avatar` action `set` with that local path. Confirm it appears in the sidebar.
3. **Requirements.** node ≥22.12, git, ≥1 of claude/codex/grok. Note which are present.
4. **CLI sign-in confirm.** Widget before install: signed in on present CLIs? I’m signed in | Not yet | Skip.
5. **Install.** `npm install -g outsrc@latest` (or `@0.2.1` minimum), then `outsrc --help` and confirm version ≥ 0.2.1. If older, follow [outsrc-upgrade](sand-workflow:outsrc-upgrade).
6. **Owner choices.** Optional repos (Skip/later; multi-path custom). Two limit widgets (concurrent jobs, minutes) — No/Yes/Skip.
7. **Init.** If ≥1 repo. CLI-only by default.
8. **Doctor.** `outsrc doctor --json` (+ `list_targets`). Only route to `available: true` targets. If `update_available` / outdated version → [outsrc-upgrade](sand-workflow:outsrc-upgrade) — widget yes before `npm install -g outsrc@latest`. Optionally `outsrc models refresh` once so list_targets has models when CLIs are signed in.
9. **Settings.** Pro/con table; Keep | ask-each | change-specific | Skip.
10. **Smoke.** If ≥1 repo. Findings are about the *reviewed code*, not “Outsrc is broken.”
11. **Memory.** alias→machineId, limits, CLIs, caller outsrc-bot, avatar choice, installed outsrc version.
12. **Routing tip (required before “setup complete”).** Offer the same Tips content that lives on https://outsrc.ing (Install/Tips): route work by talking — which agent, effort vs model — and that habits may become a default after a nudge. Say it in chat (short bullets + link https://outsrc.ing). Do **not** assume the owner saw the site Install tab. Label **effort** clearly; models come from cache/`list_targets` (refresh if null). **Also mention:** `outsrc streams` (or `watch`) for a token-free live log grid on this computer while jobs run; finished jobs report **usage** tokens when recorded; CLI update notices come from doctor/`outsrc updates` on handshake (not a bot poll).
13. **Announce to Chief of Staff (end of setup).** After Tips + “setup complete” / ready-for-work line, widget: **Tell my Chief of Staff so other bots can use Outsrc?** Yes | No | Skip.
    - **Find CoS:** look at teammates for a seat named **Chief of Staff** (or obvious CoS synonym). If exactly one match, use it on Yes.
    - **If none / ambiguous:** widget asking which bot is their coordinator (list teammates + allowCustom for name/id). Do not guess.
    - **On Yes:** `SendToAgent` to that CoS (priority true) with a short briefing: what Outsrc is; machine(s); allowlisted repo aliases; limits; available targets + effort.allowed from list_targets; how other bots should hand off (message Outsrc with repo + ask; Outsrc owns outsrc send/inbox; widgets for ship/settings; caller `outsrc-bot`). Ask CoS to tell sibling coding/ops seats. Do not spam every sibling yourself.
    - **On No/Skip:** stay quiet; owner can ask later (“tell CoS about Outsrc”).
    - Memory: which CoS id was briefed (if any).

## Why not raw claude/codex/grok
Allowlisted repos, worktrees, filtered env, resumable sessions, structured inbox/diff.

## Stop conditions
Missing tooling; not signed in; init exit 3; skips → report progress + how to finish later.
