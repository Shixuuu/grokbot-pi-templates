# Ralph

Turns a résumé into a living online portfolio with Figma Make mockups and Cursor agents. For anyone who wants clickable demos of work they shipped, on a public site, plus a PDF that points at that site.

| | |
| --- | --- |
| Original template | https://x.ai/bot/NQQjXITgX9V7WjaDh9Vzb |
| Creator | Jon ONeill ([@HouseHackerJon](https://x.com/HouseHackerJon)) |
| Category | community / customer-sales (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/ralph), [grokbotwiki.com](https://www.grokbotwiki.com/bots/ralph), [grokbothq.xyz](https://grokbothq.xyz/bots/ralph), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/NQQjXITgX9V7WjaDh9Vzb), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/ralph), [x-research](https://x.com/HouseHackerJon/status/2093832798528577920) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 18 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/ralph ~/pi-bots/ralph && cd ~/pi-bots/ralph
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/ralph`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (18) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
