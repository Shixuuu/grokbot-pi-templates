---
name: foundry-setup-interview
description: "Use this when Foundry starts, continues, or refreshes a product, project, agent, workspace, reference corpus, or cleanup setup. Run the classification, batched interview, confidence ladder, and Guided Transition."
---

Use this whenever Foundry starts, continues, or refreshes a product, project, agent, workspace, reference corpus, or cleanup effort. Foundry owns the next step. Interviews may be long. That is correct. Do not dump every question at once.

Load the canonical Foundry checkout first when it is available (`STRATEGY.md`, `AGENTS.md`, `docs/standards/interactive-setup-protocol.md`, `setup-interview-standard.md`, `foundry-classification-standard.md`, `guided-transition-standard.md`, `workspace-foundation-file-standard.md`, `github-default-control-plane-standard.md`, and `software-product-planning-standard.md` for software). Precedence: approved STRATEGY, then AGENTS, then the harness adapter. Lower layers cannot override higher layers.

## Compact panel

Every setup response includes:

```text
Setup mode:
Classification:
Strategy state / authority:
Setup confidence:
Product-intent alignment: not applicable / <percent>
Software planning path / lifecycle phase: not applicable / Fast|Standard|Full / 0-6
Harness route / configuration:
Current batch:
Repository/GitHub status:
Delivery operating model:
GitHub maturity:
Project board: needed now | needed later | approval pending | explicitly exempted
Known / missing:
Next recommended step:
Approval needed now:
```

## Route

intent -> classify -> interview or inspect -> strategy/source record -> harness and GitHub recommendation -> software charter gate when applicable -> exact write approval -> foundation and readiness report -> Guided Transition -> stop before implementation.

Continue through safe read-only work. Stop for exact named approval before writes, GitHub mutation, project/task creation, deploy, spend, secrets, or implementation.

## Batches (3 to 6 questions)

After each batch: summarise new facts, update classification and confidence, state the next step, then the next batch or exact approval.

1. Identity: name, slug/path, one-sentence purpose, classification, new vs refresh.
2. Source of truth: existing folder/repo/docs, GitHub (default for serious work unless exempted), knowledge store, raw vs canonical, strategy file or parent strategy path or scratch exemption plus promotion trigger.
3. First useful outcome: done-enough-to-start, first task, what to defer. Software charter: problem, users/jobs, outcome/success, constraints, non-goals, first critical journey, risk/approval boundaries, Fast/Standard/Full, lifecycle phase 0-6.
4. Harness and rails: recommend, do not make the user choose blindly. Codex for repo/code/docs. Cursor for human-in-loop IDE. Claude Code when useful. Persistent cloud teammate only when surface, privacy, and approval are evidenced. GitHub default-backed.
5. Safety: secrets, customers, production, legal, live systems, allowed write areas, GitHub mutation, deploy, autonomy, review.

## Scoring

Classify enduring target separately from the bounded initiative. product / project / agent / workspace / reference / cleanup.

Software product-intent: each dimension Confirmed, Partial, or Missing with a named source. 97%+ needs all Confirmed and no contradiction. Partial caps 96%. Missing caps 89%. Unresolved contradiction caps 90%. That is not architecture. Architecture belongs in the destination planning task.

Confidence ladder: 0-40 identity; 40-70 source/path/safety; 70-85 draft plan; 85-94 exact write approval; 95-96 readiness report; 97+ Guided Transition; 98-99 only with verified project ID, task ID, host ID, and cwd.

## Guided Transition

At verified 97%+ (and 97%+ product-intent when software): A exact registration plus handover packet; B one named refinement then re-offer; C park. Never treat 97% as silent completion. Software first destination task is Product and Program Planning. Non-software is Foundation Handover. Implementation needs a later 1-3 slice delivery packet.

## Foundation (only after exact write approval)

STRATEGY.md (candidate until the owner accepts), AGENTS.md, CLAUDE.md pointer, README.md, tmp/<slug>-state workspace-state, task-backlog, open-questions, readiness-check. delivery-lock only when a delivery loop applies. Stop before implementation.
