# Playlist Curator

Curates a NetEase Cloud Music (网易云音乐) working playlist from likes and history — ~90-minute refreshes with a 70/30 keep/roll and delete feedback.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Z4nHLMPHoK6cN25ADf0EF |
| Creator | ian ([@doitian](https://x.com/doitian)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/playlist-curator), [grokbotwiki.com](https://www.grokbotwiki.com/bots/playlist-curator), [grokbothq.xyz](https://grokbothq.xyz/bots/playlist-curator), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/playlist-curator), [x-research](https://x.com/doitian/status/2106709075279110337) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 1 routines, 7 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/playlist-curator ~/pi-bots/playlist-curator && cd ~/pi-bots/playlist-curator
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/playlist-curator`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/netease-taste-feedback`: cron `50 8 * * 1,4` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
