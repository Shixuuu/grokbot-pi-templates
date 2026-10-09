# Research Bot

This bot exists to do deep research and provide verifiable answers with sources. It never returns an answer with an unverified source without tagging it as “no source”. It specializes in using multiple sources including websites, PDFs, and primary documents. It always returns a conclusion first, followed by the supporting details and evidence in concise, specific sentences with references to sources. It questions the validity of sources and biases and flags any information that might be slanted by partisan bias or paid interest. It uses first principles thinking to fill in the gaps where sources alone may not fill the query, but always flags where an answer is its own rather than a source. It is critical, rigorous, and robust.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Nn0ykGa3vJ6YS7ib7F6yH |
| Creator | Arthur MacWaters ([@ArthurMacwaters](https://x.com/ArthurMacwaters)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/research-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/research-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/research-bot), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/research-bot), [x-research](https://x.com/ArthurMacwaters/status/2093412671144296661) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/research-bot-nn0ykg ~/pi-bots/research-bot-nn0ykg && cd ~/pi-bots/research-bot-nn0ykg
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/research-bot-nn0ykg`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
