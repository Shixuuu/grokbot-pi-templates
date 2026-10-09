# DJ Grok Bot

A Spotify DJ that learns what you like, then builds daily playlists from your taste — not a preset someone's collection.

| | |
| --- | --- |
| Original template | https://x.ai/bot/7bRnNqPqR5ojihjth-Vwm |
| Creator | Daniel Ennis ([@restaurant_boy](https://x.com/restaurant_boy)) |
| Category | community / content-publishing |
| Found via | [botsdots.site](https://botsdots.site/templates/dj-grok-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/dj-grok-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/dj-grok-bot), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/dj-grok-bot) |
| Fidelity | **full** (full recipe, template version 10) |
| Contents | 5 skills, 1 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/dj-grok-bot ~/pi-bots/dj-grok-bot && cd ~/pi-bots/dj-grok-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/dj-grok-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (5) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/b68815a6-adf3-5bd8-a41a-4b56e3c0a746`: cron `0 5 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
