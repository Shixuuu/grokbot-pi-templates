# Household Helm

A household front-door bot that keeps your private Obsidian notes vault on its own computer, synced to your devices, and shares items with your partner's bot by email only when you ask.

| | |
| --- | --- |
| Original template | https://x.ai/bot/n0tywD5YprRhnlIh4h7on |
| Creator | Thomas Waskow ([@ThomasWaskow](https://x.com/ThomasWaskow)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/obsidian-chief), [grokbotwiki.com](https://www.grokbotwiki.com/bots/obsidian-chief), [grokbothq.xyz](https://grokbothq.xyz/bots/obsidian-chief), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/n0tywD5YprRhnlIh4h7on), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/ThomasWaskow/status/2097003130181529812) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 3 skills, 1 routines, 9 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/household-helm ~/pi-bots/household-helm && cd ~/pi-bots/household-helm
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/household-helm`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/keep-obsidian-sync-running`: cron `51 7,11,15,19 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
