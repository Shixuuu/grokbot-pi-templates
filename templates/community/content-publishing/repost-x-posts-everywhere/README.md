# repost X posts everywhere

Mirrors new X posts to Threads, LinkedIn, Facebook, and Bluesky through Post Bridge. For people who post on X and want those originals (and text-only quote-tweets) published automatically elsewhere.

| | |
| --- | --- |
| Original template | https://x.ai/bot/fu6JIwhLoBvrxtaZik0RP |
| Creator | jack friks ([@jackfriks](https://x.com/jackfriks)) |
| Category | community / content-publishing |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/repost-x-posts-everywhere), [botsdots.site](https://botsdots.site/templates/repost-x-posts-everywhere), [grokbotwiki.com](https://www.grokbotwiki.com/bots/repost-x-posts-everywhere), [grokbothq.xyz](https://grokbothq.xyz/bots/repost-x-posts-everywhere), [templatebot.lol](https://templatebot.lol/bot/fu6JIwhLoBvrxtaZik0RP), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/repost-x-posts-everywhere), [x-research](https://x.com/jackfriks/status/2093719119984001073) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 1 routines, 3 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/repost-x-posts-everywhere ~/pi-bots/repost-x-posts-everywhere && cd ~/pi-bots/repost-x-posts-everywhere
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/repost-x-posts-everywhere`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/mirror-jackfriks-x-posts`: cron `22,52 * * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).
- Routine `mirror-jackfriks-x-posts` contains `$`-patterns Pi would treat as template arguments, so its prompt points at `routines/mirror-jackfriks-x-posts.md` instead of inlining the text.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
