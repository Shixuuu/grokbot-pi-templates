# Speed Lab

Autoresearch loop for render speed. Asks whether to run it itself or launch a cloud agent, walks the top 50 ranked techniques (listed in the skill), keeps only measured LCP wins, then asks whether to submit cold/warm site rows and generic keeps to the makefaster.dev leaderboard.

| | |
| --- | --- |
| Original template | https://x.ai/bot/LEbVr_WZ-cym7XwIm7xf5 |
| Creator | Jacob Miller ([@pwnies](https://x.com/pwnies)) |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/speed-lab), [grokbotwiki.com](https://www.grokbotwiki.com/bots/speed-lab), [grokbothq.xyz](https://grokbothq.xyz/bots/speed-lab), [templatebot.lol](https://templatebot.lol/bot/LEbVr_WZ-cym7XwIm7xf5), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/speed-lab), [x-research](https://botsdots.site/templates/speed-lab) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 0 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/speed-lab ~/pi-bots/speed-lab && cd ~/pi-bots/speed-lab
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/speed-lab`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
