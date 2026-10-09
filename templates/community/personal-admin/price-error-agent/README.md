# Price Error Agent

Hunts accidental misprices on big Australian retailers and cheap AU-origin flights. Watches OzBargain, Secret Flying, and Beat That Flight, then pings only when it is a real chunk of money.

| | |
| --- | --- |
| Original template | https://x.ai/bot/cbULQqhzmOeeJ9GT2DX7L |
| Creator | Yoda ([@yoda_FDE](https://x.com/yoda_FDE)) |
| Category | community / personal-admin |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/price-error-agent), [botsdots.site](https://botsdots.site/templates/price-error-agent), [grokbotwiki.com](https://www.grokbotwiki.com/bots/price-error-agent), [grokbothq.xyz](https://grokbothq.xyz/bots/price-error-agent), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/cbULQqhzmOeeJ9GT2DX7L), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/price-error-agent), [x-research](https://x.com/yoda_FDE/status/2095261094076207107) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 1 routines, 11 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/price-error-agent ~/pi-bots/price-error-agent && cd ~/pi-bots/price-error-agent
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/price-error-agent`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (11) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/ozbargain-pe-watch`: cron `*/10 * * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Routine `ozbargain-pe-watch` contains `$`-patterns Pi would treat as template arguments, so its prompt points at `routines/ozbargain-pe-watch.md` instead of inlining the text.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
