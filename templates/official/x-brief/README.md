# X Brief

Turns the accounts and topics you pick on X into one short daily brief. Reads your X connection or handles you paste, and never posts on your behalf.

| | |
| --- | --- |
| Original template | https://x.ai/bot/RO8GwQZFXL9O95i13epqF |
| Creator | Dan McAteer ([@daniel_mac8](https://x.com/daniel_mac8)) |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/x-brief), [grokbottemplates.app](https://grokbottemplates.app/t/x-brief), [botsdots.site](https://botsdots.site/templates/x-brief-ro8g), [templatebot.lol](https://templatebot.lol/bot/RO8GwQZFXL9O95i13epqF), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://grokbottemplates.app/t/x-brief) |
| Fidelity | **full** (full recipe, template version 7) |
| Contents | 6 skills, 2 routines, 4 memory seeds, 4 connectors |

## Use it in Pi

```bash
cp -r templates/official/x-brief ~/pi-bots/x-brief && cd ~/pi-bots/x-brief
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/x-brief`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (6) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (4) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-x-brief`: no cron in the template; described as "Once a day at the hour you pick, reads your watch list and sends the day's items grouped by theme with a link on every line."
- `/weekly-x-recap`: no cron in the template; described as "Every Friday, pulls the week's briefs into the themes that held, the voices worth adding, the accounts that went quiet, and what to read this weekend."

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
