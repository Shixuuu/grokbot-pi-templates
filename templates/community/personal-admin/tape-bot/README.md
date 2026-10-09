# Tape Bot

Set up routines on your favorite podcasts or YouTube channels that cut ads, add chapters, keep show notes and original chapters/art, and publish to a custom RSS feed you can use in any podcast app.

| | |
| --- | --- |
| Original template | https://x.ai/bot/l4oe6CObIVQLANlBxZEla |
| Creator | David Altizer ([@David](https://x.com/David)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/tape-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/tape-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/tape-bot), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/tape-bot), [x-research](https://botsdots.site/templates/tape-bot) |
| Fidelity | **full** (full recipe, template version 5) |
| Contents | 1 skills, 3 routines, 5 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/tape-bot ~/pi-bots/tape-bot && cd ~/pi-bots/tape-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/tape-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/macbreak-weekly-board-tape`: cron `46 19 * * 2` (found in the template text)
- `/macbreak-weekly-wed-catch`: cron `46 8 * * 3` (found in the template text)
- `/atp-board-tape`: cron `2 19 * * 4` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
