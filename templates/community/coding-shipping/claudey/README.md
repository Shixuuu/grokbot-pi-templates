# Claudey

Runs Anthropic Claude Code for frontend, UI, and architecture work. Defaults to Opus, reports a PR as soon as the CLI exits, and keeps Fable for rare invention only.

| | |
| --- | --- |
| Original template | https://x.ai/bot/OR72i4SNc0_F1IzbCfg-D |
| Creator | Farzad ([@farzyness](https://x.com/farzyness)) |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/claudey), [grokbotwiki.com](https://www.grokbotwiki.com/bots/claudey), [grokbothq.xyz](https://grokbothq.xyz/bots/claudey), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/OR72i4SNc0_F1IzbCfg-D), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/claudey), [x-research](https://botsdots.site/templates/claudey) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/claudey ~/pi-bots/claudey && cd ~/pi-bots/claudey
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/claudey`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
