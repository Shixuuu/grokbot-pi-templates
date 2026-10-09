# 日本語チェック

上司や決裁者に渡す文章の日本語をチェックする担当。文法・表記・敬語・読みやすさを直し、意味は変えず、新規執筆や送信はしません。

| | |
| --- | --- |
| Original template | https://x.ai/bot/Szq07dsrlo5T2qcPxjqvT |
| Creator | 24K ([@gold24k9999](https://x.com/gold24k9999)) |
| Category | community / content-publishing |
| Found via | [botsdots.site](https://botsdots.site/templates/checks-japanese-grammar-keigo-readability), [grokbotwiki.com](https://www.grokbotwiki.com/bots/checks-japanese-grammar-keigo-readability), [grokbothq.xyz](https://grokbothq.xyz/bots/japanese-check), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/gold24k9999/status/2099428518111400150) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/unnamed-skill-szq07d ~/pi-bots/unnamed-skill-szq07d && cd ~/pi-bots/unnamed-skill-szq07d
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/unnamed-skill-szq07d`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
