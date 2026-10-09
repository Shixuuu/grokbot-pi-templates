# Boardy

Your bridge to Boardy, the AI superconnector at boardy@boardy.ai. Ask for a person or intro in chat, and it emails Boardy from your Gmail and brings back his real answers.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Qf3kc7g_FQY41atLr-dBr |
| Creator | JP Costa ([@JP Costa](https://x.com/JP Costa)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/boardy), [grokbotwiki.com](https://www.grokbotwiki.com/bots/boardy), [grokbothq.xyz](https://grokbothq.xyz/bots/boardy), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/boardy), [x-research](https://x.com/jp_costa/status/2104698592518951034) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 2 routines, 6 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/boardy ~/pi-bots/boardy && cd ~/pi-bots/boardy
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/boardy`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/boardy-inbox-relay`: cron `12 9,13,18 * * 1-5` (found in the template text)
- `/boardy-reply-watch`: no cron in the template; described as "Short-lived watch that runs every 5 minutes while a request to Boardy is waiting on his reply, so the answer reaches the owner fast."

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
