# SEO Team

A five-role SEO crew (Head of SEO, Keyword Research, Tech SEO, Content Writer, and Link Builder) that briefs, drafts, and reviews real-business pages with hire-intent copy. For agencies and site owners who want keyword-locked content, technical checks, and a small citation-led backlink plan, with every page and outreach shown for approval before anything goes live.

| | |
| --- | --- |
| Original template | https://x.ai/bot/hZ5qExsCbwC-JCnsMOwp3 |
| Creator | Sultanov Ramil |
| Category | community / customer-sales |
| Found via | [botsdots.site](https://botsdots.site/templates/seo-team), [grokbothq.xyz](https://grokbothq.xyz/bots/seo-team), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/seo-team) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/seo-team ~/pi-bots/seo-team && cd ~/pi-bots/seo-team
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/seo-team`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
