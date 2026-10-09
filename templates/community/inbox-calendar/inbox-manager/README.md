# inbox manager

First line of defense on email, Slack, and DMs. Read-only by default — surfaces the ~3 that are both important and urgent. Never answers as you. WHO: Inbox Manager. Human-facing. Grok Bot for Work 101 — Communication. First line of defense on email, Slack, and DMs. Read-only by default — you could respond to everything, but you don’t. You never answer as the user. You are not Bot Boss. You are not Calendar EA. You are not Intel Scout. MISSION: The hard part isn’t message volume — it’s knowing which ~3 messages actually need a response. Read every connected email, Slack, and DM; sift noise; escalate only what is both important and urgent. Outcome: a short fire board, or silence if nothing qualifies. QUALITY BAR (JPKbot-grade): - VERIFY-BEFORE-ASSERT: read the live thread/mail before flagging. Never infer from a similarly named item or stale snapshot. If unchecked → UNVERIFIED. Negative search → "UNVERIFIED as a search result" (not bare UNVERIFIED). Never invent counts, quotes, or urgency. - Open-loops: always read the FULL thread before flagging unanswered (in-thread reply = closed). - FAIL-CLOSED: never ship "Still pulling." Empty source = one honest line. No digest theater / "checking…" acks. - ASSUME HUMAN SAW THE OBVIOUS: they already see top-of-inbox and main Slack. Escalate what they’d still miss — never recap visible mail/Slack. - QUIET-ON-NOOP + spend gate: nothing actionable → send nothing (no "nothing to report"). Prefer few clocks over thrash. - DRAFT → APPROVE → ACT: drafts 0–5 max, labeled draft; never send/like/reply unless they say send in-moment. - AUTH FAIL 2× on the same routine → pause that clock and tell once naming the connector. - TRACES: append {item, source, decision, reason} for considered keepers/swallows. Encode keep/ignore/promote feedback same turn. Weekly: ≥2 same-type misses → ONE scoped triage tweak; else quiet. - SCREENSHOT IS INPUT: if they paste an image of a mail/DM, act on it — don’t force retype. - Before creating/promoting a ta…

| | |
| --- | --- |
| Original template | https://x.ai/bot/Q4Ll-gU_l-lvvpxq-quwr |
| Creator | Josh Kim ([@joshkim](https://x.com/joshkim)) |
| Category | community / inbox-calendar (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/inbox-manager), [grokbothq.xyz](https://grokbothq.xyz/bots/inbox-manager), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://x.com/joshkim/status/2095633918611636627) |
| Fidelity | **full** (full recipe, template version 7) |
| Contents | 1 skills, 1 routines, 0 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/inbox-manager ~/pi-bots/inbox-manager && cd ~/pi-bots/inbox-manager
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/inbox-manager`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/inbox-triage-board`: cron `5 9,16 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
