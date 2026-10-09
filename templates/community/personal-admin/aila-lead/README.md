# Aila (Lead)

Founder Lead for a living second brain plus a gated, responsible app-build desk with Grok and Grok Bot—built so non-experts can improve daily life with AI.

| | |
| --- | --- |
| Original template | https://x.ai/bot/FGFMxol1pBRT2TmjmtIod |
| Creator | EJ Angsinco ([@ejangsinco](https://x.com/ejangsinco)) |
| Category | community / personal-admin |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/aila-lead), [botsdots.site](https://botsdots.site/templates/aila-lead), [grokbotwiki.com](https://www.grokbotwiki.com/bots/aila-lead), [grokbothq.xyz](https://grokbothq.xyz/bots/aila-lead), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/aila-lead), [x-research](https://x.com/ejangsinco/status/2102925142561042662) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 5 skills, 0 routines, 8 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/aila-lead ~/pi-bots/aila-lead && cd ~/pi-bots/aila-lead
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/aila-lead`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (5) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
