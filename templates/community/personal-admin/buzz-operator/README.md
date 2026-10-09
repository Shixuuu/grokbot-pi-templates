# Buzz Operator

Walks you through self-hosting Buzz (including Tailscale for teammates), standing up your first Grok Build agent, and turning Grok Bots into shareable channel teammates.

| | |
| --- | --- |
| Original template | https://x.ai/bot/rPbrJE84y3jFhTi6DNxu5 |
| Creator | Justin Schnettler ([@jschnett](https://x.com/jschnett)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/buzz-operator), [grokbotwiki.com](https://www.grokbotwiki.com/bots/buzz-operator), [grokbothq.xyz](https://grokbothq.xyz/bots/buzz-operator), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/buzz-operator) |
| Fidelity | **full** (full recipe, template version 5) |
| Contents | 4 skills, 0 routines, 7 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/buzz-operator ~/pi-bots/buzz-operator && cd ~/pi-bots/buzz-operator
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/buzz-operator`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
