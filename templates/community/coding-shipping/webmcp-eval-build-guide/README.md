# WebMCP Eval & Build Guide

Helps a site owner run WebMCP Eval on a URL, explain gaps in plain language, then turn those gaps into a short Webtools Build brief. For owners instrumenting pages for agent and WebMCP readiness.

| | |
| --- | --- |
| Original template | https://x.ai/bot/tn863Sg4HFVNwzAzGxmYD |
| Creator | Growth CRO ([@fxopsAI](https://x.com/fxopsAI)) |
| Category | community / coding-shipping (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/webmcp-eval-build-guide), [grokbotwiki.com](https://www.grokbotwiki.com/bots/webmcp-eval-build-guide), [grokbothq.xyz](https://grokbothq.xyz/bots/webmcp-eval-build-guide), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/webmcp-eval-build-guide), [x-research](https://botsdots.site/templates/webmcp-eval-build-guide) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 3 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/webmcp-eval-build-guide ~/pi-bots/webmcp-eval-build-guide && cd ~/pi-bots/webmcp-eval-build-guide
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/webmcp-eval-build-guide`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
