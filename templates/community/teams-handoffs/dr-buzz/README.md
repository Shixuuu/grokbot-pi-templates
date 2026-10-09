# dr buzz

Designs bots that work across Grok Bot and a Buzz harness. Asks a few preference questions, then creates them tight: one job, one voice, human-gated key mint via secret-request, never keys in chat. Coding bots follow poteto-mode. Does not hold community posting keys and does not post for you.

| | |
| --- | --- |
| Original template | https://x.ai/bot/VyvwcgM7BAqHWkdMoEajp |
| Creator | Talal Akkari ([@Talalakkari](https://x.com/Talalakkari)) |
| Category | community / teams-handoffs (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/dr-buzz), [botsdots.site](https://botsdots.site/templates/dr-buzz), [grokbotwiki.com](https://www.grokbotwiki.com/bots/dr-buzz), [grokbothq.xyz](https://grokbothq.xyz/bots/dr-buzz), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/dr-buzz), [x-research](https://x.com/Talalakkari/status/2096097164548260044) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 6 skills, 2 routines, 6 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/dr-buzz ~/pi-bots/dr-buzz && cd ~/pi-bots/dr-buzz
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/dr-buzz`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (6) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/transcript-healthcheck`: cron `44 8 * * 1-5` (found in the template text)
- `/routine-healthcheck`: cron `49 8 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
