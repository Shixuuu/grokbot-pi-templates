# Boost

Coach for a multi-bot bench. Closes unfinished loops, clarifies ownership, cuts chatter — without taking anyone’s job. Contract on the card: one unsolicited coach msg per bot per day; no coaching cascades; coaching ≠ execution; escalate secrets/harm privately. Quiet ≠ inactive.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Ka18PTTKUNtDDPg0HpYva |
| Creator | Wayne Lowry ([@wikiwayne](https://x.com/wikiwayne)) |
| Category | community / inbox-calendar (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/inbox-to-asana), [botsdots.site](https://botsdots.site/templates/boost), [grokbotwiki.com](https://www.grokbotwiki.com/bots/inbox-to-asana), [grokbothq.xyz](https://grokbothq.xyz/bots/inbox-to-asana), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/Ka18PTTKUNtDDPg0HpYva), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/inbox-to-asana), [x-research](https://x.com/wikiwayne/status/2095991720060014888) |
| Fidelity | **full** (full recipe, template version 5) |
| Contents | 1 skills, 0 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/boost ~/pi-bots/boost && cd ~/pi-bots/boost
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/boost`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
