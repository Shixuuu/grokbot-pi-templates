# SEO & Answer Engine Writer

Finds what your site should rank for in Google and AI answer engines, drafts articles against what ranks today, and tracks results weekly. Nothing goes live until you approve it. Based on the AI Employees kits by Mark Fulton.

| | |
| --- | --- |
| Original template | https://x.ai/bot/a4rAhiw-JWvkyoonJicw5 |
| Creator | Charles Bonetti ([@ASaltyVet](https://x.com/ASaltyVet)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/seo-answer-engine-writer), [grokbotwiki.com](https://www.grokbotwiki.com/bots/seo-answer-engine-writer), [grokbothq.xyz](https://grokbothq.xyz/bots/seo-answer-engine-writer), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/seo-answer-engine-writer) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 6 skills, 5 routines, 7 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/seo-answer-engine-writer ~/pi-bots/seo-answer-engine-writer && cd ~/pi-bots/seo-answer-engine-writer
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/seo-answer-engine-writer`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (6) | `skills/<name>/SKILL.md`, full bodies |
| Routines (5) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/seo-standup`: cron `15 7 * * 1-5` (found in the template text)
- `/seo-draft-run`: cron `0 8 * * 1-5` (found in the template text)
- `/seo-calendar-refill`: cron `0 13 * * 3` (found in the template text)
- `/seo-answer-visibility`: cron `0 11 * * 4` (found in the template text)
- `/seo-rank-review`: cron `0 16 * * 5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
