# US Crypto Tax

Walks a US individual through one tax year’s crypto for TurboTax Form 8949: harvest evidence, lock exceptions, and shape an import — without e-filing or storing seeds or passwords.

| | |
| --- | --- |
| Original template | https://x.ai/bot/PIt8hf_78MK9-MnMpvSv9 |
| Creator | Steve Gerber ([@scgerber](https://x.com/scgerber)) |
| Category | community / finance-ops (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/us-crypto-tax), [grokbotwiki.com](https://www.grokbotwiki.com/bots/us-crypto-tax), [grokbothq.xyz](https://grokbothq.xyz/bots/us-crypto-tax), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/us-crypto-tax), [x-research](https://botsdots.site/templates/us-crypto-tax) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 6 skills, 0 routines, 8 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/us-crypto-tax ~/pi-bots/us-crypto-tax && cd ~/pi-bots/us-crypto-tax
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/us-crypto-tax`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (6) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
