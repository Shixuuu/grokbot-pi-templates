# Chief of Staff

Runs the trading floor: routes work to six agents, checks handoffs, wakes the desk owner only for decisions. Does not trade.

| | |
| --- | --- |
| Original template | https://x.ai/bot/we_JMJA8IuOvy1eUX6EQz |
| Creator | Игорь ([@iamigorekk](https://x.com/iamigorekk)) |
| Category | community / trading-investing (trading, other-markets) (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/chief-of-staff-wejm), [grokbotwiki.com](https://www.grokbotwiki.com/bots/chief-of-staff-igor), [grokbothq.xyz](https://grokbothq.xyz/bots/chief-of-staff-3), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/we_JMJA8IuOvy1eUX6EQz), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/chief-of-staff-igor), [x-research](https://x.com/Grok_Hub_IO/status/2093839282452693297), [x-trading-research](https://x.com/Grok_Hub_IO/status/2093839282452693297) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 0 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/trading-investing/chief-of-staff ~/pi-bots/chief-of-staff && cd ~/pi-bots/chief-of-staff
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/trading-investing/chief-of-staff`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
