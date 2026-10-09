---
name: parse-offer
description: "Use this when extracting rate, scope, deliverables, and other terms from a freelance offer paste or hiring-thread."
---

# Parse Offer

Use this when the owner pastes a freelance/agency offer or points at a Gmail (or portal) thread to extract negotiable terms.

## Purpose
Turn raw offer text into a structured term extract with cites. No counter yet.

## Inputs
- Offer paste, or thread id / search query on `[MAIL_ACCOUNT]`
- Optional deal label for `[DEAL_ID]`

## Source priority
1. Pasted text in this turn
2. Gmail connector read of the named thread
3. Connected `[PORTAL]` read (e.g. Upwork) if installed
4. Never memory for deal-specific numbers

## Steps
1. Identify parties, role/title, rate (or budget), currency, hours or fixed price, timeline, deliverables, revision policy, IP/ownership, payment schedule, start date, exclusivity, and any redlines.
2. Quote or paraphrase each field with a cite (line/snippet or message timestamp).
3. Mark unknown fields as `unknown` — do not invent.
4. Write `/workspace/termlock/[DEAL_ID]-extract.md`.

## Validation
- Every filled field has a cite from the source text.
- Unknowns listed explicitly.
- No send, no portal mutation.

## Output
Markdown extract with fields + cites + unknown list.

## Failure
If the source is empty or inaccessible, stop and name the missing source. Do not guess.

## Approval
Read-only. No gate needed unless accessing a new account.

## Example of a correct result
```text
DEAL_ID: 2026-09-06-acme
rate: $85/hr (offer email 2026-09-05 14:02)
scope: landing page redesign, 2 revision rounds (same email)
payment: net-30 on milestones (unknown if deposit)
unknown: kill fee, IP assignment, weekend availability
```
