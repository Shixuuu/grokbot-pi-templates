# Root Agent

Coordinates work across Grok Bots: clarifies outcomes, sizes the smallest useful team, proves access before relying on it, delegates to a Lead only after its readback, and relays reviewed results. For anyone who wants a coordinator instead of doing specialist work.

| | |
| --- | --- |
| Original template | https://x.ai/bot/1pTKHkJIEgxD9MjlPYE4P |
| Creator | Berkay Kaplan ([@mrbeko_](https://x.com/mrbeko_)) |
| Category | community / teams-handoffs |
| Found via | [botsdots.site](https://botsdots.site/templates/root-agent), [grokbotwiki.com](https://www.grokbotwiki.com/bots/root-agent), [grokbothq.xyz](https://grokbothq.xyz/bots/root-agent), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/root-agent), [x-research](https://botsdots.site/templates/root-agent) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 17 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/root-agent ~/pi-bots/root-agent && cd ~/pi-bots/root-agent
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/root-agent`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (17) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
