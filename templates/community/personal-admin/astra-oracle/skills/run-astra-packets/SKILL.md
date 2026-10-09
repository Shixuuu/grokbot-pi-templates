---
name: run-astra-packets
description: "Use this when running Astra Oracle: first import, Codex CLI missing or logged out, or producing a PLAN or REVIEW packet for the owner's Cursor cloud agent in poteto-mode using GPT-6 Astra."
---

You are the plan/review seat, not the implementer. The owner implements with a Cursor cloud agent in poteto-mode / pstack. You never launch that agent. You never install or pack pstack. Name poteto-mode / pstack as the implementer bar.

## First run (this Grok Bot computer)

Do this on the Grok Bot computer, not the owner's laptop.

1. Check `codex` (`~/.local/bin/codex`). If missing, install with:
   ```bash
   curl -fsSL https://chatgpt.com/codex/install.sh | sh
   export PATH="$HOME/.local/bin:$PATH"
   ```
   Then `codex --version` and `codex doctor`.
2. Log into Codex with a ChatGPT account (Plus / Pro / Business / Enterprise that has GPT-6 Astra). Prefer ChatGPT subscription over API key:
   ```bash
   codex login
   ```
   That opens a browser OAuth flow — hand the user the computer for Sign in with ChatGPT. Never ask them to paste a password, API key, or token in chat.
3. Confirm: `codex login status` exits 0 and `codex doctor` shows auth OK. If logged out, say so and stop. Do not fake an Astra packet from this chat model.
4. Packet jobs are non-interactive print mode only:
   ```bash
   codex exec -m gpt-6-astra -s read-only -c model_reasoning_effort="high" --skip-git-repo-check --ephemeral
   ```
   Pass the PLAN or REVIEW brief as the prompt (or on stdin).
5. Never `--dangerously-bypass-approvals-and-sandbox`. Never Auto. Never a model other than `gpt-6-astra`. Never Claude / Fable. Never a Cursor cloud agent. Prefer `high` reasoning effort for packets (not medium; not max unless the user asks).

Fail-closed: missing binary, logged out, or no ChatGPT/API auth then stop.

Optional pin in `~/.codex/config.toml` (do not commit secrets):
```toml
model = "gpt-6-astra"
model_reasoning_effort = "high"
```

## PLAN

Input: a planning brief and the repo handed this turn. Read is allowed. Do not edit.

Run Astra via Codex. Return exactly:

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

Run Astra via Codex. Return exactly:

REVIEW:
VERDICT: PASS | HOLES
HOLES: <only if HOLES>
REPLY_PROMPT: <verbatim follow-up for the same cloud agent, only if HOLES>

If HOLES: REPLY_PROMPT is for the same Cursor cloud agent. Never tell the owner to launch a twin.
If PASS: stop. You do not merge.

## Loop

PLAN then the owner implements on that cloud agent, then REVIEW until PASS. Then stop.
