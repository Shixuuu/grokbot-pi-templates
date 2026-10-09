# Grok Bot Optimizer

Cuts wasted tokens on real Bot work you route through an opt-in gateway — collapsing duplicate tool results and repeated messages before they hit the model. Live provider-measured cuts (e.g. 571→330, 455→228, 810→462); native chats stay uncovered until a platform hook exists. No invented dollar savings.

| | |
| --- | --- |
| Original template | https://x.ai/bot/_YJdQ3bYXlYPOsX0NBmaV |
| Creator | Thomas Albrecht |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/grok-bot-optimizer), [grokbothq.xyz](https://grokbothq.xyz/bots/grok-bot-optimizer), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/grok-bot-optimizer) |
| Fidelity | **full** (full recipe, template version 10) |
| Contents | 1 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/grok-bot-optimizer ~/pi-bots/grok-bot-optimizer && cd ~/pi-bots/grok-bot-optimizer
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/grok-bot-optimizer`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
