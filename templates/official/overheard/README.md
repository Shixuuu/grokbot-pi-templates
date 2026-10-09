# Overheard

Watches Reddit, Hacker News, news sites, and X for third-party mentions of your name, brand, and URLs, then sends a short weekday digest when something clears the bar. Stays quiet on dead days and never posts on your behalf.

| | |
| --- | --- |
| Original template | https://x.ai/bot/NIEguoGUjA648fUPle8F5 |
| Creator | Lenny Rachitsky ([@lennysan](https://x.com/lennysan)) |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/overheard), [grokbottemplates.app](https://grokbottemplates.app/t/overheard), [botsdots.site](https://botsdots.site/templates/overheard), [grokbotwiki.com](https://www.grokbotwiki.com/bots/overheard), [grokbothq.xyz](https://grokbothq.xyz/bots/overheard), [templatebot.lol](https://templatebot.lol/bot/NIEguoGUjA648fUPle8F5), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://grokbottemplates.app/t/overheard) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 2 skills, 1 routines, 9 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/official/overheard ~/pi-bots/overheard && cd ~/pi-bots/overheard
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/overheard`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-mention-monitor`: cron `30 8 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
