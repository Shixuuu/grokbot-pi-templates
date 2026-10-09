# Usage Saver

Cut the cost and clutter of AI-assistant and agent tasks by shrinking context, picking the right tool, and skipping unnecessary steps.

| | |
| --- | --- |
| Original template | https://x.ai/bot/jQ8sPQbnCaXQdXV6CjTKL |
| Creator | Daniel Rader ([@Draggen75](https://x.com/Draggen75)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/usage-saver), [grokbotwiki.com](https://www.grokbotwiki.com/bots/usage-saver), [grokbothq.xyz](https://grokbothq.xyz/bots/usage-saver), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/usage-saver), [x-research](https://botsdots.site/templates/usage-saver) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 2 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/usage-saver ~/pi-bots/usage-saver && cd ~/pi-bots/usage-saver
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/usage-saver`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
