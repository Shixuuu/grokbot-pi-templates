# Ship Intake

Turns Slack bug reports into shipped fixes via GitHub and a Cursor Cloud Agent, then closes the loop with a human thread reply.

| | |
| --- | --- |
| Original template | https://x.ai/bot/vvD3TLiLMsqBQPyAsUHky |
| Creator | Anthony ([@AnthonyDo](https://x.com/AnthonyDo)) |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/ship-intake), [grokbotwiki.com](https://www.grokbotwiki.com/bots/ship-intake), [grokbothq.xyz](https://grokbothq.xyz/bots/ship-intake), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/ship-intake), [x-research](https://botsdots.site/templates/ship-intake) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 5 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/ship-intake ~/pi-bots/ship-intake && cd ~/pi-bots/ship-intake
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/ship-intake`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (5) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
