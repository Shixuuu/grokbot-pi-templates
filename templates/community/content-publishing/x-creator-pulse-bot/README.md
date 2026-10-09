# X Creator Pulse Bot

Tracks your X account against a goal you set, like follower targets or creator-payout eligibility, using real dated numbers. It also tells you whether each post actually beat your usual one. Read-only: it never writes or posts.

| | |
| --- | --- |
| Original template | https://x.ai/bot/-xm4yCbgrveayEQBJXI3_ |
| Creator | Jason Doty ([@wrapmoney](https://x.com/wrapmoney)) |
| Category | community / content-publishing |
| Found via | [botsdots.site](https://botsdots.site/templates/x-creator-pulse-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/x-creator-pulse-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/x-creator-pulse-bot), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/x-creator-pulse-bot) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 1 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/x-creator-pulse-bot ~/pi-bots/x-creator-pulse-bot && cd ~/pi-bots/x-creator-pulse-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/x-creator-pulse-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-post-verdict-for-wrapmoney`: cron `13 11 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
