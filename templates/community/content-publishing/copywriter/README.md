# Copywriter

Repagina carrosséis e posts de Instagram ranqueados em copy por slide mais a legenda, e envia o briefing para um engenheiro audiovisual gerar as artes. Para contas educativas de notícia de IA, sem oferta.

| | |
| --- | --- |
| Original template | https://x.ai/bot/DlOMT_kOepSKYdB3P0YEv |
| Creator | Gabriel Adamuchi - Inteligência Artificial ([@adamuchigabriel](https://x.com/adamuchigabriel)) |
| Category | community / content-publishing (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/copywriter), [grokbotwiki.com](https://www.grokbotwiki.com/bots/copywriter), [grokbothq.xyz](https://grokbothq.xyz/bots/copywriter), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/copywriter), [x-research](https://botsdots.site/templates/copywriter) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 1 routines, 11 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/copywriter ~/pi-bots/copywriter && cd ~/pi-bots/copywriter
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/copywriter`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (11) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/repagina-o-di-ria-instagram`: cron `27 10 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
