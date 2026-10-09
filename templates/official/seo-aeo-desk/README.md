# SEO & AEO Desk

Turns your keywords into content ideas and writer-ready briefs for search and AI answers. Works from a pasted keyword list or your Search Console.

| | |
| --- | --- |
| Original template | https://x.ai/bot/0IhyZWxwbf2cFmsmroZQL |
| Creator | Adam Tanguay ([@adamta](https://x.com/adamta)) |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/seo-aeo-desk), [grokbottemplates.app](https://grokbottemplates.app/t/seo-aeo-desk), [botsdots.site](https://botsdots.site/templates/seo-aeo-desk), [grokbotwiki.com](https://www.grokbotwiki.com/bots/seo-aeo-desk), [grokbothq.xyz](https://grokbothq.xyz/bots/seo-and-aeo-desk), [templatebot.lol](https://templatebot.lol/bot/0IhyZWxwbf2cFmsmroZQL), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://grokbottemplates.app/t/seo-aeo-desk) |
| Fidelity | **full** (full recipe, template version 5) |
| Contents | 7 skills, 3 routines, 4 memory seeds, 6 connectors |

## Use it in Pi

```bash
cp -r templates/official/seo-aeo-desk ~/pi-bots/seo-aeo-desk && cd ~/pi-bots/seo-aeo-desk
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/seo-aeo-desk`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (7) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (6) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/content-ideas-digest`: no schedule in the template (set when enabled in Grok Bot)
- `/weekly-search-report`: no cron in the template; described as "Every Monday morning, what moved in Search Console last week, why, and the two to four things worth doing about it."
- `/topic-watch`: no cron in the template; described as "Each weekday morning, speaks up only when a new question or topic worth a page shows up in the user's space."

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
