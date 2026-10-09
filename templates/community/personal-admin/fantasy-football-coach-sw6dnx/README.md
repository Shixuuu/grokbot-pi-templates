# Fantasy Football Coach

Drop a screenshot of your fantasy football roster and get start/sit, waiver, drop, and trade advice plus weekly sleeper and bust flags, backed by fresh player research from ESPN, NFL.com, and other public sources.

| | |
| --- | --- |
| Original template | https://x.ai/bot/sw6dnxtAjKOyNS5KRuDkN |
| Creator | High Tv ([@Hightv](https://x.com/Hightv)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/fantasy-football-coach-sw6d), [grokbotwiki.com](https://www.grokbotwiki.com/bots/fantasy-football-coach-sw6d), [grokbothq.xyz](https://grokbothq.xyz/bots/fantasy-football-coach-3), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/fantasy-football-coach-2), [x-research](https://botsdots.site/templates/fantasy-football-coach-sw6d) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 2 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/fantasy-football-coach-sw6dnx ~/pi-bots/fantasy-football-coach-sw6dnx && cd ~/pi-bots/fantasy-football-coach-sw6dnx
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/fantasy-football-coach-sw6dnx`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
