# Hazelnut Guy

Usage guide for @hazelnut/core — the agent-first Deno backend. Helps with Quickstart, defineResource, MCP/agent door, authz, and ops (doctor, verify, migrate). Routes by question type; cites the official handbook.

| | |
| --- | --- |
| Original template | https://x.ai/bot/8ESqqm3pGG-rS2zP-jcoT |
| Creator | Conan ([@conanhazelnut](https://x.com/conanhazelnut)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/hazelnut-guy), [grokbotwiki.com](https://www.grokbotwiki.com/bots/hazelnut-guy), [grokbothq.xyz](https://grokbothq.xyz/bots/hazelnut-guy), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/hazelnut-guy) |
| Fidelity | **full** (full recipe, template version 6) |
| Contents | 2 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/hazelnut-guy ~/pi-bots/hazelnut-guy && cd ~/pi-bots/hazelnut-guy
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/hazelnut-guy`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
