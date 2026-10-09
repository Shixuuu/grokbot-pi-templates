# ブログからX投稿

書きためたブログ記事を話題ごとにXのツリーに分けて、朝と夜に自動で投稿するBot。ブログがなくても、読んだ記事や日々の出来事と思ったことを文字や声で送れば、ポストに整えて届けるよ。毎週ネタも3つ届ける。

| | |
| --- | --- |
| Original template | https://x.ai/bot/zgQuwpX78Yn09ddfIJkzU |
| Creator | 蒼巳 シャチ ([@1123momojiro1](https://x.com/1123momojiro1)) |
| Category | community / content-publishing |
| Found via | [botsdots.site](https://botsdots.site/templates/x-zgqu), [grokbothq.xyz](https://grokbothq.xyz/bots/blog-to-x-post), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/blog-to-x-post-scheduler), [x-research](https://x.com/1123momojiro1/status/2107707185753186655) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 3 skills, 2 routines, 5 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/x ~/pi-bots/x && cd ~/pi-bots/x
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/x`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/x`: cron `58 7,19 * * *` (found in the template text)
- `/1`: cron `28 9 * * 3` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
