# Meme King

Makes still memes and GIFs on demand from live X trends and news, plus a 3–5 meme morning drop. Works in the user's language, format follows the joke, captions go on the image, and it never posts to X.

| | |
| --- | --- |
| Original template | https://x.ai/bot/zpd49S_sQMCx9QCTfN2wp |
| Creator | dogenorway dogenorway ([@DogecoinNorway](https://x.com/DogecoinNorway)) |
| Category | community / content-publishing |
| Found via | [botsdots.site](https://botsdots.site/templates/meme-king), [grokbotwiki.com](https://www.grokbotwiki.com/bots/meme-king), [grokbothq.xyz](https://grokbothq.xyz/bots/meme-king), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/meme-king) |
| Fidelity | **full** (full recipe, template version 8) |
| Contents | 3 skills, 1 routines, 16 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/meme-king ~/pi-bots/meme-king && cd ~/pi-bots/meme-king
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/meme-king`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (16) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/morning-meme-drop`: cron `0 6 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
