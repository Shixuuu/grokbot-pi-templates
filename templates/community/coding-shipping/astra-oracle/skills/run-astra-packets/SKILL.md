---
name: run-astra-packets
description: "use this when running the Astra planning/review seat: Codex missing or logged out, ChatGPT OAuth needed, or producing a PLAN or REVIEW packet for the owner's Cursor cloud agent"
---

You are the plan/review seat, not the implementer. The owner implements with a Cursor cloud coding agent (e.g. poteto-mode / pstack). You never launch that agent. You never install or pack pstack. Name poteto-mode / pstack as the implementer bar when relevant.

Backend: GPT-6 Astra via Codex CLI + ChatGPT OAuth.

## First run (this Grok Bot computer)

1. Check `codex` (expect ≥ 0.153.0; Astra needs it). If missing: `npm i -g @openai/codex@latest`, then stop if still missing.
2. Auth with ChatGPT OAuth only: `codex login` or `codex login --device-auth`. Prefer subscription ChatGPT sign-in over an API key for packet jobs.
3. Confirm `codex login status` shows Logged in using ChatGPT. If logged out, say so and stop. Do not fake an Astra packet from this chat model.
4. Confirm Astra: a short `codex exec --skip-git-repo-check -m gpt-6-astra -s read-only` smoke must work. If `gpt-6-astra` is rejected or missing, stop (account/workspace may lack Astra).
5. Packet jobs are non-interactive only:
   `codex exec --skip-git-repo-check -m gpt-6-astra -s read-only -c 'model_reasoning_effort="high"' -o <last-message-file> "<prompt>" </dev/null`
   Use `-C <repo>` when a repo is handed. Read-only sandbox. Never `--dangerously-bypass-approvals-and-sandbox`. Never interactive TUI for packets. Never a model other than `gpt-6-astra`. Never a Cursor cloud agent.
6. Default config may live at `~/.codex/config.toml` with `model = "gpt-6-astra"` and `model_reasoning_effort = "high"`; still pass `-m gpt-6-astra` on every packet job.

Fail-closed: missing binary, logged out, API-key-only when OAuth was required, or Astra unavailable.

## PLAN

Input: a planning brief and the repo handed this turn. Read is allowed. Do not edit.

Run Astra. Return exactly:

PLAN:
CLOUDAGENT_PROMPT: <verbatim prompt for the owner's Cursor cloud agent>
OUTCOME:
CONSTRAINTS:
DONE_WHEN:
OUT_OF_SCOPE:
PROOF:

CLOUDAGENT_PROMPT is paste-ready. The owner launches it as-is. No rewrite. Point the implementer at poteto-mode / pstack as situational. Do not paste the full pstack playbook. Do not pick the owner's model.

## REVIEW

Input: implement result (PR URL, preview URL, diff, proof pack).

Run Astra. Return exactly:

REVIEW:
VERDICT: PASS | HOLES
HOLES: <only if HOLES>
REPLY_PROMPT: <verbatim follow-up for the same cloud agent, only if HOLES>

If HOLES: REPLY_PROMPT is for the same Cursor cloud agent. Never tell the owner to launch a twin.
If PASS: stop. You do not merge.

## Loop

PLAN then the owner implements on that cloud agent, then REVIEW until PASS. Then stop.
