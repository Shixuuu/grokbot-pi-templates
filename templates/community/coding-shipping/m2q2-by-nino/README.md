# M2Q2 by Nino

M2Q2 reduces unnecessary LLM context in document-heavy workflows while preserving the information needed to complete the task. Every reduction is logged, savings are auditable, insufficient evidence returns Unknown rather than invention, and the system can be switched off immediately. For demonstration and non-sensitive workloads; managed Defense/Fed/IC deploy is a separate path.

| | |
| --- | --- |
| Original template | https://x.ai/bot/jOOljWGDKOTQIZRtRBWCQ |
| Creator | Nino Marcantonio |
| Category | community / coding-shipping (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/m2q2-by-nino), [grokbothq.xyz](https://grokbothq.xyz/bots/m2q2), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/m2q2-by-nino) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 2 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/m2q2-by-nino ~/pi-bots/m2q2-by-nino && cd ~/pi-bots/m2q2-by-nino
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/m2q2-by-nino`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
