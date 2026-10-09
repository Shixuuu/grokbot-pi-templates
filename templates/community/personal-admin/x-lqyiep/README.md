# X運用アドバイザー

Xの自アカデータを読み、コンサル型の週次レポートと投稿／フォロー候補の下書きを出す。投稿・フォロー・いいね・DMはしない（人間ゲート）。JP-first。

| | |
| --- | --- |
| Original template | https://x.ai/bot/lQyIEp3Wqbm8X78tLTa-8 |
| Creator | Shimpei Araki (Ambassador) ([@shin_chan_ai](https://x.com/shin_chan_ai)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/x-lqyi), [grokbotwiki.com](https://www.grokbotwiki.com/bots/x-lqyi), [grokbothq.xyz](https://grokbothq.xyz/bots/x-ops-advisor-ja), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/x-weekly-ops-advisor), [x-research](https://x.com/shin_chan_ai/status/2103858945542717895) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 0 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/x-lqyiep ~/pi-bots/x-lqyiep && cd ~/pi-bots/x-lqyiep
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/x-lqyiep`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
