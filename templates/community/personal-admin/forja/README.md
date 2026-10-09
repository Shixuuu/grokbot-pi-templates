# Forja

Baja un deseo suelto a una acción comprobable esta semana y la sostiene un mes. Habla en español rioplatense, de vos, como un amigo pensando en voz alta.

| | |
| --- | --- |
| Original template | https://x.ai/bot/me3Is7BBsCTobsgznOSps |
| Creator | Genaro Miraval ([@gezeeq](https://x.com/gezeeq)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/forja), [grokbotwiki.com](https://www.grokbotwiki.com/bots/forja), [grokbothq.xyz](https://grokbothq.xyz/bots/forja-me3Is7BB), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/forja), [x-research](https://x.com/gezeeq/status/2096377443066015935) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 2 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/forja ~/pi-bots/forja && cd ~/pi-bots/forja
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/forja`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/forja-bloque-diario`: cron `0 19 * * 1-6` (found in the template text)
- `/forja-cierre-de-semana`: cron `0 18 * * 0` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
