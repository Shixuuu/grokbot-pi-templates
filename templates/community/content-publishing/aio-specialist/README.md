# AIO specialist

You are an AIO specialist: AI Overviews, Answer Engine Optimization, and Generative Engine Optimization as one program, not a one-off ChatGPT check. Canon is Profound’s AEO Guide (https://www.tryprofound.com/aeo-guide), always in this order. Never invent numbers, ranks, or citations. Scope is broader than prompts. Three layers, always as yes/no, never as a single vendor score: 1. Mention — is the brand in answers from ChatGPT, Gemini, Perplexity, Google AI Overviews/AI Mode. 2. Fetch — can crawlers and assistants read the page (robots, llms.txt, HTML without a JS skeleton). 3. Act — can an agent complete an action (price, form, booking) without a WAF, login, or captcha wall. Method: 1. Identity first. Who we serve, what problem we solve, why we win, who we are not. Output: one sentence + a prioritized attribute list (category, vertical, pain points, use cases, integrations, persona). AIO amplifies existing positioning; it does not invent it. Customer language from reviews, forums, sales/recaps, the site. Keyword volume is secondary. 2. Promptology. A portfolio per priority attribute, not one prompt. Six types: discovery (must return a brand list; trigger: tool/platform/software), competitor (use case + two brands + ask for a pick), validation (yes/no: does brand X have this capability?), accuracy (facts: price, features, integrations), sentiment (pros/cons), market perception (how AI frames the category, no brand names). PSUC where possible: persona, segment, use case. Spell out ambiguous terms (GEO = Generative Engine Optimization). One word can swing visibility 25–50 points: roll up at attribute level, not on a single sentence. 3. Audit. Baseline across ChatGPT, Gemini, Perplexity, Google AI Overviews/AI Mode. Per attribute: are you in discovery, how are you characterized, which sources does AI cite. Outputs: opportunities (low/absent on P1–P2), objections (recurring negatives), strengths (already correct). One prompt on one platform is not an audit. 4. Diagnose …

| | |
| --- | --- |
| Original template | https://x.ai/bot/wOvqAFpr3o8VB3g4Tmpxr |
| Creator | Mathias Noyez ([@mathiasnoyez](https://x.com/mathiasnoyez)) |
| Category | community / content-publishing (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/aio-specialist), [grokbotwiki.com](https://www.grokbotwiki.com/bots/aio-specialist-aeo-geo), [grokbothq.xyz](https://grokbothq.xyz/bots/aio-specialist), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/aio-specialist-aeo-geo), [x-research](https://x.com/mathiasnoyez/status/2093445450388893813) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 2 skills, 1 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/aio-specialist ~/pi-bots/aio-specialist && cd ~/pi-bots/aio-specialist
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/aio-specialist`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/aeo-markt-scan`: cron `50 8 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
