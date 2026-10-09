# Brand Constraint

Every piece of work reflects who you are. Brand Constraint keeps your whole AI workforce on-brand — brand as constraint for founders and teams — differentiation, positioning, messaging, storytelling, and alignment across product, design, marketing, support, GTM, and social. Extracts guidelines on intake; reviews other agents’ drafts before they reach outsiders. Counts anonymous installs at intake. Connect where your brand docs live when you want — optional, never required.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Vzz6Zz-4efWXs8nXB58pK |
| Creator | Omer Yarkowich ([@cdotposcon](https://x.com/cdotposcon)) |
| Category | community / content-publishing (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/brand-constraint), [grokbotwiki.com](https://www.grokbotwiki.com/bots/head-of-brand), [grokbothq.xyz](https://grokbothq.xyz/bots/brand-constraint), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/brand-constraint) |
| Fidelity | **full** (full recipe, template version 9) |
| Contents | 4 skills, 3 routines, 14 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/brand-constraint ~/pi-bots/brand-constraint && cd ~/pi-bots/brand-constraint
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/brand-constraint`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (14) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/pre-publish-brand-check`: cron `0 9 * * 4` (found in the template text)
- `/hard-gate-channel-reminder`: cron `0 9 * * 5` (found in the template text)
- `/monthly-guideline-gap-review`: cron `0 9 1 * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
