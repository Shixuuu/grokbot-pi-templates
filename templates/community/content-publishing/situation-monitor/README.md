# Situation monitor

Watches what you save on X and drafts a weekly thread of the week's real stories, in your voice. For anyone who wants a Saturday roundup that never posts until they say so.

| | |
| --- | --- |
| Original template | https://x.ai/bot/lkHayxdQjNzVVJIDh7qaF |
| Creator | Chase McCarty ([@ChaseMc67](https://x.com/ChaseMc67)) |
| Category | community / content-publishing (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/situation-monitor), [botsdots.site](https://botsdots.site/templates/situation-monitor), [grokbotwiki.com](https://www.grokbotwiki.com/bots/situation-monitor), [grokbothq.xyz](https://grokbothq.xyz/bots/situation-monitor), [templatebot.lol](https://templatebot.lol/bot/lkHayxdQjNzVVJIDh7qaF), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/situation-monitor), [x-research](https://x.com/ChaseMc67/status/2093878821078573520) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 1 routines, 3 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/situation-monitor ~/pi-bots/situation-monitor && cd ~/pi-bots/situation-monitor
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/situation-monitor`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekly-x-ai-roundup`: cron `0 9 * * 6` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
