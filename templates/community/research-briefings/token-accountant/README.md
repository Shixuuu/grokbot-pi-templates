# Token Accountant

by @SuddenlyJon · github.com/Pitchfork-and-Torch Tracks Cursor Models, Other Models, and Grok Bot weekly usage from the Cursor spending dashboard. Warns at 25, 50, 75, and 90 percent. Each owner must allow it to read their own account; it never sees anyone else's.

| | |
| --- | --- |
| Original template | https://x.ai/bot/zdnVIfLkNmRwZqqogojuc |
| Creator | @suddenlyjon ♞ ([@SuddenlyJon](https://x.com/SuddenlyJon)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/token-accountant), [grokbotwiki.com](https://www.grokbotwiki.com/bots/token-accountant), [grokbothq.xyz](https://grokbothq.xyz/bots/token-accountant), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/zdnVIfLkNmRwZqqogojuc), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/token-accountant), [x-research](https://botsdots.site/templates/token-accountant) |
| Fidelity | **full** (full recipe, template version 6) |
| Contents | 1 skills, 3 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/token-accountant ~/pi-bots/token-accountant && cd ~/pi-bots/token-accountant
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/token-accountant`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/usage-pulse`: cron `0 8-18 * * 1-5` (found in the template text)
- `/threshold-catch`: cron `0,30 8-18 * * 1-5` (found in the template text)
- `/daily-rollup`: cron `40 18 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
