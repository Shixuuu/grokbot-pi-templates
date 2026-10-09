# Photo & Video Shoot Confirmations

Weather-aware shoot confirmations for photographers, videographers, and drone pilots. Emails each client 48 hours before an on-location shoot with an hour-by-hour forecast, then watches replies and drafts reschedule options.

| | |
| --- | --- |
| Original template | https://x.ai/bot/iduDVp02VHu06-XddxcSD |
| Creator | Timothy Fleming ([@TimFPhotography](https://x.com/TimFPhotography)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/photo-video-shoot-confirmations), [grokbotwiki.com](https://www.grokbotwiki.com/bots/photo-video-shoot-confirmations), [grokbothq.xyz](https://grokbothq.xyz/bots/photo-video-shoot-confirmations), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/photo-video-shoot-confirmations) |
| Fidelity | **full** (full recipe, template version 5) |
| Contents | 1 skills, 2 routines, 5 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/photo-video-shoot-confirmations ~/pi-bots/photo-video-shoot-confirmations && cd ~/pi-bots/photo-video-shoot-confirmations
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/photo-video-shoot-confirmations`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/48-hour-shoot-confirmations`: cron `3 8 * * *` (found in the template text)
- `/shoot-confirmation-reply-watch`: cron `55 8-19 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
