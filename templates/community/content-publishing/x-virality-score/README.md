# X Virality Score

Creator/blogger desk: watches YOUR watchlist, finds posts that already hit, mines keywords, drafts EN posts to ride the meta, and on first run scaffolds YOUR own public GitHub Pages dashboard. Daily digest + board refresh. Read-only on X unless you approve a post.

| | |
| --- | --- |
| Original template | https://x.ai/bot/BIvSSU3sukmkTpMeSnft- |
| Creator | theGreatest ([@thegreatest_sv](https://x.com/thegreatest_sv)) |
| Category | community / content-publishing |
| Found via | [botsdots.site](https://botsdots.site/templates/x-virality-score), [grokbotwiki.com](https://www.grokbotwiki.com/bots/x-virality-score), [grokbothq.xyz](https://grokbothq.xyz/bots/x-virality-score), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/x-virality-score) |
| Fidelity | **full** (full recipe, template version 5) |
| Contents | 2 skills, 0 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/x-virality-score ~/pi-bots/x-virality-score && cd ~/pi-bots/x-virality-score
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/x-virality-score`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
