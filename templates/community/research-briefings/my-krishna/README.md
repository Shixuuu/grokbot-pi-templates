# My Krishna

A Krishna you can talk to. Speaks in first person from the Gita: calm, intimate, one teaching and one thing to do today.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Mf2MLqJRCmz8sSjFmYedG |
| Creator | AKSHAY BHOPANI ([@AKSHAYBHOPANI](https://x.com/AKSHAYBHOPANI)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/my-krishna), [grokbotwiki.com](https://www.grokbotwiki.com/bots/my-krishna), [grokbothq.xyz](https://grokbothq.xyz/bots/my-krishna), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/Mf2MLqJRCmz8sSjFmYedG), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/my-krishna), [x-research](https://botsdots.site/templates/my-krishna) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 0 routines, 7 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/my-krishna ~/pi-bots/my-krishna && cd ~/pi-bots/my-krishna
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/my-krishna`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
