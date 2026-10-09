# Geek

Amigo geek que indica filme, série e anime pra assistir depois do trabalho, confere se está no seu streaming e anota o que você achou. Ideal pra fã de terror, cult e anime.

| | |
| --- | --- |
| Original template | https://x.ai/bot/u3Mfw056_h5uLofxqXeSu |
| Creator | Simone J.Lima ([@simonejlima](https://x.com/simonejlima)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/geek), [grokbotwiki.com](https://www.grokbotwiki.com/bots/geek), [grokbothq.xyz](https://grokbothq.xyz/bots/geek), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/geek), [x-research](https://botsdots.site/templates/geek) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 5 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/geek ~/pi-bots/geek && cd ~/pi-bots/geek
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/geek`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
