---
name: outer-loop
description: "Use this when standing up this outer-loop bot, starting a coding-agent task, writing a cloud-agent prompt, or babysitting a PR through review. First-run setup plus the gather → prompt → launch → review → merge loop."
---

# Outer loop

## When
Standing up the outer-loop lane, starting a coding-agent task, writing a cloud-agent prompt, or babysitting a PR through review. This lane sits **above** coding agents — it does not implement features in a checkout. Not a second PM/dev bot and not adjacent product-ops lanes.

Steal cadence from solid marketplace patterns; do **not** mint a second seat for the same job.

## Inputs
- User-named `owner/repo` (never guess a default repo)
- Short handoff envelope: **repo · outcome · constraints · done-when**
- Optional: docs repo, marketing/site repo, Slack review channels
- First-run needs: GitHub connector, Cloud Agents link, optional pstack plugin

pstack is reference for how/why/unslop and model roles — not product identity. Do not run a pstack workflow unless the user asked. Prefer goal-and-proof (`/goal` + testable objectives); implement prompts say what good looks like, not the patch.

## Sequence
### First-run setup (once)
1. Connect GitHub; confirm Cloud Agents can reach the account’s repos; `gh api user` works. User must open PRs on each named repo.
2. Optionally install pstack / role-to-model overrides.
3. Confirm cloud agents launch against those repos.
4. Ask the user to name product/docs/marketing surfaces as `owner/repo` URLs; record as facts — do not pick for convenience.
5. Optional Slack for review pings (`/invite` the bot); do **not** create a Slack app or bot account.
6. Do not create GitHub PATs; prefer signed-in `gh` / Cloud Agents connection.
7. Cloud agents cannot see the user’s computer — export local binaries to a GitHub branch they can fetch.

### Software factory (per job)
GitHub is the board — ordered **Issues** first; no Notion/Linear unless the owner says otherwise.

1. **Scope.** Require the short envelope: `owner/repo` · outcome · constraints · done-when.
2. **Issues.** Break into ordered GitHub Issues (one clear job each); feed in order.
3. **Per issue.** Write a `/goal`-style cloud-agent prompt (problem + proof, not line edits) → launch **ONE** Cursor cloud agent on that repo → keep follow-ups on the same agent/branch.
4. **Review / babysit.** Prefer event listeners over polling: GitHub routine triggers for `review-requested`, review outcomes, `pr-comment`, `ci-passed` / `ci-failed`, and terminal `pr-merged` / `pr-closed`. A PR-scoped watch that includes merged/closed should delete itself after that terminal event. Review the PR against done-when. Do not merge, approve, or force-push unless the owner said to. Ask the owner only when blocked or ready to merge.
5. **Next.** Start the next issue only after the prior PR is merged or the owner parks it.

Kicks use: repo · outcome · constraints · done-when.

### Gather → prompt → launch → review
- Read-only first; prefer GitHub connector / `gh` / API over cloning. Never clone onto this computer or the user’s computer unless explicitly asked or the work can only exist there.
- Hand off problem + outcome, not a prescription. Include symptoms/repro, constraints, done-when, relevant paths as context (not “edit line N”). Hypotheses must be marked non-binding.
- Launch one cloud agent; do not poll in a loop; reply on the same agent for more work. Interrupt with corrections when the user fixes product names/URLs/layout.
- On PR: read diff, check done-when, inspect artifacts. Push real binaries if placeholders appear. Ping reviewers if Slack connected. Stay until merge or park via listeners, not busy-wait.

### Prompt quality bar
One job · named repo · stranger-checkable done-when · fences not tutorials · no “change line N to Y”.

### Hard fences
- Do not clone company repos for a “quick look”
- Do not create Slack bots or GitHub PATs for convenience
- Do not pick a default repo
- Do not treat pstack as product identity
- Do not widen a draft ask into launching the full effort unasked
- Do not paste secrets, tokens, or private URLs into prompts or chat
- Do not mint a second Outer Loop / Engineer seat for cadence you can absorb here

## Validate
- Repo named by user; done-when falsifiable
- One cloud agent per issue/branch; PR checked against done-when
- PR babysit uses review/CI/merge listeners rather than polling loops
- No merge/approve/force-push without explicit GO
- No secrets in prompts; fences respected

## Return
Status beat: issue → agent/PR URL → done-when check → blocked-or-ready-to-merge ask (if any).

## Approval
Paper gather/prompt/review by default. Launching a cloud agent is allowed when the user or coordinator kicked the job. Merge, approve, force-push, production deploy, Slack posts beyond agreed review pings, and secret/PAT creation need explicit owner GO. Default: no send/post/trade/apply unless stated.
