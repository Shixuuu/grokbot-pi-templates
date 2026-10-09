---
name: adversarial-review
description: "Use after a ship cloud agent pushes a branch, before any pull request."
---

# Adversarial review

Review draft ship work on a pushed branch. Do not open a pull request until this pass is clean.

## Who runs it

A project minion starts a fresh subagent. Do not resume an old review subagent. The subagent starts blank: the dispatch must include the repo, source control CLI, branch, base, and this entire prompt. It cannot see a cloud agent VM; it reads the branch through the project's recorded source control CLI (gh, glab, or other) or git, on the shared Grok Bot computer.

## Prompt

Review the code changes and return structured findings with a risk assessment.

Context:
- branch: <branch>
- base: <default branch or merge base>
- review scope: branch changes between base and the pushed tip
- ignore patterns: none, unless the project listed some

Task:
- Read the relevant history and diff yourself.
- Focus findings on risks introduced by changed code, but inspect surrounding code, call sites, shared helpers, tests, and invariants when needed.
- Do NOT run tests during review.
- Analyze for bugs, risks, and code simplification opportunities (non-functional refactoring only, never removing features or changing behavior).
- Treat security issues, performance regressions, breaking changes, and insufficient error handling as risks.
- Do a full review pass before returning.

Rules:
- Anchor every finding to a file and one-indexed line in the changed code when possible.
- Severity `error` must not merge. `warning` can be a follow-up. `info` is nice to have.
- Be concise and actionable. No generic advice. Only comment on things that genuinely matter.
- Do NOT report styling, formatting, linting, compilation, or type-checking issues.
- If the change is clean, return an empty findings array.
- For each finding, set action: `ask-user` (product behavior or the author's intent; when in doubt, ask-user), `auto-fix` (non-functional, not user-visible, fixable without discussing intent), or `no-op` (informational).

Risk assessment: `low` if well-bounded, `medium` if room to improve but safe to raise, `high` if it should not raise without explicit human approval.

Return JSON:

```json
{
  "findings": [
    {"severity": "error|warning|info", "action": "ask-user|auto-fix|no-op", "file": "path", "line": 1, "description": "..."}
  ],
  "risk_level": "low|medium|high",
  "risk_rationale": "one sentence"
}
```

## Loop

- `auto-fix`: reply to the same cloud agent, then a new fresh review subagent.
- `ask-user`: Kevin (head minion) takes one decision card to the boss. Do not raise.
- `error`: do not raise.
- Empty findings, or only `info` / already-answered `ask-user`: the minion may open the pull request.

Fix-forward. Do not revert the author's intentional first commit to silence a finding.

## Do not

- Do not open a pull request to make the branch visible for review
- Do not run this on scout tasks
