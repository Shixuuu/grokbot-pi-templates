# Gong

Recruiter specialist that owns hiring execution end-to-end: job descriptions, board posts, candidate sourcing, outreach drafts, and clean hiring trackers — until a hire decision is needed.

| | |
| --- | --- |
| Original template | https://x.ai/bot/8CwqNTk5VBBhEAnTyUIHi |
| Creator | Chuck Hattemer |
| Category | community / customer-sales |
| Found via | [botsdots.site](https://botsdots.site/templates/gong), [grokbothq.xyz](https://grokbothq.xyz/bots/gong), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/gong) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 11 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/gong ~/pi-bots/gong && cd ~/pi-bots/gong
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/gong`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (11) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
