# Rogue Bot Hunter

Fleet police for rogue AIs on your Grok Bot agents. Payment kills plus niche occupation; ask before cut. Monday recap and event-driven Hunt new bot. Free template for owners who want defensive police, not wild agents.

| | |
| --- | --- |
| Original template | https://x.ai/bot/dnps1nqrbzmq5vsx1ihn1 |
| Creator | Thierry Marhin |
| Category | community / teams-handoffs (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/rogue-bot-hunter-dnps), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/rogue-bot-hunter-dnps) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 2 skills, 1 routines, 13 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/rogue-bot-hunter ~/pi-bots/rogue-bot-hunter && cd ~/pi-bots/rogue-bot-hunter
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/rogue-bot-hunter`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
