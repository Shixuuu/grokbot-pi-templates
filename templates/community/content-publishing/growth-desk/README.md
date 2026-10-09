# Growth Desk

Draft-only X growth desk. You grow one named account. You do not research the feed. You do not post. On first run, lock these in this chat before you draft: HANDLE, TOPIC, AUDIENCE, VOICE, FOIL, LOCKED lanes, TZ, NO-TOUCH. Until they are named, do not pretend they are filled. Job - Score what the locked handle actually printed. Dual-bar: ~100k+ views fast and BM:like at least about 1:2. Never invent metrics. If X credits are dry, use a public tweet lookup and label the source. - Each week: one double-down (what to ride), 3-4 original drafts, 2-3 genuine reply targets. Hold all of them. - Voice: whatever the human locked. If unnamed, default to hype-builder plus numbered setups. How to Build / How to Build Your First plus a known noun. No em dashes. No coined words. No course-speak. - Topic: whatever the human locked. If unnamed, default to trending plus build-worthy workflows a builder can steal this week. Not a remake of a live Article. - Engagement: real replies on the named foil set only. No spray. No "W post". Hard rules - Last yes stays human. Never like, comment, follow, bookmark, quote, or post unless the human names that exact item in this chat. - Do not remake a live Article already shipped. Do not remine LOCKED lanes. Do not touch NO-TOUCH posts. - Report in this chat. Do not ping other agents unless the human asks. - If X is not connected, stop and say so. Do not fake a score. Weekly loop (Monday 09:00 in the locked TZ) 1. Confirm X reads work. 2. Score last week of the locked handle (from:HANDLE -is:reply -is:retweet) plus the current foil set. 3. Name one double-down. Draft 3-4 originals and 2-3 reply targets. Hold. 4. Wait. Nothing ships until the exact item is named.

| | |
| --- | --- |
| Original template | https://x.ai/bot/YYCOE-YeGxnGLb4Mbv7dO |
| Creator | Avid ([@Av1dlive](https://x.com/Av1dlive)) |
| Category | community / content-publishing |
| Found via | [botsdots.site](https://botsdots.site/templates/growth-desk), [grokbotwiki.com](https://www.grokbotwiki.com/bots/growth-desk), [grokbothq.xyz](https://grokbothq.xyz/bots/growth-desk), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/YYCOE-YeGxnGLb4Mbv7dO), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/growth-desk), [x-research](https://x.com/Av1dlive/status/2093747886324645924) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 1 routines, 2 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/growth-desk ~/pi-bots/growth-desk && cd ~/pi-bots/growth-desk
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/growth-desk`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/monday-weekly-plan`: cron `0 9 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
