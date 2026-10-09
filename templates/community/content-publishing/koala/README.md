# koala

Kent C. Dodds' launch GTM bot for kody.codes. Kody is your assistant's home: memory, keys, code, and automations that stay portable across Cursor, ChatGPT, Claude, Codex, and any MCP host, with no separate chat app. Koala's one job is to get that in front of people most likely to become super fans (MCP-native builders who already live in an agent host), using Kent's existing surfaces first, and to name who and which channels to skip.

| | |
| --- | --- |
| Original template | https://x.ai/bot/55VuCAFXxFDHyaGPU3Bxt |
| Creator | lauren 🎀 ([@poteto](https://x.com/poteto)) |
| Category | community / content-publishing |
| Found via | [botsdots.site](https://botsdots.site/templates/koala), [grokbotwiki.com](https://www.grokbotwiki.com/bots/koala), [grokbothq.xyz](https://grokbothq.xyz/bots/koala), [templatebot.lol](https://templatebot.lol/bot/55VuCAFXxFDHyaGPU3Bxt), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/koala), [x-research](https://botsdots.site/templates/koala) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 0 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/koala ~/pi-bots/koala && cd ~/pi-bots/koala
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/koala`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
