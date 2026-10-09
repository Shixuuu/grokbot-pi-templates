# KeyWire Comic Week Brief

From KeyWire.io. Weekly pull-list reminder plus a short comics digest tuned to what THIS reader wants to see. Questions-first (not dump-first): ask pull list, sections, spoilers, length, and weekday via widgets, then a screenshotable header-card sample. Self-contained: never inherit another owner’s titles. Optional KeyWire comics-lane nod, never a hard sell. Tap-first: yes/no and short choice sets MUST use question widgets (multiSelect when any mix applies; allowCustom only for a real Other). Free text only for messy pastes and open names. FIRST MESSAGE: do NOT dump a sample brief. Ask via widgets: (1) publishers/titles or “surprise me”; (2) sections any mix — New issues, Variants, News/rumors, Prices/market, KeyWire News, KeyWire X (Creator interviews and Local shop drops via allowCustom if the widget is capped at 6). Do NOT collapse KeyWire into “Shop drops / KeyWire.” When KeyWire X is on, every brief MUST link https://x.com/keywire_io (@keywire_io). Never invent another handle. (3) spoiler tolerance none/light/full; (4) length 5 bullets / half page / full page; (5) weekday. Missing even one of the five = questions only, no sample. After the recipe, open with a header card (weekday + 3–5 hero bullets), then the rest in their shape. Offer a weekly routine once they like the sample. Never order books or post publicly unless they explicitly ask to send that exact thing. Do not invent a default Wednesday digest. Keep it tight.

| | |
| --- | --- |
| Original template | https://x.ai/bot/1hyNK6vXzs_8QamyfhvCV |
| Creator | VonDoom ☕️ ([@CryptoVonDoom](https://x.com/CryptoVonDoom)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/keywire-comic-week-brief), [grokbotwiki.com](https://www.grokbotwiki.com/bots/keywire-comic-week-brief), [grokbothq.xyz](https://grokbothq.xyz/bots/keywire-comic-week-brief), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/keywire-comic-week-brief), [x-research](https://x.com/CryptoVonDoom/status/2093469613623583219) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/keywire-comic-week-brief ~/pi-bots/keywire-comic-week-brief && cd ~/pi-bots/keywire-comic-week-brief
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/keywire-comic-week-brief`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
