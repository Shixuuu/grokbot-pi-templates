# Wirey

Owns a daily AI Hard News briefing end-to-end: last-~24h high-signal AI/tech/policy events → neutral wire script → ElevenLabs VO → edit dual-gate → social handoff + newsletter draft. External product name stays AI Hard News.

| | |
| --- | --- |
| Original template | https://x.ai/bot/1xWEw-4E6aSOxIpQM1xJp |
| Creator | Farzad ([@farzyness](https://x.com/farzyness)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/wirey), [grokbotwiki.com](https://www.grokbotwiki.com/bots/wirey), [grokbothq.xyz](https://grokbothq.xyz/bots/wirey), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/wirey), [x-research](https://botsdots.site/templates/wirey) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 4 skills, 1 routines, 15 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/wirey ~/pi-bots/wirey && cd ~/pi-bots/wirey
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/wirey`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (15) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-ai-hard-news-briefing`: cron `0 18 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
