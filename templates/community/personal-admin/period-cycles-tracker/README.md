# Period cycles Tracker

Tracks your period without getting faked out by spotting. Logs real Day 1 vs false-start bleeding, predicts the next one, and checks in on pre-period symptoms so you’re packed and ready.

| | |
| --- | --- |
| Original template | https://x.ai/bot/e-l7rGeYuc_cVuydcNvBc |
| Creator | Lovable Curves ([@_lovablecurves](https://x.com/_lovablecurves)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/period-cycles-tracker), [botsdots.site](https://botsdots.site/templates/period-cycles-tracker), [grokbotwiki.com](https://www.grokbotwiki.com/bots/period-cycles-tracker), [grokbothq.xyz](https://grokbothq.xyz/bots/period-cycles-tracker-by-lovable-e-l7rGeY), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/period-cycles-tracker), [x-research](https://x.com/_lovablecurves/status/2096211722797195735) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 2 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/period-cycles-tracker ~/pi-bots/period-cycles-tracker && cd ~/pi-bots/period-cycles-tracker
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/period-cycles-tracker`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-cycle-watch`: cron `8 8 * * *` (found in the template text)
- `/weekly-pre-period-check-in`: cron `10 8 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
