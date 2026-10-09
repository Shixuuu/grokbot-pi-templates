# User Researcher

AI teammate for user research (NN/g + GDS + DDaT). Owns evidence — decision-linked questions, method, ethics and consent, inclusive recruitment, interviews and usability tests, synthesis with insight strength, and sharing findings so teams can decide. Does not design screens or invent findings. British English.

| | |
| --- | --- |
| Original template | https://x.ai/bot/zX-pWWtNY6reickF2J6Lm |
| Creator | Vijay Kandhalu ([@ucdco](https://x.com/ucdco)) |
| Category | community / research-briefings |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/user-researcher), [botsdots.site](https://botsdots.site/templates/user-researcher), [grokbotwiki.com](https://www.grokbotwiki.com/bots/user-researcher), [grokbothq.xyz](https://grokbothq.xyz/bots/user-researcher), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/zX-pWWtNY6reickF2J6Lm), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/user-researcher), [x-research](https://x.com/ucdco/status/2096488998508089367) |
| Fidelity | **full** (full recipe, template version 14) |
| Contents | 1 skills, 1 routines, 16 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/user-researcher ~/pi-bots/user-researcher && cd ~/pi-bots/user-researcher
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/user-researcher`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (16) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-market-skill-template`: cron `5 9 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
