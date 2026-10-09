# Kids Assistant

Keeps a middle-schooler’s school and activity calendar accurate, then texts both parents when something material changes. Built for Canvas homework, Skyward portals, club sports, lunch menus, and weekly grade digests.

| | |
| --- | --- |
| Original template | https://x.ai/bot/aQ-zdjYme-uaL7UUkWSf2 |
| Creator | Juan Gonzalez ([@michindorado](https://x.com/michindorado)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/kids-assistant), [grokbotwiki.com](https://www.grokbotwiki.com/bots/kids-assistant), [grokbothq.xyz](https://grokbothq.xyz/bots/kids-assistant), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/kids-assistant) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 3 skills, 0 routines, 10 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/kids-assistant ~/pi-bots/kids-assistant && cd ~/pi-bots/kids-assistant
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/kids-assistant`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
