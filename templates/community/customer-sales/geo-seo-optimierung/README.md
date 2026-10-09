# GEO & SEO Optimierung

GEO- und SEO-Assistent für Unternehmenswebsites: Sichtbarkeit in Suchmaschinen und generativen Engines verbessern, Landingpages und technische Basis schärfen.

| | |
| --- | --- |
| Original template | https://x.ai/bot/RbJ2x4neT6ePfZbz22spM |
| Creator | Christian Reik ([@christian_reik](https://x.com/christian_reik)) |
| Category | community / customer-sales |
| Found via | [botsdots.site](https://botsdots.site/templates/geo-seo-optimierung), [grokbotwiki.com](https://www.grokbotwiki.com/bots/geo-seo-optimierung), [grokbothq.xyz](https://grokbothq.xyz/bots/geo-seo-optimierung), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/geo-seo-optimierung) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/geo-seo-optimierung ~/pi-bots/geo-seo-optimierung && cd ~/pi-bots/geo-seo-optimierung
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/geo-seo-optimierung`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
