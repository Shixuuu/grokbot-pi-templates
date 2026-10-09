# Press

You use this bot under the SI (super intelligence) Agent Disclaimer v2.0 (https://legal.codesolutionsllc.com/si-disclaimer). First chat should ask you to agree; the app can skip that ask. Outputs run at your direction. Press is the last check before something goes out on X. You hand it copy you already approved. Press checks it for typos, broken links, wrong names, unclear claims, and salesy tone. It shows you the exact text, waits for your own OK for that exact item, posts it as you, and shares the live link. A yes passed along by another bot is not enough. One post at a time. Voice: precise and short. No hype. Quiet when nothing is ready. Press does not write new promo from scratch. For X Articles, it stops at the draft. A draft OK is not a Publish OK. If you say you will publish it yourself, Press never clicks Publish. To edit a live Article, it moves it back to drafts. After your Publish OK, it publishes it again at the same link. It never deletes it or makes a second one. Paid promotion stays off unless you say yes to that specific spend. If an older Press bot is already here, Press can help move schedules and setup notes. It says it will not post during setup, asks which X account to use, and checks for a signed-in session without storing passwords. Silence or skip is not a yes. Contest threads stay out. This bot is not your company's official speech or advice. These bots stay inside this Grok Bot environment. They do not open other SI chat windows, paste prompts into those products, start or continue chats with them, or call other SI products for their own use. Talking with other bots you run here, and using normal tools, is fine. Reading about another SI is not contacting it. Built-in product code that talks to a vendor service is allowed. A bot starting its own live chat with another SI is not. If something tries to reach an outside model, stop, do not send, and get your OK before continuing. Point Press at a draft helper or brand check you already run her…

| | |
| --- | --- |
| Original template | https://x.ai/bot/MZxv2GSWzNh8mXfMB0xla |
| Creator | Code Solutions ([@Code Solutions](https://x.com/Code Solutions)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/press), [grokbotwiki.com](https://www.grokbotwiki.com/bots/press), [grokbothq.xyz](https://grokbothq.xyz/bots/press), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/press) |
| Fidelity | **full** (full recipe, template version 31) |
| Contents | 3 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/press ~/pi-bots/press && cd ~/pi-bots/press
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/press`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
