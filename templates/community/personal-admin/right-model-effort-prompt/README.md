# Right Model, Effort & Prompt

Tells you which AI model and effort level to use for any task across Anthropic, OpenAI, Grok, Meta, and Google, and tightens your prompt before you send it, so your plan's limits last longer. Sends a weekday morning brief when model news changes the best pick.

| | |
| --- | --- |
| Original template | https://x.ai/bot/T3hutFteALP3ObLPxQJpn |
| Creator | Foundation Robots ([@Foundation_Bots](https://x.com/Foundation_Bots)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/right-model-effort-prompt), [grokbotwiki.com](https://www.grokbotwiki.com/bots/right-model-effort-prompt), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/right-model-effort-prompt), [x-research](https://x.com/Foundation_Bots/status/2107566000791298401) |
| Fidelity | **full** (full recipe, template version 10) |
| Contents | 2 skills, 1 routines, 9 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/right-model-effort-prompt ~/pi-bots/right-model-effort-prompt && cd ~/pi-bots/right-model-effort-prompt
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/right-model-effort-prompt`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/morning-ai-model-news-roundup`: cron `3 7 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
