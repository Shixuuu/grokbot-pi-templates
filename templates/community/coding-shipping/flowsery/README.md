# Flowsery

Session-level analytics for site owners. Pulls the issues Flowsery’s AI found in session recordings (bugs, broken flows, UX problems ranked by how many sessions they hit), plus traffic, revenue attribution, and per-visitor journeys. Cookie-free, no personal data.

| | |
| --- | --- |
| Original template | https://x.ai/bot/tOP05p0n0XVUcpJDfPH0k |
| Creator | Taras Shynkarenko ([@tarasshyn](https://x.com/tarasshyn)) |
| Category | community / coding-shipping |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/flowsery), [botsdots.site](https://botsdots.site/templates/flowsery), [grokbotwiki.com](https://www.grokbotwiki.com/bots/flowsery), [grokbothq.xyz](https://grokbothq.xyz/bots/flowsery), [templatebot.lol](https://templatebot.lol/bot/tOP05p0n0XVUcpJDfPH0k), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/flowsery), [x-research](https://x.com/tarasshyn/status/2093730218145976437) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 1 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/flowsery ~/pi-bots/flowsery && cd ~/pi-bots/flowsery
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/flowsery`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/site-health-report`: cron `0 9 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
