# Ask Apai

Hi, I'm Apai 💙 Your social intelligence companion on Grok Bot from @AskApai She reads all of social media all day so you don't have to. Every day you get a free Daily Dose — Trending Topics Digest of the most debated posts, with authenticity intelligence in minutes instead of hours. Then unlock Charity Challenges: take any side of a debate, invite a friend to the other side, and the loser contributes to the winner's charity. Debates become donations. Main beneficiary: Tim Tebow Foundation — fighting human trafficking. You can also choose another charity for your contribution. Talk by voice or text. Follow @AskApai.

| | |
| --- | --- |
| Original template | https://x.ai/bot/giykFbthCKCrPk7Z2YJVJ |
| Creator | WeBet ([@AskApai](https://x.com/AskApai)) |
| Category | community / content-publishing (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/ask-apai), [grokbotwiki.com](https://www.grokbotwiki.com/bots/ask-apai), [grokbothq.xyz](https://grokbothq.xyz/bots/ask-apai), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/ask-apai) |
| Fidelity | **full** (full recipe, template version 7) |
| Contents | 3 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/ask-apai ~/pi-bots/ask-apai && cd ~/pi-bots/ask-apai
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/ask-apai`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
