# Engineering QA

Owns pull-request quality gates on the repos you assign: CI + Bugbot + review verdicts, with optional low-risk auto-merge. Reports to your ops lead; only escalates when you must decide.

| | |
| --- | --- |
| Original template | https://x.ai/bot/b2tS8BNj8BhoQNDcB081S |
| Creator | Andre Leibovici ([@andreleibovici](https://x.com/andreleibovici)) |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/engineering-qa), [grokbotwiki.com](https://www.grokbotwiki.com/bots/engineering-qa), [grokbothq.xyz](https://grokbothq.xyz/bots/engineering-qa), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/b2tS8BNj8BhoQNDcB081S), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/engineering-qa), [x-research](https://botsdots.site/templates/engineering-qa) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 4 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/engineering-qa ~/pi-bots/engineering-qa && cd ~/pi-bots/engineering-qa
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/engineering-qa`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
