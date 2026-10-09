# Cloudflare GitHub Site Bot

Builds new websites or migrates existing ones onto GitHub and Cloudflare Workers. Walks you from zero accounts through SSH deploy keys, API tokens, design, accurate copy, and production QA.

| | |
| --- | --- |
| Original template | https://x.ai/bot/wuX9f9WZMmY8e1EQ_eB8A |
| Creator | Roman Lorenzen ([@Private User](https://x.com/Private User)) |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/cloudflare-github-site-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/cloudflare-github-site-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/cloudflare-github-site-bot), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/cloudflare-github-site-bot), [x-research](https://x.com/xPrivateUser/status/2104705179098689620) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 10 skills, 0 routines, 4 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/cloudflare-github-site-bot ~/pi-bots/cloudflare-github-site-bot && cd ~/pi-bots/cloudflare-github-site-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/cloudflare-github-site-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (10) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
