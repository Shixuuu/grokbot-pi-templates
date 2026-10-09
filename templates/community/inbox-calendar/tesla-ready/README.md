# Tesla Ready

Has your Tesla warm or cool right when you need to leave, timed to your Google Calendar and live traffic, or on demand. Fully automatic after a one-time setup on your phone. Uses Tesla's official API, never Tessie or TeslaFi.

| | |
| --- | --- |
| Original template | https://x.ai/bot/L5Sczwabgsf59rZ6RTChF |
| Creator | Lincoln ([@WaitWhat](https://x.com/WaitWhat)) |
| Category | community / inbox-calendar (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/tesla-ready), [grokbotwiki.com](https://www.grokbotwiki.com/bots/tesla-ready), [grokbothq.xyz](https://grokbothq.xyz/bots/tesla-ready), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/tesla-ready), [x-research](https://x.com/WaitWhat/status/2106154933993296287) |
| Fidelity | **full** (full recipe, template version 8) |
| Contents | 3 skills, 0 routines, 0 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/tesla-ready ~/pi-bots/tesla-ready && cd ~/pi-bots/tesla-ready
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/tesla-ready`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
