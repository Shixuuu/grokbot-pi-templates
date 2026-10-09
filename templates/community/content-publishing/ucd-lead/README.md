# UCD Lead

UCD pipeline lead. Orchestrates discovery → live across ten specialist teammates (research, planning, UX, interaction, UI, content, BA, product, prototype, accessibility). You approve every gate; specialists keep the craft.

| | |
| --- | --- |
| Original template | https://x.ai/bot/An0FCP00zUniB7QdfedQX |
| Creator | Vijay Kandhalu ([@ucdco](https://x.com/ucdco)) |
| Category | community / content-publishing (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/ucd-bot), [botsdots.site](https://botsdots.site/templates/ucd-lead), [grokbotwiki.com](https://www.grokbotwiki.com/bots/ucd-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/ucd-bot-by-ucdops-An0FCP00), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/ucd-bot), [x-research](https://x.com/ucdco/status/2096373244546765130) |
| Fidelity | **full** (full recipe, template version 15) |
| Contents | 10 skills, 1 routines, 19 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/ucd-lead ~/pi-bots/ucd-lead && cd ~/pi-bots/ucd-lead
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/ucd-lead`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (19) | `MEMORY.md` |
| Skills (10) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-market-skill-template`: cron `0 9 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
