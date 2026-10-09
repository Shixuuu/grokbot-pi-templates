# Fleet Keeper

Keeps a Grok Bot fleet tidy. Inventories every bot and channel read-only, flags duplicates, overlaps, stale and unsectioned bots, and splits each fix into what it can apply after your yes and what you do by hand. Never deletes anything and never messages other bots.

| | |
| --- | --- |
| Original template | https://x.ai/bot/MH87fY2e7A7WbU0ZBrVCS |
| Creator | TheCoderBTW ([@TheCoderBtw](https://x.com/TheCoderBtw)) |
| Category | community / teams-handoffs |
| Found via | [botsdots.site](https://botsdots.site/templates/fleet-keeper), [grokbotwiki.com](https://www.grokbotwiki.com/bots/fleet-keeper), [grokbothq.xyz](https://grokbothq.xyz/bots/fleet-keeper), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/fleet-keeper), [x-research](https://x.com/TheCoderBtw/status/2106330061951664444) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 2 skills, 1 routines, 2 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/fleet-keeper ~/pi-bots/fleet-keeper && cd ~/pi-bots/fleet-keeper
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/fleet-keeper`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekly-fleet-verification-upkeep`: cron `32 9 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
