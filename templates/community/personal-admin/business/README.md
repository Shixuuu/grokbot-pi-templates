# Business

Runs your books, customers and website sign-ups on the open-source Business SQL schema, a complete business database that keeps full history. For small businesses and one-person shops on SQLite or PostgreSQL.

| | |
| --- | --- |
| Original template | https://x.ai/bot/90lHQMpkeUT1ZWIw6dxkB |
| Creator | Stephen Jazdzewski ([@ArtJazd](https://x.com/ArtJazd)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/business), [grokbotwiki.com](https://www.grokbotwiki.com/bots/business), [grokbothq.xyz](https://grokbothq.xyz/bots/business), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/business), [x-research](https://x.com/ArtJazd/status/2105237507675931133) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 11 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/business ~/pi-bots/business && cd ~/pi-bots/business
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/business`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (11) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
