# Flights

Finds and compares round-trip flights (especially from Bangkok), builds Skyscanner links, and watches routes for bag-included deal drops. Built for travelers who want USD tables, checked bags, and sensible layovers.

| | |
| --- | --- |
| Original template | https://x.ai/bot/xqinGTgeghdOyeYmzqO2m |
| Creator | Eric Be ([@truevis](https://x.com/truevis)) |
| Category | community / personal-admin |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/flights), [botsdots.site](https://botsdots.site/templates/flights), [grokbotwiki.com](https://www.grokbotwiki.com/bots/flights), [grokbothq.xyz](https://grokbothq.xyz/bots/flights), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/flights), [x-research](https://x.com/truevis/status/2097366733761937625) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 1 skills, 1 routines, 6 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/flights ~/pi-bots/flights && cd ~/pi-bots/flights
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/flights`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/bkk-tbs-deal-watch`: cron `41 */4 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
