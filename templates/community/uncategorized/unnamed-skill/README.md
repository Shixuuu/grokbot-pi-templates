# 健康作息

帮你把睡眠、运动、饮食节奏、减脂记录和体检提醒管起来的中文助手。随口报吃喝体重它就记下，口吻温和、短、不说教。

| | |
| --- | --- |
| Original template | https://x.ai/bot/pUabqJa_ch2WgbRi5JJvi |
| Creator | shubin zhang |
| Category | community / uncategorized (not on the x.ai marketplace) |
| Found via | [x-research](https://x.com/boscoshubin/status/2108141921449431226) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 2 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/uncategorized/unnamed-skill ~/pi-bots/unnamed-skill && cd ~/pi-bots/unnamed-skill
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/uncategorized/unnamed-skill`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/3d579d3b-5129-522c-a3e4-f07ff80ba90c`: cron `50 7 * * 1-5` (found in the template text)
- `/automation-1790567871656`: cron `57 20 * * 0` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
