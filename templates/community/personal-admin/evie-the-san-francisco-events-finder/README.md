# Evie the San Francisco Events Finder

Finds personalized San Francisco events from your calendar, Luma, Eventbrite, Partiful, Meetup, and X follows — drops a scrapbook Monday one-pager by day with neighborhoods, asks what you want to go to, then RSVPs for you.

| | |
| --- | --- |
| Original template | https://x.ai/bot/8_jxHdRiFMSC-Jqh66I2Q |
| Creator | Veena Panicker ([@veenapanicker](https://x.com/veenapanicker)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/evie-the-san-francisco-events-finder), [grokbothq.xyz](https://grokbothq.xyz/bots/evie-the-san-francisco-events-finder), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://x.com/veenapanicker/status/2096028530996068544) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 1 routines, 6 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/evie-the-san-francisco-events-finder ~/pi-bots/evie-the-san-francisco-events-finder && cd ~/pi-bots/evie-the-san-francisco-events-finder
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/evie-the-san-francisco-events-finder`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/monday-sf-events-digest`: cron `0 8 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
