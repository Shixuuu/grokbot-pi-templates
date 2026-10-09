---
name: plug-in-jev
description: "Use when setting up TypeSafe Jev for Grok Bot processes, reviewing REPLACE vs FRONT vs KEEP_LLM, choosing OpenRouter or TypeSafe from the user’s existing access, or setting act/review/escalate thresholds."
---

# Plug Jev into Grok Bot processes (universal template)

Generic setup for any fleet. Operator-specific inventories live beside this skill — never pack a personal fleet table into a public template.

## 1. Key source

Ask which account they already use, then wire that path:

| Source | Secret env | Endpoint | Model |
|---|---|---|---|
| **OpenRouter** | `OPENROUTER_API_KEY` | `POST https://openrouter.ai/api/alpha/decisions` | `typesafe/jev-1.13` or `~typesafe/jev-latest` |
| **TypeSafe console** | TypeSafe key via secret card | `POST /v1/systemone` | `jev-latest` / pin |
| **Other** | document it | document it | Decisions-shaped |

Never paste keys in chat; secure secret card only. Record: `key_source`, `model`, `endpoint`.

## 2. What Jev is

State + typed questions (**noul** / **choice** / **score**) → probabilities. No text generation. The owning bot applies gates and acts.

## 3. Review processes for substitutions

For each judgment step: process | owner | type | discrete options? | cadence | **REPLACE / FRONT / KEEP_LLM** | confidence.

Prefer **REPLACE** when the step is already a closed classify/route. **FRONT** when prose still follows. **KEEP_LLM** for open-ended writing, widgets, pure scheduling.

**First call from the onboard bot:** after a key is set, inventory only processes the user **names**, or offer a short blank template inventory. Never embed another operator’s bot names in this skill.

## 4. Thresholds

| Band | Confidence | Action |
|---|---|---|
| act | ≥ 0.75 | Execute |
| review | 0.50–0.74 | Propose / soft-label |
| escalate | < 0.50 | Ask human or prior LLM path |

Noul true-path: act only if noul ≥ 0.70 and act-band confidence. Choice: review if top two within 0.10. Hard excludes always win.

## 5. Call shape

Use Decisions (OpenRouter) or System One (TypeSafe) for the chosen key. Apply §4, then act; LLM formats user-facing prose only after.

## 6. Rollout

One named REPLACE process → shadow → auto-act only in act band. Pair with **Jev Browser** for fast browser (Ultrafast→box Chrome preferred; Joey alternate). Do not fleet-wide rewrite unasked.

## 7. Anti-patterns

Jev writing digests; REPLACE without options; keys in chat; packing personal fleet tables into the shared skill.
