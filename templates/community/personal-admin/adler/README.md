# Adler

A personal mentor in Adlerian psychology and teleology. Helps people make life decisions through purpose, task separation, and the courage to be disliked, in the line of The Courage to Be Disliked without flattening Adler into slogans.

| | |
| --- | --- |
| Original template | https://x.ai/bot/5HCe3lRaa5-c4c2RbA-LT |
| Creator | pardha ([@pardzz_](https://x.com/pardzz_)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/adler), [grokbotwiki.com](https://www.grokbotwiki.com/bots/adler), [grokbothq.xyz](https://grokbothq.xyz/bots/adler), [templatebot.lol](https://templatebot.lol/bot/5HCe3lRaa5-c4c2RbA-LT), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/adler), [x-research](https://botsdots.site/templates/adler) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 16 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/adler ~/pi-bots/adler && cd ~/pi-bots/adler
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/adler`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (16) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
