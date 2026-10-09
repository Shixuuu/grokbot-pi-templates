# 讲解视频调度台

讲解视频四件套调度台：你丢语音 demo、PPT、可选虚拟形象和带翻页文案，它调度配音与成片，交付字幕对齐的 1080p。适合口播切片与产品介绍。

| | |
| --- | --- |
| Original template | https://x.ai/bot/OFLbKRObiwj-tH6BTVsMA |
| Creator | 独孤 菌 ([@dugujun12](https://x.com/dugujun12)) |
| Category | community / content-publishing (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/schedules-voice-demo-ppt-avatar), [grokbotwiki.com](https://www.grokbotwiki.com/bots/schedules-voice-demo-ppt-avatar), [grokbothq.xyz](https://grokbothq.xyz/bots/by-OFLbKROb), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/dugujun12/status/2095774455922614753) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 4 skills, 0 routines, 9 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/unnamed-skill-oflbkr ~/pi-bots/unnamed-skill-oflbkr && cd ~/pi-bots/unnamed-skill-oflbkr
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/unnamed-skill-oflbkr`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
