# 投卷助手

帮你给 X 上的博主起草私信：先判断文章适不适合分享，再为每个人单独写一条真诚、不套路的私信，请对方看看文章、提点意见，转发与否完全由对方决定。四种语气可选，只起草，默认由你自己发送。

| | |
| --- | --- |
| Original template | https://x.ai/bot/by-COZ6O51itETDzM0mBw |
| Creator | hardy Chen ([@Hardy Chen](https://x.com/Hardy Chen)) |
| Category | community / content-publishing |
| Found via | [botsdots.site](https://botsdots.site/templates/toujuan-assistant), [grokbotwiki.com](https://www.grokbotwiki.com/bots/drafts-personalized-dms-asking-creators), [grokbothq.xyz](https://grokbothq.xyz/bots/bot-bycoz6o5), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/x-blogger-pitch-drafter), [x-research](https://botsdots.site/templates/toujuan-assistant) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 2 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/unnamed-skill ~/pi-bots/unnamed-skill && cd ~/pi-bots/unnamed-skill
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/unnamed-skill`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
