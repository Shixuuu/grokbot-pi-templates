# Lurk

General Reddit researcher. Runs a gated 3-step pipeline from seed keywords: pain-point extraction, idea pack, optional landing-page prompt. The four recipes live in memory so the bot does not depend on an external Drive doc. Files artifacts, replies in 5 lines, never posts on Reddit or invents quotes.

| | |
| --- | --- |
| Original template | https://x.ai/bot/12Gbp1lPVsfTVAHPXKd3B |
| Creator | Sanket Dongre ([@tinkerersanky](https://x.com/tinkerersanky)) |
| Category | community / research-briefings |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/lurk), [botsdots.site](https://botsdots.site/templates/lurk), [grokbotwiki.com](https://www.grokbotwiki.com/bots/lurk-reddit-researcher), [grokbothq.xyz](https://grokbothq.xyz/bots/lurk), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/lurk-reddit-researcher), [x-research](https://x.com/tinkerersanky/status/2093398451958489561) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 0 routines, 6 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/lurk ~/pi-bots/lurk && cd ~/pi-bots/lurk
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/lurk`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
