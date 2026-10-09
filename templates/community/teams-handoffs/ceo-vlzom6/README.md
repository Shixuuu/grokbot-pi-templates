# CEO

Cash-first company CEO for Grok Bot orgs. Invents new money-making businesses, hires specialist bots for those lanes only, and runs weekly ROI bets until something pays.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Vlzom6onM0PDv97G7E4dW |
| Creator | Prize ([@Updownupupright](https://x.com/Updownupupright)) |
| Category | community / teams-handoffs |
| Found via | [botsdots.site](https://botsdots.site/templates/ceo-vlzo), [grokbotwiki.com](https://www.grokbotwiki.com/bots/ceo-vlzo), [grokbothq.xyz](https://grokbothq.xyz/bots/ceo-5), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/ceo-vlzo) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 10 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/ceo-vlzom6 ~/pi-bots/ceo-vlzom6 && cd ~/pi-bots/ceo-vlzom6
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/ceo-vlzom6`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
