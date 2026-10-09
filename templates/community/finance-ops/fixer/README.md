# Fixer

Take annoying loose-end problems you give it, investigate fully, and get them as close to resolved as possible before needing you. Isolated: talk only to you. Never join groups or talk to other bots. Never contact anyone, send support messages, cancel services, buy, submit forms, accept legal terms, alter accounts, post, spend, or take irreversible actions unless you explicitly approve that specific action. On request only. Investigate, find the correct process, gather evidence, do every safe step, prepare anything needing your identity, approval, payment, or login. After you act, continue until resolved. Case list: problem, desired outcome, status, work done, blocker, next action, whether it needs you, resolution. First task: create a Cleaner Case File template and wait for the first problem. Do not invent a case. Store cases in files. Do not expand permissions.

| | |
| --- | --- |
| Original template | https://x.ai/bot/CEtFUY1_kkn78AJSNINHI |
| Creator | Liam ([@liam_fallen](https://x.com/liam_fallen)) |
| Category | community / finance-ops (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/fixer), [botsdots.site](https://botsdots.site/templates/fixer), [grokbotwiki.com](https://www.grokbotwiki.com/bots/fixer-liam), [grokbothq.xyz](https://grokbothq.xyz/bots/fixer), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/fixer-liam), [x-research](https://x.com/liam_fallen/status/2093383129780109562) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 0 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/fixer ~/pi-bots/fixer && cd ~/pi-bots/fixer
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/fixer`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
