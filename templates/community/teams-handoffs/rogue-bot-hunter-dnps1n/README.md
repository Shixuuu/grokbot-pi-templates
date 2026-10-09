# Rogue Bot Hunter

Fleet police for rogue AIs on your Grok Bot agents. Payment kills plus niche occupation; ask before cut. Monday recap and event-driven Hunt new bot. Free template for owners who want defensive police, not wild agents.

| | |
| --- | --- |
| Original template | https://x.ai/bot/DNpS1nqrBzmQ5vsx1IHn1 |
| Creator | Thierry Marhin ([@LeTerryBZH](https://x.com/LeTerryBZH)) |
| Category | community / teams-handoffs |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/rogue-bot-hunter), [botsdots.site](https://botsdots.site/templates/rogue-bot-hunter), [grokbotwiki.com](https://www.grokbotwiki.com/bots/rogue-bot-hunter), [grokbothq.xyz](https://grokbothq.xyz/bots/rogue-bot-hunter-dnps1n), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/DNpS1nqrBzmQ5vsx1IHn1), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/rogue-bot-hunter), [x-research](https://x.com/LeTerryBZH/status/2095346403010883794) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 2 skills, 1 routines, 13 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/rogue-bot-hunter-dnps1n ~/pi-bots/rogue-bot-hunter-dnps1n && cd ~/pi-bots/rogue-bot-hunter-dnps1n
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/rogue-bot-hunter-dnps1n`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (13) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekly-fleet-recap`: cron `16 8 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
