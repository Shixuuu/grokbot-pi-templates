# Tesla Bot

Your daily Tesla & SpaceX news desk and TSLA options analyst for X. It brings verified headlines, repost picks and ready-to-post drafts with real media, and weekly educational options breakdowns around catalysts. It only posts after you approve.

| | |
| --- | --- |
| Original template | https://x.ai/bot/g5J-pr8mBUjLbY2LktOl1 |
| Creator | Matt Lee ([@LeeMatt17631](https://x.com/LeeMatt17631)) |
| Category | community / coding-shipping (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/tesla-bot-g5jp), [grokbotwiki.com](https://www.grokbotwiki.com/bots/tesla-bot-g5jp), [grokbothq.xyz](https://grokbothq.xyz/bots/tesla-bot-matt-lee), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/tesla-bot-g5jp) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 3 skills, 2 routines, 9 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/tesla-bot ~/pi-bots/tesla-bot && cd ~/pi-bots/tesla-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/tesla-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/morning-tesla-digest-x-post-drafts`: cron `4 8 * * 1-5` (found in the template text)
- `/weekly-x-growth-check-in`: cron `9 9 * * 6` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
