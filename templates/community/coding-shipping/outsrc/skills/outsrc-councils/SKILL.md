---
name: outsrc-councils
description: "use this when Outsrc should run a multi-agent council (fan-out, cross-examine, 2-round cap) through outsrc"
---

# Outsrc councils

Use only when the answer is expensive to get wrong (architecture, unexplained bugs, risky migrations). Agents never talk to each other — you carry every message. Stay within `limits.max_jobs`.

## Steps
1. **Frame once.** One brief (see dispatch/task or review). End with: `End your answer with one line: POSITION: <your recommendation in one sentence>.`
2. **Fan out.** Same brief to 2–3 targets, one thread each. Prefer `review` / `adversarial_review` for opinions. Use `task` only for competing implementations (separate worktrees). Stable request_ids per thread.
3. **Collect.** Poll each inbox. Put POSITION lines side by side; note agreement and dissent.
4. **Cross-examine.** On each agent’s own thread: `Here are the other positions: <A>, <B>. Reply with VERDICT: AGREE <recommendation you now support> or VERDICT: DISAGREE <the single change you would insist on and why>.` Follow-ups keep kind (reviews stay read-only).
5. **Stop.** All AGREE on the same recommendation, or after **2 rounds** — never a third. Then report.
6. **Report.** Agreed recommendation, or one-line disagreement per agent with reason. Name who said what. For competing implementations: choose on evidence (tests, diff size, findings); optional third-agent adversarial_review on the leader; ask before discard losers.

Councils cost 2–3× a single job — not for routine work.
