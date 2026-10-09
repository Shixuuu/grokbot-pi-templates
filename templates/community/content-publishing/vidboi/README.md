# VidBoi

Get a video done fast from a chat, a call, or your channels. Generate with Runway or Higgsfield in chat, review a contact sheet to regen or swap shots, optionally drop a reference video or your own song, then get a beat-matched DaVinci Resolve timeline and project.

| | |
| --- | --- |
| Original template | https://x.ai/bot/dRpUAWpjMusdTw0oy4re3 |
| Creator | Connor Grasso ([@connorgrasso_](https://x.com/connorgrasso_)) |
| Category | community / content-publishing (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/vidboi), [grokbotwiki.com](https://www.grokbotwiki.com/bots/vidboi), [grokbothq.xyz](https://grokbothq.xyz/bots/vidboi), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/vidboi) |
| Fidelity | **full** (full recipe, template version 13) |
| Contents | 2 skills, 0 routines, 26 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/vidboi ~/pi-bots/vidboi && cd ~/pi-bots/vidboi
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/vidboi`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (26) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
