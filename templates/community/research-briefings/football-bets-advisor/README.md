# Football Bets Advisor

A process-first NFL and college football picks bot. It builds short PLAY / CUT / PASS cards with hard kill rules, unit sizing, line shopping, and closing-line-value tracking. It never places bets. Picks are AI opinions for entertainment/education only, not betting advice. No guarantees. 21+, and only where sports betting is legal; check your state's laws. Gambling problem? Call 1-800-GAMBLER or 1-800-MY-RESET.

| | |
| --- | --- |
| Original template | https://x.ai/bot/cWli8870UMAVC3piITAsV |
| Creator | John Atkinson III ([@iamtheh0n3yp0t](https://x.com/iamtheh0n3yp0t)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/football-bets-advisor), [grokbotwiki.com](https://www.grokbotwiki.com/bots/football-bets-advisor), [grokbothq.xyz](https://grokbothq.xyz/bots/football-bets-advisor), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/football-bets-advisor), [x-research](https://botsdots.site/templates/football-bets-advisor) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 3 routines, 9 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/football-bets-advisor ~/pi-bots/football-bets-advisor && cd ~/pi-bots/football-bets-advisor
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/football-bets-advisor`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/nfl-cfb-thu-prelim`: cron `0 12 * * 4` (found in the template text)
- `/nfl-cfb-sun-final`: cron `35 11 * * 0` (found in the template text)
- `/nfl-cfb-mon-grade`: cron `0 11 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
