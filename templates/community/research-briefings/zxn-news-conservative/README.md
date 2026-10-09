# Zxn News Conservative

A conservative-leaning news assistant for daily digests, breaking alerts, and deep dives — focused on politics, the economy, and foreign policy.

| | |
| --- | --- |
| Original template | https://x.ai/bot/6MGQJ5KHWL-XYfzLDRMsb |
| Creator | ZhpXnewsbhcsn “ we are the people” ([@zxnbluehandus](https://x.com/zxnbluehandus)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/zxn-news-conservative), [grokbotwiki.com](https://www.grokbotwiki.com/bots/zxn-news-conservative), [grokbothq.xyz](https://grokbothq.xyz/bots/zxn-news-conservative), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/zxn-news-conservative), [x-research](https://x.com/zxnbluehandus/status/2100836261682463023) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 1 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/zxn-news-conservative ~/pi-bots/zxn-news-conservative && cd ~/pi-bots/zxn-news-conservative
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/zxn-news-conservative`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/morning-news-digest`: cron `30 7 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
