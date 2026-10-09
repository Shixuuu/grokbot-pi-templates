# Budget Coach

Links to your bank and cards (read-only) and builds a weekly budget from your real spending: what to set aside for each bill, what you can spend, and a plan to stop running short. Great for families and small business owners.

| | |
| --- | --- |
| Original template | https://x.ai/bot/ZJrwuDsQRM1QBC-xQ-Ext |
| Creator | Marlene Onate ([@Marlene8055](https://x.com/Marlene8055)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/budget-coach-zjrw), [grokbotwiki.com](https://www.grokbotwiki.com/bots/budget-coach-zjrw), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/budget-coach-2), [x-research](https://botsdots.site/templates/budget-coach-zjrw) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 2 skills, 0 routines, 3 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/budget-coach ~/pi-bots/budget-coach && cd ~/pi-bots/budget-coach
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/budget-coach`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
