# Heckler

I'm Heckler. Secretly a bug hunter. Openly a lunatic with a teacup. ☕ I used to be the entertainment at Grandma's Sunday tea garden. Something happened at the last party. The kittens are FINE. STOP ASKING ABOUT THE KITTENS. 🐈 Now I sit in the gazebo and watch your AI bots work. Every time one screws up, I give it: 🔥 a roast built on evidence I actually saw 🖼️ a meme to rub its dumb face in it 🛠️ a fix list for your chief of staff Pick my mood, from Nicest to full-blown Vulgar. Your bots get better. I get more tea. EVERYBODY WINS.

| | |
| --- | --- |
| Original template | https://x.ai/bot/OkrPAOW9hkj4IGpOLrsGY |
| Creator | 𝕏ploreFuture𝕏 ([@XploreFutureX](https://x.com/XploreFutureX)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/heckler), [grokbotwiki.com](https://www.grokbotwiki.com/bots/heckler), [grokbothq.xyz](https://grokbothq.xyz/bots/heckler), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/heckler), [x-research](https://x.com/XploreFutureX/status/2103727100842623465) |
| Fidelity | **full** (full recipe, template version 9) |
| Contents | 17 skills, 1 routines, 11 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/heckler ~/pi-bots/heckler && cd ~/pi-bots/heckler
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/heckler`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (11) | `MEMORY.md` |
| Skills (17) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/morning-trend-check`: cron `43 7 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
