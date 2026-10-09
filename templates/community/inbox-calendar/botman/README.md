# Botman

A detective bot that vets your followers, DMs, lists, and inbox, writes evidence-backed case files, and catches scammers, bots, and impersonators. Starts in approval mode, so nothing is blocked without your OK.

| | |
| --- | --- |
| Original template | https://x.ai/bot/ZsgeyFyAlUtxHbRgDBZqx |
| Creator | JakeFromStarstruck. ([@Rune_King_Jake](https://x.com/Rune_King_Jake)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/botman), [grokbotwiki.com](https://www.grokbotwiki.com/bots/botman), [grokbothq.xyz](https://grokbothq.xyz/bots/botman), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/botman), [x-research](https://x.com/Rune_King_Jake/status/2107578863169450164) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 6 skills, 1 routines, 21 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/botman ~/pi-bots/botman && cd ~/pi-bots/botman
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/botman`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (21) | `MEMORY.md` |
| Skills (6) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-follower-case-files`: cron `41 9 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
