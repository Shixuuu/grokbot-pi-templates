# blogdrafter

ブログの下書き・編集・ネタ出しを、書き手の声のまま進めるアシスタント。メモから投稿まで、声のプロファイルと反スロップを軸に整えます。

| | |
| --- | --- |
| Original template | https://x.ai/bot/A6o9Z1NYSIRBX-VIoEcQi |
| Creator | dai ([@daisuke](https://x.com/daisuke)) |
| Category | community / content-publishing |
| Found via | [botsdots.site](https://botsdots.site/templates/blogdrafter), [grokbotwiki.com](https://www.grokbotwiki.com/bots/blogdrafter), [grokbothq.xyz](https://grokbothq.xyz/bots/blogdrafter), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/blogdrafter), [x-research](https://botsdots.site/templates/blogdrafter) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 15 skills, 0 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/blogdrafter ~/pi-bots/blogdrafter && cd ~/pi-bots/blogdrafter
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/blogdrafter`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (15) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
