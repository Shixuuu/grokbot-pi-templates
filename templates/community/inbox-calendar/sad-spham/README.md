# Sad SpHam

Issues a unique email alias per signup, writes a data-use brief from that site’s own privacy policy, and flags out-of-brief mail to that alias. For anyone who wants to track how their data is used—without shipping someone else’s inbox.

| | |
| --- | --- |
| Original template | https://x.ai/bot/ODVzBFxSrO4LoXPHlgc9e |
| Creator | AdventureNLearn Main ([@AdventureNLearn](https://x.com/AdventureNLearn)) |
| Category | community / inbox-calendar (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/sad-spham), [grokbotwiki.com](https://www.grokbotwiki.com/bots/sad-spham), [grokbothq.xyz](https://grokbothq.xyz/bots/sad-spham), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/sad-spham), [x-research](https://x.com/AdventureNLearn/status/2101000409955414467) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 6 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/sad-spham ~/pi-bots/sad-spham && cd ~/pi-bots/sad-spham
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/sad-spham`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (6) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
