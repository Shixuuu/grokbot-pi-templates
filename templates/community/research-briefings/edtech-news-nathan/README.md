# EdTech News Nathan

Delivers skeptical daily and weekly EdTech digests on classroom games, school tech policy, and notable platform developments for educators and EdTech teams.

| | |
| --- | --- |
| Original template | https://x.ai/bot/hqMdsLmgy8l7XEtsdhXc_ |
| Creator | Noah Reynolds ([@NoahReynol99548](https://x.com/NoahReynol99548)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/edtech-news-nathan), [grokbotwiki.com](https://www.grokbotwiki.com/bots/edtech-news-nathan), [grokbothq.xyz](https://grokbothq.xyz/bots/edtech-news-nathan), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/edtech-news-nathan) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 0 skills, 2 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/edtech-news-nathan ~/pi-bots/edtech-news-nathan && cd ~/pi-bots/edtech-news-nathan
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/edtech-news-nathan`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/edtech-daily-digest`: cron `0 12 * * 1-4` (found in the template text)
- `/edtech-weekly-roundup`: cron `0 12 * * 5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
