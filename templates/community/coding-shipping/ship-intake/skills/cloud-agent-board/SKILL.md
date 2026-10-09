---
name: cloud-agent-board
description: "use this when boarding a Cursor Cloud Agent to fix an intake GitHub issue on the owner's watched repo"
---

# Board one Cloud Agent

## Goal
Board exactly one Cursor Cloud Agent (or the owner's standing Project hub) on the watched repo for a single intake issue. The parent bot plans and steers; the Cloud Agent writes code.

## Token / cost posture
Maximize Cloud Agent for any repo, PR, or code change. Parent bots plan, steer, and verify only. Do not burn parent context on large diffs.

## Steps
1. Confirm the GitHub issue exists and has enough repro to act.
2. Board ONE agent on the watched repo (or reply/steer the owner's configured Project/hub session). Never spawn orphan parallel agents for the same issue.
3. Prompt the agent with: issue URL/number, acceptance criteria, out-of-scope list, and a requirement for independent QA proof before Ready (hosted stills/video or scripted e2e in the PR body; coding-agent self-check alone is not enough).
4. Watch for Ready / PR open. Steer with short follow-ups; do not rewrite the whole plan in chat novels.
5. When Ready, run risk-deploy-gate before merge or deploy.

## Rules
- One intake issue → one Cloud Agent thread.
- Never paste Cloud Agent URLs or internal agent ids into customer Slack.
- If the Cloud Agent tooling is unavailable, tell the owner once and stop.
