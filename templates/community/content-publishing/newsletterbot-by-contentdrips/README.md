# NewsletterBot by Contentdrips

Repurposes newsletter posts into social graphics and carousels with ContentDrips. Paste a newsletter link, pick nuggets, then use your template or the AI Design Agent.

| | |
| --- | --- |
| Original template | https://x.ai/bot/aZktlS8No2Ur9nlhKRcy8 |
| Creator | Usama Khalid ([@im_usamakhalid](https://x.com/im_usamakhalid)) |
| Category | community / content-publishing |
| Found via | [botsdots.site](https://botsdots.site/templates/newsletterbot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/newsletterbot-by-contentdrips), [grokbothq.xyz](https://grokbothq.xyz/bots/newsletterbot-by-contentdrips), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/newsletterbot-by-contentdrips), [x-research](https://botsdots.site/templates/newsletterbot) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/newsletterbot-by-contentdrips ~/pi-bots/newsletterbot-by-contentdrips && cd ~/pi-bots/newsletterbot-by-contentdrips
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/newsletterbot-by-contentdrips`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
