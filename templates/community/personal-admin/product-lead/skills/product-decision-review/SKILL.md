---
name: product-decision-review
description: "Use this when reviewing a product decision from evidence through a ship/iterate/hold/stop call, or when writing a linked decision memo."
---

Run this method for every product decision. Do not skip sections. Do not start implementation, connect new tools, or create routines unless the human explicitly asked for that outside this skill.

## Hard stops

Never do any of the following without explicit human approval in the current conversation:

- publish a roadmap
- promise a date
- merge
- deploy
- change pricing
- message customers
- alter production data

Do not act as a generic project manager. Do not code in parallel with an implementation owner. Cite non-obvious claims.

## 1. Restate the frame

Before gathering or judging evidence, write these in the human's words, then your tightened restatement:

- **Decision** — the choice to be made, in one sentence
- **User problem** — who hurts, what fails, and when
- **Target segment** — who this is and is not for
- **Constraints** — policy, tech, legal, brand, staffing, budget, dependencies
- **Deadline** — any time pressure the human named (record it; do not invent or promise a date)

If any of these is missing, mark it unknown. Do not guess a deadline.

## 2. Build the evidence ledger

For each material claim, record:

| Claim | Source | Counterevidence | Freshness | Confidence |
| --- | --- | --- | --- | --- |
| … | link or artifact | conflicting data or none found | date seen | high / medium / low |

Rules:

- Prefer primary artifacts (research notes, support tickets, analytics, interviews, specs, prior memos) over recollection
- One claim per row
- Freshness is when the evidence was last true, not when you read it
- If a source is missing, the claim is not a fact
- Cite non-obvious claims inline in the memo

## 3. Separate the pile

Sort everything into exactly one bucket. Do not mix them in the narrative.

- **Facts** — evidenced, sourced, dated
- **Assumptions** — needed to proceed, not yet evidenced
- **Preferences** — taste, strategy bets, or stakeholder wants (not evidence)
- **Unknowns** — material gaps that could change the recommendation

## 4. Smallest testable bet

Propose the smallest product change that could falsify the core assumption.

Define:

- **Bet** — what ships or is shown, to whom, for how long (duration is a test window, not a promised launch date)
- **Success metric** — what would make this worth continuing
- **Guardrail metric** — what must not get worse
- **Stop metric** — the threshold that ends the bet

The bet must be smaller than a roadmap item. One hypothesis, one audience, one success metric.

## 5. Bounded workstreams

If work is needed, split it into streams. Each stream has:

- exactly **one owner**
- one **acceptance test** (observable, binary)
- an explicit **out of scope** line

Do not assign yourself as implementation owner. Do not write the code. Review and recommend only.

## 6. Review outcomes against the original problem

When results exist, compare them to the restated user problem from step 1, not to whether the work shipped.

Ask:

- Did the user problem move?
- Did we only move a proxy?
- What would we believe now that we did not believe before?

## 7. Recommend

Choose exactly one:

- **Ship** — evidence supports scaling this
- **Iterate** — signal is real; the bet should change
- **Hold** — not enough evidence; waiting is cheaper than acting
- **Stop** — the bet failed, or the problem is not worth this solution

State why in one paragraph, tied to the ledger. Name the next best alternative you are rejecting.

## 8. Revisit trigger

Record what event or measurement would reopen this decision (a metric crossing a line, a new constraint, a date the human already named, or a specific evidence gap closing). Do not invent a calendar promise. If the human did not name a review date, set **next review date** as "unset — reopen on trigger" and list the trigger.

## Output: linked decision memo

Return a single memo with stable headings and deep links to sources. Include every section below, even if the answer is "none" or "unknown":

1. **Problem** — decision, user problem, segment, constraints, deadline
2. **Evidence** — ledger plus facts / assumptions / preferences / unknowns
3. **Alternatives** — options considered, including do-nothing
4. **Recommendation** — ship / iterate / hold / stop, with rationale
5. **Scope** — what the bet includes
6. **Non-goals** — what we will not do in this bet
7. **Risks** — what would make this wrong, and the leading indicator
8. **Metrics** — success, guardrail, stop
9. **Dependencies** — people, systems, approvals
10. **Owners** — one owner per workstream
11. **Open questions** — remaining unknowns that could flip the call
12. **Next review date** — only if the human named one; otherwise the revisit trigger

Link every non-obvious claim to its ledger row or source. Do not attach a roadmap or a promised ship date to this memo.
