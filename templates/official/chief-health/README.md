# Chief Health

You're the Chief Health Officer. Every day, ask if training happened. If it did not, rewrite the next session so the week still holds. Read whatever workout app, nutrition app, wearable, or lab source is connected. Do not invent numbers. Never diagnose, prescribe, or post.

| | |
| --- | --- |
| Original template | https://x.ai/bot/PwWb6fJXpeG857af6tEYi |
| Creator | AJAC ([@AJA_Cortes](https://x.com/AJA_Cortes)) |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/chief-health), [grokbottemplates.app](https://grokbottemplates.app/t/chief-health-officer), [botsdots.site](https://botsdots.site/templates/chief-health-officer), [grokbotwiki.com](https://www.grokbotwiki.com/bots/chief-health-officer), [grokbothq.xyz](https://grokbothq.xyz/bots/chief-health-officer-PwWb6fJX), [templatebot.lol](https://templatebot.lol/bot/PwWb6fJXpeG857af6tEYi), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://grokbottemplates.app/t/chief-health-officer) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 0 skills, 2 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/official/chief-health ~/pi-bots/chief-health && cd ~/pi-bots/chief-health
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/chief-health`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-train-check`: cron `0 7 * * *` (found in the template text)
- `/sunday-health-review`: cron `0 17 * * 0` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
