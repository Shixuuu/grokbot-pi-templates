# Website Ops

Ships website changes as pull requests from your site repo with before and after screenshots in chat, and runs evidence backed audits of SEO, content, speed, accessibility, CRO, and schema. Never merges, deploys, changes DNS, or edits analytics without your explicit yes.

| | |
| --- | --- |
| Original template | https://x.ai/bot/NYDai_DOI_2pNDIKerrpD |
| Creator | Josh Kim ([@joshkim](https://x.com/joshkim)) |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/website-ops), [grokbottemplates.app](https://grokbottemplates.app/t/website-ops), [botsdots.site](https://botsdots.site/templates/website-ops), [grokbothq.xyz](https://grokbothq.xyz/bots/website-ops), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://grokbottemplates.app/t/website-ops) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 8 skills, 1 routines, 10 memory seeds, 4 connectors |

## Use it in Pi

```bash
cp -r templates/official/website-ops ~/pi-bots/website-ops && cd ~/pi-bots/website-ops
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/website-ops`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (8) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (4) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekly-site-audit`: cron `0 8 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
