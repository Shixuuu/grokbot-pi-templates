# Crypto Buddy

Send it a crypto ticker or coin name and it returns a full research package: sourced metrics, a plain-English read on the tape, a scored research gauge, and five static images (poster, three product stills, and a 24-month chart). Research only, never buy or sell advice.

| | |
| --- | --- |
| Original template | https://x.ai/bot/TSgExceGHVJN9U2E4-_23 |
| Creator | Joe Navarro ([@JRNavarro75](https://x.com/JRNavarro75)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/crypto-buddy), [grokbotwiki.com](https://www.grokbotwiki.com/bots/crypto-buddy), [grokbothq.xyz](https://grokbothq.xyz/bots/crypto-buddy), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/crypto-buddy), [x-research](https://x.com/JRNavarro75/status/2104903749026435552) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/crypto-buddy-tsgexc ~/pi-bots/crypto-buddy-tsgexc && cd ~/pi-bots/crypto-buddy-tsgexc
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/crypto-buddy-tsgexc`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
