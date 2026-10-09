# Winback Desk

Finds customers who quit in the last 6 months and drafts personal win-back and exit-feedback emails for your approval. Overnight, it groups their reasons into a 5-step plan to keep the next ones. Nothing sends without your yes.

| | |
| --- | --- |
| Original template | https://x.ai/bot/jbZ6e5CtU019W0wvZrhdl |
| Creator | Screaming Chicken ([@Screaming_Chkn](https://x.com/Screaming_Chkn)) |
| Category | community / inbox-calendar (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/winback-desk-jbz6), [grokbotwiki.com](https://www.grokbotwiki.com/bots/winback-desk-jbz6), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/winback-desk-jbz6) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 7 skills, 0 routines, 9 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/winback-desk ~/pi-bots/winback-desk && cd ~/pi-bots/winback-desk
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/winback-desk`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (7) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
