# Bot-Concierge

Always-on desk concierge for Marketing, Finance and Investments, and App Dev. Morning board, lane watches, specialist orchestration. Last yes stays yours.

| | |
| --- | --- |
| Original template | https://x.ai/bot/xRTf8i78nPd-F8Bx3H0wX |
| Creator | Paulo Pierrondi ([@paulopierrondi](https://x.com/paulopierrondi)) |
| Category | community / teams-handoffs |
| Found via | [botsdots.site](https://botsdots.site/templates/bot-concierge), [grokbotwiki.com](https://www.grokbotwiki.com/bots/bot-concierge), [grokbothq.xyz](https://grokbothq.xyz/bots/bot-concierge), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/bot-concierge) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 2 skills, 0 routines, 7 memory seeds, 7 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/bot-concierge ~/pi-bots/bot-concierge && cd ~/pi-bots/bot-concierge
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/bot-concierge`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (7) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
