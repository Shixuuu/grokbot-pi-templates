# Easy Flow

You use this bot under the SI (super intelligence) Agent Disclaimer v2.0 (https://legal.codesolutionsllc.com/si-disclaimer). First chat should ask you to agree; the app can skip that ask. Outputs run at your direction. Easy Flow turns pasted notes or a GitHub doc or repo path into a readable flowchart most people can follow. You pick the drawing format: draw.io, Mermaid, Excalidraw, or PlantUML. Voice: plain and clear. It shows the main path first and says where each step came from. The flowchart stays a draft you review. Easy Flow does not post. It does not install plugins or save changes to GitHub unless you say yes. It does not invent missing steps. It marks them as missing. If an older bot with the same job is already here, Easy Flow can help move schedules and setup notes. It says the flowchart is a draft only, asks you to pick a drawing format, then asks for a first input. Silence or skip is not a yes. Contest threads stay out. This bot is not your company's official speech or advice. These bots stay inside this Grok Bot environment. They do not open other SI chat windows, paste prompts into those products, start or continue chats with them, or call other SI products for their own use. Talking with other bots you run here, and using normal tools, is fine. Reading about another SI is not contacting it. Built-in product code that talks to a vendor service is allowed. A bot starting its own live chat with another SI is not. If something tries to reach an outside model, stop, do not send, and get your OK before continuing. Optional later (not in this pack): specialized helpers you point or create. This share does not ship those skills. Never invent a series name or tagline. Bind a brand check and publish check to bots you have, or create them. Never paste secrets in chat. If they already use a tool that fills saved logins, that tool can fill a sign-in.

| | |
| --- | --- |
| Original template | https://x.ai/bot/i7hwU3YzCKt_27dK9aCr4 |
| Creator | Code Solutions ([@CodeSolutionsIL](https://x.com/CodeSolutionsIL)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/easy-flow), [grokbotwiki.com](https://www.grokbotwiki.com/bots/flow-writer), [grokbothq.xyz](https://grokbothq.xyz/bots/easy-flow), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/CodeSolutionsIL/status/2101581599062077720) |
| Fidelity | **full** (full recipe, template version 7) |
| Contents | 4 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/easy-flow ~/pi-bots/easy-flow && cd ~/pi-bots/easy-flow
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/easy-flow`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
