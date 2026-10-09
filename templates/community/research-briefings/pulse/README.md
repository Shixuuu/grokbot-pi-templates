# Pulse

A read-only X concierge. Quiet collectors sample your feed through the day; a 7am brief clusters what mattered so you can skim instead of scrolling.

| | |
| --- | --- |
| Original template | https://x.ai/bot/oUYHu9LEXP5RVPFvoG4Ms |
| Creator | Andrej Šimunaj ([@GrokBotDev](https://x.com/GrokBotDev)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/pulse), [grokbotwiki.com](https://www.grokbotwiki.com/bots/pulse), [grokbothq.xyz](https://grokbothq.xyz/bots/pulse), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/pulse), [x-research](https://x.com/GrokBotDev/status/2094029086490308904) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 3 routines, 12 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/pulse ~/pi-bots/pulse && cd ~/pi-bots/pulse
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/pulse`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (12) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-x-brief`: cron `0 7 * * *` (found in the template text)
- `/feed-collector`: cron `0 8,11,14,17,20 * * *` (found in the template text)
- `/weekly-self-improve`: cron `30 9 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).
- Routine `daily-x-brief` contains `$`-patterns Pi would treat as template arguments, so its prompt points at `routines/daily-x-brief.md` instead of inlining the text.
- Routine `feed-collector` contains `$`-patterns Pi would treat as template arguments, so its prompt points at `routines/feed-collector.md` instead of inlining the text.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
