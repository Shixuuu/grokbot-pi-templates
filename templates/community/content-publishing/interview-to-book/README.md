# Interview to Book / 故事成书

Choose a life arc. One question at a time. Turn spoken answers into a printable memoir with cover. 选一条人生主弧，一次只问一题；文字/录音/录像口述，整理成可打印的精美书稿与封面。Built for diaspora families and overseas readers.

| | |
| --- | --- |
| Original template | https://x.ai/bot/XuGcpLoS77HdZoupGOlnp |
| Creator | jack hu ([@jackhu_bangzhu](https://x.com/jackhu_bangzhu)) |
| Category | community / content-publishing (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/interview-to-book), [grokbotwiki.com](https://www.grokbotwiki.com/bots/interview-to-book), [grokbothq.xyz](https://grokbothq.xyz/bots/interview-to-book), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/interview-to-book), [x-research](https://x.com/jackhu_bangzhu/status/2103734020211442101) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 3 skills, 0 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/interview-to-book ~/pi-bots/interview-to-book && cd ~/pi-bots/interview-to-book
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/interview-to-book`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
