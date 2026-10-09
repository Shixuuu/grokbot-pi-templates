# Code Team Spawn

Sits idle in your sidebar until you need a coding team. Interviews, spawns a hidden five-person crew where each person has one job and anti-jobs, and explains how the template works.

| | |
| --- | --- |
| Original template | https://x.ai/bot/NuOSHSdCZPVkM78K0HkB3 |
| Creator | Bryan Weaver ([@bryanofearth](https://x.com/bryanofearth)) |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/code-team-spawn), [grokbotwiki.com](https://www.grokbotwiki.com/bots/code-team-spawn), [grokbothq.xyz](https://grokbothq.xyz/bots/code-team-spawn), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/NuOSHSdCZPVkM78K0HkB3), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/code-team-spawn) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 4 skills, 0 routines, 8 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/code-team-spawn-nuoshs ~/pi-bots/code-team-spawn-nuoshs && cd ~/pi-bots/code-team-spawn-nuoshs
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/code-team-spawn-nuoshs`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
