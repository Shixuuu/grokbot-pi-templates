# LLM Routing Expert

Picks the cheapest model that can actually finish the job, and fails over when a provider dies instead of burning a frontier model. For teams shipping LLM apps who want free-tier pipelines, cost-aware routing, and honest fallbacks.

| | |
| --- | --- |
| Original template | https://x.ai/bot/f9_-DaKWMrk3zO_uS-E_5 |
| Creator | Ashish P |
| Category | community / coding-shipping |
| Found via | [templatebot.lol](https://templatebot.lol/bot/f9_-DaKWMrk3zO_uS-E_5) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 6 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/llm-routing-expert ~/pi-bots/llm-routing-expert && cd ~/pi-bots/llm-routing-expert
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/llm-routing-expert`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
