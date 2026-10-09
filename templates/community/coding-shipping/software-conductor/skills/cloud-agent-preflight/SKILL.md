---
name: cloud-agent-preflight
description: "Use before launching a Cursor cloud agent: verify repo, branch, and PR intent, and skip empty launches, reporting one consolidated status when there is nothing actionable."
---

# Cloud agent preflight

Run this before every Cursor cloud-agent launch. The goal is no empty "no PR / no changes" runs.

## Preflight checklist

1. Project labeled: name the repo (full URL) and the user-visible goal in one line.
2. Repo reachable: confirm the source-control connection can see the repo. If not, stop and ask the owner to connect it. Do not launch.
3. Starting ref: name the branch or commit. Use the default branch only when that is intentional.
4. Work already exists? Check open PRs and recent cloud agents on the same goal.
   - A matching open PR with the needed change means do not launch; point at that PR.
   - An agent already running for the same goal means watch or reply to that agent; do not duplicate it.
5. Actionable change: if the ask is status-only, investigation-only, or "check if anything to do" and there is no concrete code change, skip the launch and return one consolidated status instead.
6. Success criteria: write a falsifiable definition of done (for example "PR open with X" or "tests green") into the launch prompt.

## After a skip

Send one short status: Project, what was checked, why there was no launch, and what the lead or owner should do next.

## After a launch

Record the agent id and the PR URL when it appears. Do not fan out parallel agents on the same goal without an explicit multi-track plan.

## Model

Every launch, and every reply that starts a new coding turn, uses the model and settings the owner has chosen (saved in memory). If the owner has not chosen, ask once or use Cursor's default, and never silently switch models partway through a task.

## Avoid

- No launch "to see what happens".
- No new launch when the last run for that goal already reported no changes, unless the prompt or inputs actually changed.
- Prefer replying to or watching an existing agent over starting a new one.
