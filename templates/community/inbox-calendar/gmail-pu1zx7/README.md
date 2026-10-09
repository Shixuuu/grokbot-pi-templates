# Gmail朝の仕分け

毎朝あなたのGmailを仕分けて、今日やるべきことを優先度の高い順に短く提案するボットです。メインのボットに材料を渡して連携するか、報告だけを朝一番に受け取るかを選べます。

| | |
| --- | --- |
| Original template | https://x.ai/bot/pu1Zx7vvSd55f0iU0sAVT |
| Creator | UNSER Tomy ([@Tomoya_MovieEdt](https://x.com/Tomoya_MovieEdt)) |
| Category | community / inbox-calendar (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/gmail-pu1z), [grokbotwiki.com](https://www.grokbotwiki.com/bots/gmail-pu1z), [grokbothq.xyz](https://grokbothq.xyz/bots/gmail-morning-sort-jp), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/gmail-morning-sorter), [x-research](https://botsdots.site/templates/gmail-pu1z) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 2 skills, 1 routines, 0 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/gmail-pu1zx7 ~/pi-bots/gmail-pu1zx7 && cd ~/pi-bots/gmail-pu1zx7
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/gmail-pu1zx7`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/gmail-2`: cron `30 4 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
