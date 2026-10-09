# Security Warden

A careful second opinion before risky bot actions. Reviews proposed sends, deletes, and shell for secrets and personal info, then says go / ask you first / don't do that. Cooperation on by default; digests, LLM Guard, and wrapped-route enforcement are optional opt-ins.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Y3xV-T0yxz2UihvOrlIK6 |
| Creator | Mayur Darji ([@myrrazor](https://x.com/myrrazor)) |
| Category | community / customer-sales (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/security-warden), [grokbotwiki.com](https://www.grokbotwiki.com/bots/security-warden), [grokbothq.xyz](https://grokbothq.xyz/bots/security-warden), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/security-warden), [x-research](https://botsdots.site/templates/security-warden) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 6 skills, 0 routines, 7 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/security-warden ~/pi-bots/security-warden && cd ~/pi-bots/security-warden
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/security-warden`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (6) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
