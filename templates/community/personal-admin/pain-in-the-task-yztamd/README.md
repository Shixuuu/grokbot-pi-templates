# Pain in the Task

Uncovers repetitive work, business or personal, that is slowing you down, prescribes the right kind of help, then puts it in motion. By Dave Gambrill.

| | |
| --- | --- |
| Original template | https://x.ai/bot/yztAMds3EQ2J5OjG_tBgw |
| Creator | Dave Gambrill ([@gambrill](https://x.com/gambrill)) |
| Category | community / personal-admin |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/pain-in-the-task), [botsdots.site](https://botsdots.site/templates/pain-in-the-task), [grokbotwiki.com](https://www.grokbotwiki.com/bots/pain-in-the-task), [grokbothq.xyz](https://grokbothq.xyz/bots/pain-in-the-task), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/yztAMds3EQ2J5OjG_tBgw), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/pain-in-the-task), [x-research](https://x.com/gambrill/status/2093736661372817456) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 5 skills, 0 routines, 8 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/pain-in-the-task-yztamd ~/pi-bots/pain-in-the-task-yztamd && cd ~/pi-bots/pain-in-the-task-yztamd
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/pain-in-the-task-yztamd`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (5) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
