---
name: resolve-a-recourse-case
description: "Use when evaluating an academic/administrative grievance or appeal case with the Recourse engine: bootstrap the frozen engine if needed, propose only untrusted raw claims from authoritative public policy, run the Recourse CLI, and return verified case state without inventing facts or bypassing validation."
---

Run a Recourse case through the frozen public engine boundary. The model may only emit untrusted raw claim proposals. The engine alone acquires sources, binds warrants, validates, computes deadlines, evaluates the Case Twin, and detects deviations.

## Hard rules

- Work on this assistant’s cloud computer only unless the user explicitly directs otherwise.
- Never invent a rule, deadline, right, ground, source span, content hash, character offset, or missing case fact.
- Never bypass a `rejected` or `needs_review` result; never skip warrant/rule validation; never modify the engine.
- Always supply an explicit ISO-8601 `evaluationAt` (case evaluation instant). Never use wall-clock “now” as evaluation time unless the user explicitly names that instant.
- Preserve source evidence for every consequential conclusion (quote + acquired source provenance from the engine output).
- Never modify university systems, log into student/institution accounts, file, submit, email, or otherwise act on the student’s behalf.
- Never bypass Grok Bot approval or security-review controls. If a needed step is blocked or requires approval, stop, tell the user what was attempted and why approval is needed, and ask them to approve — do not route around the check.

## Engine location and bootstrap

Frozen release:

- Repo: `https://github.com/moizk12/RECOURSE-Grokbot`
- Tag: use the frozen tag the user names for the run (e.g. `v1.0.1-competition` or `v0.1.0-engine`)
- Checkout path: `/workspace/recourse` (clone that exact tag if missing or wrong)

If the engine checkout is missing or on the wrong tag:

```bash
git clone --branch <frozen-tag> --depth 1 https://github.com/moizk12/RECOURSE-Grokbot.git /workspace/recourse
```

Bootstrap (normal workflow — use Shell / package tooling directly):

```bash
cd /workspace/recourse/recourse-grokbot/engine
npm ci
npm run build
```

Prefer the built CLI. For competition-release demos with a shipped example, prefer `node dist/cli/index.js trace <example.json>` (or `analyze`). For untrusted raw-proposal runs, use `node dist/cli/index.js resolve <input.json>`.

If bootstrap or CLI is blocked by Auto-review / security review, ask the user for approval and retry the same command through the honest approval path. Do not encode alternate invocation tricks as the workflow.

Contract reference: `engine/GROK_HANDOFF.md`.

## Inputs to gather

Before writing proposals, gather (ask only for what is missing):

1. Institution and decision / procedure type.
2. Authoritative public policy URL (institution’s own domain / official PDF or page). Prefer primary policy over FAQ or secondary summaries.
3. Case events with `occurredAt` timestamps (append-only log: e.g. `case_opened`, `grievance_filed`, `institution_action_taken`, `student_action_taken`).
4. Explicit `evaluationAt` (label it as the case evaluation date/instant).
5. Optional `holidays` (ISO dates) when business-day math matters.
6. Optional free-text `sourceAmbiguities` when the source itself is unclear.

When the user points at an unchanged release example, use that file as-is (including its evaluation date, calendar assumptions, and any labelled fabricated test proposal).

If the authoritative source cannot be fetched or verified, stop and report source failure — do not substitute search snippets as warrants.

## Produce only RawClaimProposal input

Build resolve/analyze input matching the release contract (`GROK_HANDOFF.md`):

- `evaluationAt` (required)
- `holidays?`, `sourceAmbiguities?`
- `sourcesToAcquire`: `{ sourceId, requestedUrl }[]` for live fetch
- `rawProposals`: `RawClaimProposal[]` only
- `events`: `CaseEvent[]`

Each `RawClaimProposal`:

- `rule`: candidate rule fields **without** `warrant`
- `sourceId`: must match an acquired / declared source
- `quotedText`: exact verbatim span from the policy you read (must uniquely match engine-extracted canonical text)
- `claimType`: `directly_stated` or `inferred`

Do **not** supply `contentHash`, character spans, or self-made warrants. The engine derives those.

Minimum proposals: only source-supported claims required for the case. Prefer `directly_stated` quotes. Mark genuine inferences as `inferred` and expect stricter review.

Read the official policy yourself for this run. Do not copy raw proposals from fixtures or prior cases unless the user explicitly asks to run an unchanged release example.

## Run the engine

Let the CLI perform source acquisition → warrant binding → validation → procedure model → Case Twin → deviations (and Trace/forecast when using `trace`/`analyze`).

On non-zero exit: report the error; do not invent a case state.

## Handle validation outcomes

- Rejected / needs-review: report failures; never rephrase rejected claims as validated rules.
- Never downgrade uncertainty into a firm right, deadline, or eligibility call.

## Return format

Return only what the engine verified plus clear uncertainty. Include PASS/FAIL, tag/commit executed, evaluationAt, validated/rejected/review counts, case state (student and institution obligations), deviations, uncertainty/review items, authoritative sources, and any approval or blocker. For Trace-capable runs, retain the full Recourse Trace as evidence and keep the explanation concise.

Do not create a Routine unless the user asks. Do not modify the engine tree except bootstrap artifacts (`node_modules`, `dist`) produced by the documented install/build.
