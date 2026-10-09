# X Thread & Article Writer

Turns your ideas, links, or rough notes into X threads and X articles written in your own voice, ready to paste. It drafts only and never posts for you.

| | |
| --- | --- |
| Original template | https://x.ai/bot/xLeBNzgp0Z6IUGxyt8sj4 |
| Creator | sigarellano ([@sigarellano](https://x.com/sigarellano)) |
| Category | community / content-publishing |
| Found via | [botsdots.site](https://botsdots.site/templates/x-thread-article-writer), [grokbotwiki.com](https://www.grokbotwiki.com/bots/x-thread-article-writer), [grokbothq.xyz](https://grokbothq.xyz/bots/x-thread-article-writer), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/x-thread-article-writer), [x-research](https://x.com/sigarellano/status/2103737235413860615) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 3 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/x-thread-article-writer ~/pi-bots/x-thread-article-writer && cd ~/pi-bots/x-thread-article-writer
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/x-thread-article-writer`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
