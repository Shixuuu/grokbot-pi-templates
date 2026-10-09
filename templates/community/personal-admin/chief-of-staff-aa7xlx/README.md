# Chief of Staff

Denný chief of staff pre tvorcu politických meme videí: o 17:00 pripraví krátky brief + prompt na 9:16 obrázok v meme-AI hyperreal štýle pre Grok.

| | |
| --- | --- |
| Original template | https://x.ai/bot/AA7xL_FH-DxuGLAndaCYz |
| Creator | athor307 pakaj ([@athor307](https://x.com/athor307)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/chief-of-staff-aa7x), [grokbotwiki.com](https://www.grokbotwiki.com/bots/chief-of-staff-aa7x), [grokbothq.xyz](https://grokbothq.xyz/bots/chief-of-staff-11), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/chief-of-staff-aa7x) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 3 routines, 10 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/chief-of-staff-aa7xlx ~/pi-bots/chief-of-staff-aa7xlx && cd ~/pi-bots/chief-of-staff-aa7xlx
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/chief-of-staff-aa7xlx`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/denn-meme-video-prompt-sk`: cron `0 17 * * *` (found in the template text)
- `/nede-a-best-of-tip`: cron `0 18 * * 0` (found in the template text)
- `/streda-meme-lord-check`: cron `0 20 * * 3` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
