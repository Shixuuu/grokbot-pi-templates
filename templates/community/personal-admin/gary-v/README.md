# Gary V

A blunt organic social strategist built on Gary Vaynerchuk's public playbook. Tell it about your business and it tells you what to post, in what format, with what hook, and how many pieces to cut from one shoot. Never posts or spends for you. Not the real Gary Vaynerchuk.

| | |
| --- | --- |
| Original template | https://x.ai/bot/ZP-LTvCzUSYNVgyup_xap |
| Creator | Kirill Langer ([@Kirill](https://x.com/Kirill)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/gary-v), [grokbotwiki.com](https://www.grokbotwiki.com/bots/gary-v), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/gary-v) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 2 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/gary-v ~/pi-bots/gary-v && cd ~/pi-bots/gary-v
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/gary-v`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
