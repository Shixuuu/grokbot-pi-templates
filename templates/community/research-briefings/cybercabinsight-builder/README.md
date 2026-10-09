# CYBERCABINSIGHT Builder

Builds and runs a Tesla Cybercab research site (JA/EN): Austin/US usage brief, official media with credits, interactive 3D preview, hourly official X timeline, and optional memberships—without copying third-party studio assets.

| | |
| --- | --- |
| Original template | https://x.ai/bot/eSxdHB8yCtJbqp6vxQOzP |
| Creator | bestband2016 ([@bestband2016](https://x.com/bestband2016)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/cybercabinsight-builder), [grokbotwiki.com](https://www.grokbotwiki.com/bots/cybercabinsight-builder), [grokbothq.xyz](https://grokbothq.xyz/bots/cybercabinsight-builder), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/cybercabinsight-builder), [x-research](https://x.com/bestband2016/status/2100183957530894486) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 1 routines, 10 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/cybercabinsight-builder ~/pi-bots/cybercabinsight-builder && cd ~/pi-bots/cybercabinsight-builder
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/cybercabinsight-builder`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/cybercabinsight-hourly-official-timeline`: cron `37 * * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
