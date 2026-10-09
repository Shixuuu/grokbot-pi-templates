# Social Media Manager

Learns your voice from your own posts, keeps a weekly content calendar, and drafts posts and replies for each platform. Reviews what performed and adjusts.

| | |
| --- | --- |
| Original template | https://x.ai/bot/IIpqei3mrbiDeXL-cuhQo |
| Creator | Charles Bonetti ([@ASaltyVet](https://x.com/ASaltyVet)) |
| Category | community / inbox-calendar (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/social-media-manager-iipq), [grokbotwiki.com](https://www.grokbotwiki.com/bots/social-media-manager-iipq), [grokbothq.xyz](https://grokbothq.xyz/bots/social-media-manager), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/social-media-manager-iipq) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 6 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/social-media-manager ~/pi-bots/social-media-manager && cd ~/pi-bots/social-media-manager
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/social-media-manager`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (6) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/soc-intake-and-voice`: cron `0 13 1-7 * *` (found in the template text)
- `/soc-material-sweep`: cron `10 8 * * 1-5` (found in the template text)
- `/soc-draft-queue`: cron `15 9 * * 1-5` (found in the template text)
- `/soc-calendar-standup`: cron `50 6 * * 1-5` (found in the template text)
- `/soc-engagement-sweep`: cron `45 5 * * 1-5` (found in the template text)
- `/soc-performance-review`: cron `0 16 * * 5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
