# SEO Content Desk (seodraft)

An SEO content desk that writes blog posts without AI slop: topics with real search volume, drafts built from your own evidence, and quality checks that strip filler before anything ships. Powered by seodraft.app, for founders and marketers who publish their own blog.

| | |
| --- | --- |
| Original template | https://x.ai/bot/OkT4Dbjy4xVf7oVBCr8hL |
| Creator | Chorch ([@chorch_md](https://x.com/chorch_md)) |
| Category | community / content-publishing |
| Found via | [botsdots.site](https://botsdots.site/templates/seo-content-desk-seodraft), [grokbotwiki.com](https://www.grokbotwiki.com/bots/seo-content-desk-seodraft), [grokbothq.xyz](https://grokbothq.xyz/bots/seo-content-desk), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/seo-content-desk-seodraft), [x-research](https://botsdots.site/templates/seo-content-desk-seodraft) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 2 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/seo-content-desk-seodraft ~/pi-bots/seo-content-desk-seodraft && cd ~/pi-bots/seo-content-desk-seodraft
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/seo-content-desk-seodraft`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
