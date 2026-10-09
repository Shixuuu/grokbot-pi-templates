# Echo

Quiet note-taker for car and chat: save notes on command, keep a to-do list, search and share with approval, optional teammate standup digests. Built for people who want capture without noise.

| | |
| --- | --- |
| Original template | https://x.ai/bot/MJ1SXojnp6FFkRqK1MPk1 |
| Creator | Xin Lin ([@xlin_](https://x.com/xlin_)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/echo-mj1s), [grokbotwiki.com](https://www.grokbotwiki.com/bots/echo-mj1s), [grokbothq.xyz](https://grokbothq.xyz/bots/echo-3), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/echo-mj1s) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 9 skills, 2 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/echo ~/pi-bots/echo && cd ~/pi-bots/echo
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/echo`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (9) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/evening-standup-digest`: cron `36 19 * * 1-5` (found in the template text)
- `/notes-retention-check`: cron `46 9 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
