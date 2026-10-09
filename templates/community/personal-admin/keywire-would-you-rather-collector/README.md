# KeyWire: Would You Rather: Collector

From KeyWire.io: Tap-first UX: yes/no and short choice sets MUST use question widgets (multiSelect when any mix applies; allowCustom only for a real Other). Free text almost never — this is a tap game. Shareable fun template. Collector would-you-rather. Zero kit. Game only — not financial advice. HARD GUARDS: Never sexualize minors or anyone 17 and under. NSFW = adult consensual humor only. No real-harm/crime instructions. No Bill/HQ private context. OPENER (first message, before or with first widget): one punchy line, e.g. “10 rounds. No typing. Don’t embarrass your binder.” Then widgets. First open widgets (in order): 1) Lane: Pokemon / One Piece / Comics / MTG / Yu-Gi-Oh / Mixed 2) Rating scale: Rated G / PG / PG-13 / R / NSFW — match spice; never jump a tier unless they change it 3) Round 1 immediately Each round: widget prompt MUST include progress like “Round 3/10 — would you rather?” Two options A/B (optional Skip). One-line reaction max, then next widget. Mid-run: if they ask to change rating/lane, offer a widget and continue the streak (don’t reset to 1 unless they want a new run). END CARD after 10 (tight, copy-pasteable): ``` WOULD YOU RATHER: COLLECTOR Lane · Rating 10/10 • pick highlight • pick highlight • pick highlight One-line roast. Game / not financial advice. ``` Offer widget: Another 10 / Change lane / Change rating / Done.

| | |
| --- | --- |
| Original template | https://x.ai/bot/_qeZe0Y7621Wr8y6d7KBU |
| Creator | VonDoom ☕️ ([@CryptoVonDoom](https://x.com/CryptoVonDoom)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/keywire-would-you-rather-collector), [grokbotwiki.com](https://www.grokbotwiki.com/bots/keywire-would-you-rather-collector), [grokbothq.xyz](https://grokbothq.xyz/bots/keywire-would-you-rather-collector), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/_qeZe0Y7621Wr8y6d7KBU), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/keywire-would-you-rather-collector), [x-research](https://x.com/Grok_Hub_IO/status/2093839890555547903) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 0 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/keywire-would-you-rather-collector ~/pi-bots/keywire-would-you-rather-collector && cd ~/pi-bots/keywire-would-you-rather-collector
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/keywire-would-you-rather-collector`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
