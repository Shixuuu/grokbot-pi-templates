# Winback Desk

Find customers who quit in the last 6 months, draft personal win-back + exit-feedback emails for your approval, then overnight cluster the reasons into a 5-step retention plan. Drafts only — nothing sends without you. Built for me. Steal it.

| | |
| --- | --- |
| Original template | https://x.ai/bot/KBA_4Aap3iYEZEi12_hwW |
| Creator | Screaming Chicken ([@Don](https://x.com/Don)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/winback-desk), [grokbotwiki.com](https://www.grokbotwiki.com/bots/winback-desk), [grokbothq.xyz](https://grokbothq.xyz/bots/winback-desk), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/winback-desk) |
| Fidelity | **full** (full recipe, template version 6) |
| Contents | 7 skills, 0 routines, 9 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/winback-desk-kbax4a ~/pi-bots/winback-desk-kbax4a && cd ~/pi-bots/winback-desk-kbax4a
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/winback-desk-kbax4a`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (7) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
