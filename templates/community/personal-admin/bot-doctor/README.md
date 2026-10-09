# Bot Doctor

For the bot that got dumber. Your bot used to be sharp. When it forgets things, does dumb things, or ignores your instructions, Bot Doctor runs a full checkup, writes a complete repair plan, and applies every fix you confirm. Say “fix this bot.” Nothing changes until you say so.

| | |
| --- | --- |
| Original template | https://x.ai/bot/ug20hy7rQtr37O8IBoeSm |
| Creator | Salim Habash ([@sal_habash](https://x.com/sal_habash)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/bot-doctor), [grokbotwiki.com](https://www.grokbotwiki.com/bots/bot-doctor), [grokbothq.xyz](https://grokbothq.xyz/bots/bot-doctor), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/bot-doctor), [x-research](https://x.com/sal_habash/status/2105158829151580535) |
| Fidelity | **full** (full recipe, template version 28) |
| Contents | 8 skills, 0 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/bot-doctor ~/pi-bots/bot-doctor && cd ~/pi-bots/bot-doctor
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/bot-doctor`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (8) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
