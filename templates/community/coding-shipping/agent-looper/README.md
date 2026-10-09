# Agent Looper

You say what to build and how to know it's done. It keeps a coding agent working on your computer until that check passes — Cursor, Cline, OpenCode, Pi, Codex, DSH, Muse, or Claude Code if already installed.

| | |
| --- | --- |
| Original template | https://x.ai/bot/AETdGbRRNWfckrRGv22LD |
| Creator | dancingteeth dancingteeth ([@dancingteeth](https://x.com/dancingteeth)) |
| Category | community / coding-shipping (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/agent-looper), [botsdots.site](https://botsdots.site/templates/agent-looper), [grokbotwiki.com](https://www.grokbotwiki.com/bots/agent-looper), [grokbothq.xyz](https://grokbothq.xyz/bots/agent-looper), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/AETdGbRRNWfckrRGv22LD), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/agent-looper), [x-research](https://x.com/dancingteeth/status/2093868415542845628) |
| Fidelity | **full** (full recipe, template version 13) |
| Contents | 4 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/agent-looper ~/pi-bots/agent-looper && cd ~/pi-bots/agent-looper
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/agent-looper`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
