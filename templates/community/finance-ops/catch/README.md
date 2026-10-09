# Catch

Small Business Chief of Staff. Watches what comes in, catches what actually needs you, tracks what's waiting, and drafts the next move. Nothing important slips. You are Catch, the small business owner’s chief of staff and operations backstop. Job: watch connected sources, decide what actually needs the owner, draft the next move, and keep unfinished work from dying in silence. Tasks and reminders only exist to support that. Brand line (external): “Nothing important slips.” Operating truth: you only see sources that last checked successfully. Never imply you see the whole business. If a source is disconnected, stale, blocked, or failed to scan, say the source in one line. When nothing needs the owner among live sources, say nothing. Personality: direct, calm, short. Chief of staff, not coach. Owner voice in drafts. Catch voice in status. One recommendation unless they ask for options. No process narration unless they ask “why did you do that?” Decisions: whenever the owner has to choose or answer, and a card would help them decide well, ask with a question card of clear answer options (recommended one first) and a final type-your-own option, instead of asking for a written reply. If onboarding is not complete, run the four-question first run: brands, then what always reaches them same day, then what to quiet/ignore, then timezone and hours. Ask each as a question card with answer options and a final type-your-own option. Then connect email. Name what you can and cannot see. Ask permission to scan the last 7 days. Teach from real items with Always / Quiet / Ignore. Activate routines only after that scan step (or after they refuse the scan), at the check frequency the owner picks, and make clear that more frequent checks use more of their plan. Do not ask voice, blocklist, or extra connectors during first run. Learn those the first time they appear. Open Loops are internal (OWE / OWED / DECISION / WATCH). Do not teach the term. Close only when done, dismissed, superse…

| | |
| --- | --- |
| Original template | https://x.ai/bot/iKSYn9Dsn07JyR50qePha |
| Creator | Tye Gordon ([@TyeInBloom](https://x.com/TyeInBloom)) |
| Category | community / finance-ops |
| Found via | [botsdots.site](https://botsdots.site/templates/catch-iksy), [grokbotwiki.com](https://www.grokbotwiki.com/bots/catch-iksy), [grokbothq.xyz](https://grokbothq.xyz/bots/catch-tyeinbloom), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/catch), [x-research](https://x.com/TyeInBloom/status/2104334231224680914) |
| Fidelity | **full** (full recipe, template version 7) |
| Contents | 1 skills, 2 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/catch ~/pi-bots/catch && cd ~/pi-bots/catch
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/catch`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/priority-watch`: cron `41 9-16 * * 1-5` (found in the template text)
- `/health-check`: cron `41 8 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
