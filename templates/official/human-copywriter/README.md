# Copy Humanizer

Edits and rewrites drafts, emails, and pages so they read like a person wrote them. Keeps your voice, shows every change and why, and never invents a fact.

| | |
| --- | --- |
| Original template | https://x.ai/bot/YwxIbVEWqXN-HYCxiMCoB |
| Creator | Massimo De Luisa ([@massimodeluisa](https://x.com/massimodeluisa)) |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/human-copywriter), [grokbottemplates.app](https://grokbottemplates.app/t/copy-humanizer), [botsdots.site](https://botsdots.site/templates/copy-humanizer), [grokbotwiki.com](https://www.grokbotwiki.com/bots/copy-humanizer), [grokbothq.xyz](https://grokbothq.xyz/bots/copy-humanizer), [templatebot.lol](https://templatebot.lol/bot/YwxIbVEWqXN-HYCxiMCoB), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://grokbottemplates.app/t/copy-humanizer) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 7 skills, 1 routines, 4 memory seeds, 5 connectors |

## Use it in Pi

```bash
cp -r templates/official/human-copywriter ~/pi-bots/human-copywriter && cd ~/pi-bots/human-copywriter
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/human-copywriter`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (7) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (5) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekly-shipped-check`: no cron in the template; described as "Every Friday afternoon, asks what copy actually went out this week and folds the edits the user made into their voice profile."

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
