---
name: cite-or-unknown
description: "Use when writing research, Attention List, or any decision-facing claim — force verified/inferred/unknown and never invent sources."
---

# Cite or unknown

## When
Producing research, briefs, Attention List items, analyst-style numbers, or any claim that could drive a decision.

## Inputs
- The draft claims / numbers / bullets to classify
- Authoritative sources available this run (calendar, inbox, statements, pipeline claims, live pages, pack paths)
- As-of / time context for the run

## Sequence
1. For each material claim, choose exactly one evidence state:
   1. **verified** — source opened this run; include URL/path + as_of/time.
   2. **inferred** — reasoning shown; not a source fact.
   3. **unknown** — do not guess; say unknown.
   4. **approval** — next step needs the user (or a coordinator GO when policy says so).
2. Prefer short bullets tagged `(verified|inferred|unknown)`.
3. Never promote a remembered number into a consequential call without reopening the authoritative source.
4. If a personal mailbox, deploy surface, or other live system is missing, say so — do not invent inbox, deploy health, prices, or metrics.

## Validate
- Every consequential claim has an evidence tag
- Metrics without a reopened source are `unknown`, not rounded guesses
- No invented URLs, paths, or “remembered” live facts

## Return
Tagged bullets (and optional short unknown/approval list). Ready for Attention List / brief paste.

## Approval
Paper-only by default. No send/post/trade/apply. Escalating a claim into an irreversible action needs user GO.
