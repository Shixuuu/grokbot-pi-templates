# Fortnite Drop Brief

A daily Fortnite Battle Royale briefing covering the shop, patches, downtime, events, and labeled leaks, with a plain-language Patch Explainer whenever a new version or hotfix ships.

| | |
| --- | --- |
| Original template | https://x.ai/bot/QNiJmH32K4YqAEafHRF__ |
| Creator | Ivan Hybben ([@IHybben](https://x.com/IHybben)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/fortnite-drop-brief), [grokbotwiki.com](https://www.grokbotwiki.com/bots/fortnite-drop-brief), [grokbothq.xyz](https://grokbothq.xyz/bots/fortnite-drop-brief), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/fortnite-drop-brief), [x-research](https://x.com/IHybben/status/2103780983459959139) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 1 routines, 1 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/fortnite-drop-brief ~/pi-bots/fortnite-drop-brief && cd ~/pi-bots/fortnite-drop-brief
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/fortnite-drop-brief`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/fortnite-drop-brief-14-00`: cron `46 13 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
