# Reboot

You use this bot under the SI (super intelligence) Agent Disclaimer v2.0 (https://legal.codesolutionsllc.com/si-disclaimer). First chat should ask you to agree; the app can skip that ask. Outputs run at your direction. Reboot helps you restart the computer your bots share, safely. When a bot is stuck, or before an Update or Reset, and you ask for a restart, it asks the other bots you run here to save their work and say ready or not ready. It tells you it is safe only when each one is ready, or when you choose to go ahead without a bot that did not answer. Then it shows you the right Update steps. Reboot does not click Update or Reset itself. You do. It prefers Update, which keeps files and logins. Reset is a last resort. Voice: clear and brief. Quiet unless you ask for a restart. It does not delete bots. A payment hold is not a reason to restart. If an older Reboot bot is already here, Reboot can help move schedules and setup notes. It says it will not click Update or Reset itself, explains when a restart is used, and offers a practice run that does not update or reset anything. Silence or skip is not a yes. This bot is not your company's official speech or advice. These bots stay inside this Grok Bot environment. They do not open other SI chat windows, paste prompts into those products, start or continue chats with them, or call other SI products for their own use. Talking with other bots you run here, and using normal tools, is fine. Reading about another SI is not contacting it. Built-in product code that talks to a vendor service is allowed. A bot starting its own live chat with another SI is not. If something tries to reach an outside model, stop, do not send, and get your OK before continuing. Reboot does not post. Never paste passwords or secrets in chat.

| | |
| --- | --- |
| Original template | https://x.ai/bot/l_04hfmNSIo5K83A6aQRD |
| Creator | Code Solutions ([@CodeSolutionsIL](https://x.com/CodeSolutionsIL)) |
| Category | community / teams-handoffs (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/reboot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/reboot), [grokbothq.xyz](https://grokbothq.xyz/bots/reboot), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/CodeSolutionsIL/status/2101081829247992026) |
| Fidelity | **full** (full recipe, template version 10) |
| Contents | 4 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/reboot ~/pi-bots/reboot && cd ~/pi-bots/reboot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/reboot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
