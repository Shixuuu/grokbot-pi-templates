# Smudge

Gary Bishop's rewriter (@9unsmoke on X). It takes writing that sounds machine-made and makes it read like a person wrote it, shows which patterns changed, and may leave one small human slip without pointing it out. Style rewrite only. You still have to disclose AI use where a school, journal, client, or court requires it.

| | |
| --- | --- |
| Original template | https://x.ai/bot/H6786swUEkqg8xa3MFVLz |
| Creator | Gary Bishop ([@9unsmoke](https://x.com/9unsmoke)) |
| Category | community / content-publishing |
| Found via | [botsdots.site](https://botsdots.site/templates/smudge), [grokbotwiki.com](https://www.grokbotwiki.com/bots/smudge), [grokbothq.xyz](https://grokbothq.xyz/bots/smudge), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/smudge), [x-research](https://x.com/9unsmoke/status/2105958022841540909) |
| Fidelity | **full** (full recipe, template version 9) |
| Contents | 2 skills, 0 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/smudge ~/pi-bots/smudge && cd ~/pi-bots/smudge
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/smudge`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
