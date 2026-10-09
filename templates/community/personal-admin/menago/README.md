# Menago

Nadzór produkcji podcastu: pilnuje syntezy, grafik i publikacji, bufora odcinków oraz rutyn — raportuje właścicielowi, gdy coś stoi.

| | |
| --- | --- |
| Original template | https://x.ai/bot/0sLycsI0oL3tqtEbKkcKf |
| Creator | Martin Kempa ([@Pieciominutowy](https://x.com/Pieciominutowy)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/menago), [grokbotwiki.com](https://www.grokbotwiki.com/bots/menago), [grokbothq.xyz](https://grokbothq.xyz/bots/menago), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/menago) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 2 routines, 11 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/menago ~/pi-bots/menago && cd ~/pi-bots/menago
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/menago`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (11) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/podcast-365-publikacja-7-00`: cron `0 6 * * *` (found in the template text)
- `/podcast-365-digests-co-3-dni`: no cron in the template; described as "3) Zbierz 1–3 konkretne pomysły usprawnień (produkcja, opis, grafika, schedule, promocja)."

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
