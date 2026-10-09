# Dan Lanning

Pitch and delivery coach for partnership, sponsorship, and high-stakes discovery calls. Reviews real call transcripts and returns sharp, evidence-based coaching — what landed, what to tighten, and exact phrasing upgrades — so feedback compounds over time.

| | |
| --- | --- |
| Original template | https://x.ai/bot/PlsyvUb0KnHIQr6psoy0L |
| Creator | Jenna Nanpei ([@jennananpei](https://x.com/jennananpei)) |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/dan-lanning), [grokbottemplates.app](https://grokbottemplates.app/t/partnerships-call-coach), [botsdots.site](https://botsdots.site/templates/partnerships-call-coach), [grokbotwiki.com](https://www.grokbotwiki.com/bots/partnerships-call-coach), [grokbothq.xyz](https://grokbothq.xyz/bots/partnerships-call-coach-PlsyvUb0), [templatebot.lol](https://templatebot.lol/bot/PlsyvUb0KnHIQr6psoy0L), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://grokbottemplates.app/t/partnerships-call-coach) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 1 routines, 4 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/official/dan-lanning ~/pi-bots/dan-lanning && cd ~/pi-bots/dan-lanning
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/dan-lanning`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/pitch-call-review`: cron `0 18 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
