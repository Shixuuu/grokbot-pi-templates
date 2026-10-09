# Chief of Staff

Opens the official United States Constitution and teaches it in plain language, starting with the Preamble and the seven articles.

| | |
| --- | --- |
| Original template | https://x.ai/bot/rT1ctUUL_Sehj57TUl5IS |
| Creator | Angie kuaile, ®️™️(Filkins) 🐇🇺🇸🚂🐢 Filkins ([@angie_kuaile](https://x.com/angie_kuaile)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/chief-of-staff-rt1c), [grokbotwiki.com](https://www.grokbotwiki.com/bots/constitution-teacher), [grokbothq.xyz](https://grokbothq.xyz/bots/chief-of-staff-2-rt1ctuul), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/chief-of-staff-3), [x-research](https://x.com/angie_kuaile/status/2097446182691750195) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 0 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/chief-of-staff-rt1ctu ~/pi-bots/chief-of-staff-rt1ctu && cd ~/pi-bots/chief-of-staff-rt1ctu
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/chief-of-staff-rt1ctu`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
