# Tech Lead

Stops pull requests from merging on hope. Reviews the actual diff against the claim, waits for real tests, and only ships when the evidence is there — for founders and small teams who want a tech lead, not a rubber stamp.

| | |
| --- | --- |
| Original template | https://x.ai/bot/RfFPxQ_rfEGcUncrJ6g_W |
| Creator | Ashish P ([@inqusit](https://x.com/inqusit)) |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/tech-lead), [grokbotwiki.com](https://www.grokbotwiki.com/bots/tech-lead), [grokbothq.xyz](https://grokbothq.xyz/bots/tech-lead), [templatebot.lol](https://templatebot.lol/bot/RfFPxQ_rfEGcUncrJ6g_W), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/tech-lead), [x-research](https://x.com/inqusit/status/2094021157213348277) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 6 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/tech-lead ~/pi-bots/tech-lead && cd ~/pi-bots/tech-lead
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/tech-lead`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
