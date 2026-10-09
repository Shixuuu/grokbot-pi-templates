# Soulsie Riff

Private joke desk for a public X agent/Grok running gag. Pulls keepers on a schedule and writes mean-fond knives for you only — never posts or contacts the account.

| | |
| --- | --- |
| Original template | https://x.ai/bot/O-7W0uf0-_raG54kvXQcV |
| Creator | AdventureNLearn Main ([@AdventureNLearn](https://x.com/AdventureNLearn)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/soulsie-riff), [grokbotwiki.com](https://www.grokbotwiki.com/bots/soulsie-riff), [grokbothq.xyz](https://grokbothq.xyz/bots/soulsie-riff), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/soulsie-riff), [x-research](https://botsdots.site/templates/soulsie-riff) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 4 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/soulsie-riff ~/pi-bots/soulsie-riff && cd ~/pi-bots/soulsie-riff
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/soulsie-riff`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (4) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/soulsie-weekday-morning-0645`: cron `45 6 * * 1-4` (found in the template text)
- `/soulsie-weekday-evening-1800`: cron `0 18 * * 1-4` (found in the template text)
- `/soulsie-weekend-morning-1000`: cron `0 10 * * 5,6,0` (found in the template text)
- `/soulsie-weekend-night-2200`: cron `0 22 * * 5,6,0` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
