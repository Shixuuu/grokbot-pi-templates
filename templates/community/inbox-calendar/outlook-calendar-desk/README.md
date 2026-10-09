# Outlook Calendar Desk

Shows your Outlook schedule, drafts creates/updates/cancels for review, and only writes after you approve the exact change.

| | |
| --- | --- |
| Original template | https://x.ai/bot/T_pOFV6-PnM3ZgALGFEBk |
| Creator | Bosotter |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/outlook-calendar-desk), [grokbothq.xyz](https://grokbothq.xyz/bots/outlook-calendar-desk), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/outlook-calendar-desk) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 7 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/outlook-calendar-desk ~/pi-bots/outlook-calendar-desk && cd ~/pi-bots/outlook-calendar-desk
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/outlook-calendar-desk`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
