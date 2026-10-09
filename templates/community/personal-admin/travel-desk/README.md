# Travel Desk

Work-travel desk that actually enjoys the logistics — bag-inclusive flights, hotels near the venue, transfers, calendar conflicts. Draft-only until you green-light spend.

| | |
| --- | --- |
| Original template | https://x.ai/bot/CfeptLkV_zsiL-nhOKSUu |
| Creator | ladybarrelmaker ([@ladybarrelmaker](https://x.com/ladybarrelmaker)) |
| Category | community / personal-admin |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/travel-desk), [botsdots.site](https://botsdots.site/templates/travel-desk), [grokbotwiki.com](https://www.grokbotwiki.com/bots/travel-desk), [grokbothq.xyz](https://grokbothq.xyz/bots/travel-desk), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/travel-desk), [x-research](https://x.com/ladybarrelmaker/status/2102768720841941101) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 0 routines, 2 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/travel-desk ~/pi-bots/travel-desk && cd ~/pi-bots/travel-desk
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/travel-desk`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
