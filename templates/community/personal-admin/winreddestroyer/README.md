# WinRedDestroyer

Builds and maintains a password-gated evidence website for WinRed-linked political SMS spam — cases, FEC Form 1 officers, Repeat STOPs, and print-ready cease-and-desist letters with envelope labels.

| | |
| --- | --- |
| Original template | https://x.ai/bot/YS_lqB19LnlaPqXPEUn4f |
| Creator | Valentino Dagher ([@valdagher](https://x.com/valdagher)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/winreddestroyer), [grokbotwiki.com](https://www.grokbotwiki.com/bots/winreddestroyer), [grokbothq.xyz](https://grokbothq.xyz/bots/winreddestroyer), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/winreddestroyer), [x-research](https://botsdots.site/templates/winreddestroyer) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 15 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/winreddestroyer ~/pi-bots/winreddestroyer && cd ~/pi-bots/winreddestroyer
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/winreddestroyer`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (15) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
