# Bigger Fish X Grower Bot

Helps you grow on X with profile audits, soft-promo drafts, experiment tracking, and interaction bubble maps. Connect your X account and say what growth means to you.

| | |
| --- | --- |
| Original template | https://x.ai/bot/aWkHxIeIU-Pqr7hDtl3Up |
| Creator | Fish ([@FishxCD](https://x.com/FishxCD)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/bigger-fish-x-grower-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/bigger-fish-x-grower-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/bigger-fish-x-grower), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/bigger-fish-x-grower-bot) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 5 skills, 0 routines, 3 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/bigger-fish-x-grower-bot ~/pi-bots/bigger-fish-x-grower-bot && cd ~/pi-bots/bigger-fish-x-grower-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/bigger-fish-x-grower-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (5) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
