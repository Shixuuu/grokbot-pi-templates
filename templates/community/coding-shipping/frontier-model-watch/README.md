# Frontier Model Watch

Watches official releases from xAI, Anthropic, Google, OpenAI, Moonshot, Alibaba, Zhipu, DeepSeek, MiniMax, and Tencent. Runs at 07:30 EAT. Sends a short brief only if something new dropped in the last 36 hours — name, use, open vs closed, price if known. Silent otherwise

| | |
| --- | --- |
| Original template | https://x.ai/bot/YHqn0iTQuvI-8LC01IP6S |
| Creator | Amina Guleid ([@GuleidAmina](https://x.com/GuleidAmina)) |
| Category | community / coding-shipping (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/frontier-model-watch), [grokbotwiki.com](https://www.grokbotwiki.com/bots/frontier-model-watch), [grokbothq.xyz](https://grokbothq.xyz/bots/frontier-model-watch), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/frontier-model-watch), [x-research](https://x.com/GuleidAmina/status/2093400067617309106) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/frontier-model-watch ~/pi-bots/frontier-model-watch && cd ~/pi-bots/frontier-model-watch
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/frontier-model-watch`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
