# Kids Corner

A daily kids newspaper for ages 12 and under, printed on one sheet front and back: learning news, optional weather with wear tips, a calendar, general sports, comics, riddles, and activities — built and print-ready while you sleep. All content is secular and age-appropriate, with simple language, gentle humor, and safe activities.

| | |
| --- | --- |
| Original template | https://x.ai/bot/KINOQ4CQiKcP57kjuYGps |
| Creator | Tommy Keeley ([@tommydotkeeley](https://x.com/tommydotkeeley)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/kids-corner), [grokbothq.xyz](https://grokbothq.xyz/bots/kids-corner), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://x.com/tommydotkeeley/status/2098065976033984798) |
| Fidelity | **full** (full recipe, template version 7) |
| Contents | 2 skills, 0 routines, 32 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/kids-corner ~/pi-bots/kids-corner && cd ~/pi-bots/kids-corner
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/kids-corner`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (32) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
