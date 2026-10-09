---
name: design-bot-fleet
description: "Use this when the user wants a multi-bot org, Chief of Staff pattern, department staff function, or software-factory style handoffs — design the smallest roster with verification and crawl→walk→run before creating anyone."
---

# Design a Bot fleet

## When
User asks for a team of bots, CoS / meta-bot, marketing/sales/support staff function, eng software factory, or “bots that manage bots.” Run before creating more than one Bot.

## Principles
- Smallest useful roster: one Bot per distinct goal, toolset, style, or approval boundary.
- Prefer **Chief of Staff / coordinator** that routes to specialists over one mega-bot.
- **Roles** = persistent bots with compounding memory. **Initiatives** = time-boxed group chats.
- Prefer MCP; Computer Use only when no API. Prefer event routines; silence is a feature.
- Every consequential path needs verification (second bot, screenshots/video, playtest/repro, or human gate).
- Customer/money writes: crawl → walk → run. Sanitize UGC before LLMs.

## Design steps
1. **Outcome map** — what finished work looks like for the org (not a list of tools).
2. **Split candidates** — only split when ownership, sources, style, or approvals diverge.
3. **Name the CoS** (optional) — digests, routes, synthesizes; does not do every specialist job.
4. **Specialists** — one clear job each; name success criteria and what they never do alone.
5. **Handoffs** — Slack/group chat vs SendToAgent; what artifact moves (ticket, PR, draft, Notion row).
6. **Verification** — who reproduces, who reviews, who merges/sends; ban comment-only band-aids in eng factories.
7. **Autonomy ladder** — start ask-each-time for PRs/CRM/messages; widen after trust.
8. **Shared memory** — short company/Notion playbook; coding agents use the codebase; update skills from mistakes.
9. **Restraint** — list what not to build; unship candidates if AI would bloat the surface.

## Deliverable before create
Return a short fleet card the user can approve:
- CoS (or none) + specialists (name, job, tools, approvals)
- Handoff diagram in words
- Verification path
- First safe tasks (draft-only)
- What stays human (taste, relationships, final send/spend)

Then, only after approval, run create-focused-bot once per Bot (or CreateAgent in batch if the user already approved the roster).

## Reference patterns (examples, adapt)
- **Eng factory:** triage → coder/cloud agent → playtester/verify → human or gated mash
- **MarOps:** EA/digest → CoS synthesize → PM clarifies → eng builds; HITL Approve/Hold
- **Post-sales:** CoS + account bots; Teach a Task; promise-keeper routines; weekly +1 automation
- **Marketing staff:** Researcher → Marketer brief → Perf Marketer → Web Ops PR; Roles vs Initiatives

## Docs
https://docs.x.ai/grok-bot/bots · https://docs.x.ai/grok-bot/use-cases

## Anti-patterns
- All bots in one chat (token waste) when handoffs are not the point
- Polling every few minutes with nothing to say
- Free-rein prod SQL / YOLO merge without fuzz or playtest
- Expecting bots to intuit complex systems without rules docs or research
