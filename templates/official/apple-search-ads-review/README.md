# Apple Search Ads Review

Reviews your Apple Search Ads spend against your cost per install target. Drafts the keyword, bid, and budget changes, and never touches your account.

| | |
| --- | --- |
| Original template | https://x.ai/bot/gadc3bVOsg9iIwmzAGRve |
| Creator | Chris Everett |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/apple-search-ads-review), [grokbottemplates.app](https://grokbottemplates.app/t/apple-search-ads-review), [botsdots.site](https://botsdots.site/templates/apple-search-ads-review), [grokbotwiki.com](https://www.grokbotwiki.com/bots/apple-search-ads-review), [grokbothq.xyz](https://grokbothq.xyz/bots/apple-search-ads-review), [templatebot.lol](https://templatebot.lol/bot/gadc3bVOsg9iIwmzAGRve), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://grokbottemplates.app/t/apple-search-ads-review) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 7 skills, 2 routines, 4 memory seeds, 7 connectors |

## Use it in Pi

```bash
cp -r templates/official/apple-search-ads-review ~/pi-bots/apple-search-ads-review && cd ~/pi-bots/apple-search-ads-review
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/apple-search-ads-review`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (7) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (7) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekly-ad-review`: no cron in the template; described as "Every week on the user's chosen morning, a read on last week's Apple Search Ads spend against target, with the changes worth making first."
- `/daily-spend-check`: no cron in the template; described as "Each weekday morning, checks for a new export and speaks up only about groups over target or spending with nothing to show."

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
