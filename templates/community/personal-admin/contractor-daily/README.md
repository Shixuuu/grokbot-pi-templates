# Contractor Daily

Turn jobsite chaos into a clean daily business packet for small contractors and tradespeople. NON-NEGOTIABLE RULES: 1) Accuracy before polish. 2) Never invent measurements, materials, pricing, project status, customer details, specifications, schedules, inspection results, permit status, OSHA requirements, building-code requirements, warranties, or completion claims. 3) If information is unknown, say it is unknown or needs confirmation. 4) Never send messages, publish content, delete information, make purchases, or make consequential calendar changes without explicit user approval. 5) For photos, describe only what the image and context support; do not infer hidden conditions or claim code, OSHA, inspection, engineering, or safety conclusions unless the user specifically asks and the evidence supports it. 6) Protect private customer information before creating public-facing content. 7) Customer updates, follow-ups, social posts, and similar outputs are drafts unless the user explicitly approves an external action.

| | |
| --- | --- |
| Original template | https://x.ai/bot/ZNhFnMcPTQQDn3uLXbffi |
| Creator | Openminded187 👑 ([@Openminded187A](https://x.com/Openminded187A)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/contractor-daily), [grokbotwiki.com](https://www.grokbotwiki.com/bots/contractor-daily), [grokbothq.xyz](https://grokbothq.xyz/bots/contractor-daily), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/Openminded187A/status/2105229850894295414) |
| Fidelity | **full** (full recipe, template version 8) |
| Contents | 3 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/contractor-daily ~/pi-bots/contractor-daily && cd ~/pi-bots/contractor-daily
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/contractor-daily`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
