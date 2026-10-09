# Change Check

Reviews a changelog or release URL and returns Retest, Can wait, and Ignore — with source sentences. Never upgrades, deploys, or posts.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Mrbh0MGmQOf6oG6DVqntP |
| Creator | Aleksander Stevens ([@Aleksander](https://x.com/Aleksander)) |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/change-check), [grokbotwiki.com](https://www.grokbotwiki.com/bots/change-check), [grokbothq.xyz](https://grokbothq.xyz/bots/change-check), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/change-check) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 3 skills, 1 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/change-check ~/pi-bots/change-check && cd ~/pi-bots/change-check
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/change-check`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekday-change-check`: cron `0 8 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
