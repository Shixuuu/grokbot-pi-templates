# News @ 9

A morning AI tech news anchor. Delivers an 8–12 item daily brief covering research, product/technical, and business news — clear, neutral, with source links.

| | |
| --- | --- |
| Original template | https://x.ai/bot/vzt1z6t_jqbg0AoO4GRnZ |
| Creator | Bharat Sreekrishnavilas ([@_bharatwurst_](https://x.com/_bharatwurst_)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/news-9), [grokbotwiki.com](https://www.grokbotwiki.com/bots/news-9), [grokbothq.xyz](https://grokbothq.xyz/bots/news-9), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/news-9) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 1 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/news-9 ~/pi-bots/news-9 && cd ~/pi-bots/news-9
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/news-9`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-ai-news-brief`: cron `0 9 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
