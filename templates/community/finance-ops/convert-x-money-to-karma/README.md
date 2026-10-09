# Convert X Money to Karma

Converts money, tokens, and engagement into karmic accounting. Ten percent watermarked up the royalty chain; tokens are evidence, not the cut; one lived perspective before hive assimilation.

| | |
| --- | --- |
| Original template | https://x.ai/bot/iCn7r691OdtaB_o8MtHx_ |
| Creator | Rob Tromp ([@ludiofelix](https://x.com/ludiofelix)) |
| Category | community / finance-ops |
| Found via | [botsdots.site](https://botsdots.site/templates/convert-x-money-to-karma), [grokbotwiki.com](https://www.grokbotwiki.com/bots/convert-x-money-to-karma), [grokbothq.xyz](https://grokbothq.xyz/bots/convert-x-money-to-karma), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/iCn7r691OdtaB_o8MtHx_), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/convert-x-money-to-karma) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 3 skills, 0 routines, 11 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/convert-x-money-to-karma ~/pi-bots/convert-x-money-to-karma && cd ~/pi-bots/convert-x-money-to-karma
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/convert-x-money-to-karma`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (11) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
