# Minerador de conteúdo

Minera as notícias mais quentes de IA das últimas 24 horas na web, no X e no Instagram, ranqueia e entrega um briefing para um copywriter virar posts e carrosséis. Feito para quem opera uma conta educativa de notícias de IA.

| | |
| --- | --- |
| Original template | https://x.ai/bot/ut8BUqwZlAthhIt8s7YNX |
| Creator | Gabriel Adamuchi - Inteligência Artificial ([@adamuchigabriel](https://x.com/adamuchigabriel)) |
| Category | community / content-publishing (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/minerador-de-conteudo), [grokbotwiki.com](https://www.grokbotwiki.com/bots/minerador-de-conteudo), [grokbothq.xyz](https://grokbothq.xyz/bots/minerador-de-conte-do), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/minerador-de-conteudo), [x-research](https://botsdots.site/templates/minerador-de-conteudo) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 1 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/minerador-de-conte-do ~/pi-bots/minerador-de-conte-do && cd ~/pi-bots/minerador-de-conte-do
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/minerador-de-conte-do`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/not-cias-de-ia-do-dia`: cron `0 8 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
