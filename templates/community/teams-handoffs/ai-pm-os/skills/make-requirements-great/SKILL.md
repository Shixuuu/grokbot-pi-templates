---
name: make-requirements-great
description: "use this when existing requirements need an 18-characteristic quality review, or raw context needs converting into requirements that meet those characteristics"
---

Requirements decide what gets built. Bad requirements waste engineering time, generate disputes, and at worst cause the wrong thing to be built. This skill applies an 18-characteristic quality framework (adapted from BCS Business Analysis practice) to either audit existing requirements or compose new ones from raw context.

Ask with numbered options in chat whenever a choice is needed. Never skip the ask. Do not impose a format the user did not ask for. Match whatever format the requirements already use, or whatever they request. If they offer no preference, write each requirement as a single sentence and only add structure when Owner, Source, or Acceptance criteria demands it.

### 0 — Detect the input mode

Two modes. Detect which applies before doing anything else.

- **Mode A — Review.** Input is one or more existing requirements. Audit them against the 18 characteristics. Return a defect log and rewrites.
- **Mode B — Author.** Input is raw context. Extract requirements and write them so they meet the 18 from the start.

Mixed input: extract from the loose context, then audit the union as one set.

If mode is unclear, offer numbered options:

1. Review the requirements I already have
2. Author requirements from this raw context
3. Both — extract, then audit the whole set
4. Quick pass — only the three or four highest-impact defects

Quick-pass (phrases like "just glance at these", "what jumps out"): skip the full log. Surface the three or four highest-impact defects, name the characteristic each violates, and offer one rewrite per top defect.

### 1 — Detect the level of abstraction before applying any characteristic

Confusing altitudes is the most common failure: demanding solution-level precision from a high-level statement, or accepting business-level vagueness in a solution-level statement. A high-level requirement is **not a defective low-level requirement**. Forcing latencies, conflict rules, and outage behaviour onto it is premature decomposition.

Three levels:

- **Business / strategic.** Why the work exists. Outcome the organisation wants. Owned by the sponsor.
- **Stakeholder / user.** What a stakeholder needs the system to do for them, at the level of intent.
- **Solution / functional.** How the system behaves. Names components, latencies, screens, APIs.

If the input is ambiguous about level, ask with numbered options before reviewing — do not silently default to solution-level:

1. Business / strategic — outcomes and KPIs
2. Stakeholder / user — intent and capability
3. Solution / functional — system behaviour
4. Mixed — tag each requirement with its level

Default to not decomposing. Audit the requirement at the level it was written. When auditing a high-level requirement, things that would be "missing detail" at solution level become **deferred design decisions**, not defects.

### 2 — Apply the 18 characteristics

Each has a Test. Apply the test; do not gut-feel it. Per-item (1–9) apply to each requirement. Set-level (10–18) apply to the catalogue as a whole.

1. **Unambiguous** — two competent readers cannot arrive at different interpretations. Scan weasel words (*appropriate, user-friendly, fast, scalable, as needed*). Quantify or flag pending decision. Do not invent a number.
2. **Clear** — a person from each stakeholder group can follow it in one pass. Domain terms in a glossary. Acronyms expanded on first use.
3. **Concise** — delete words that do not change meaning. Conciseness is subordinate to precision.
4. **Correct** — every other characteristic passes and the owning stakeholder has confirmed it. "Correct except for X" is not correct.
5. **Testable** — write the test that would prove it. Specific, objective, measurable. If no proxy is achievable, mark it research, not engineering.
6. **Implementation-independent** — scan for named tech, UI controls, vendors. If a guess, strip it and restate as behaviour. Allowed exception: the interface itself is the requirement.
7. **Owned** — a named individual, not "the team" or TBD. Do not invent an owner; flag the gap.
8. **Relevant** — inside agreed scope and it materially advances the business need. Trace to the business case or problem statement.
9. **Feasible** — deliverable inside known constraints. When uncertain, mark feasibility-pending. Do not silently accept infeasible requirements.
10. **Unique** — no duplicates. Merge true duplicates. Near-duplicates: merge or make the distinction explicit.
11. **Cohesive** — one thing per requirement. More than one verb-phrase target → split. Do not split a high-level requirement merely because it will later expand.
12. **Consistent** — no self-contradiction, no mutual contradiction, one term per concept with a glossary.
13. **Conformant** — follows the project's agreed template. If none exists, propose one from the dominant style in the input.
14. **Current** — dated and versioned. Mark anything older than the last scope change as stale-review-required.
15. **Modifiable** — stable IDs, logical grouping, cross-references use IDs.
16. **Traceable** — source (document, interview, regulation, ticket) and destination (design, code, test). Untraceable requirements are candidates for deletion after the owner confirms.
17. **Categorised** — functional, non-functional, business, user, interface, data, regulatory, constraint. Missing categories are suspects; do not invent requirements to fill gaps.
18. **Complete** — CRUD per entity, lifecycle per role, error and edge cases explicit. Completeness is never fully provable — show the work.

### 3 — Flag anti-patterns by name

- **Solution-as-requirement.** Names a tech or UI control. Restate as behaviour.
- **Compound requirement.** Joins multiple behaviours with "and". Split.
- **Weasel modifiers.** Unquantified adjectives. Quantify or strike.
- **Implicit actor.** "Reports shall be generated." Make the subject explicit.
- **Untestable statement.** Add measurable criteria.
- **Terminology drift.** Glossary.
- **Stealth scope creep.** Quietly assumes an out-of-scope feature.
- **Orphan.** No traceable source. Find the source or remove.

## Output

Keep three artefacts in this conversation:

1. **Cleaned requirements** — rewrites (or extracted requirements), in the format the user indicated or already uses.
2. **Defect log** — grouped by requirement. Only list characteristics that failed. End with set-level findings.
3. **Open questions** — anything blocking Correctness that needs a stakeholder answer.

Plus, at high levels: **Decisions to be taken during decomposition** — not defects.

After the user confirms the cleaned set, offer to save a short summary to memory. Do not save unless they confirm.
