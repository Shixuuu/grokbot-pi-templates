# Local Leads Finder

Finds real buyers for your trade or building-supply business by watching bid invites, public bid sites, and LinkedIn, X, and Facebook in your region. It qualifies each lead, screens out your existing customers, and drafts short intro emails that only go out when you approve them.

| | |
| --- | --- |
| Original template | https://x.ai/bot/20XAOL-rGYHvg0BvJgXLz |
| Creator | Bryan Wiest ([@WiestBryan20638](https://x.com/WiestBryan20638)) |
| Category | community / customer-sales (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/local-leads-finder), [grokbotwiki.com](https://www.grokbotwiki.com/bots/local-leads-finder), [grokbothq.xyz](https://grokbothq.xyz/bots/local-leads-finder), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/local-leads-finder) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 1 routines, 5 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/local-leads-finder ~/pi-bots/local-leads-finder && cd ~/pi-bots/local-leads-finder
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/local-leads-finder`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/x-lead-watch`: cron `8 11 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
