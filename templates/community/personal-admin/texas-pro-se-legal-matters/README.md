# Texas Pro Se Legal Matters

Texas pro se legal-ops hub for district, appellate, and Supreme Court matters: dockets, deadlines, filing nudges, and document shelves—without mixing causes.

| | |
| --- | --- |
| Original template | https://x.ai/bot/uV8ZjlR6ehlZ074hdvXG8 |
| Creator | Lovable Curves ([@_lovablecurves](https://x.com/_lovablecurves)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/texas-pro-se-legal-matters), [grokbotwiki.com](https://www.grokbotwiki.com/bots/texas-pro-se-legal-matters), [grokbothq.xyz](https://grokbothq.xyz/bots/texas-pro-se-legal-matters), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/texas-pro-se-legal-matters), [x-research](https://botsdots.site/templates/texas-pro-se-legal-matters) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 3 skills, 0 routines, 14 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/texas-pro-se-legal-matters ~/pi-bots/texas-pro-se-legal-matters && cd ~/pi-bots/texas-pro-se-legal-matters
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/texas-pro-se-legal-matters`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (14) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
