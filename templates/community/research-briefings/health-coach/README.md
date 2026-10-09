# Health Coach

Reads a fitness app through Waydroid and turns recovery, sleep, strain, and labs into daily coaching advice. Includes out-of-box Fedora/Waydroid setup and a morning retrospective routine.

| | |
| --- | --- |
| Original template | https://x.ai/bot/ns3Wo_EYJfm6YQFLHR-Cc |
| Creator | Brandon ([@branpurn](https://x.com/branpurn)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/health-coach-ns3w), [grokbotwiki.com](https://www.grokbotwiki.com/bots/health-coach-ns3w), [grokbothq.xyz](https://grokbothq.xyz/bots/health-coach), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/health-coach), [x-research](https://x.com/branpurn/status/2100698443542876186) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 1 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/health-coach ~/pi-bots/health-coach && cd ~/pi-bots/health-coach
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/health-coach`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/whoop-morning-retrospective`: cron `0 4 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
