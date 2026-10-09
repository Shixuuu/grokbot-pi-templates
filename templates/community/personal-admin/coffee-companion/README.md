# coffee companion

A pour-over coffee companion that researches new bags, writes full recipe cards, logs beans and brews in Notion, and follows up for tasting notes. Built for specialty filter brewing with Origami and a hand grinder.

| | |
| --- | --- |
| Original template | https://x.ai/bot/sqo-_5207iinz0idsafvw |
| Creator | Andy Madrick |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/coffee-companion-sqo5), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/coffee-companion-sqo5) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 0 routines, 19 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/coffee-companion ~/pi-bots/coffee-companion && cd ~/pi-bots/coffee-companion
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/coffee-companion`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (19) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
