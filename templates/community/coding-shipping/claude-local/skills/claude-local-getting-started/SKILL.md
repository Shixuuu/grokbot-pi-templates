---
name: claude-local-getting-started
description: "Use on first wake after Claude Local install (or set up / get started). One install = one GitHub repo. Grok Bot chat is the main interface; Claude Code runs on the Mac in the bound path. Gates: Mac, Claude CLI, pstack, bind, plain-Terminal settings, Grok Bot smoke. Claude mobile Remote Control is optional advanced only. Prefer bot-run checks. Do not pack until Share-ready."
---

# Claude Local  -  getting started

Public-template onboarding. **One install = one GitHub repo** on the owner's Mac. Run on every fresh install's first wake (and on "set up" / "get started" if unbound).

**Cockpit:** the owner talks to **you in Grok Bot**. You run **Claude Code on their Mac** in the bound folder and report results here. They do **not** need the Claude mobile app for normal use.

**Before any real coding ask:** finish this checklist. Prefer **you** running Shell / `ListMachines` / `git` / `claude` checks on the writer Mac over asking the owner to paste output.

**Do not pack/Share** until the owner says the install is ready for strangers. Private pilot is not Share-ready.

## One job

You run coding asks **only** via **Claude Code on the writer Mac** for the **bound repo**. Never Cursor CloudAgent as writer. Never another repo (**second project = new Claude Local install**).

## Say this early (plain words)

Say these in the first-wake hello (short; do not dump Appendix A yet):

1. **Grok Bot** = where you talk to me.
2. **Bound path** = the one local git folder I am allowed to change.
3. **Claude Code on your Mac** = the engine that does the coding.
4. **Claude mobile** = optional. You do not need it for normal use.
5. **If you want the phone later**, three phrases work:
   - **watch on phone**  -  show this project in Claude mobile
   - **watch another project on phone**  -  switch which project is on the phone (only one at a time)
   - **back to Grok Bot** / **stop phone watch**  -  leave phone mode; keep talking here
6. Phone one-device / one-project limits come from **Claude's Remote Control design**, not Grok Bot. That is why the default path stays in Grok Bot.

## Hard order

1. Short hello + next need only. One question at a time. No charter dump.
2. **Repo bind (section 3 A-D) before** settings paste, trust, or smoke.
3. Prefer bot-run checks (`ListMachines`, `which claude`, `claude plugins`, `git remote -v`) over owner pastebacks.
4. Confirm **pstack@pstack-claude enabled** (section 2b) before settings / smoke / coding.
5. After smoke: **cleanup card (section 6)** before any `claude rm`.
6. No standing routines / no pack during first-run unless owner asks.
7. Do **not** block ready on Claude mobile, Devices, or a standing RC host.

## Setup

### 1. Writer Mac

- Point them to [Computers](grokbot://app/v1/settings?id=computers) + [Local execution](grokbot://app/v1/settings?id=local-execution).
- `ListMachines`. Save chosen `machineId` as **writer Mac**.
- You run: `uname -s` and `which claude` on that machine.

### 2. Claude CLI account

Guide one step at a time (owner acts only where required):

- You verify `claude --version` on writer Mac.
- Same **subscribed** Claude account the owner uses for Claude Code on that Mac.
- Never ask for API keys in chat.
- Claude mobile app is **not** required for this default path.

### 2b. pstack plugin (required)

On the writer Mac run `claude plugins` (or `claude plugin list`). Require a row:

- name: `pstack@pstack-claude` (marketplace `pstack-claude`)
- Status: **enabled** (user or project scope)

If **missing**: guide install from the pstack Claude marketplace / plugin docs the owner already uses; re-check until enabled.
If **disabled**: enable it, then re-check.
Do **not** mark ready or start coding/smoke while pstack is missing or disabled  -  bare Claude is not an allowed substitute.

Coding asks after ready: follow pstack (light hybrid default; full poteto / deep brief only when the owner explicitly stamped it).

### 3. Bind one repo (hard gate)

This path is **where every coding Session works**. Memorize it; refuse anything else.

**A.** Ask absolute local path (fill-in; never invent).
**B.** You run `git remote -v` there; show `origin` URLs.
**C.** Owner clear **yes** that this is the bind. No - new path. Second project - new install.
**D.** Save **bound repo** `{ path, origin }`. From now on: every smoke, Session, and coding ask uses this path (or a git worktree of this repo). Refuse other paths/origins. Say once after yes: *"Locked. I'll always work in `<path>` for this install."*

**E. Trust + settings** (only after D)

1. Owner: interactive `claude` once in that path - accept trust.
2. **Leave the Claude TUI** before settings merge:
   - Quit Claude **or** open a **new plain Terminal tab/window** (zsh/bash).
   - Say: paste goes in that **plain shell only**  -  never inside the Claude Code TUI.
3. Only after they confirm plain Terminal, give this merge-safe paste:

```bash
python3 <<'PY'
import json, shutil
from pathlib import Path
from datetime import datetime
p = Path.home() / ".claude" / "settings.json"
p.parent.mkdir(parents=True, exist_ok=True)
data = {}
if p.exists():
    shutil.copy2(p, p.with_suffix(p.suffix + f".bak.{datetime.now():%Y%m%d-%H%M%S}"))
    data = json.loads(p.read_text() or "{}")
perms = data.setdefault("permissions", {})
if not isinstance(perms, dict):
    perms = {}
    data["permissions"] = perms
perms["defaultMode"] = "auto"
data["remoteControlAtStartup"] = True
data["skipAutoPermissionPrompt"] = True
data["skipDangerousModePermissionPrompt"] = True
p.write_text(json.dumps(data, indent=2) + "\n")
print("OK  -  defaults written to", p)
print("  permissions.defaultMode =", perms.get("defaultMode"))
print("  remoteControlAtStartup =", data.get("remoteControlAtStartup"))
print("  skipAutoPermissionPrompt =", data.get("skipAutoPermissionPrompt"))
print("  skipDangerousModePermissionPrompt =", data.get("skipDangerousModePermissionPrompt"))
PY
```

(`remoteControlAtStartup` helps if they later opt into Claude mobile. It does **not** start a phone host and is **not** required for Grok Bot-first ready.)

### 4. Launch habit (default = Grok Bot)

1. Owner asks in **this Grok Bot chat**.
2. You start Claude Code on the writer Mac with **cwd = bound path or its worktree**.
3. Default visibility: **Mac-local / headless** (`claude --bg` or attachable session). Report progress, tip SHA, PRs, and blockers **back in Grok Bot**.
4. Label sessions clearly (`Claude Local · smoke` / `Claude Local · <task>`).
5. Never claim a session is on Claude mobile unless they opted into Appendix A and the host is parked correctly.
6. Multiple Claude Local installs on one Mac may run at the same time on this path. Each stays in its own bound origin.

### 5. Smoke (in Grok Bot)

Say explicitly before launch:

> I'll run a tiny safe ask in `<bound-path>` on your Mac and report the result here in Grok Bot. You do not need Claude mobile for this.

Then run the tiny ask in the bound repo. Report: bound path, session id/label, what happened, tip if any. Then section 6.

### 6. Finished-session cleanup card (required in template / Share pack)

**When:** after smoke; later when finished sessions clutter.

**Never** `claude rm` / force-discard without a confirmed widget.

1. You list: `claude agents --json --cwd <bound-path>` (or `--all`). Filter finished/`state=done` work+smoke. **Never** treat a live RC host process as a disposable session if one exists.
2. Question widget:

**prompt:** `Remove these finished Claude sessions?`

**helpText:** `A finished session is a coding or smoke task that already completed (state=done). Removing it deletes that session record and any disposable worktree Claude created for it under the bound repo. It does NOT delete the main repo, and does NOT discard unpushed commits unless a later card asks. Sessions to remove: <names + ids>.`

**options:** primary `Yes, remove finished sessions` / default `Not now`

3. On yes: `claude rm <id>` each. Confirm count. Never auto-rm without yes.
4. If CLI asks `--discard-unpushed` / force-worktree: **stop**; second danger card  -  never invent force.

## Ready (default path)

Writer Mac remembered · `claude` on PATH · **pstack@pstack-claude enabled** · bound path+origin after yes · settings in **plain Terminal** · Grok Bot smoke succeeded with result reported here · cleanup card offered · still **one-repo-per-install**.

Claude mobile / Devices / standing RC host are **not** ready gates. At ready, remind once: *"Default is Grok Bot. Optional later: watch on phone, switch project on phone, or back to Grok Bot."* Full steps live in Appendix A only when they ask.

## Anti-jobs

No CloudAgent writer · no multi-repo · no Claude/settings/smoke before bind · no coding without pstack enabled · no settings paste in Claude TUI · no coding outside the bound path · no merge/push main|master|dev · no PM/QA/GTM · no fake spend/tips · no requiring Claude mobile for ready · no teaching neutral-folder + same-dir as a required fleet recipe · no `--bg` called "on Claude mobile" · no `claude rm` without section 6 card · no pack until the owner says post-pilot / Share-ready.

## Appendix A  -  Optional: Claude mobile Remote Control

**Default remains Grok Bot.** Use this appendix only when the owner asks to see the live session in the **Claude mobile** app.

### Tell the owner (copy this shape)

> Grok Bot stays your main chat. Three phone commands:
> 1. **watch on phone**  -  park Claude's single Remote Control host on this project, then open Claude mobile then Code then Devices / Sessions.
> 2. **watch another project on phone** (or pick from the list)  -  move that same host to the other project's folder. Only one project shows on the phone at a time (Claude's design, not Grok Bot's).
> 3. **back to Grok Bot** / **stop phone watch**  -  stop the host. Default path again: talk here, I code on your Mac headless.

### Limits (say once  -  attribute Claude)

Say this in plain words when explaining mobile (or if the owner is frustrated by the one-at-a-time phone rule):

> These phone limits come from **Claude's Remote Control design**, not from Grok Bot. Claude allows only **one** Remote Control device per Mac/account, and Sessions on the phone only appear for the project folder where that host is parked. Grok Bot is not imposing that. That is why the default path keeps you in Grok Bot (no phone host required), and why "watch on phone" parks the host for one project at a time.

Also note:

- Other Claude Local installs can keep coding via Grok Bot headless while the phone watches a different project.
- Never imply Grok Bot or this template invented the one-device rule.

### Bot steps (scripted  -  follow [Claude park RC host](sand-workflow:claude-park-rc-host))

1. **Trigger phrases:** "watch on phone," "watch another project on phone," "switch phone to ...," "Claude mobile," "show in Claude app," "Remote Control," "back to Grok Bot," "stop phone watch."
2. **Install once** on the writer Mac: write `~/bin/grokbot-park-rc` from that skill (`chmod +x`). Confirm `tmux` and `claude` are on PATH.
3. **Picker:**
   - Solo install - confirm widget: `Show this project on Claude mobile?` - Yes / Not now.
   - Multiple installs - read `$HOME/.grokbot/claude-local-fleet.json` if present; show one option per registered project (plus Not now). Upsert this install into that file when they opt into multi-bot mobile switching.
4. **On Yes / project pick:** run
   `grokbot-park-rc --path "<chosen-bound-path>" --name "<hostName>"`
   Solo host name default: `GrokBot - Claude Local`. Shared multi-bot name: `GrokBot - Mac`.
5. **Expect** script output starting with `OK parked...`. Then start a **labeled** Session in that bound path / worktree (`Claude Local · <task>`).
6. **Owner phone checklist** (say these steps):
   - Same Claude account as the Mac CLI
   - Claude mobile then **Code**
   - **Devices** = the host name above (pipe)
   - **Sessions** = the labeled task
7. If they tapped **Not now:** keep Grok Bot / headless coding; do not claim mobile visibility.

### Switch to another project on the phone

When they want a **different** Claude Local install / bound repo on Claude mobile (not back to default):

1. Trigger phrases: "watch on phone" again, "switch phone to ...," "show <other project> on mobile," or pick from the fleet widget.
2. Run the same park flow for the **other** bound path:
   `grokbot-park-rc --path "<other-bound-path>" --name "<hostName>"`
   The script stops the old host first, then parks in the new folder (one device  -  Claude's design).
3. Tell the owner: *"Phone is now on <label>. The previous project is headless in Grok Bot until you watch it again."*
4. Start or resume a labeled Session only in **that** project's bot / bound path. This install does not code in the other origin.
5. Remind: still only one project phone-visible at a time.

### Back to default (Grok Bot-first)

When they are done watching on Claude mobile (leave phone mode entirely):

1. Trigger phrases: "back to Grok Bot," "stop phone watch," "done with mobile," "return to default."
2. Stop the parked host (do **not** leave it running "just in case"):
   - Prefer: `grokbot-park-rc --stop` (see park skill), **or**
   - `tmux kill-session -t grokbot-rc-host` if that session exists, **or**
   - Ctrl+C the Terminal that is running `claude remote-control`.
3. Tell the owner: *"Phone watch is off. Keep talking here in Grok Bot. I'll code on your Mac headless and report here. Claude mobile is optional anytime with watch on phone."*
4. Resume normal launches (Mac-local / `--bg`). Do not claim Sessions are on the phone.
5. They do **not** need to park the host in a neutral folder to "reset." Stopping the host **is** the reset. (Stopping the host is also how you free Claude's one-device slot  -  Claude's design.)

### Do not

- Run the Appendix A **park/host steps** during first-run ready unless they opt in. (Still **say** the three phone phrases in Say this early.)
- Teach neutral-folder + `--spawn=same-dir` as the mobile recipe.
- Start a second `claude remote-control` host.
- Call bare `--bg` "on Claude mobile."
- Leave a parked host running after they asked to return to default.

## Share-ready pack checklist (when packing later)

- [ ] This skill included (Grok Bot-first default, one-repo-per-install, section 6 cleanup, Appendix A: watch / switch project / back to default)
- [ ] [Claude park RC host](sand-workflow:claude-park-rc-host) included as **optional advanced** only
- [ ] Profile `avatarColor=orange`
- [ ] Storefront says Grok Bot is the interface; Claude Code on Mac; one repo per install
- [ ] Stranger install-test passed (fresh install, first-wake)
- [ ] No pilot PII / secrets in pack
- [ ] Not Share-ready until install-test + this checklist pass

## Blockers

Mac offline, Shell blocked, Claude missing, pstack missing/disabled, auth expired, bad path, origin declined, wrong repo: say failure + need, stop. No CloudAgent workaround. Claude mobile blank is **not** a default-path blocker. If an orchestrator handed a task id, report blockers against that id; otherwise tell the owner.
