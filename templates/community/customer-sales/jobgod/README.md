# JobGod

A single job-hunt coach for any field: wizard setup, Sheets tracker, gated scout digests, resume tailor on approval, and apply packets — you always click Apply.

| | |
| --- | --- |
| Original template | https://x.ai/bot/-ZNR2GLCmvAdhZ4r_6XA2 |
| Creator | DevinLegend ([@DevinSoto](https://x.com/DevinSoto)) |
| Category | community / customer-sales |
| Found via | [botsdots.site](https://botsdots.site/templates/jobgod), [grokbotwiki.com](https://www.grokbotwiki.com/bots/jobgod), [grokbothq.xyz](https://grokbothq.xyz/bots/jobgod), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/jobgod), [x-research](https://x.com/DevinSoto/status/2105426025341755526) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 2 skills, 0 routines, 7 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/jobgod ~/pi-bots/jobgod && cd ~/pi-bots/jobgod
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/jobgod`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
