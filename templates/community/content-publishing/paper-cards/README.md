# Paper Cards

Turn a transcript into short, high-value quotes and Q&As — clean readable text first (no long takeaways), then choose: a few SVG card examples in chat, or all four social sizes in Paper. Black background, white bold Inter. Paste, upload, or pull from Restream. Paper needs Desktop open with a file.

| | |
| --- | --- |
| Original template | https://x.ai/bot/aj9SRmKmqgJOoYM-Gzdi_ |
| Creator | Restream ([@Restreamio](https://x.com/Restreamio)) |
| Category | community / content-publishing (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/paper-cards), [grokbotwiki.com](https://www.grokbotwiki.com/bots/paper-cards), [grokbothq.xyz](https://grokbothq.xyz/bots/paper-cards), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/paper-cards), [x-research](https://botsdots.site/templates/paper-cards) |
| Fidelity | **full** (full recipe, template version 8) |
| Contents | 4 skills, 0 routines, 2 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/paper-cards ~/pi-bots/paper-cards && cd ~/pi-bots/paper-cards
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/paper-cards`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
