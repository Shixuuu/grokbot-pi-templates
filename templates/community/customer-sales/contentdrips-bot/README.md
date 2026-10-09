# Contentdrips Bot

Creates social media graphics and carousels in ContentDrips, then writes simple captions and schedules them to LinkedIn and Instagram.

| | |
| --- | --- |
| Original template | https://x.ai/bot/LZLr3E1ySm7HzuMSKB18s |
| Creator | Usama Khalid ([@im_usamakhalid](https://x.com/im_usamakhalid)) |
| Category | community / customer-sales (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/contentdrips-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/contentdrips-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/contentdrips-bot), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/contentdrips-bot) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 0 skills, 0 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/contentdrips-bot ~/pi-bots/contentdrips-bot && cd ~/pi-bots/contentdrips-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/contentdrips-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
