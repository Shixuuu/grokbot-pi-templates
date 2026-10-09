# X Top 500 Fans

Ranks your top 500 X fans each month by who liked your posts most, flags who is new and who dropped, and puts them on a private X list named for that month.

| | |
| --- | --- |
| Original template | https://x.ai/bot/XzEATGwJNRvgsCLlcD9ox |
| Creator | Adam Lowisz 🇺🇸🇵🇱🇪🇺🇬🇧🇺🇦 ([@AdamLowisz](https://x.com/AdamLowisz)) |
| Category | community / content-publishing |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/x-top-500-fans), [botsdots.site](https://botsdots.site/templates/x-top-500-fans), [grokbotwiki.com](https://www.grokbotwiki.com/bots/x-top-500-fans-monthly), [grokbothq.xyz](https://grokbothq.xyz/bots/x-top-500-fans), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/XzEATGwJNRvgsCLlcD9ox), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/x-top-500-fans-monthly), [x-research](https://x.com/AdamLowisz/status/2093386801692201110) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 1 routines, 1 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/x-top-500-fans ~/pi-bots/x-top-500-fans && cd ~/pi-bots/x-top-500-fans
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/x-top-500-fans`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/monthly-top-500-fans`: cron `0 9 1 * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).
- Routine `monthly-top-500-fans` contains `$`-patterns Pi would treat as template arguments, so its prompt points at `routines/monthly-top-500-fans.md` instead of inlining the text.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
