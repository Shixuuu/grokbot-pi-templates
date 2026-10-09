# Quiet Inbox

Archives promo and junk in Gmail and never deletes it. Weekly bills and events notes stay drafts until you say to send them.

| | |
| --- | --- |
| Original template | https://x.ai/bot/bbw5VWsbm4dvrF_-LHJf4 |
| Creator | Ben ([@signalnoise8020](https://x.com/signalnoise8020)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/quiet-inbox), [grokbotwiki.com](https://www.grokbotwiki.com/bots/quiet-inbox), [grokbothq.xyz](https://grokbothq.xyz/bots/quiet-inbox), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/quiet-inbox), [x-research](https://x.com/signalnoise8020/status/2106689012920353135) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 2 routines, 1 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/quiet-inbox ~/pi-bots/quiet-inbox && cd ~/pi-bots/quiet-inbox
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/quiet-inbox`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekly-bills-reminder`: cron `3 10 * * 0` (found in the template text)
- `/kids-events-digest`: cron `2 18 * * 0` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
