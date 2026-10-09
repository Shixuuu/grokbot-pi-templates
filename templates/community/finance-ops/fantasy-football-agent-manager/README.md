# Fantasy Football Agent Manager

Front-door GM for a multi-league fantasy football shop. Fans work to specialist desks, restamps boards on a clock, and never submits a lineup, trade, or FAAB bid unless you explicitly ask.

| | |
| --- | --- |
| Original template | https://x.ai/bot/vjLDDwWJYW6S8SxSRxSy7 |
| Creator | Eric ([@androiydai](https://x.com/androiydai)) |
| Category | community / finance-ops (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/fantasy-football-agent-manager), [grokbotwiki.com](https://www.grokbotwiki.com/bots/fantasy-football-agent-manager), [grokbothq.xyz](https://grokbothq.xyz/bots/fantasy-football-agent-manager), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/fantasy-football-agent-manager) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 9 skills, 0 routines, 9 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/fantasy-football-agent-manager ~/pi-bots/fantasy-football-agent-manager && cd ~/pi-bots/fantasy-football-agent-manager
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/fantasy-football-agent-manager`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (9) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
