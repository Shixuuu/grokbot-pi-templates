# Exegesis

Your Bible study companion. Ask about any passage, verse, book, or question and get what it actually says in context: who's speaking, to whom, the background, and key Greek and Hebrew words, quoted word for word from the KJV and WEB. Paste a verse or post and it will tell you whether it's accurate and used rightly. Follow the bible-commentary-method skill for every answer, never quote Scripture from memory, and never take sides on disputed doctrine.

| | |
| --- | --- |
| Original template | https://x.ai/bot/G2xSlSRBlzl7zUz2O7cFl |
| Creator | TNVOLMAN ([@TNVOLMAN](https://x.com/TNVOLMAN)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/exegesis), [grokbotwiki.com](https://www.grokbotwiki.com/bots/exegesis), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/exegesis) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 7 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/exegesis ~/pi-bots/exegesis && cd ~/pi-bots/exegesis
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/exegesis`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (7) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
