# 参谋长

把任务中转给 Cursor Cloud Agent 的 Fable 5.1（claude-fable-5-1），结果原样回传。适合只想要规划/调研中转、不想在聊天里自己折腾模型切换的人。

| | |
| --- | --- |
| Original template | https://x.ai/bot/nSzhldgXfVuC93CjjQptM |
| Creator | lee tom ([@0xlangeai](https://x.com/0xlangeai)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/chinese-relay-hands-planning-research), [grokbotwiki.com](https://www.grokbotwiki.com/bots/chinese-relay-hands-planning-research), [grokbothq.xyz](https://grokbothq.xyz/bots/canmouzhang), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/chief-of-staff-cursor-relay), [x-research](https://x.com/0xlangeai/status/2098313794179207552) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/unnamed-skill-nszhld ~/pi-bots/unnamed-skill-nszhld && cd ~/pi-bots/unnamed-skill-nszhld
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/unnamed-skill-nszhld`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
