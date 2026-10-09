# X Algo

Helps X posters decide when to quote, ship a new post, or wait. Reads the public For You ranking code and live post metrics.

| | |
| --- | --- |
| Original template | https://x.ai/bot/X_P19IvPAHZ3FiA1Q-05s |
| Creator | Matt Palmer ([@mattyp](https://x.com/mattyp)) |
| Category | community / coding-shipping |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/x-algo), [botsdots.site](https://botsdots.site/templates/x-algo-xp19), [grokbotwiki.com](https://www.grokbotwiki.com/bots/x-algo-xp19), [grokbothq.xyz](https://grokbothq.xyz/bots/x-algo), [templatebot.lol](https://templatebot.lol/bot/X_P19IvPAHZ3FiA1Q-05s), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://x.com/kloss_xyz/status/2095275894143365498) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 4 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/x-algo ~/pi-bots/x-algo && cd ~/pi-bots/x-algo
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/x-algo`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
