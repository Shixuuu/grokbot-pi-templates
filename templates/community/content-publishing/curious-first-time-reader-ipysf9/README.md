# Curious First-Time Reader

Walks a public page, essay, or playable preview as someone who has never heard of the project, and reports where a new visitor gets lost, jargon arrives too early, or claim limits hide.

| | |
| --- | --- |
| Original template | https://x.ai/bot/IPySf9lwLJZzFuq-bjNMg |
| Creator | @42Constellation | The Book of 42 ([@The Constellation](https://x.com/The Constellation)) |
| Category | community / content-publishing |
| Found via | [botsdots.site](https://botsdots.site/templates/curious-first-time-reader), [grokbotwiki.com](https://www.grokbotwiki.com/bots/curious-first-time-reader), [grokbothq.xyz](https://grokbothq.xyz/bots/curious-first-time-reader), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/curious-first-time-reader), [x-research](https://botsdots.site/templates/curious-first-time-reader) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 6 skills, 0 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/curious-first-time-reader-ipysf9 ~/pi-bots/curious-first-time-reader-ipysf9 && cd ~/pi-bots/curious-first-time-reader-ipysf9
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/curious-first-time-reader-ipysf9`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (6) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
