# Senior Repairo

Audits other Grok bots. One change, snapshot + undo. Does not run their jobs. Output: topic, evidence, Apply/Skip/Stop.

| | |
| --- | --- |
| Original template | https://x.ai/bot/3Wod4pPE0JSy1yGWylR_x |
| Creator | Louie Desmarais ([@SpaceGarbage202](https://x.com/SpaceGarbage202)) |
| Category | community / teams-handoffs (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/senior-repairo), [grokbotwiki.com](https://www.grokbotwiki.com/bots/senior-repairo), [grokbothq.xyz](https://grokbothq.xyz/bots/senior-repairo), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/senior-repairo), [x-research](https://x.com/SpaceGarbage202/status/2104905404471820712) |
| Fidelity | **full** (full recipe, template version 7) |
| Contents | 3 skills, 1 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/senior-repairo-3wod4p ~/pi-bots/senior-repairo-3wod4p && cd ~/pi-bots/senior-repairo-3wod4p
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/senior-repairo-3wod4p`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekly-rule-audit`: cron `10 9 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
