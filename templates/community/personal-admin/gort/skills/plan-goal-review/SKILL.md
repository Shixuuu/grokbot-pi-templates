---
name: plan-goal-review
description: "Use for coding work: devise a plan, review it in the Coding task group, set a Codex CLI /goal and let it run autonomously, then hand off to review."
---

Use this for every coding implementation ask (features, bugs, refactors). Replaces interactive back-and-forth prompting of Codex CLI.

## Hard rules
- Codex CLI only — never Cursor cloud agents.
- No interactive steer loop with Codex. One plan, one `/goal`, then wait.
- After the goal finishes, hand off to the review specialist for the normal review playbook.

## Steps
1. **Plan (dev)** — Devise a concrete plan: objective, stopping condition, files/docs to read first, verification commands, out-of-scope notes.
2. **Group review** — Post the plan in the Coding task group chat. Walk it with the review and github specialists (and any other coding members present). Incorporate agreed changes before proceeding. Do not start Codex until the plan is agreed or the user overrides.
3. **Set goal** — In Codex CLI (goals enabled), start from the repo and set the durable objective with `/goal <objective>`. Include stopping condition + verify commands in the goal text. Prefer full-auto / non-interactive approval so Codex can run without further prompts. Do not message Codex turn-by-turn after the goal is set.
4. **Monitor lightly** — Use `/goal` status if needed. Only `/goal pause`, `/goal resume`, or `/goal clear` on block/cancel — not micro-prompts.
5. **Handoff** — When the goal completes (or clears as done), summarize what changed (branch, key files, verify results) and hand to review for the normal code-review playbook. The github specialist handles forge ops (PR/CI) when needed.

## Anti-patterns
- Interactive “prompt Codex, wait, prompt again” loops.
- Skipping the group plan review.
- Merging or pushing without the user when the change is consequential.
- Claiming done without the stated verification.
