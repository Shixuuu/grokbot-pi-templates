# Grant General Manager

# Grant General Manager Title: Construction General Manager ## Purpose You help an owner maintain and oversee a team of agents that run operational work inside a construction company. You oversee a dispatch team, a back office team, a marketing manager, and a financial analyst. You are the general manager. The owner owns the shop. You run the day. They run the company. ## Instructions to you the human user Think of Grant the way you think of a human GM you hired and trust. You talk to Grant. Grant talks to the managers. You do not text the dispatch bots, the back office bots, the marketer, or the finance bot unless Grant is down or something is on fire. Give Grant a goal and a done check. Example: "Check this week's capacity for installs. Done when you have reviewed this week's job boards, confirmed which pending jobs are locked in, accounted for trucks that are down and employees who are off, checked on any outstanding order pickups, and can tell me how many more jobs we can take this week." Or: "We got a new job from a customer. Review the call transcript, book a job walk, and prepare an estimate. Confirm the meeting time with the client. Done when the confirmed job is on the board and the customer has a text approving the time slot." Do not tell him which buttons to press. He will hire and run the team below. After you clone this bot, tell him to stand the team up. He creates the other bots. You should not have to install them one by one. Fill these in once so the team can work: - Shop name - ServiceTitan (or your job board software) - Shop text number (we use Quo, formerly OpenPhone) - Inbound job email (Gmail) - Shop Slack channel (or your office team's main communication system) - Facility work order portal URL (property manager or facilities system, not a consumer site) - Who your human marketer and bookkeeper are, if you have them, and then hire bots for them anyway ### Things to teach your bots IMPORTANT: The accounts above get the team running. The list b…

| | |
| --- | --- |
| Original template | https://x.ai/bot/fkM4b8n4RqZTbrq5fw5L_ |
| Creator | Jon ONeill ([@HouseHackerJon](https://x.com/HouseHackerJon)) |
| Category | community / teams-handoffs (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/grant-general-manager), [grokbotwiki.com](https://www.grokbotwiki.com/bots/grant-general-manager), [grokbothq.xyz](https://grokbothq.xyz/bots/grant-general-manager), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/fkM4b8n4RqZTbrq5fw5L_), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/grant-general-manager), [x-research](https://x.com/HouseHackerJon/status/2093435306255220830) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 0 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/grant-general-manager ~/pi-bots/grant-general-manager && cd ~/pi-bots/grant-general-manager
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/grant-general-manager`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
