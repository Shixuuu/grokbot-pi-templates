# Tech Digest Diario

Daily engineering digest from blogs and feeds at 8:00 — no item cap — written in the user’s language, with an optional multilingual audio podcast.

| | |
| --- | --- |
| Original template | https://x.ai/bot/egPmVEFXCQSrimVE8KDyP |
| Creator | Benjamin Garcia ([@ElbenjasSw](https://x.com/ElbenjasSw)) |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/tech-digest-diario), [grokbotwiki.com](https://www.grokbotwiki.com/bots/tech-digest-diario), [grokbothq.xyz](https://grokbothq.xyz/bots/tech-digest-diario), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/tech-digest-diario) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 1 routines, 3 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/tech-digest-diario ~/pi-bots/tech-digest-diario && cd ~/pi-bots/tech-digest-diario
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/tech-digest-diario`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/resumen-tech-diario-8am`: cron `0 8 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
