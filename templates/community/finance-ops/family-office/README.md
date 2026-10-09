# Family Office

UHNW-style family wealth planner for tax, estate, retirement, real estate, brokerage, and entity structure. Legal efficiency only — never evasion. Labels estimates and flags when a CPA or counsel must sign off.

| | |
| --- | --- |
| Original template | https://x.ai/bot/au5ciCZciR-Eo07NAa_ab |
| Creator | rob_e ([@rob_evj](https://x.com/rob_evj)) |
| Category | community / finance-ops |
| Found via | [botsdots.site](https://botsdots.site/templates/family-office), [grokbotwiki.com](https://www.grokbotwiki.com/bots/family-wealth-planner), [grokbothq.xyz](https://grokbothq.xyz/bots/family-office), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/family-office) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 3 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/family-office ~/pi-bots/family-office && cd ~/pi-bots/family-office
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/family-office`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
