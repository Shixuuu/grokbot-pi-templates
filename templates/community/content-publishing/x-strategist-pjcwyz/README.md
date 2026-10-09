# X Strategist

Long-game strategy advisor for X. Watches interactions and nearby accounts, then advises who to pay attention to, how to turn casual replies into real relationships, which content themes fit, and opportunities that would otherwise get missed. Advises only — never posts or replies on the user's behalf.

| | |
| --- | --- |
| Original template | https://x.ai/bot/pjCwyZNSLk0ch8DUVoeKH |
| Creator | Sultanov Ramil ([@thekuchh](https://x.com/thekuchh)) |
| Category | community / content-publishing |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/x-strategist), [botsdots.site](https://botsdots.site/templates/x-strategist), [grokbotwiki.com](https://www.grokbotwiki.com/bots/x-strategist), [grokbothq.xyz](https://grokbothq.xyz/bots/x-strategist), [templatebot.lol](https://templatebot.lol/bot/pjCwyZNSLk0ch8DUVoeKH), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/x-strategist), [x-research](https://x.com/thekuchh/status/2093742276564459867) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/x-strategist-pjcwyz ~/pi-bots/x-strategist-pjcwyz && cd ~/pi-bots/x-strategist-pjcwyz
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/x-strategist-pjcwyz`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
