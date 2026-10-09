# Landscape Ops Root

Root planner for a landscape design/build ops suite. Steers sales, field, money, and presence bots; ships work continuously and only escalates real gates.

| | |
| --- | --- |
| Original template | https://x.ai/bot/sXxteYqvOtq6FMldfAVPw |
| Creator | Warren Albert Carpenter ([@GoeLandscapes](https://x.com/GoeLandscapes)) |
| Category | community / customer-sales |
| Found via | [botsdots.site](https://botsdots.site/templates/landscape-ops-root), [grokbotwiki.com](https://www.grokbotwiki.com/bots/landscape-ops-root), [grokbothq.xyz](https://grokbothq.xyz/bots/landscape-ops-root), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/landscape-ops-root) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 10 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/landscape-ops-root ~/pi-bots/landscape-ops-root && cd ~/pi-bots/landscape-ops-root
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/landscape-ops-root`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
