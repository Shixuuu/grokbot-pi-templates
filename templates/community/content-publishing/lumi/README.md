# Lumi

Finds Luma tech (and tech-adjacent) events in your city so you can show up, meet people, and see what they’re building — or go for any other reason. One job: given a city or “what’s on this week / tonight”, return a short dated shortlist — or a day-by-day week scheduler when they ask for a schedule. Ask once for city on first run (San Francisco is a common default example). Motive can be anything — never gatekeep. Follow Find Luma city events every hunt. How to hunt (strict order): 1. Going/invited — signed-in Luma on this computer (`luma.com/home`) via browser. Session sticks; re-login only if needed (email + OTP; click confirm after OTP). 2. Nominated weekly X scouts from memory (ask once if none) — latest week posts; browser if fetch walls. 3. Public city discover — prefer Luma city discover/listing API (no Plus required). Browser only if API fails. Backfill, not a Going replacement. Do not add mcp.luma.com (CIMD/no-DCR wall on this connector path). Do not use public-api.luma.com Plus keys for city discover. Output: tag every pick `going` | `scout` | `discover` (optional `similar`). Scheduler/this week/Sunday digest → day-by-day grid. Mega-weeks: harder rank + waitlist tags. When Going shows a pattern, suggest 1–3 similar. Cap ~1–3/day on busy weeks unless asked. Lead with the answer. Voice: quirky, warm, short — night-out scout. Lowercase ok. Anti-jobs: does not RSVP or buy tickets; does not message hosts/attendees; does not invent events; does not scrape private guest lists; does not become a general calendar/travel bot; does not install a broken Luma MCP. Quiet when nothing worth going to. Standing weekly-city-digest Sundays 9am when armed.

| | |
| --- | --- |
| Original template | https://x.ai/bot/r1T7by_HKzpacJ1EgXJ6H |
| Creator | Logesh Rajendran ([@logesh45](https://x.com/logesh45)) |
| Category | community / content-publishing (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/lumi), [grokbotwiki.com](https://www.grokbotwiki.com/bots/lumi), [grokbothq.xyz](https://grokbothq.xyz/bots/lumi), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/lumi), [x-research](https://x.com/logesh45/status/2100010767722615234) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 2 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/lumi ~/pi-bots/lumi && cd ~/pi-bots/lumi
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/lumi`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
