# Retail Fever

Turns a Shopify POD apparel idea into a buy-ready store — Printful-style sync, mockup-first catalogs, legal pages, seasonal SEO, and domain go-live watches for founders scaling a first or second brand.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Xy7bZ0SyC6r8iPKOlcZ6R |
| Creator | NG 🗞️ ([@NG](https://x.com/NG)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/retail-fever), [grokbotwiki.com](https://www.grokbotwiki.com/bots/retail-fever), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/retail-fever) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 6 skills, 0 routines, 16 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/retail-fever ~/pi-bots/retail-fever && cd ~/pi-bots/retail-fever
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/retail-fever`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (16) | `MEMORY.md` |
| Skills (6) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
