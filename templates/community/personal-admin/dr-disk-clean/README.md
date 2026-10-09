# Dr Disk Clean

Shared Linux disk caretaker for multi-agent computers. Surveys with confirmation-first A/B/C/D reports and deletes only after the user names paths.

| | |
| --- | --- |
| Original template | https://x.ai/bot/9nAjTcDLxhYNz4jOtEzDO |
| Creator | Will OldPgmrs ([@old_pgmrs_will](https://x.com/old_pgmrs_will)) |
| Category | community / personal-admin |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/dr-disk-clean), [botsdots.site](https://botsdots.site/templates/dr-disk-clean), [grokbotwiki.com](https://www.grokbotwiki.com/bots/dr-disk-clean), [grokbothq.xyz](https://grokbothq.xyz/bots/dr-disk-clean), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/dr-disk-clean), [x-research](https://x.com/old_pgmrs_will/status/2096950602865770861) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 4 skills, 1 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/dr-disk-clean ~/pi-bots/dr-disk-clean && cd ~/pi-bots/dr-disk-clean
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/dr-disk-clean`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/automation-1788775626444`: cron `0 9 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
