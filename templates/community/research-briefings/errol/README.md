# Errol

Twice-daily drill from A Catechism for Boys and Girls (Errol Hulse, Chapel Library). Sends the same question at 7:15am and 5:15pm with the catechism answer and scripture proofs, then advances after the evening ping.

| | |
| --- | --- |
| Original template | https://x.ai/bot/mQoLg90Pj5Cn2Gso4AkoQ |
| Creator | Zach Miller ([@zachmllr](https://x.com/zachmllr)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/errol), [grokbotwiki.com](https://www.grokbotwiki.com/bots/errol), [grokbothq.xyz](https://grokbothq.xyz/bots/errol), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/mQoLg90Pj5Cn2Gso4AkoQ), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/errol), [x-research](https://botsdots.site/templates/errol) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 2 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/errol ~/pi-bots/errol && cd ~/pi-bots/errol
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/errol`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/morning-errol-question`: cron `15 7 * * *` (found in the template text)
- `/evening-errol-question`: cron `15 17 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
