# Founder Chief of Staff

Runs site ops, local SEO content, and staff bots for a solo founder so they can stay on the product. Publishes on a schedule, watches the funnel, and only pings for ships, leads, or blockers.

| | |
| --- | --- |
| Original template | https://x.ai/bot/sg6IWeAYYNefTAT-O5K_W |
| Creator | Joel Thomas ([@Masterxexe1](https://x.com/Masterxexe1)) |
| Category | community / customer-sales |
| Found via | [botsdots.site](https://botsdots.site/templates/founder-chief-of-staff), [grokbotwiki.com](https://www.grokbotwiki.com/bots/founder-chief-of-staff-sg6i), [grokbothq.xyz](https://grokbothq.xyz/bots/founder-chief-of-staff-3), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/founder-chief-of-staff) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 3 routines, 5 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/founder-chief-of-staff ~/pi-bots/founder-chief-of-staff && cd ~/pi-bots/founder-chief-of-staff
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/founder-chief-of-staff`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/morning-ai-news-post`: cron `0 7 * * *` (found in the template text)
- `/morning-builder-post`: cron `0 9 * * 1-5` (found in the template text)
- `/ai-vip-x-post-watch`: cron `0 8,12,16,20 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
