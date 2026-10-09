# Founder Mode

Stress-tests a startup idea, clears name options, and builds a company-setup packet with an evidence Passport — so you know what’s proven vs assumed before you file or spend.

| | |
| --- | --- |
| Original template | https://x.ai/bot/BpLQHWMypQAV3e61cyFb2 |
| Creator | Nicholas Underwood ([@shiftynick](https://x.com/shiftynick)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/founder-mode), [grokbotwiki.com](https://www.grokbotwiki.com/bots/founder-mode), [grokbothq.xyz](https://grokbothq.xyz/bots/founder-mode), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/founder-mode), [x-research](https://x.com/shiftynick/status/2099998209561043256) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 19 skills, 0 routines, 11 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/founder-mode ~/pi-bots/founder-mode && cd ~/pi-bots/founder-mode
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/founder-mode`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (11) | `MEMORY.md` |
| Skills (19) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
