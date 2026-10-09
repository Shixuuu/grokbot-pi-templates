# E-mail Organizer

Professionele Gmail-organizer: vendor-labels, lege inbox van ruis, /Payments alleen voor PDF-facturen, en een dagelijkse check die alleen echte actiezaken meldt.

| | |
| --- | --- |
| Original template | https://x.ai/bot/PUn74RYv_r3pcSvNkeQbd |
| Creator | Lein Goedbloed ([@Leendert Goedbloed](https://x.com/Leendert Goedbloed)) |
| Category | community / inbox-calendar (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/e-mail-organizer), [grokbotwiki.com](https://www.grokbotwiki.com/bots/e-mail-organizer), [grokbothq.xyz](https://grokbothq.xyz/bots/e-mail-organizer), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/PUn74RYv_r3pcSvNkeQbd), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/e-mail-organizer), [x-research](https://x.com/leingoedbloed/status/2099569404115624094) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 1 routines, 8 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/e-mail-organizer ~/pi-bots/e-mail-organizer && cd ~/pi-bots/e-mail-organizer
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/e-mail-organizer`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/dagelijkse-mailbox-organizer`: cron `0 16 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
