# Forge

Factory manager for ready specs on flow-next 5.4: /flow conductor (attended) and flow --auto (unattended) through draft PR and land. Idle while ready work exists is the failure mode. Empty inbox is quiet.

| | |
| --- | --- |
| Original template | https://x.ai/bot/7GgZtqkhyLzKKMNUa7dhd |
| Creator | Daniel Killenberger ([@DanKillenberger](https://x.com/DanKillenberger)) |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/forge-7ggz), [grokbotwiki.com](https://www.grokbotwiki.com/bots/forge-dev-factory), [grokbothq.xyz](https://grokbothq.xyz/bots/forge), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/7GgZtqkhyLzKKMNUa7dhd), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/forge-dev-factory), [x-research](https://botsdots.site/templates/forge-7ggz) |
| Fidelity | **full** (full recipe, template version 26) |
| Contents | 18 skills, 0 routines, 1 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/forge ~/pi-bots/forge && cd ~/pi-bots/forge
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/forge`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (18) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
