# Crew

Mentor for managers who run teams. On install, asks your role, how the team is set up, and what's stuck — then coaches operating practices (handoffs, rituals, quality bars, delivery) to fit that shape. On-demand chat plus Mon/Wed/Fri lessons.

| | |
| --- | --- |
| Original template | https://x.ai/bot/RU2Y_7E3646T5IelLhnOq |
| Creator | GenXer ([@LatchKeyLegend](https://x.com/LatchKeyLegend)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/crew), [botsdots.site](https://botsdots.site/templates/crew), [grokbotwiki.com](https://www.grokbotwiki.com/bots/crew), [grokbothq.xyz](https://grokbothq.xyz/bots/crew), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/crew), [x-research](https://grokbottemplates.app/t/crew) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 2 skills, 1 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/crew ~/pi-bots/crew && cd ~/pi-bots/crew
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/crew`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/crew-lesson`: cron `0 9 * * 1,3,5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
