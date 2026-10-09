# The Morning Newspaper

A newspaper customized to you. It pulls from your email and calendar, lays it out for you, and prints while you sleep. Created by @karenxcheng

| | |
| --- | --- |
| Original template | https://x.ai/bot/1xAJYJPes3X7dUM2mk9Di |
| Creator | Karen X. Cheng ([@karenxcheng](https://x.com/karenxcheng)) |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/the-morning-newspaper), [grokbottemplates.app](https://grokbottemplates.app/t/the-morning-newspaper), [botsdots.site](https://botsdots.site/templates/the-morning-newspaper), [grokbotwiki.com](https://www.grokbotwiki.com/bots/the-morning-newspaper), [grokbothq.xyz](https://grokbothq.xyz/bots/the-morning-newspaper), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/1xAJYJPes3X7dUM2mk9Di), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/the-morning-newspaper), [x-research](https://grokbottemplates.app/t/the-morning-newspaper) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/official/the-morning-newspaper ~/pi-bots/the-morning-newspaper && cd ~/pi-bots/the-morning-newspaper
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/the-morning-newspaper`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
