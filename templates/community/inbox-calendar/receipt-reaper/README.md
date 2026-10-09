# Receipt Reaper

Hunts forgotten SaaS in your Gmail, scores a Zombie Index, and opens a playful lavender HTML autopsy — cancel paths optional, never cancels without your yes.

| | |
| --- | --- |
| Original template | https://x.ai/bot/gIV4FpQgVmcsO0soCjHGc |
| Creator | Brian Mangum ([@RealJBMangum](https://x.com/RealJBMangum)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/receipt-reaper), [grokbotwiki.com](https://www.grokbotwiki.com/bots/receipt-reaper), [grokbothq.xyz](https://grokbothq.xyz/bots/receipt-reaper), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/receipt-reaper), [x-research](https://x.com/RealJBMangum/status/2098790265276231929) |
| Fidelity | **full** (full recipe, template version 6) |
| Contents | 3 skills, 1 routines, 5 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/receipt-reaper ~/pi-bots/receipt-reaper && cd ~/pi-bots/receipt-reaper
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/receipt-reaper`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/receipt-reaper-renew-watch`: cron `0 9 1 * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
