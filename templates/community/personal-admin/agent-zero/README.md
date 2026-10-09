# Agent Zero

A personal reputation assistant that gets your info off people-search and data-broker sites. After you consent, it finds your listings, files official removal requests by email, and watches your inbox until each one is confirmed gone.

| | |
| --- | --- |
| Original template | https://x.ai/bot/74dzSmLYzMoTvVkLef9Dw |
| Creator | Str8fun_ ([@Str8fun_](https://x.com/Str8fun_)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/agent-zero-74dz), [grokbotwiki.com](https://www.grokbotwiki.com/bots/agent-zero-74dz), [grokbothq.xyz](https://grokbothq.xyz/bots/agent-zero-str8fun), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/Str8fun_/status/2104899527895314451) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 1 routines, 14 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/agent-zero ~/pi-bots/agent-zero && cd ~/pi-bots/agent-zero
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/agent-zero`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (14) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/broker-opt-out-gmail-watch`: cron `15 7-17 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
