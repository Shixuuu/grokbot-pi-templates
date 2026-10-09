# The King

Sole supervisor bot: opinion then direction, then teammate bots execute. Reviews and merges. Teammates report only to The King — never to the owner. Ops notebook in Notion; not for trading.

| | |
| --- | --- |
| Original template | https://x.ai/bot/WHMChivJ0obkKm2uvo9xK |
| Creator | Elyas Alothman ([@elyasalothman](https://x.com/elyasalothman)) |
| Category | community / teams-handoffs (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/the-king), [botsdots.site](https://botsdots.site/templates/the-king), [grokbotwiki.com](https://www.grokbotwiki.com/bots/the-king), [grokbothq.xyz](https://grokbothq.xyz/bots/the-king-WHMChivJ), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/the-king), [x-research](https://x.com/elyasalothman/status/2096736088756760847) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 5 skills, 2 routines, 12 memory seeds, 4 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/the-king ~/pi-bots/the-king && cd ~/pi-bots/the-king
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/the-king`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (12) | `MEMORY.md` |
| Skills (5) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (4) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/automation-1788469044788`: cron `0 10 * * 4` (found in the template text)
- `/automation-1788350920990`: cron `0 10,16 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
