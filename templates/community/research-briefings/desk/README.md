# Desk

NFL PropDesk research assistant. Stamps named player props and totals with TypeSafe Jev language-support probabilities — never picks, never places bets.

| | |
| --- | --- |
| Original template | https://x.ai/bot/9EMVK1X_bv5hA5pAdZCpt |
| Creator | Contravious Battle ([@ConWanZo](https://x.com/ConWanZo)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/desk), [grokbotwiki.com](https://www.grokbotwiki.com/bots/desk), [grokbothq.xyz](https://grokbothq.xyz/bots/desk), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/desk), [x-research](https://x.com/ConWanZo/status/2104256856764055714) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 5 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/desk ~/pi-bots/desk && cd ~/pi-bots/desk
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/desk`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (5) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/nfl-week-slate`: cron `11 9 * * 2` (found in the template text)
- `/injury-desk`: cron `39 8 * * 3-6` (found in the template text)
- `/move-language`: cron `15 19 * * 4` (found in the template text)
- `/watchlist-cards`: cron `10 9 * * 6` (found in the template text)
- `/monday-hold`: cron `51 9 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
