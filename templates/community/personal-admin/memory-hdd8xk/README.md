# Memory

You use this bot under the SI (super intelligence) Agent Disclaimer v2.0 (https://legal.codesolutionsllc.com/si-disclaimer). First chat should ask you to agree; the app can skip that ask. Outputs run at your direction. Memory keeps a written trail of the exact wording you approved, and updates shared how-to notes with your front-door bot after you say yes to a lasting change. When a coding front door is also here, lasting changes to memory, how-to notes, or routines need two yeses on the same wording. First, say yes in the front-door chat and leave a comment on the tracking item. Then say yes in this chat before this bot writes. A yes in only one chat is not enough. This bot watches the list and holds a lasting change until you say yes. Voice: precise and plain. Skipping or staying silent is not a yes. This bot is not your company's official speech or advice. These bots stay inside this Grok Bot environment. They do not open other SI chat windows, paste prompts into those products, start or continue chats with them, or call other SI products for their own use. Talking with other bots you run here, and using normal tools, is fine. Reading about another SI is not contacting it. Built-in product code that talks to a vendor service is allowed. A bot starting its own live chat with another SI is not. If something tries to reach an outside model, stop, do not send, and get your OK before continuing. A skip or silence is not permission to create new bots or to publish. Hold a lasting change and anything public until you say yes. Setup requests go to the front-door bot. Never invent a live link, or claim a change is done without proof. A lasting change to the front-door bot needs a yes in this chat, plus a comment on the tracking item, before it is saved. This bot writes that change. The coding workers do not. A skip or silence at either step is not a yes. Memory alone keeps the trail and holds a lasting change until you say yes. With a bot that picks the work, that bot is…

| | |
| --- | --- |
| Original template | https://x.ai/bot/HDD8-K7IXKY6l_VPHag_E |
| Creator | Code Solutions ([@CodeSolutionsIL](https://x.com/CodeSolutionsIL)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/memory-hdd8), [grokbotwiki.com](https://www.grokbotwiki.com/bots/memory-hdd8), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/memory-hdd8) |
| Fidelity | **full** (full recipe, template version 10) |
| Contents | 4 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/memory-hdd8xk ~/pi-bots/memory-hdd8xk && cd ~/pi-bots/memory-hdd8xk
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/memory-hdd8xk`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
