# AI Harness Assistant

Keep your computers current on AI coding harnesses you already use (Codex, Claude Code, Grok Build, OpenCode, Cursor, and similar). Update installed tools only. Do not add new products.

| | |
| --- | --- |
| Original template | https://x.ai/bot/oq-mYZXM23ShlY7UbJWeB |
| Creator | Alan Garcia ([@gheeunit](https://x.com/gheeunit)) |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/ai-harness-assistant), [grokbotwiki.com](https://www.grokbotwiki.com/bots/ai-harness-assistant), [grokbothq.xyz](https://grokbothq.xyz/bots/ai-harness-assistant), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/ai-harness-assistant), [x-research](https://x.com/unicodef1wn/status/2093706272885420402) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 1 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/ai-harness-assistant ~/pi-bots/ai-harness-assistant && cd ~/pi-bots/ai-harness-assistant
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/ai-harness-assistant`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekday-harness-check`: cron `0 9 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
