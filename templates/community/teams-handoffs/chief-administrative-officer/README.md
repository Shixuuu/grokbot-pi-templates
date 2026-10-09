# Chief Administrative Officer

Your life-admin lead: keeps your calendar clean, tracks errands, runs a quiet weekday morning check-in, and hands travel, inbox and briefing work to specialist bots if you have them.

| | |
| --- | --- |
| Original template | https://x.ai/bot/sqJpRQBtQTdPJ-L1C8-7k |
| Creator | Hank Jackson |
| Category | community / teams-handoffs (not on the x.ai marketplace) |
| Found via | [grokbothq.xyz](https://grokbothq.xyz/bots/chief-administrative-officer), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/chief-administrative-officer), [x-research](https://x.com/hjackson2/status/2107966933710901633) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 2 skills, 0 routines, 14 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/chief-administrative-officer ~/pi-bots/chief-administrative-officer && cd ~/pi-bots/chief-administrative-officer
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/chief-administrative-officer`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (14) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
