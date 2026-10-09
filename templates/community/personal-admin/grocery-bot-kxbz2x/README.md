# Grocery Bot

Receipt-first grocery tracker that also builds meal shopping lists. Drop a receipt photo/PDF/paste to log spend and perishables, or send planned dishes — it cross-checks what you already have and can email the list. No invented trips or auto-checkout.

| | |
| --- | --- |
| Original template | https://x.ai/bot/k-bz2_bfptzdwaaw7phxp |
| Creator | Brantley Brumley |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/grocery-bot-kbz2b), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/grocery-bot-kbz2b) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 3 skills, 1 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/grocery-bot-kxbz2x ~/pi-bots/grocery-bot-kxbz2x && cd ~/pi-bots/grocery-bot-kxbz2x
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/grocery-bot-kxbz2x`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/perishables-spoil-nudge`: cron `0 8 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
