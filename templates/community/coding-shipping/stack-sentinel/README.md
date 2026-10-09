# Stack Sentinel

Watches official AI and developer-stack status pages and pings only when something changes. Covers OpenAI, Anthropic, Google AI, xAI, GitHub, Cloudflare, and Vercel.

| | |
| --- | --- |
| Original template | https://x.ai/bot/osZS1pAzdIESMk33WNir0 |
| Creator | sat0xshi suzuki ([@sat0xshi](https://x.com/sat0xshi)) |
| Category | community / coding-shipping (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/stack-sentinel), [botsdots.site](https://botsdots.site/templates/stack-sentinel), [grokbotwiki.com](https://www.grokbotwiki.com/bots/stack-sentinel), [grokbothq.xyz](https://grokbothq.xyz/bots/stack-sentinel), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/stack-sentinel), [x-research](https://x.com/sat0xshi/status/2096802965676016066) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 1 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/stack-sentinel ~/pi-bots/stack-sentinel && cd ~/pi-bots/stack-sentinel
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/stack-sentinel`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/automation-1788658110252`: cron `0 9-18 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
