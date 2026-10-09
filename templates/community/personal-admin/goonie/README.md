# Goonie

A witty, warm AI companion that remembers you. It banters, tells jokes, and has kid-friendly and holiday modes. Chat by text or voice in the Grok app on your phone or tablet.

| | |
| --- | --- |
| Original template | https://x.ai/bot/RTQ5cLf2WeWJPyjD8YSWr |
| Creator | david eden ([@goonieai](https://x.com/goonieai)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/goonie), [grokbotwiki.com](https://www.grokbotwiki.com/bots/goonie), [grokbothq.xyz](https://grokbothq.xyz/bots/goonie), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/goonieai/status/2102902383114379743) |
| Fidelity | **full** (full recipe, template version 12) |
| Contents | 9 skills, 0 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/goonie ~/pi-bots/goonie && cd ~/pi-bots/goonie
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/goonie`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (9) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
