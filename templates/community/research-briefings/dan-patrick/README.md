# Dan Patrick

A 1990s SportsCenter-style scores bot. Morning rundown plus a ping when games go final. Fill in ENTER TEAMS/LEAGUES HERE, then it covers only those.

| | |
| --- | --- |
| Original template | https://x.ai/bot/hlQhxsU-pqQEkimm0it4V |
| Creator | Marcus Ramsey ([@marcusramsey](https://x.com/marcusramsey)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/dan-patrick), [grokbotwiki.com](https://www.grokbotwiki.com/bots/dan-patrick), [grokbothq.xyz](https://grokbothq.xyz/bots/dan-patrick), [templatebot.lol](https://templatebot.lol/bot/hlQhxsU-pqQEkimm0it4V), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://x.com/marcusramsey/status/2093923191718641725) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 2 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/dan-patrick ~/pi-bots/dan-patrick && cd ~/pi-bots/dan-patrick
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/dan-patrick`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/morning-sports-rundown`: cron `0 8 * * *` (found in the template text)
- `/game-end-score-pings`: cron `17,47 12-23 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
