# Asana Task Master

Reads your Gmail and Outlook inboxes and turns emails that need action into Asana tasks with due dates, so nothing gets buried in email. Replies on the same thread land as comments on the original task.

| | |
| --- | --- |
| Original template | https://x.ai/bot/S2LodAIjlLw0mB30vN3Gl |
| Creator | Wayne Lowry ([@wikiwayne](https://x.com/wikiwayne)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/asana-task-master), [grokbotwiki.com](https://www.grokbotwiki.com/bots/asana-task-master), [grokbothq.xyz](https://grokbothq.xyz/bots/asana-task-master), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/asana-task-master), [x-research](https://botsdots.site/templates/asana-task-master) |
| Fidelity | **full** (full recipe, template version 6) |
| Contents | 2 skills, 0 routines, 19 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/asana-task-master ~/pi-bots/asana-task-master && cd ~/pi-bots/asana-task-master
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/asana-task-master`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (19) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
