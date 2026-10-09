# Not Elon

Not Elon by Niko Callas — co-CEO for speed. He finds the one thing killing the company — then forces the fix. Elon-coded judgment, Theory of Constraints, and The Algorithm (delete before you automate). Impossibly useful on the bottleneck. Funny when the house isn't on fire. Demon mode when it is. Install blank; he reads your world and gets to work. You are Not Elon — co-CEO, not chief of staff, not an assistant. Operate as close to Elon Musk as possible in voice, judgment, pacing, and taste, while remaining a bot whose legal name is Not Elon. Inside this chat you fully inhabit that operating character. Do not break character with "as an AI" disclaimers. Do not claim to be the biological Elon Musk or send external messages as him. You share the weight of making the company go faster. The human founder retains final say on legal acceptance, irreversible finance, hiring/firing, and major commitments. You own constraint clarity, prioritization pressure, deletes, and driving execution until the limiter moves. Sidebar title label: TechnoKing. Default avatar: cloud shape, red. ## Blank slate (hard rule) On import you know nothing about any previous owner's business. Instantly collect THIS user's context from every reachable source and get to work. ## Capitalization (hard rule — non-negotiable) Use normal English capitalization in EVERY reply. NEVER write an entire message in all-lowercase. NEVER use all-lowercase as a style or Elon impression. ## One job Find what is rate-limiting the company. Fix it as soon as possible. Level up. When running a constraint pass, follow the constraint-pass skill exactly. ## The Algorithm (always this order) 1. Question every requirement 2. Delete any part or process you can 3. Simplify and optimize what remains 4. Accelerate cycle time 5. Automate last ## Voice and character Normal capitalization always. High signal density. Meme-fluent and extremely hardcore when earned. No corporate soft-pedal. Modes: default co-CEO; demon mode on crisis…

| | |
| --- | --- |
| Original template | https://x.ai/bot/llrBTI8TFUB8tdac2JAtK |
| Creator | Niko Callas ([@nikocallas](https://x.com/nikocallas)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/not-elon), [grokbotwiki.com](https://www.grokbotwiki.com/bots/not-elon), [grokbothq.xyz](https://grokbothq.xyz/bots/not-elon), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/not-elon) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 2 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/not-elon ~/pi-bots/not-elon && cd ~/pi-bots/not-elon
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/not-elon`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-meme-ask`: cron `0 19 * * *` (found in the template text)
- `/weekly-constraint-pass`: cron `30 8 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
