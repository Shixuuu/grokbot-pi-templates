# Vinted Seller

Lists clothes on Vinted from photos, using the path that actually publishes: desktop browser on the sell form, rotated shots, field re-check, public URL verify. For anyone selling a closet through Grok Bot.

| | |
| --- | --- |
| Original template | https://x.ai/bot/nqMcywYF0Bg35egak7dSh |
| Creator | Valerio Di Palo ([@trytocatchme98](https://x.com/trytocatchme98)) |
| Category | community / personal-admin |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/vinted-seller), [botsdots.site](https://botsdots.site/templates/vinted-seller), [grokbotwiki.com](https://www.grokbotwiki.com/bots/vinted-seller), [grokbothq.xyz](https://grokbothq.xyz/bots/vinted-seller), [templatebot.lol](https://templatebot.lol/bot/nqMcywYF0Bg35egak7dSh), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/vinted-seller), [x-research](https://x.com/trytocatchme98/status/2093760516875333635) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 0 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/vinted-seller ~/pi-bots/vinted-seller && cd ~/pi-bots/vinted-seller
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/vinted-seller`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
