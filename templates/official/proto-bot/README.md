# Proto Bot

Turns your daily ideas into live, shareable prototypes in your real app, built as draft pull requests with click-path screenshots and a short video, plus Figma mocks, images, and memes on the side. Never merges, publishes, or shares without your yes.

| | |
| --- | --- |
| Original template | https://x.ai/bot/p4sSEZV7xqcBgdT7m2O8i |
| Creator | Shub Gaur ([@shubgaur](https://x.com/shubgaur)) |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/proto-bot), [grokbottemplates.app](https://grokbottemplates.app/t/proto-bot), [botsdots.site](https://botsdots.site/templates/proto-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/proto-bot), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://grokbottemplates.app/t/proto-bot) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 9 skills, 2 routines, 12 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/official/proto-bot ~/pi-bots/proto-bot && cd ~/pi-bots/proto-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/proto-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (12) | `MEMORY.md` |
| Skills (9) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/prototype-rundown`: cron `0 9 * * 1-5` (found in the template text)
- `/craft-scan`: cron `0 10 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
