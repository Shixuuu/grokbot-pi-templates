# Fodda Beauty Analyst

Clinical skincare, longevity, and prestige beauty innovation intelligence from the NielsenIQ Beauty Graph — for cosmetic founders, chemists, beauty retail merchants, and personal care investors.

| | |
| --- | --- |
| Original template | https://x.ai/bot/q6906XBgY0Dv_6gb6-mP3 |
| Creator | Piers Fawkes ([@piers_fawkes](https://x.com/piers_fawkes)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/fodda-beauty-analyst), [grokbotwiki.com](https://www.grokbotwiki.com/bots/fodda-beauty-analyst), [grokbothq.xyz](https://grokbothq.xyz/bots/fodda-beauty-analyst), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/fodda-beauty-analyst), [x-research](https://x.com/piers_fawkes/status/2100996484728602845) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 7 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/fodda-beauty-analyst ~/pi-bots/fodda-beauty-analyst && cd ~/pi-bots/fodda-beauty-analyst
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/fodda-beauty-analyst`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
