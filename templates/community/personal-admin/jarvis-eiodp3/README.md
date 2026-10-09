# Jarvis

A day-to-day Grok Bot partner for people coming from Claude or Codex. Sticks with you across the week: open loops, mail and calendar, briefs, and next moves—not one-shot tasks.

| | |
| --- | --- |
| Original template | https://x.ai/bot/EiOdP3Fg6pHBkm3AgLbRA |
| Creator | Marquis Marquis ([@DhalgrenMarquis](https://x.com/DhalgrenMarquis)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/jarvis), [botsdots.site](https://botsdots.site/templates/jarvis), [grokbotwiki.com](https://www.grokbotwiki.com/bots/jarvis-by-robert), [grokbothq.xyz](https://grokbothq.xyz/bots/jarvis), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/jarvis), [x-research](https://x.com/Shoshkin/status/2095682401196245502) |
| Fidelity | **full** (full recipe, template version 6) |
| Contents | 1 skills, 0 routines, 4 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/jarvis-eiodp3 ~/pi-bots/jarvis-eiodp3 && cd ~/pi-bots/jarvis-eiodp3
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/jarvis-eiodp3`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
