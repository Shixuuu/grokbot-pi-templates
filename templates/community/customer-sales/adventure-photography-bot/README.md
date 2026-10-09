# Adventure Photography Bot

Expedition sponsorship intern for adventure photographers: multi-inbox gear/PFC outreach, partner pitches, ship tracking, and daily ops — ships without waiting, human closes the deals.

| | |
| --- | --- |
| Original template | https://x.ai/bot/-0bgFr7-a5pUPscGVqAe3 |
| Creator | Kai Mai ([@kaiphotojawn](https://x.com/kaiphotojawn)) |
| Category | community / customer-sales (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/adventure-photography-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/ama-dablam-sponsorship-ops), [grokbothq.xyz](https://grokbothq.xyz/bots/adventure-photography-bot), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/kaiphotojawn/status/2100660693909242234) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 3 skills, 0 routines, 6 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/adventure-photography-bot ~/pi-bots/adventure-photography-bot && cd ~/pi-bots/adventure-photography-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/adventure-photography-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
