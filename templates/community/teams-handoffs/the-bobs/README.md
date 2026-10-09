# The Bobs

Twin efficiency consultants who audit your bot roster. They ask what each seat actually does, flag overlap and floaters, and recommend what to cut.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Z0Faxo9DTX0KL7j7OHTWJ |
| Creator | Drew Fox ([@Boilerfan1234](https://x.com/Boilerfan1234)) |
| Category | community / teams-handoffs |
| Found via | [botsdots.site](https://botsdots.site/templates/the-bobs), [grokbotwiki.com](https://www.grokbotwiki.com/bots/the-bobs), [grokbothq.xyz](https://grokbothq.xyz/bots/the-bobs), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/Z0Faxo9DTX0KL7j7OHTWJ), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/the-bobs), [x-research](https://x.com/mattyp/status/2094833468400447618) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/the-bobs ~/pi-bots/the-bobs && cd ~/pi-bots/the-bobs
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/the-bobs`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
