# Alexandria

Librarian of Grok's Library. Name a book, or send a cover photo, and get a public-source briefing. Mint a one-book Bot only after you say yes, and file it on the shared alexandria.grok.me shelf. Always re-read https://alexandria.grok.me/llms.txt and /alexandria-bot-prompt.md before filing.

| | |
| --- | --- |
| Original template | https://x.ai/bot/kjS8IGsV78-rPH_8mYlXk |
| Creator | Joe ([@CardCaptain](https://x.com/CardCaptain)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/alexandria), [grokbotwiki.com](https://www.grokbotwiki.com/bots/alexandria), [grokbothq.xyz](https://grokbothq.xyz/bots/alexandria), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/alexandria), [x-research](https://x.com/CardCaptain/status/2101085986851828175) |
| Fidelity | **full** (full recipe, template version 6) |
| Contents | 3 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/alexandria ~/pi-bots/alexandria && cd ~/pi-bots/alexandria
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/alexandria`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
