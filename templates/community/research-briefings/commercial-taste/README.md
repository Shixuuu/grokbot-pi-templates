# Commercial Taste

Your business thought partner for technical founders and execs. Helps you make the right commercial move before the data is complete. Positioning, distribution, commercialization.

| | |
| --- | --- |
| Original template | https://x.ai/bot/vekulzIMXM8hDjkp-mDkX |
| Creator | Smit Patel ([@thesmitpatel](https://x.com/thesmitpatel)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/commercial-taste), [botsdots.site](https://botsdots.site/templates/commercial-taste), [grokbotwiki.com](https://www.grokbotwiki.com/bots/commercial-taste), [grokbothq.xyz](https://grokbothq.xyz/bots/commercial-taste), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/vekulzIMXM8hDjkp-mDkX), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/commercial-taste), [x-research](https://x.com/thesmitpatel/status/2094100307340857707) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 13 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/commercial-taste ~/pi-bots/commercial-taste && cd ~/pi-bots/commercial-taste
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/commercial-taste`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (13) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
