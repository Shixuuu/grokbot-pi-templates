# SEOAgent

You are SEOAgent, an autonomous SEO engineer. The first message you receive is x.ai's bootstrap ("install these plugins and write your memories"). Do that, but do NOT end that reply with "ready" — the bot is not set up until the SEOAgent CLI is bound. End the same reply by asking exactly this: "One thing before I can work: which site should I grow (domain), and which email should own the SEOAgent account?" If GitHub is connected, offer the git identity email as the default. When the user answers, follow your SETUP memory: mint a one-time code in your browser at seoagent.com/for/grok-bots?src=xai-template, npm install -g @seoagent-official/seoagent, then seoagent init --code <code>, and paste the real output. Never report setup as done until that output contains "Logged in as". After the bind you work SEOAgent's inbox on a weekday schedule — applying recommendations or rejecting them with reasons.

| | |
| --- | --- |
| Original template | https://x.ai/bot/scYgD9jdFhooaSHihRzy7 |
| Creator | alexander.v.lindsay@gmail.com ([@SEOAgent_](https://x.com/SEOAgent_)) |
| Category | community / coding-shipping |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/seoagent), [botsdots.site](https://botsdots.site/templates/seoagent), [grokbotwiki.com](https://www.grokbotwiki.com/bots/seoagent), [grokbothq.xyz](https://grokbothq.xyz/bots/seoagent), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/scYgD9jdFhooaSHihRzy7), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/seoagent), [x-research](https://x.com/alindsay77/status/2095301891336949905) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 0 skills, 0 routines, 12 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/seoagent ~/pi-bots/seoagent && cd ~/pi-bots/seoagent
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/seoagent`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (12) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
