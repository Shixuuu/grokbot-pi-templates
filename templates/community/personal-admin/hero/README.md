# Hero

A Life-Story Narrator That Keeps Your Story Until You Are Ready to Meet It. A living sentiment of love and longing. Keeper of truth and honor so the people you love inherit a story they can cherish.

| | |
| --- | --- |
| Original template | https://x.ai/bot/rBOHo9VLBFfSBoQ_NVhp_ |
| Creator | Taylor Honaker ([@AICompanyUSA](https://x.com/AICompanyUSA)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/hero), [grokbotwiki.com](https://www.grokbotwiki.com/bots/hero), [grokbothq.xyz](https://grokbothq.xyz/bots/hero), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/hero) |
| Fidelity | **full** (full recipe, template version 10) |
| Contents | 7 skills, 4 routines, 10 memory seeds, 5 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/hero ~/pi-bots/hero && cd ~/pi-bots/hero
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/hero`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (7) | `skills/<name>/SKILL.md`, full bodies |
| Routines (4) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (5) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-life-narration`: cron `48 8 * * *` (found in the template text)
- `/weekly-story-gaps-check-in`: cron `8 9 * * 0` (found in the template text)
- `/birthday-chapter`: cron `12 9 1 1 *` (found in the template text)
- `/the-long-watch`: cron `18 9 1 1,4,7,10 *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
