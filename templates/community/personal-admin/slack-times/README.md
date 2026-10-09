# Slack times

Slackを見守り、おもしろい話題はこのチャットでコメント案を知らせる。仲間のボットから届く短い「こんなことしたよ」を times 口調に直して、指定の times チャンネルに流すアシスタント。

| | |
| --- | --- |
| Original template | https://x.ai/bot/eojAxOodcfhC-Cj2DpTf6 |
| Creator | Kento Kimura ([@AoToLog_](https://x.com/AoToLog_)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/slack-times), [grokbotwiki.com](https://www.grokbotwiki.com/bots/slack-times), [grokbothq.xyz](https://grokbothq.xyz/bots/slack-times), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/slack-times) |
| Fidelity | **full** (full recipe, template version 5) |
| Contents | 1 skills, 1 routines, 7 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/slack-times ~/pi-bots/slack-times && cd ~/pi-bots/slack-times
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/slack-times`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/slack`: no schedule in the template (set when enabled in Grok Bot)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
