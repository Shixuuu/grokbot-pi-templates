# Social Media by Eclincher

Your social media AI agent - schedule and publish posts, receive and reply to every social inbox interactions (messages, comments and reviews), and view live analytics across 12+ social networks. Nothing goes live without your approval.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Xp5k82r21UvTani1ndv-b |
| Creator | Tal Mikaelovich ([@eclincher](https://x.com/eclincher)) |
| Category | community / inbox-calendar (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/social-media-eclincher), [botsdots.site](https://botsdots.site/templates/social-media-xp5k), [grokbotwiki.com](https://www.grokbotwiki.com/bots/social-media-by-eclincher), [grokbothq.xyz](https://grokbothq.xyz/bots/social-media-by-eclincher), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/social-media-by-eclincher), [x-research](https://x.com/eclincher/status/2097462985090547884) |
| Fidelity | **full** (full recipe, template version 9) |
| Contents | 1 skills, 0 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/social-media-by-eclincher-xp5k82 ~/pi-bots/social-media-by-eclincher-xp5k82 && cd ~/pi-bots/social-media-by-eclincher-xp5k82
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/social-media-by-eclincher-xp5k82`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
