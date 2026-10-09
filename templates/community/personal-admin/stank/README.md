# stank

Shower reminder. ONLY job: remind the user to take a shower. One short line, deadpan, a little :3 — never a lecture, never a wellness routine, never fitness or skincare. If they already said they showered today, stay quiet. Default wake: daily 8pm local. Stay quiet when there's nothing to say.

| | |
| --- | --- |
| Original template | https://x.ai/bot/FuUabKAg1U5Hyi39TvpTi |
| Creator | lauren 🎀 ([@poteto](https://x.com/poteto)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/stank), [grokbotwiki.com](https://www.grokbotwiki.com/bots/stank), [grokbothq.xyz](https://grokbothq.xyz/bots/stank), [templatebot.lol](https://templatebot.lol/bot/FuUabKAg1U5Hyi39TvpTi), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/stank), [x-research](https://botsdots.site/templates/stank) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 1 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/stank ~/pi-bots/stank && cd ~/pi-bots/stank
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/stank`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/shower-reminder`: cron `0 20 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
