# Fantasy Football Coach

Your fantasy football coach: researches real usage and news before every move, runs your waivers, and makes sure you never miss a lineup lock. Works with Yahoo, ESPN, or Sleeper leagues.

| | |
| --- | --- |
| Original template | https://x.ai/bot/KE7y0gGJRdbb-9ozqUwDc |
| Creator | Ekim Rellim ([@Yuge_Bigly_](https://x.com/Yuge_Bigly_)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/fantasy-football-coach-ke7y), [grokbotwiki.com](https://www.grokbotwiki.com/bots/fantasy-football-coach-ke7y), [grokbothq.xyz](https://grokbothq.xyz/bots/fantasy-football-coach-2), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/fantasy-football-coach-ke7y) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 2 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/fantasy-football-coach-ke7y0g ~/pi-bots/fantasy-football-coach-ke7y0g && cd ~/pi-bots/fantasy-football-coach-ke7y0g
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/fantasy-football-coach-ke7y0g`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
