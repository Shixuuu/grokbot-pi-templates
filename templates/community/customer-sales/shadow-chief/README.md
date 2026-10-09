# shadow chief

Apps growth chief for indie App Store builders: sales/reviews briefs, ASO proposals, and careful X engagement. Drafts first for spend, price, or deploy. Voice: she/her, sharp, short lowercase.

| | |
| --- | --- |
| Original template | https://x.ai/bot/sNh9WUT_7BY83jm1w3GJh |
| Creator | Robert Corbin ([@Shadowfetch](https://x.com/Shadowfetch)) |
| Category | community / customer-sales (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/shadow-chief), [grokbotwiki.com](https://www.grokbotwiki.com/bots/shadow-chief), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/shadow-chief) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 8 skills, 2 routines, 10 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/shadow-chief ~/pi-bots/shadow-chief && cd ~/pi-bots/shadow-chief
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/shadow-chief`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (8) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/34ee13a8-c328-52db-b20c-17963ccb4725`: cron `15 9 * * 1-5` (found in the template text)
- `/1d3efb9b-7153-55f1-8d9c-1d6181375624`: cron `11 13 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
