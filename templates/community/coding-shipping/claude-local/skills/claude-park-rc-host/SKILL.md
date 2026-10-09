---
name: claude-park-rc-host
description: "Optional Claude mobile: watch on phone, switch project, or stop back to Grok Bot default. Script includes --stop. Attribute one-device limits to Claude's design."
---

# Claude park RC host (optional advanced)

**Default path is Grok Bot-first.** The owner talks in Grok Bot; you run Claude Code on the Mac in the bound path; results come back in Grok Bot. Use this skill **only** when they explicitly ask about **Claude mobile** visibility.

## Three owner commands (say these clearly)

| They say | You do | Result |
|---|---|---|
| **watch on phone** | Park host in chosen bound path; start labeled Session | That project can show in Claude mobile |
| **watch another project on phone** / pick from list | Park host in the **other** bound path (script stops old host first) | Phone swaps to that project; previous goes headless in Grok Bot |
| **back to Grok Bot** / **stop phone watch** | `grokbot-park-rc --stop` | Host off; default path again (Grok Bot + headless Mac coding) |

Always attribute one-device / one-project-on-phone limits to **Claude's Remote Control design, not Grok Bot**.

## Hard rules

- Never start a second `claude remote-control` while one is live. Park and `--stop` both clear the old host first.
- Park only into a **known bound path** (this install, or `$HOME/.grokbot/claude-local-fleet.json`). Never invent a path. Never use neutral-folder + `--spawn=same-dir` as a phone recipe.
- `--spawn=worktree` only when parking.
- Bare `claude --bg` is headless only. Never call it mobile-visible.
- Kill only the standing host (`claude remote-control` subcommand), not Sessions that merely pass `--remote-control`.
- Do **not** run this during first-run ready unless the owner opted into mobile.

## What to tell the owner

> Grok Bot stays your main chat. Say **watch on phone** to park Claude's single host on a project. Say **watch another project on phone** to move it. Say **back to Grok Bot** to stop the host and return to default. Only one project on the phone at a time because of Claude's design, not Grok Bot's.

## Optional fleet file

`$HOME/.grokbot/claude-local-fleet.json` (multi-bot picker). Upsert this install when they opt into multi-bot mobile switching. Solo installs can skip until then.

```json
{
  "hostName": "GrokBot - Mac",
  "installs": [
    {
      "label": "My app (Claude Local)",
      "boundPath": "/absolute/path/to/checkout",
      "origin": "https://github.com/owner/repo.git"
    }
  ]
}
```

## Install the park script (once per writer Mac)

Write `~/bin/grokbot-park-rc` (or `$HOME/.local/bin/grokbot-park-rc`), `chmod +x`:

```bash
#!/usr/bin/env bash
set -euo pipefail
usage() {
  echo "Usage:" >&2
  echo "  grokbot-park-rc --path /abs/git/checkout [--name 'GrokBot - Mac']" >&2
  echo "  grokbot-park-rc --stop" >&2
  exit 2
}
stop_host() {
  while read -r pid; do
    [[ -n "${pid:-}" ]] || continue
    kill "$pid" 2>/dev/null || true
  done < <(pgrep -f 'claude remote-control' || true)
  sleep 1
  if pgrep -f 'claude remote-control' >/dev/null 2>&1; then
    pkill -9 -f 'claude remote-control' || true
    sleep 1
  fi
  TMUX_SESSION="grokbot-rc-host"
  tmux has-session -t "$TMUX_SESSION" 2>/dev/null && tmux kill-session -t "$TMUX_SESSION" || true
  echo "OK stopped Claude Remote Control host (back to Grok Bot default / free device slot)"
}
PATH_ARG=""
NAME="GrokBot - Mac"
STOP=0
while [[ $# -gt 0 ]]; do
  case "$1" in
    --stop) STOP=1; shift ;;
    --path) PATH_ARG="${2:-}"; shift 2 ;;
    --name) NAME="${2:-}"; shift 2 ;;
    -h|--help) usage ;;
    *) usage ;;
  esac
done
if [[ "$STOP" -eq 1 ]]; then
  stop_host
  exit 0
fi
[[ -n "$PATH_ARG" && -d "$PATH_ARG" ]] || { echo "ERROR: --path must be an existing directory (or use --stop)" >&2; exit 1; }
PATH_ARG="$(cd "$PATH_ARG" && pwd)"
if [[ ! -d "$PATH_ARG/.git" ]] && ! git -C "$PATH_ARG" rev-parse --git-dir >/dev/null 2>&1; then
  echo "ERROR: --path must be a git checkout" >&2
  exit 1
fi
command -v claude >/dev/null || { echo "ERROR: claude not on PATH" >&2; exit 1; }
command -v tmux >/dev/null || { echo "ERROR: tmux is required to keep the host alive" >&2; exit 1; }
stop_host >/dev/null
TMUX_SESSION="grokbot-rc-host"
tmux new-session -d -s "$TMUX_SESSION" -c "$PATH_ARG"
tmux send-keys -t "$TMUX_SESSION" "claude remote-control --name $(printf %q "$NAME") --spawn=worktree" Enter
sleep 2
echo "OK parked host name=$NAME cwd=$PATH_ARG tmux=$TMUX_SESSION"
```

## Owner UX

### Watch / switch project

1. Confirm `tmux` + `claude`. Install script if missing.
2. Solo: `Show this project on Claude mobile?` - Yes / Not now.
   Fleet: `Which project should be visible on Claude mobile?` (one option per fleet install + Not now). Same widget for **switch**.
3. On pick: `grokbot-park-rc --path "<chosen>" --name "<hostName>"` (stops previous host automatically).
4. Expect `OK parked`. Start labeled Session only in **this** bot's origin if that was chosen; if another install was chosen, park and send them to that bot.
5. Phone checklist: same Claude account then Code then **Devices** = host then **Sessions** = labeled task.

### Back to default

1. On "back to Grok Bot" / "stop phone watch": run `grokbot-park-rc --stop`.
2. Expect `OK stopped...`.
3. Say: phone watch off; keep talking in Grok Bot; headless Mac coding; watch on phone anytime later.
4. Do not leave the host running after they asked to return to default.

## Report

Action taken (park / switch / stop), label, host name, bound path or stopped, and the matching owner sentence. Note Claude's one-device limit when relevant.
