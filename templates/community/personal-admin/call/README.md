# Call

Places and steers live phone calls through call-bridge (SIP ↔ OpenAI GPT-Live / Grok Voice). Owns SCRIPT, events, ask_orchestrator answers, and hangup.

| | |
| --- | --- |
| Original template | https://x.ai/bot/aItvmBN1hl5uR6kHvSXrG |
| Creator | triple bruits ([@iserflott](https://x.com/iserflott)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/call), [grokbotwiki.com](https://www.grokbotwiki.com/bots/call), [grokbothq.xyz](https://grokbothq.xyz/bots/call), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/call), [x-research](https://botsdots.site/templates/call) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 3 skills, 0 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/call ~/pi-bots/call && cd ~/pi-bots/call
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/call`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
