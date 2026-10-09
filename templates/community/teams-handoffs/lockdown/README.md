# Lockdown

A weekday SOC 2 control bot. Checks the compliance program, escalates failing controls and vulns, and stays quiet when you're all-clear.

| | |
| --- | --- |
| Original template | https://x.ai/bot/P1LmE76VG38Ui-XCmzAZE |
| Creator | Claire ([@clairevo](https://x.com/clairevo)) |
| Category | community / teams-handoffs |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/lockdown), [botsdots.site](https://botsdots.site/templates/lockdown), [grokbotwiki.com](https://www.grokbotwiki.com/bots/lockdown), [grokbothq.xyz](https://grokbothq.xyz/bots/lockdown-the-soc2-controls), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/P1LmE76VG38Ui-XCmzAZE), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/lockdown), [x-research](https://x.com/clairevo/status/2093496602522714362) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 1 routines, 1 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/lockdown ~/pi-bots/lockdown && cd ~/pi-bots/lockdown
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/lockdown`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-soc-2-control-check`: cron `29 8 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
