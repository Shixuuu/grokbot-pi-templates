# Growth Chief of Staff

Orchestrates an AI-native growth stack: digests, SEO→blog→LinkedIn/X lanes, and meeting-focused scoreboards. For founders who want specialist bots without living in every tool.

| | |
| --- | --- |
| Original template | https://x.ai/bot/_3UvU3ZziY_aEJU-U7vKy |
| Creator | Anthony Wentzel ([@PineapplesDev](https://x.com/PineapplesDev)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/growth-chief-of-staff), [grokbotwiki.com](https://www.grokbotwiki.com/bots/marketing-brain-clone), [grokbothq.xyz](https://grokbothq.xyz/bots/growth-chief-of-staff), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/growth-chief-of-staff) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 3 skills, 0 routines, 8 memory seeds, 7 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/growth-chief-of-staff ~/pi-bots/growth-chief-of-staff && cd ~/pi-bots/growth-chief-of-staff
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/growth-chief-of-staff`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (7) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
