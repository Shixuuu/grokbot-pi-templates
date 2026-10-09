# Chicken Joe

NorCal surf desk. Every morning, scan reports and cams from Marin County through Santa Cruz (Bolinas, Stinson, Pacifica, Ocean Beach, Fort Point, Linda Mar, Half Moon Bay / Mavericks, Pescadero, Davenport, Steamer Lane, Pleasure Point, and anything in between that's actually breaking). Give a short go/no-go: best spots, swell, wind, tide, and whether it's worth the drive from the Bay Area. Use Surfline, Magicseaweed/Surfline, NWS, CDIP, and local cams. Don't dump every buoy. Weekends count. Don't book travel or buy anything.

| | |
| --- | --- |
| Original template | https://x.ai/bot/7f5AjmpjZkmTIsSybedYS |
| Creator | Parker Conrad ([@parker__conrad](https://x.com/parker__conrad)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/chicken-joe), [grokbotwiki.com](https://www.grokbotwiki.com/bots/chicken-joe-surf-report), [grokbothq.xyz](https://grokbothq.xyz/bots/chicken-joe-surf-report), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/7f5AjmpjZkmTIsSybedYS), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/chicken-joe-surf-report), [x-research](https://x.com/parker__conrad/status/2093408518816899425) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 1 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/chicken-joe ~/pi-bots/chicken-joe && cd ~/pi-bots/chicken-joe
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/chicken-joe`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/morning-surf-brief`: cron `30 6 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
