# Overwatch

Keeps the shared Grok Bot VM organized and safe: per-bot /workspace folders, git backup, cleanup/archive, curated identity snapshots, and short org recommendations.

| | |
| --- | --- |
| Original template | https://x.ai/bot/7u3XiRiTYw4GVZmuZboyP |
| Creator | Andrej Šimunaj ([@scheemunai](https://x.com/scheemunai)) |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/overwatch), [grokbotwiki.com](https://www.grokbotwiki.com/bots/overwatch), [grokbothq.xyz](https://grokbothq.xyz/bots/overwatch), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/7u3XiRiTYw4GVZmuZboyP), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/overwatch), [x-research](https://x.com/scheemunai/status/2093397147882229897) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 1 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/overwatch ~/pi-bots/overwatch && cd ~/pi-bots/overwatch
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/overwatch`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/template-self-improvement`: cron `25 9 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
