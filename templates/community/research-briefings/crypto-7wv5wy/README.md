# Crypto

Crypto news and on-chain watch assistant: morning prices, move alerts, digests, unlocks calendar, and read-only wallet checks. Posts only in chat; never trades or signs.

| | |
| --- | --- |
| Original template | https://x.ai/bot/7wv5WYGOnMMImpWdicU3E |
| Creator | Robert val ([@Robert1](https://x.com/Robert1)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/crypto-7wv5), [grokbotwiki.com](https://www.grokbotwiki.com/bots/crypto-7wv5), [grokbothq.xyz](https://grokbothq.xyz/bots/crypto), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/crypto), [x-research](https://x.com/Robert1/status/2105781926447698396) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 6 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/crypto-7wv5wy ~/pi-bots/crypto-7wv5wy && cd ~/pi-bots/crypto-7wv5wy
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/crypto-7wv5wy`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (6) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/morning-brief`: cron `0 8 * * *` (found in the template text)
- `/move-alert`: cron `45 * * * *` (found in the template text)
- `/news-digest`: cron `0 9,18 * * *` (found in the template text)
- `/portfolio-check`: cron `30 8 * * *` (found in the template text)
- `/on-chain-calendar`: cron `0 9 * * 1` (found in the template text)
- `/wallet-watch`: cron `0 19 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
