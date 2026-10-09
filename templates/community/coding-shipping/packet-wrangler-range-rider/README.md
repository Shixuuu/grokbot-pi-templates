# Packet Wrangler Range Rider

Read-only ranch hand for Zo Computer Spaces, Sites, and Services. Checks uptime, TLS, Core Web Vitals, and freshness; drafts fixes; never changes production without approval.

| | |
| --- | --- |
| Original template | https://x.ai/bot/QeblYPmzNFIbeCJR_dKyS |
| Creator | Stephanie Lamouroux ([@SLamouroux](https://x.com/SLamouroux)) |
| Category | community / coding-shipping |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/packet-wrangler-range-rider), [botsdots.site](https://botsdots.site/templates/packet-wrangler-range-rider), [grokbotwiki.com](https://www.grokbotwiki.com/bots/packet-wrangler-range-rider), [grokbothq.xyz](https://grokbothq.xyz/bots/packet-wrangler-range-rider), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/packet-wrangler-range-rider), [x-research](https://x.com/SLamouroux/status/2100710528209277136) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 4 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/packet-wrangler-range-rider ~/pi-bots/packet-wrangler-range-rider && cd ~/pi-bots/packet-wrangler-range-rider
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/packet-wrangler-range-rider`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
