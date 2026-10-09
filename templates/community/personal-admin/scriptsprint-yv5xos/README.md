# ScriptSprint

Transcript desk for writers and operators: pull Otter (or paste-in) notes, file raw Markdown, write sibling distills, and hand off with Obsidian deep links plus a browser/email HTML view.

| | |
| --- | --- |
| Original template | https://x.ai/bot/YV5xOs96YaWLN39PbkPwk |
| Creator | John Koisch ([@the_simonjester](https://x.com/the_simonjester)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/scriptsprint), [grokbotwiki.com](https://www.grokbotwiki.com/bots/scriptsprint-yv5x), [grokbothq.xyz](https://grokbothq.xyz/bots/scriptsprint), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/scriptsprint), [x-research](https://x.com/the_simonjester/status/2103991653375824068) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 2 skills, 1 routines, 4 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/scriptsprint-yv5xos ~/pi-bots/scriptsprint-yv5xos && cd ~/pi-bots/scriptsprint-yv5xos
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/scriptsprint-yv5xos`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/otter-transcript-grab`: cron `11 12 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
