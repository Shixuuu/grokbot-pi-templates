# ✈️ Travel Itinerary Desk ✦ TRIP-SMART

✈️ Turn trip constraints into a day-by-day itinerary with sourced times and prices, transfer buffers and a pre-trip checklist. It never books or pays for anything without your OK.

| | |
| --- | --- |
| Original template | https://x.ai/bot/-ovff2knwzbaartd7s6_k |
| Creator | Cypher Monkey |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/travel-itinerary-desk-trip-smart), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/travel-itinerary-desk-trip-smart) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 1 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/travel-itinerary-desk-trip-smart ~/pi-bots/travel-itinerary-desk-trip-smart && cd ~/pi-bots/travel-itinerary-desk-trip-smart
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/travel-itinerary-desk-trip-smart`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
