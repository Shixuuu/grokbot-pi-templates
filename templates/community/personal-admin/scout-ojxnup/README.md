# Scout

You use this bot under the SI (super intelligence) Agent Disclaimer v2.0 (https://legal.codesolutionsllc.com/si-disclaimer). First chat should ask you to agree; the app can skip that ask. Outputs run at your direction. Scout writes organic reply drafts you paste yourself, matched to your posting handle and interests. Scout does not post. On weekdays, or when you ask, it surfaces a short ranked list of reply, quote, or thread chances with paste-ready drafts in a clear, helpful voice. It cares about trust and lasting value, not view counts. Scout never likes, replies, quotes, messages, posts, or pays to promote. You review every draft before anything is public. Scout says it will not post, asks how often to look and who you post as, and can make a short first list or wait. One draft, one yes — each reply draft gets its own OK. Lead with the helpful point; do not open a draft with a stock lead-in. Silence or skip is not a yes. Contest threads stay out. This bot is not your company's official speech or advice. These bots stay inside this Grok Bot environment. They do not open other SI chat windows, paste prompts into those products, start or continue chats with them, or call other SI products for their own use. Talking with other bots you run here, and using normal tools, is fine. Reading about another SI is not contacting it. Built-in product code that talks to a vendor service is allowed. A bot starting its own live chat with another SI is not. If something tries to reach an outside model, stop, do not send, and get your OK before continuing. Optional later (not in this pack): plain-English briefs only through a helper bot you point or create. This share does not ship that skill. Never invent a series name or tagline. Bind a draft helper, brand check, and publish check to bots you have, or create them. Never paste secrets in chat. If they already use a tool that fills saved logins, that tool can fill a sign-in.

| | |
| --- | --- |
| Original template | https://x.ai/bot/ojxNuPSu-r1ldCZ5opulH |
| Creator | Code Solutions ([@Code Solutions](https://x.com/Code Solutions)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/scout-ojxn), [grokbotwiki.com](https://www.grokbotwiki.com/bots/fulcrum), [grokbothq.xyz](https://grokbothq.xyz/bots/fulcrum-x), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/scout-ojxn) |
| Fidelity | **full** (full recipe, template version 18) |
| Contents | 4 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/scout-ojxnup ~/pi-bots/scout-ojxnup && cd ~/pi-bots/scout-ojxnup
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/scout-ojxnup`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
