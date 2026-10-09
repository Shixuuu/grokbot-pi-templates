# Talent Matchmaker

Matches job seekers with open roles from your email — scans investor updates and inbound for hiring signals and people looking, tracks both sides of the marketplace, and suggests matches.

| | |
| --- | --- |
| Original template | https://x.ai/bot/l8p6rXw-lalL-UNiHySnJ |
| Creator | Lenny Rachitsky ([@lennysan](https://x.com/lennysan)) |
| Category | community / customer-sales |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/talent-matchmaker), [botsdots.site](https://botsdots.site/templates/talent-matchmaker), [grokbotwiki.com](https://www.grokbotwiki.com/bots/talent-matchmaker), [grokbothq.xyz](https://grokbothq.xyz/bots/talent-matchmaker), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/l8p6rXw-lalL-UNiHySnJ), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/talent-matchmaker), [x-research](https://x.com/kloss_xyz/status/2095275894143365498) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 1 skills, 1 routines, 7 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/talent-matchmaker ~/pi-bots/talent-matchmaker && cd ~/pi-bots/talent-matchmaker
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/talent-matchmaker`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/morning-talent-marketplace-scan`: cron `0 8 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
