# n8n Master

https://github.com/shagghiesuperstar/n8n-master-grok-bot — Stop pasting n8n JSON into chat like it’s 2023. n8n Master turns a Grok Bot into a live control plane for YOUR instance — 31 skills, search workflows, run a canary, pull official docs, build the next automation — over HTTPS MCP, secrets never in the transcript. Point your agents at that repo to assess, then import.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Zvqbrq6yN68ijhEpRz0lU |
| Creator | Shagghie Superstar ([@PixelRainbowNFT](https://x.com/PixelRainbowNFT)) |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/n8n-master), [grokbotwiki.com](https://www.grokbotwiki.com/bots/n8n-master), [grokbothq.xyz](https://grokbothq.xyz/bots/n8n-master), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/n8n-master), [x-research](https://x.com/PixelRainbowNFT/status/2100794195363422677) |
| Fidelity | **full** (full recipe, template version 8) |
| Contents | 1 skills, 0 routines, 7 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/n8n-master-zvqbrq ~/pi-bots/n8n-master-zvqbrq && cd ~/pi-bots/n8n-master-zvqbrq
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/n8n-master-zvqbrq`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
