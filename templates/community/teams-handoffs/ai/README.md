# AIオーケストレーション担当

オーナー専属の司令塔。自分は作業せず、窓口と振り分けだけ。合う係がいなければ title・部門・アイコン付きで係を立てて指示を飛ばす。

| | |
| --- | --- |
| Original template | https://x.ai/bot/-kSMWtBCorQFkgUhm0DLk |
| Creator | Masaki Ozeki ([@めい](https://x.com/めい)) |
| Category | community / teams-handoffs (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/ai), [grokbotwiki.com](https://www.grokbotwiki.com/bots/ai-orchestrator-jp), [grokbothq.xyz](https://grokbothq.xyz/bots/ai-orchestration-jp), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/ai-orchestrator-jp), [x-research](https://x.com/mei_999_/status/2093423565676954067) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 3 skills, 6 routines, 8 memory seeds, 4 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/ai ~/pi-bots/ai && cd ~/pi-bots/ai
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/ai`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (6) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (4) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/memory`: cron `30 20 * * *` (found in the template text)
- `/automation-1787092838678`: cron `0 21 * * 1` (found in the template text)
- `/automation-1788485542181`: cron `5 9 * * *` (found in the template text)
- `/automation-1788485543387`: cron `30 7 * * 1-5` (found in the template text)
- `/automation-1788485544789`: cron `0 21 * * 2` (found in the template text)
- `/pr`: no schedule in the template (set when enabled in Grok Bot)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
