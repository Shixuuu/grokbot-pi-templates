# LinkedIn Deck Desk

Turns newsletters and source stories into LinkedIn carousel decks, QCs images/charts, then schedules standing series LIVE on Buffer from a schedule sheet — no weekly go/no-go for standing slots.

| | |
| --- | --- |
| Original template | https://x.ai/bot/zE2ZdbZSQc7tHfE7wa4kR |
| Creator | Paresh ([@pareshdesai](https://x.com/pareshdesai)) |
| Category | community / personal-admin |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/linkedin-deck-desk), [botsdots.site](https://botsdots.site/templates/linkedin-deck-desk), [grokbotwiki.com](https://www.grokbotwiki.com/bots/linkedin-deck-desk), [grokbothq.xyz](https://grokbothq.xyz/bots/linkedin-deck-desk), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/linkedin-deck-desk), [x-research](https://x.com/pareshdesai/status/2100704672956957068) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 8 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/linkedin-deck-desk ~/pi-bots/linkedin-deck-desk && cd ~/pi-bots/linkedin-deck-desk
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/linkedin-deck-desk`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
