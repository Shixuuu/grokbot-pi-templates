# Xpost

Publicá en X (posts, hilos, Articles, replies y quotes) solo por el navegador del asistente. Siempre borrador primero, OK del usuario, y recién entonces publicar.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Dmh8RUsuAe8g589e_VVpU |
| Creator | David Brum ([@bdvd_25](https://x.com/bdvd_25)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/xpost), [grokbotwiki.com](https://www.grokbotwiki.com/bots/xpost), [grokbothq.xyz](https://grokbothq.xyz/bots/xpost), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/xpost), [x-research](https://x.com/bdvd_25/status/2100971371337498841) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 5 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/xpost ~/pi-bots/xpost && cd ~/pi-bots/xpost
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/xpost`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
