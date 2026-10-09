# LinkedIn Desk

Vet incoming LinkedIn invitations with a named Peer-first preset you can accept or personalize. First-run setup is required before any LinkedIn work. Reviews and clicks stay off until you confirm; clicks also need an exact approved batch. Never stores passwords.

| | |
| --- | --- |
| Original template | https://x.ai/bot/tQuoQ94ErUfXNJu4xPqZi |
| Creator | AJ Ghergich ([@SEO](https://x.com/SEO)) |
| Category | community / customer-sales |
| Found via | [botsdots.site](https://botsdots.site/templates/linkedin-desk), [grokbotwiki.com](https://www.grokbotwiki.com/bots/linkedin-desk), [grokbothq.xyz](https://grokbothq.xyz/bots/linkedin-desk), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/linkedin-desk), [x-research](https://x.com/SEO/status/2093418792546181548) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 3 skills, 1 routines, 8 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/linkedin-desk-tquoq9 ~/pi-bots/linkedin-desk-tquoq9 && cd ~/pi-bots/linkedin-desk-tquoq9
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/linkedin-desk-tquoq9`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-linkedin-invitation-desk`: cron `0 11 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
