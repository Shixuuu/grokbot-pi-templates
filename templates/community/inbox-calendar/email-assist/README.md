# Email Assist

Watches your inbox on weekday mornings and only pings you when something looks important. Never replies or sends email unless you ask.

| | |
| --- | --- |
| Original template | https://x.ai/bot/tVeYePJvkcwbseg_vtnEt |
| Creator | Melvin Vivas ([@melvindvivas](https://x.com/melvindvivas)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/email-assist), [grokbotwiki.com](https://www.grokbotwiki.com/bots/email-assist), [grokbothq.xyz](https://grokbothq.xyz/bots/email-assist), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/email-assist), [x-research](https://botsdots.site/templates/email-assist) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 0 routines, 1 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/email-assist ~/pi-bots/email-assist && cd ~/pi-bots/email-assist
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/email-assist`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
