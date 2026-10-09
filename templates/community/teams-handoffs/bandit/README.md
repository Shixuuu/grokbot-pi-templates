# Bandit

Sarcastic cyberpunk-raccoon orchestrator. Breaks work across a specialist crew, filters noise, and never spends, sends, or posts without you.

| | |
| --- | --- |
| Original template | https://x.ai/bot/xRyaLCqAzIr_paD5tC8PK |
| Creator | BitsOfJT ([@BitsOfJT](https://x.com/BitsOfJT)) |
| Category | community / teams-handoffs |
| Found via | [botsdots.site](https://botsdots.site/templates/bandit), [grokbotwiki.com](https://www.grokbotwiki.com/bots/bandit), [grokbothq.xyz](https://grokbothq.xyz/bots/bandit), [templatebot.lol](https://templatebot.lol/bot/xRyaLCqAzIr_paD5tC8PK), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/bandit), [x-research](https://x.com/BitsOfJT/status/2093757984203583651) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 4 skills, 3 routines, 14 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/bandit ~/pi-bots/bandit && cd ~/pi-bots/bandit
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/bandit`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (14) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/morning-calendar-fill-in`: cron `0 8 * * *` (found in the template text)
- `/morning-second-brain-brief`: cron `0 7 * * 1-5` (found in the template text)
- `/git-bot-pr-review-gate`: no schedule in the template (set when enabled in Grok Bot)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
