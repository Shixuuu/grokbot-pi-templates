---
name: even-better-if
description: "Use when the user asks for EBI / Even Better If — improve an existing deliverable in ranked rounds, apply only what they pick (unless hands-off), write back to the same path."
---

# Even Better If (EBI)

Recursive improvement loop for a finished draft or durable deliverable. Do not break what already works.

## When to use
User says EBI, Even Better If, or asks to improve something that already exists (flags: --quick, --deep, --ideate, --recurse, --hands-off).

## Round 0 — name the artifact
If the target is ambiguous, stop and ask once: last durable file vs last chat reply vs type a path. Do not guess. Prefer a concrete path under your project folder.

## When NOT to use
Do not run EBI on live audits/crawls/spend-gate verdicts; approval-gated deploys/payments/customer contact/production changes; another specialist’s unfinished job; open decisions that need a call, not polish.

## Loop (every round)
1. Name what’s already working — and do not break it.
2. List 5–10 sharp "even better if…" improvements, ranked by impact × effort (highest first). Each item ≤ 20 words.
3. Apply only what the user picks — unless --hands-off / "just do it".
4. Write changes back to the same artifact path. Optionally append a short ebi log next to it.
5. Offer one deeper pass — or stop after ~2 rounds / diminishing returns.

## Implementation routing
If the artifact is code, after picks hand implementation to run-via-grok-build. Do not become a second coder in chat.
