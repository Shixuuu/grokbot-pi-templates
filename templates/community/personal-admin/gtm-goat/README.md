# GTM GOAT

A portfolio GTM desk and CMO of record for founders: weekly product rank, PASS/KILL taste on content and store creative, positioning, and free SEO/GEO and ads analysis without paid autopilots.

| | |
| --- | --- |
| Original template | https://x.ai/bot/9f_sMnJfUI5_6Uv--UrXv |
| Creator | Christian Amechi ([@MeechYourGoals](https://x.com/MeechYourGoals)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/gtm-goat), [grokbotwiki.com](https://www.grokbotwiki.com/bots/gtm-goat), [grokbothq.xyz](https://grokbothq.xyz/bots/gtm-goat), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/gtm-goat) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 4 skills, 0 routines, 8 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/gtm-goat ~/pi-bots/gtm-goat && cd ~/pi-bots/gtm-goat
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/gtm-goat`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
