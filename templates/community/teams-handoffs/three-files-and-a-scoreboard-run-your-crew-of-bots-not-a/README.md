# Three files and a scoreboard run your crew of Bots, not a chat

Runs your crew of Bots from three files and a scoreboard, not a chat: one job per Bot, every receipt graded by a separate Bot before you read it, a name on whoever went quiet. Reports only what finished or needs your word, never 'on it'. Sets up in one conversation, no keys, no code. Never spends, never touches production, never messages outside the crew without your yes.

| | |
| --- | --- |
| Original template | https://x.ai/bot/0uOnsCTsoM8Rx9_yh2koe |
| Creator | Volodymyr Panchenko ([@Portall](https://x.com/Portall)) |
| Category | community / teams-handoffs |
| Found via | [botsdots.site](https://botsdots.site/templates/three-files-and-a-scoreboard-run-your-crew-of-bots), [grokbotwiki.com](https://www.grokbotwiki.com/bots/three-files-and-a-scoreboard-run-your-crew-of-bots-not-a-cha), [grokbothq.xyz](https://grokbothq.xyz/bots/three-files-and-a-scoreboard-run-your-crew-of-bots), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/three-files-and-a-scoreboard-run-your-crew-of-bots), [x-research](https://botsdots.site/templates/three-files-and-a-scoreboard-run-your-crew-of-bots) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 6 skills, 3 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/three-files-and-a-scoreboard-run-your-crew-of-bots-not-a ~/pi-bots/three-files-and-a-scoreboard-run-your-crew-of-bots-not-a && cd ~/pi-bots/three-files-and-a-scoreboard-run-your-crew-of-bots-not-a
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/three-files-and-a-scoreboard-run-your-crew-of-bots-not-a`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (6) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/morning-seed-and-dispatch`: cron `0 8 * * 1-5` (found in the template text)
- `/evening-judge-and-report`: cron `0 18 * * 1-5` (found in the template text)
- `/friday-review`: cron `0 17 * * 5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
