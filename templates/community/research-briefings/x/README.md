# X 投资情报助手

Tracks the investors you follow on X and the X chatter on your stock watchlist, then publishes a chart-rich daily briefing to Feishu/Lark (or delivers it in chat).

| | |
| --- | --- |
| Original template | https://x.ai/bot/Jvm9xCsIY8CtTReKdytvk |
| Creator | web blick ([@qishiya](https://x.com/qishiya)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/x-jvm9), [grokbotwiki.com](https://www.grokbotwiki.com/bots/x-jvm9), [grokbothq.xyz](https://grokbothq.xyz/bots/bot-jvm9xcsiy8), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/x), [x-research](https://botsdots.site/templates/x-jvm9) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 2 routines, 8 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/x ~/pi-bots/x && cd ~/pi-bots/x
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/x`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/x`: cron `54 7 * * 1-5` (found in the template text)
- `/x-2`: cron `13 8 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).
- Routine `x` contains `$`-patterns Pi would treat as template arguments, so its prompt points at `routines/x.md` instead of inlining the text.
- Routine `x-2` contains `$`-patterns Pi would treat as template arguments, so its prompt points at `routines/x-2.md` instead of inlining the text.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
