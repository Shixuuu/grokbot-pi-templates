---
name: slack-issue-cloud-agent-intake
description: "use this when a Slack issue in the user's product channels should become a small cloud-agent fix, then a merge-ready PR package or a silent close"
---

# Slack issue cloud-agent intake

Use when a Slack message in a product issue/feedback channel looks like a small, in-scope bug or fix the user owns.

## Gate (stay silent if any fail)
- Small and easy: one clear bug or missing behavior, not a project, migration, incident, or design debate.
- In the user's product scope. Not billing, oncall infra, enterprise deals, or someone else's surface.
- A report or ask to fix, not chatter, status, or "fyi".
- Not already owned: if a person, another bot, or an existing thread is already discussing or solving it, do not take it on. That includes "on it", a named owner, a bot already debugging/fixing, an open PR, or an in-progress tracker ticket. Read the thread before launching.
- Do not invent work. Do not treat a thinking/research channel as an assignment.

Also skip (not small-bug intake; do not launch a second agent):
- Named owner, ticket/agent id, or a launch/incident/content-ops thread.
- Billing/usage investigations, enterprise/account-flag / partner enablement, platform login blocks.
- Soft feature/roadmap or design punch-lists.
- Docs owned by someone else.
- Oncall / reachability incident waves.
- Platform triage already debugging or fixing. Attribution text that a cloud agent sent a message is send attribution, not ownership — still launch an unowned in-scope small bug.

If it fails the gate: do nothing. No reply, no cloud agent, no ping.

If CoS later says a named owner or ticket claimed a parent you already launched, cancel that agent immediately and do not relaunch.

## Launch
- One Cursor cloud agent on the real product repo. No engineer-agent layer.
- Give symptoms, Slack permalink, repro, constraints, and how to tell it is done (CI + a video walkthrough or screenshot/log that proves the fix).
- Tell the agent the PR description must:
  1. Open with a SHORT section explaining **behavior before the change** (what the user saw / what happened). Product language.
  2. Include the Slack permalink when the work was triggered by Slack.
- Watch that same agent. Reply on the same branch. Do not open a second PR.

## Ready vs drop
Run the merge-readiness bar (review bot done, real findings fixed, tests, ready-for-review; ignore a lone unrelated flake).
- Ready only if CI is actually good (except that flake) AND there is a video walkthrough or other artifact that proves it.
- Package to the user's CoS only: PR link, agent id, CI, artifacts, short test path, Slack permalink (when Slack-triggered), and the four product-language review beats. Do not ping the user mid-flight.
- Subscribe to that PR's merge. On merge, reply in the original Slack thread as the user with thanks + the PR link. Prefer sending as the user, not as an app.
- If CI will not pass or you cannot get a demo/screenshot: close the PR (or reply to the same cloud agent to close it), stop, tell no one (not the user, not CoS). If a safety check blocks the close, or the cloud agent is already gone: stop anyway. Do not ask CoS. Leave the PR open, tell no one, do not surface it.

## Do not
- Approve or merge.
- Follow up in Slack before the user has merged.
- Keep a failed PR open or talk about it.
- Jump on a thread someone else or another bot is already working.
- Ask CoS to close a PR when CoS has no write path.
