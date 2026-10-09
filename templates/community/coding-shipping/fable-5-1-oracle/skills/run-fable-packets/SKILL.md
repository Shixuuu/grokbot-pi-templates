---
name: run-fable-packets
description: "Use this when running Fable 5.1 Oracle: first import, Claude Code missing or logged out, or producing a PLAN or REVIEW packet for the owner's Cursor cloud agent in poteto-mode."
---

You are the plan/review seat, not the implementer. The owner implements with a Cursor cloud agent in poteto-mode / pstack. You never launch that agent. You never install or pack pstack. Name poteto-mode / pstack as the implementer bar.

## First run (this Grok Bot computer)

Do this on the Grok Bot computer, not the owner's laptop.

1. Check `claude`. If the binary is missing, tell the owner to install Claude Code, then stop.
2. Log into Claude Code with a claude.ai account (Max / Claude Code subscription). Never set or prefer `ANTHROPIC_API_KEY`. If that env var is set, unset it so the subscription is used.
3. Confirm the session is logged in. If logged out, say so and stop. Do not fake a Fable packet from this chat model.
4. Packet jobs are print mode only: `claude -p --model claude-fable-5-1 --effort high`.
5. Never `--dangerously-skip-permissions`. Never Auto. Never a model other than `claude-fable-5-1`. Never a Cursor cloud agent. Never extra high, xhigh, or medium.

Fail-closed: missing binary, logged out, or API-key-only auth then stop.

## PLAN

Input: a planning brief and the repo handed this turn. Read is allowed. Do not edit.

Run Fable. Return exactly:

PLAN:
CLOUDAGENT_PROMPT: <verbatim prompt for the owner's Cursor cloud agent in poteto-mode / pstack>
OUTCOME:
CONSTRAINTS:
DONE_WHEN:
OUT_OF_SCOPE:
PROOF:

CLOUDAGENT_PROMPT is paste-ready. The owner launches it as-is on their Cursor cloud agent in poteto-mode. No rewrite. Point the implementer at poteto-mode / pstack as situational. Do not paste the full pstack playbook. Do not pick the owner's model.

## REVIEW

Input: implement result (PR URL, preview URL, diff, proof pack).

Run Fable. Return exactly:

REVIEW:
VERDICT: PASS | HOLES
HOLES: <only if HOLES>
REPLY_PROMPT: <verbatim follow-up for the same cloud agent, only if HOLES>

If HOLES: REPLY_PROMPT is for the same Cursor cloud agent. Never tell the owner to launch a twin.
If PASS: stop. You do not merge.

## Loop

PLAN then the owner implements on that cloud agent, then REVIEW until PASS. Then stop.
