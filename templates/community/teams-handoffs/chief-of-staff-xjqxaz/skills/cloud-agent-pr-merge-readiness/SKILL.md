---
name: cloud-agent-pr-merge-readiness
description: "use this when reviewing a Cursor cloud agent PR for merge readiness before sending it on"
---

# Cloud agent PR merge-readiness

Use this when a Cursor cloud agent has opened or updated a PR and you need to decide if it is merge-ready.

## Own the bar
- Source control must show the PR marked **ready for review**. Draft is not ready. The cloud agent saying "ready" is not enough — dump a live PR view and read draft/ready-for-review yourself.
- Never clone the repo onto the assistant computer just to check. Never mint a personal access token.
- Automated review bot finished. Real findings fixed. Tests exist. Artifacts + short test path.
- Primary CI failures on HEAD are real fails, not a lone unrelated flake. Do not send CoS while those are red. Agent "CI green" via subscription or claim is not enough — wait for a live dump that shows the check terminal-green on HEAD.
- You do not approve or merge. The user does final review and merge.
- PR description must open with a SHORT section explaining **behavior before the change** (what the user saw / what happened). Product language. Missing that is not merge-ready — reply to the same cloud agent to add it.
- If the PR was triggered by Slack, the PR description must include the Slack permalink (after the before section). Missing that is not merge-ready. If the PR tool rejects Slack URLs, put the permalink in the body as plain text.

## Skip what is not yours
- Platform triage bots already owning a thread are not your intake. Do not CoS, reply, or relaunch them.

## The miss this exists to prevent
A CloudAgent finish with a ready-for-review PR is the notify moment. Do not wait for a source-control listener (they can stay silent). Do not wait for a second review-bot pass if prior findings are claimed fixed. Do not send the user the PR instead of CoS. Verify live review comments yourself before calling findings fixed. Do not send CoS a draft even if review/CI/artifacts look good.

## Review
1. Identify the PR, agent id, latest commit, and CI. Confirm it is **not draft** via live PR view.
2. Confirm the review bot ran. If findings remain on HEAD, reply to the same cloud agent to fix on that branch. Do not open a second PR.
3. Confirm a short test path (command, screenshot, log, or preview).
4. Confirm the PR body opens with a short before-behavior section. If Slack-triggered, confirm the Slack permalink is in the body. If either is missing, reply to the same cloud agent to add it before sending CoS.
5. If still draft: reply to that same cloud agent to mark ready for review. Do not send CoS until source control shows ready.

## Report (same wake the agent finishes)
- Merge-ready (ready-for-review, artifacts + test path, review findings fixed or none, primary CI actually green except a true unrelated flake): send the package to the user's CoS on that wake. Once.
- The package must include PR link, agent id, HEAD, CI, artifacts, the Slack permalink when Slack-triggered, **and 1–2 sentences each on:**
  1. **the problem** — who hit it, what the user saw that felt broken, with the Slack link
  2. **the proposed solve** — what we decided to do, and what we explicitly did not do
  3. **how it was solved** — what the user now sees, when it shows, who sees it
  4. **how to verify** — a concrete click-path on a real screen
- Write these as **product review notes**. The user will not have read the code. No component names, RPC names, backend states, or file paths.
- Blocked on the user: same, send CoS, not the user.
- Not ready: reply to the same cloud agent. Do not ping the user mid-flight. Do not send CoS.
- Do not close a PR yourself if a safety check blocks it. Do not ask CoS to close it either if CoS has no write path — reply to the same cloud agent to close if it still exists.

## Signals
Babysit with cloud-agent watch/reply/get. Source-control listeners are extra, never the only signal. If a listener never fires, still notify CoS when the agent run that made the PR merge-ready finishes — but only if source control shows ready for review and CI is actually green.
