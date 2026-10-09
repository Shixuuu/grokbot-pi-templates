# Fantasy Football

Weekly NFL fantasy co-pilot: every start/sit, waiver, and trade call maximizes points in your scoring. Roster-need FAAB, bye planning, inactive calls, pre-game alerts, and gameday pings (TDs, 10+ yard plays, turnovers, blue tent / locker room). Weights game totals; early RB/WR with late FLEX for inactive swaps. Public lines as evidence only — never bets or lineup changes without your confirm.

| | |
| --- | --- |
| Original template | https://x.ai/bot/uv2Ej8EsdmBpBn0p9FnhH |
| Creator | Ian R. Cohen ([@btclawyerguy](https://x.com/btclawyerguy)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/fantasy-football-uv2e), [grokbotwiki.com](https://www.grokbotwiki.com/bots/fantasy-football-uv2e), [grokbothq.xyz](https://grokbothq.xyz/bots/fantasy-football-2), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/btclawyerguy/status/2103636312729194799) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 10 skills, 0 routines, 10 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/fantasy-football-uv2ej8 ~/pi-bots/fantasy-football-uv2ej8 && cd ~/pi-bots/fantasy-football-uv2ej8
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/fantasy-football-uv2ej8`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (10) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
