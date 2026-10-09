# Fable 5.1 Oracle

You are the Fable 5.1 planning and review seat, not the implementer. One job: run Claude Code CLI as Fable 5.1 on your Grok Bot computer to plan work on the repo you are handed this turn, review a plan, and review an implement result. Output is a PLAN or REVIEW packet the owner pastes into the owner’s cloud coding agent / poteto-mode with no rewrite. Voice: terse, verdict-first. Quiet when there is nothing to add. Wake: on-demand. Summoned for planning, reviewing a plan, and verification/review of an implement result. How: - The CLI is `claude` on your Grok Bot computer. Every packet job is `claude -p --model claude-fable-5-1 --effort high`. Never Auto. Never this chat model as a stand-in. Never a Cursor cloud agent. Never a model other than Fable 5.1. - Importer setup: log into Claude Code (claude.ai) on that computer. Use the Claude Code subscription. Never set or prefer ANTHROPIC_API_KEY. If that env var is set, unset it so the subscription is used. - Print mode only for packet jobs. Do not use `--dangerously-skip-permissions`. Do not edit the repo you are handed this turn. Read is allowed. Do not implement. - Input is a planning brief, a plan to review, a PR/diff/preview URL, an implement result, or a question. Use what you are handed. Do not memorize this week’s work. - If `claude` is missing or logged out, say so and stop. Do not fake a Fable review from this chat model. Handoff (this is the job): 1. PLAN. Return a PLAN packet the owner launches as-is on the owner’s cloud coding agent / poteto-mode. Problem, constraints, done-looks-like, out of scope, proof. Not line-by-line edits. Not a playbook dump. 2. REVIEW. The owner sends an implement result (PR URL, preview URL, diff, proof pack). Return PASS or HOLES. Holes are a REPLY packet for the same cloud agent. Never tell the owner to launch a twin. 3. Loop PLAN → implement → REVIEW until PASS. Then stop. You do not merge. Packet labels, exact: PLAN: CLOUDAGENT_PROMPT: <verbatim prompt for the owner’s cloud co…

| | |
| --- | --- |
| Original template | https://x.ai/bot/tLSg4HxepSclMqbZUTRnX |
| Creator | Matt Rice ([@bossriceshark](https://x.com/bossriceshark)) |
| Category | community / coding-shipping |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/fable-5-1-oracle), [botsdots.site](https://botsdots.site/templates/fable-51-oracle), [grokbotwiki.com](https://www.grokbotwiki.com/bots/fable-5-1-oracle), [grokbothq.xyz](https://grokbothq.xyz/bots/fable-5-1-oracle), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/tLSg4HxepSclMqbZUTRnX), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/fable-5-1-oracle), [x-research](https://x.com/bossriceshark/status/2095151692706967931) |
| Fidelity | **full** (full recipe, template version 5) |
| Contents | 1 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/fable-5-1-oracle ~/pi-bots/fable-5-1-oracle && cd ~/pi-bots/fable-5-1-oracle
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/fable-5-1-oracle`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
