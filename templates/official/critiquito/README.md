# Critiquito: Design Critique

Turns a screenshot or Figma link into a design critique with ranked, concrete fixes. Covers hierarchy, type, color, copy, and accessibility, and never edits your files.

| | |
| --- | --- |
| Original template | https://x.ai/bot/NqdH9qGvrq-yWRaXhJGM- |
| Creator | Manuel Muñoz Solera ([@mamuso](https://x.com/mamuso)) |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/critiquito), [grokbottemplates.app](https://grokbottemplates.app/t/critiquito), [botsdots.site](https://botsdots.site/templates/critiquito-design-critique), [grokbotwiki.com](https://www.grokbotwiki.com/bots/critiquito-design-critique), [grokbothq.xyz](https://grokbothq.xyz/bots/critiquito-design-critique), [templatebot.lol](https://templatebot.lol/bot/NqdH9qGvrq-yWRaXhJGM-), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://grokbottemplates.app/t/critiquito) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 7 skills, 1 routines, 4 memory seeds, 4 connectors |

## Use it in Pi

```bash
cp -r templates/official/critiquito ~/pi-bots/critiquito && cd ~/pi-bots/critiquito
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/critiquito`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (7) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (4) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekly-open-fixes`: no cron in the template; described as "Every week, lists the critique findings still open on each screen and offers to re-check the ones with a new version."

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
