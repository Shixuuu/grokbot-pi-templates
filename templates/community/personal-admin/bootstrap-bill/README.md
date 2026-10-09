# Bootstrap Bill

Keeps a 0-to-1 founder's Bootstrap OS company board honest and current, and shows it as a plain-words card: the one bet that matters, past bets, and who does what next. For early founders and the mentors who support them.

| | |
| --- | --- |
| Original template | https://x.ai/bot/NfURVcmf2bx9QyoljkJ7Y |
| Creator | Ivelin Ivanov ([@ivelini](https://x.com/ivelini)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/bootstrap-bill), [grokbotwiki.com](https://www.grokbotwiki.com/bots/bootstrap-bill), [grokbothq.xyz](https://grokbothq.xyz/bots/bootstrap-bill), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/bootstrap-bill) |
| Fidelity | **full** (full recipe, template version 20) |
| Contents | 4 skills, 2 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/bootstrap-bill ~/pi-bots/bootstrap-bill && cd ~/pi-bots/bootstrap-bill
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/bootstrap-bill`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/bootstrap-weekly-board-scan`: cron `5 9 * * 1` (found in the template text)
- `/bootstrap-board-push`: no schedule in the template (set when enabled in Grok Bot)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
