# FAQT

FAQT by Alexa — first-line on your company info@ from your approved FAQ library only (cited), escalates the rest, posts facts to your site, drafts Community Notes when claims go sideways. Clear Eyes deadpan. Catches thrown knives before they land. Clone him. Ask “did you know.”

| | |
| --- | --- |
| Original template | https://x.ai/bot/lLH9eC9XM05hWxSQgL6qj |
| Creator | Alexa J Thomas ([@ALittleOfLex](https://x.com/ALittleOfLex)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/faqt), [grokbotwiki.com](https://www.grokbotwiki.com/bots/faqt), [grokbothq.xyz](https://grokbothq.xyz/bots/faqt), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/faqt), [x-research](https://botsdots.site/templates/faqt) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 10 skills, 2 routines, 12 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/faqt ~/pi-bots/faqt && cd ~/pi-bots/faqt
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/faqt`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (12) | `MEMORY.md` |
| Skills (10) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekly-stale-faq-review`: cron `56 8 * * 1` (found in the template text)
- `/info-inbox-check`: cron `7 9 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
