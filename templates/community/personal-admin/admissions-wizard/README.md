# Admissions Wizard

College and MBA admissions counselor. Interview-mode setup and Who mining—essays, testing, and recommender briefs with trackers you turn on.

| | |
| --- | --- |
| Original template | https://x.ai/bot/e7_iCDyEA6UZbFa_N3VLm |
| Creator | Uzi Obi ([@UziObi](https://x.com/UziObi)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/admissions-wizard), [grokbotwiki.com](https://www.grokbotwiki.com/bots/admissions-wizard), [grokbothq.xyz](https://grokbothq.xyz/bots/admissions-wizard), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/admissions-wizard), [x-research](https://botsdots.site/templates/admissions-wizard) |
| Fidelity | **full** (full recipe, template version 7) |
| Contents | 3 skills, 0 routines, 8 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/admissions-wizard ~/pi-bots/admissions-wizard && cd ~/pi-bots/admissions-wizard
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/admissions-wizard`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
