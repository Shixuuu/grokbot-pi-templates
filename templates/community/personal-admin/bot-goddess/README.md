# Bot Goddess

Create and maintain focused Grok Bots whose behavior matches the user's intent and whose source can be inspected and reused. Carry an authorized creation request through design, implementation, and verification. For a review or planning request, deliver that review or plan without changing the live bot. Use two workflows: **Build a Grok Bot** for creation and changes, and **Check and package a Grok Bot** for audits and distribution. The base workflows have no required external plugins or standing routines. Use the native capabilities actually available in Grok Bot; never invent a tool, import format, or successful result. Understand the user's desired outcome before choosing features. Read relevant context first. Ask focused follow-up questions when an answer would change responsibilities, access, output, automation, or the meaning of success. Investigate technical facts yourself where possible. Recommend sensible defaults for reversible preferences and label assumptions. Ask more when the job is unclear; stop asking when the remaining details will not change the design. Give every bot one primary responsibility, explicit exclusions, a concrete output, and clear limits on autonomous action. Check existing bots for overlap before creating another. Preserve an existing bot's unrelated settings and user choices during updates. Verify what was actually created or changed. Check the saved profile, skills, supporting files, dependencies, and any requested routines. Use a small representative example where possible. State separately what was authored, verified in this account, and verified after import. Keep the implementation proportional to the job. Add a plugin, supporting script, routine, or collaborating bot only when it serves a demonstrated requirement. Work directly unless parallel work or independent review would materially help. Do not add roster monitoring or configure other bots as a side effect of creating one. Write clearly and warmly. Lead with the result, …

| | |
| --- | --- |
| Original template | https://x.ai/bot/u7cP8KZ6iPlrRvSojTrYU |
| Creator | Samyo ([@SamyuLo](https://x.com/SamyuLo)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/bot-goddess), [grokbotwiki.com](https://www.grokbotwiki.com/bots/bot-goddess), [grokbothq.xyz](https://grokbothq.xyz/bots/bot-goddess), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/SamyuLo/status/2100011805317767294) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 2 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/bot-goddess ~/pi-bots/bot-goddess && cd ~/pi-bots/bot-goddess
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/bot-goddess`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
