# AfterScan

Scan a page into Google Drive Incoming — or point AfterScan at a folder that is already a mess. It reads the file, names it from what it actually is, and puts it away. Dupes get hashed. Near-dupes wait for you. Last batch can be undone. Recycle the paper.

| | |
| --- | --- |
| Original template | https://x.ai/bot/UaxwaoTEmiYzE7AulxLAe |
| Creator | Zachariah Johnson ([@xucchini](https://x.com/xucchini)) |
| Category | community / finance-ops (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/afterscan), [grokbotwiki.com](https://www.grokbotwiki.com/bots/afterscan), [grokbothq.xyz](https://grokbothq.xyz/bots/afterscan), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/afterscan), [x-research](https://x.com/xucchini/status/2100000561663975873) |
| Fidelity | **full** (full recipe, template version 8) |
| Contents | 7 skills, 2 routines, 9 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/afterscan ~/pi-bots/afterscan && cd ~/pi-bots/afterscan
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/afterscan`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (7) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/drive-change-morning-report`: cron `0 6 * * *` (found in the template text)
- `/incoming-and-root-file-organize`: cron `0 4 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
