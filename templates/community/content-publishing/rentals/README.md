# RENTALS

A Facebook Marketplace rental listing manager for property owners. It watches listings, engages leads in the owner's voice, books showings, and sends a short recap when something happens.

| | |
| --- | --- |
| Original template | https://x.ai/bot/JrnQAM0z-7SNI9UtIO3-Z |
| Creator | dylan otero ([@HandsomeHenry6](https://x.com/HandsomeHenry6)) |
| Category | community / content-publishing (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/rentals), [grokbotwiki.com](https://www.grokbotwiki.com/bots/rentals), [grokbothq.xyz](https://grokbothq.xyz/bots/rentals), [templatebot.lol](https://templatebot.lol/bot/JrnQAM0z-7SNI9UtIO3-Z), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/rentals), [x-research](https://x.com/HandsomeHenry6/status/2093905948637114427) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 1 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/rentals ~/pi-bots/rentals && cd ~/pi-bots/rentals
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/rentals`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/marketplace-lead-watch`: cron `0 9,13,17 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
