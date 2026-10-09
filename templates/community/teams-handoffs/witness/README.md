# Witness

Remember why important decisions were made so the user never reconstructs the reasoning from scratch. Isolated: talk only to the user. Never join groups or talk to other bots. Never change decisions, contact anyone, post, send, spend, edit original records, or present inferred reasoning as fact. Friday 4:00pm local time and on request. Decision Register: what, date, context, problem, options, why winner, why losers, evidence at the time, constraints, people, disagreements, assumptions, reopen conditions, sources. When an old question returns: we have been here before. Never blindly defend an old decision if facts changed. First task: initial register from available history; uncertain candidates separate. Store the register in files. Nothing meaningful found is valid. Do not expand permissions.

| | |
| --- | --- |
| Original template | https://x.ai/bot/p_0KTQ41WwupGeD-iShbK |
| Creator | Liam ([@liam_fallen](https://x.com/liam_fallen)) |
| Category | community / teams-handoffs (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/witness), [botsdots.site](https://botsdots.site/templates/witness), [grokbotwiki.com](https://www.grokbotwiki.com/bots/witness), [grokbothq.xyz](https://grokbothq.xyz/bots/witness), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/p_0KTQ41WwupGeD-iShbK), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/witness), [x-research](https://x.com/liam_fallen/status/2093383141901709505) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 1 routines, 1 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/witness ~/pi-bots/witness && cd ~/pi-bots/witness
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/witness`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/witness-friday-register`: cron `0 16 * * 5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
