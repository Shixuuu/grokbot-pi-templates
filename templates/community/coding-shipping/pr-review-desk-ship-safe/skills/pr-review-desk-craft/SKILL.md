---
name: pr-review-desk-craft
description: "Use this when reviewing a pull-request diff: intake, read, anchored Blocker/Major/Minor/Nit findings, RV- review packet, refine, and human gate with no invented CI results."
---

# PR Review Desk — craft skill

## When to use
- User pastes a diff or connects a PR and wants a review with severities and anchors.
- User says "review this PR," "code review," "check this diff," or asks to stage review comments without posting.
- User wants honest UNKNOWN for CI, tests, and code outside the diff.

## When not to use
- Release notes or changelogs from merged PRs, bug-report triage, postmortems, runbooks, API reference docs, or architecture diagrams (redirect).
- Auto-review on every PR, or a watcher that posts comments (refuse).
- Inventing CI or test results to fill a thin diff.
- Live send/post/share requests that skip the desk (redirect into this loop + gate).
- Approve, merge, push, deploy, rollback, run a command or test, page on-call, or spend (no verb; refuse).
- Any silent watcher: auto-post, auto-email, a sheet refresh, or a chat digest on a timer (refuse).

## Recipe

### 1) Intake (≤5 questions or stated defaults)
Capture: diff or connected PR, intent, focus, language/framework, house style. If the user already pasted a diff, state defaults and proceed to read.

### 2) Read
Walk the diff hunk by hunk. One line per hunk: what changed. List what is not visible (callers, tests, config, CI). Redact any secret you see.

### 3) Findings
- **Blocker** — must fix before merge (bug, security hole, data loss, secret leak)
- **Major** — should fix (likely bug, missing test for new logic, broken contract)
- **Minor** — worth fixing, low risk
- **Nit** — taste/style, optional

Anchor rule: every finding cites `path` + a quoted diff line or hunk header. No anchor → open question, not a finding.
CI/test rule: results you did not see are `UNKNOWN`. Never write "tests pass" or "I ran it."

### 4) Packet
Mint `RV-####` on the first full packet.
1. `# <PR title> review` — `Id: RV-####`
2. **Scope** — files reviewed · focus · not visible
3. **Findings table** — # · severity · anchor · issue · suggested fix
4. **Recommendation** — Request changes / Comment / Looks mergeable to a human reviewer (advice only)
5. **UNKNOWN / open questions**
6. **[NEEDS HUMAN INPUT]**
7. **Craft notes** — files · Blocker/Major/Minor/Nit · recommendation · Id

### 5) Refine
Apply requested edits. Summarize deltas (findings added/dropped, re-rated). Keep one canonical packet and the same Id.

### Gate packet
Before any leave-desk action, output:
1. Final review packet (or private staged draft reference) with Id
2. Checklist (every finding anchored · severity honest · CI/tests UNKNOWN unless pasted · recommendation is advice, not approval · secrets redacted · private visibility if staged)
3. One fenced dispatch line only when every field on it is already known; otherwise name the field as `[NEEDS HUMAN INPUT]` and show no line for that verb
4. What that line will not do

### Dispatch
Follow the operating rules, section "Gates (hard)"; that section wins if this skill disagrees. Dispatch only when the user's whole latest message equals one dispatch line (verb, `RV-` id, required fields). Print the parse line, perform that single action, confirm verb + id, and stop.

## Draft-first connector pattern
1. Offer in one sentence: "I can stage this as a private mail draft or a private doc. Want that?"
2. When they asked to stage it, or on a clear yes to that offer: create or update a private draft only. Title prefix `DRAFT`. Return link or draft id. Stay in `GATE`.
3. Queue, schedule, "send later", a pending code-host review, and a draft pull request are leave-desk or shared surfaces, not private drafts. An edit in a repo, doc, wiki, or folder someone else can open is leave-desk and no verb authorizes it. Offer a new private doc, or keep the packet in chat.
4. Never escalate a draft into a send, share, post, publish, invite, merge, deploy, or charge on your own.
5. Calendar: on request, an owner-only reminder with empty attendees is allowed. Title it as a review reminder, keep the packet out of the body, never invent the start time. Inviting another person needs `PROCEED INVITE` with one mailbox.

## Quality bar
- Anchor-or-UNKNOWN on every finding.
- CI, test, and benchmark results are never invented.
- Recommendation is advice; approve/merge stay with the human.
- Sparse findings admitted, not padded with nits.
- Secrets in pastes are never echoed; `[REDACTED]` instead.
- Hold until the exact dispatch line. After a successful tool call, confirm verb and id, then stop.

## Micro example
Diff in `app/users.py` replaces `db.query("SELECT * FROM users WHERE id = %s", (user_id,))` with `q = f"SELECT * FROM users WHERE id = {user_id}"` and adds `log.info("auth=%s", request.headers.get("Authorization"))`. No CI pasted.

Packet `RV-3187`: two Blockers (SQL injection from interpolation, anchored on the f-string line; credential written to logs, anchored on the log line). Recommend: Request changes (advice only). UNKNOWN: CI/tests, whether `user_id` is caller-controlled. `[NEEDS HUMAN INPUT]`: PR URL, so no POST line is shown.

- "lgtm, post it" → stays GATE; assent is not a dispatch line.
- User gives the PR URL → stays GATE; show `PROCEED POST :: RV-3187 :: target=https://git.example.com/acme/app/pull/42` and say what it will and won't do.
- `don't PROCEED POST :: ...` → hold word; nothing posted.
- `PROCEED MERGE :: ...` → no such verb; nothing merged.
- Exact `PROCEED POST :: RV-3187 :: target=https://git.example.com/acme/app/pull/42` → print `Parsed: POST RV-3187 target=...`, post one comment-type review with the redacted packet on that PR only, confirm verb and id, stop.
