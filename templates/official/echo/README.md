# Meeting Recap Deck

Turns your meeting notes into a recap deck in your slide template. Works from notes you paste or upload, and never invents a quote.

| | |
| --- | --- |
| Original template | https://x.ai/bot/YklttiPpAHweKbOLV1TSF |
| Creator | Krista Letz ([@kristaletz](https://x.com/kristaletz)) |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/echo), [grokbottemplates.app](https://grokbottemplates.app/t/meeting-recap-deck), [botsdots.site](https://botsdots.site/templates/meeting-recap-deck), [grokbotwiki.com](https://www.grokbotwiki.com/bots/meeting-recap-deck), [grokbothq.xyz](https://grokbothq.xyz/bots/meeting-recap-deck), [templatebot.lol](https://templatebot.lol/bot/YklttiPpAHweKbOLV1TSF), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://grokbottemplates.app/t/meeting-recap-deck) |
| Fidelity | **full** (full recipe, template version 12) |
| Contents | 8 skills, 2 routines, 4 memory seeds, 9 connectors |

## Use it in Pi

```bash
cp -r templates/official/echo ~/pi-bots/echo && cd ~/pi-bots/echo
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/echo`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (8) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (9) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/post-meeting-recap-draft`: no schedule in the template (set when enabled in Grok Bot)
- `/friday-recap-roundup`: no cron in the template; described as "Every Friday, the recaps that went out this week, the drafts still sitting unsent, and the next steps that are past their date."

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
