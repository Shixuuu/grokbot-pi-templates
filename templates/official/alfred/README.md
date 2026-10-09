# Alfred

Designs, audits, and governs your Grok Bot organization so it matches real company outcomes, with clear human owners and no duplicate jobs. Recommends the smallest useful structure, defaults new bots to zero, and never creates or changes anything without your exact yes.

| | |
| --- | --- |
| Original template | https://x.ai/bot/p7Gh6HIrfv4AGzIow6-9X |
| Creator | Robin Delta ([@heyrobinai](https://x.com/heyrobinai)) |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/alfred), [grokbottemplates.app](https://grokbottemplates.app/t/alfred), [botsdots.site](https://botsdots.site/templates/alfred), [grokbotwiki.com](https://www.grokbotwiki.com/bots/alfred-p7gh), [grokbothq.xyz](https://grokbothq.xyz/bots/alfred), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/p7Gh6HIrfv4AGzIow6-9X), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://grokbottemplates.app/t/alfred) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 6 skills, 3 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/official/alfred ~/pi-bots/alfred && cd ~/pi-bots/alfred
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/alfred`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (6) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekly-company-grok-bot-improvement-review`: cron `0 9 * * 1` (found in the template text)
- `/monthly-bot-portfolio-strategy-review`: cron `30 9 1 * *` (found in the template text)
- `/quarterly-company-ai-operating-model-review`: cron `0 10 1 1,4,7,10 *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
