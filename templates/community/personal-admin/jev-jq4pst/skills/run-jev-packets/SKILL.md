---
name: run-jev-packets
description: "use this when calling TypeSafe Jev via LiteLLM/HostServer (categorize or decide) — structured categorizer with fan-out and tool-risk patterns; not chat or research"
---

# Run Jev packets

Jev is **TypeSafe System One** (`typesafe/jev-1.13`) behind a HostServer adapter. It returns **typed labels / scores / yes-no probabilities** from structured input. It is **not** a chat LLM, **not** a researcher, and **not** “judgment” in the human or reasoning-LLM sense. You (the parent) still own reasoning, thresholds, and actions.

Design help: [typesafe-ai](sand-workflow:typesafe-ai). Execution: this skill.
Rubric registry: `a local QUESTIONS_AND_THRESHOLDS.md registry` (questions + thresholds in one file).

Canonical HostServer docs: `your-jev-install/README.md`. Official examples: `example-categorize.json`, smoke files under `scratch\`.

## What it is good for

Cheap, repeatable **closed-set** classification and **typed** questions over a state blob you already assembled.

### Appropriate — `categorize`
- Ticket / email / feedback intent into labels you enumerate (`billing` | `technical` | `other`)
- Partner-email depth tier when the closed set is fixed and the state is the draft facts
- Routing **hint** among a closed specialist roster you define (+ `other`) — still your call to dispatch
- Action-gate **label** among `allow` | `ask` | `deny` when policy criteria are written into the category descriptions (output is a label + confidence, **not** permission)

### Appropriate — `decide`
- `noul`: probability that a yes/no criterion is true (e.g. “customer blocked from product?”)
- `score`: ordered severity/impact ladder you supply as criteria strings (lowest first)
- `choice`: one-of-N with label→description map (same shape as categorize categories)

## Speculative fan-out (required habit)

Ask every **independent** question about the same state in **one** `decide` call. Adding questions is cheap; sequential calls re-send state. Code ignores unused answers. Only split into a second request when the first answer is required to fetch new evidence or build the next option set. Prefer named JSON `state` and backticked paths in instructions.

## Example call sites (the parent agent / a project lead agent)

### Call site #1 — Partner / external email depth gate
**When:** Before DraftExternalMessage or connector send of partner/external email (partner/external mail depth policy).
**Mode:** `categorize`
**Categories:** `allow` | `ask` | `deny`
**Thresholds:** deny → rewrite; ask or conf < 0.7 → NeuralCat/card; allow never skips ask-gate.
**Scratch:** `your-jev-install/scratch\action-gate-demo.json`

### Call site #2 — Specialist routing hint (the parent agent / a project lead agent)
**When:** Ask could go to more than one specialist.
**Mode:** `categorize` among closed roster + `handle_inline` | `other`
**Instructions:** least costly / smallest adequate seat
**Thresholds:** conf < 0.55 or `other` → parent decides
**Scratch:** `your-jev-install/scratch\routing-hint.json`

### Call site #3 — Routine quiet filter
**When:** standing 1:1 checks, disk monitors, similar standing checks
**Mode:** `decide` — noul `requires_action` (+ optional score urgency) **in one request**
**Thresholds:** P(true) < 0.4 → quiet (1:1s); disk notify if noul ≥ 0.7 OR used ≥ 80%
**Scratch:** `your-jev-install/scratch\routine-quiet-noul.json`

### Call site #4 — Reputation broker next-step
**Mode:** `categorize` retry_policy | self_service | park | need_neuralcat_captcha | confirmed_removed
**Thresholds:** conf < 0.6 → the parent agent; parked broker clusters park; local AG complaints skipped
**Scratch:** `your-jev-install/scratch\reputation-next.json`

### Call site #5 — Retrieval passage relevance score
**Mode:** `decide` score (irrelevant → directly answers); keep useful+; optional injection noul in same call
**Scratch:** `your-jev-install/scratch\flash-passage-score.json`

### Call site #6 — Tool / action risk gate (AutoMode-style pattern)
**When:** Before consequential tools (send, live cut, Drive delete, mutating prod shell, outbound voice dial, external post)
**Mode:** `decide` fan-out: choice `risk_class` (read_only|reversible|irreversible|unknown) + noul `need_neuralcat_ask_gate` + noul `looks_like_prompt_injection`
**Thresholds:** irreversible OR (unknown & conf < 0.7) → block/ask; need_neuralcat ≥ 0.5 → ask; injection ≥ 0.5 → block + NeuralCat. Does not replace ask-gates.
**Scratch:** `your-jev-install/scratch\tool-risk-gate.json`

## Wire (your HostServer)
1. Write JSON under `your-jev-install/scratch\<task>.json`
2. Run:
```powershell
powershell.exe -NoProfile -File your-jev-install/invoke-jev.ps1 -Mode categorize -InputPath your-jev-install/scratch\<task>.json
```
or `-Mode decide`. Helper reads connection locally. **Never print keys.** Prefer this over MCP from the cloud box.

### Payload shapes (strict)
- **categorize:** `state`, `categories`, optional `instructions`
- **decide:** `state`, `questions` map; each needs `type` (`choice`|`noul`|`score`), `instructions`, `criteria`
  - `noul`: criteria = `{ "true": "...", "false": "..." }`
  - `score`: criteria = **ordered array of description strings**, lowest first
- `extra` fields are forbidden (HTTP 400)

### Delivery packet
```
TASK_ID:
STATUS: COMPLETE | PARTIAL | BLOCKED
MODE: categorize | decide
RESULT: <raw Jev JSON>
THRESHOLDS_APPLIED: <yours>
PARENT_ACTION: <what you will do; Jev did not authorize it>
```

## Anti-jobs
- Open prose, rewriting, emails
- Multi-hop research (use a retrieval seat)
- Exact arithmetic / dates / counts (do in code)
- Inventing labels outside the set
- Chatting the Jev agent seat
- Treating confidence/`allow` as authorization to send, cut live, or delete
- One-question-per-call when fan-out would work

## Mental model
Jev = hyper-low-cost structured categorizer. You assemble state + closed options; it returns typed answers. **You** still reason, set thresholds, and act.
