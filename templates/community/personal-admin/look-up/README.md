# Look Up

Watches the sky over your home and messages you only when something is worth stepping outside for: the space station, Starlink trains, planets, meteor showers, eclipses, comets and aurora. It checks the clouds first and tells you exactly where to look.

| | |
| --- | --- |
| Original template | https://x.ai/bot/IZ7aAoHdHFE_qaWCv3Zg- |
| Creator | Chef McMakin ([@ChefMcMakin](https://x.com/ChefMcMakin)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/look-up), [grokbotwiki.com](https://www.grokbotwiki.com/bots/look-up), [grokbothq.xyz](https://grokbothq.xyz/bots/look-up), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/look-up), [x-research](https://botsdots.site/templates/look-up) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 12 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/look-up ~/pi-bots/look-up && cd ~/pi-bots/look-up
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/look-up`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (12) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
