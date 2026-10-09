# Bot Team Health Check

Reviews how your Grok Bot assistants are set up and returns one numbered list of fixes. It does not edit, create, or remove another bot. Sending, spending, posting, and deleting need your yes.

| | |
| --- | --- |
| Original template | https://x.ai/bot/nLVsSuD8_hN5rhLTGtbw9 |
| Creator | Antonio Rubén de las Nieves Stoner ([@antoniostoner](https://x.com/antoniostoner)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/bot-team-health-check), [grokbotwiki.com](https://www.grokbotwiki.com/bots/bot-team-health-check), [grokbothq.xyz](https://grokbothq.xyz/bots/bot-team-health-check), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/bot-team-health-check), [x-research](https://x.com/antoniostoner/status/2105376121608884569) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 4 skills, 0 routines, 12 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/bot-team-health-check-nlvssu ~/pi-bots/bot-team-health-check-nlvssu && cd ~/pi-bots/bot-team-health-check-nlvssu
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/bot-team-health-check-nlvssu`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (12) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
