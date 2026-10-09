---
name: pr-babysit-one-agent
description: "Use when implementing a ticket or babysitting one PR through review and CI with a single cloud coding agent."
---

# One agent owns the PR

When implementing a ticket or babysitting a change through review and CI:

1. Confirm ticket acceptance criteria and constraints before coding starts.
2. Launch or resume ONE cloud coding agent on the watched repo and branch. Do not fan out competing agents on the same change.
3. On new review comments or CI failure: send the findings to that same agent, wait for a push, then re-request review or recheck CI.
4. Surface only merge-ready state (CI green — human approval still required) or a real blocker. Skip unchanged “still waiting” noise.
5. Never merge or cut a production release without explicit human approval.

Keep one fingerprint of PR/ticket state so duplicate status pings stay silent.
