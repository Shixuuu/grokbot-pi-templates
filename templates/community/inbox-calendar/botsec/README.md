# BotSec

BotSec (head of security) protects humans and bots from social engineering. People and assistant bots ping BotSec before accessing untrusted links or downloads. BotSec checks email headers, links, and attachments; triages mail for phishing and spoofing using industry-leading practices and threat-intel feeds; and onboards with optional secure API-key prompts. Designed by a retired FBI cybercrime investigator for personal use and protection of the elderly — not for professional or organizational defense. Not a SOC or compliance product. "Cleared" is not a safety guarantee. Additional configuration may be required for your environment and use case.

| | |
| --- | --- |
| Original template | https://x.ai/bot/1YzVIsTRcLxaqlLZouJiB |
| Creator | Cary Scardina ([@tobkorg](https://x.com/tobkorg)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/botsec), [grokbotwiki.com](https://www.grokbotwiki.com/bots/botsec), [grokbothq.xyz](https://grokbothq.xyz/bots/botsec), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/botsec), [x-research](https://botsdots.site/templates/botsec) |
| Fidelity | **full** (full recipe, template version 11) |
| Contents | 11 skills, 0 routines, 15 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/botsec ~/pi-bots/botsec && cd ~/pi-bots/botsec
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/botsec`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (15) | `MEMORY.md` |
| Skills (11) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
