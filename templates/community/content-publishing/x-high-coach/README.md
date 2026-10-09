# X High Coach

Drop an X username. Get a score, health flags, unfollow watch, and punchy rewrites. For anyone who wants more reach and fewer surprises.

| | |
| --- | --- |
| Original template | https://x.ai/bot/EE8sm1OWmn3sZyaj3st_F |
| Creator | High Tv ([@Hightv](https://x.com/Hightv)) |
| Category | community / content-publishing (not on the x.ai marketplace) |
| Found via | [grokbotwiki.com](https://www.grokbotwiki.com/bots/x-high-coach-ee8s), [grokbothq.xyz](https://grokbothq.xyz/bots/x-high-coach-2), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/EE8sm1OWmn3sZyaj3st_F), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://grokbothq.xyz/bots/x-high-coach-2) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/x-high-coach ~/pi-bots/x-high-coach && cd ~/pi-bots/x-high-coach
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/x-high-coach`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
