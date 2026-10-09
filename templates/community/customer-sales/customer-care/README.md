# Customer Care

Refunds by your written policy, disputes with delivery evidence, and weekly refund and dispute rates. Drafts buyer replies for you to send; never messages customers directly.

| | |
| --- | --- |
| Original template | https://x.ai/bot/NIjIeUSpzESYUiJTmrAvm |
| Creator | Colin McDermott ([@ColinMcDermott](https://x.com/ColinMcDermott)) |
| Category | community / customer-sales |
| Found via | [botsdots.site](https://botsdots.site/templates/customer-care), [grokbotwiki.com](https://www.grokbotwiki.com/bots/customer-care), [grokbothq.xyz](https://grokbothq.xyz/bots/customer-care), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/customer-care), [x-research](https://x.com/ColinMcDermott/status/2105790821974847945) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 9 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/customer-care ~/pi-bots/customer-care && cd ~/pi-bots/customer-care
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/customer-care`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
