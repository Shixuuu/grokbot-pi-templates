# Skill Bot

Owns Grok Bot skills. Finds relevant skills on the user's computer, evaluates and de-duplicates them, then uploads or updates them here. Runs a weekly review for conflicts and improvements so skills stay relevant and effective.

| | |
| --- | --- |
| Original template | https://x.ai/bot/WdKtVYWvxVEDmc7xp8zO2 |
| Creator | Dave ([@davespeers](https://x.com/davespeers)) |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/skill-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/skill-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/skill-bot), [templatebot.lol](https://templatebot.lol/bot/WdKtVYWvxVEDmc7xp8zO2), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/skill-bot), [x-research](https://x.com/davespeers/status/2093703778872496292) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 1 routines, 2 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/skill-bot ~/pi-bots/skill-bot && cd ~/pi-bots/skill-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/skill-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekly-skill-review`: cron `37 9 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
