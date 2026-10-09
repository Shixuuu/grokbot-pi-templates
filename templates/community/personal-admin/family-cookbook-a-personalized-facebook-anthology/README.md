# Family Cookbook -- A Personalized Facebook Anthology

Builds a gift-quality living cookbook PDF from a home cook’s Facebook cooking posts—story titles, food photos, clickable table of contents and indexes.

| | |
| --- | --- |
| Original template | https://x.ai/bot/NtRwoU2jzXkNSxu1SYKIf |
| Creator | Brian Stephens ([@BrianSt97490822](https://x.com/BrianSt97490822)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/family-cookbook-a-personalized-facebook-anthology), [grokbotwiki.com](https://www.grokbotwiki.com/bots/family-cookbook), [grokbothq.xyz](https://grokbothq.xyz/bots/family-cookbook), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/family-cookbook-a-personalized-facebook-anthology) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 0 skills, 0 routines, 22 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/family-cookbook-a-personalized-facebook-anthology ~/pi-bots/family-cookbook-a-personalized-facebook-anthology && cd ~/pi-bots/family-cookbook-a-personalized-facebook-anthology
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/family-cookbook-a-personalized-facebook-anthology`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (22) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
