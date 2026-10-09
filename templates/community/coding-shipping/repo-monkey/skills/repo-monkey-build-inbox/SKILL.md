---
name: repo-monkey-build-inbox
description: "Use this when building a Repo Monkey actionable inbox or daily digest from GitHub: which sources to read (notifications optional, search fallback), the Act now / Review / FYI / Ignore rubric, caps, the ledger's new vs still-waiting tags, output format, and the quiet rule. Read-only."
---

# Repo Monkey: build the inbox

Read-only. Never write to GitHub here; writes go through repo-monkey-act-on-yes after an explicit "yes N".

## Inputs
- Memory: `watch:`, `role:` (solo | maintainer | lead), `digest:`, `notif:`, `rule:` lines. Only watched repos count.
- Ledger: `/workspace/repo-monkey/ledger.json` (schema at the end). Create if missing; if unreadable, start fresh and treat everything as new.
- "Since" = the ledger's last digest run, or 24h on the first run.
- Look up current GitHub tool schemas at run time; tool names below are hints.

## 1. Collect (cheap first)
1. Notifications feed, unless `notif: search-only`. Try once. If it errors with a permission error, that's normal (the feed officially supports classic tokens only): don't report n/a, save `notif: search-only`, and say it once in one plain sentence the first time only, e.g. "Your GitHub connection can't read the notifications feed, so I built this from review requests, mentions, assignments, and CI instead."
2. Search (always, and as the full source when the feed is off), scoped to watched repos:
   - open PRs `review-requested:@me`, plus team review requests
   - open PRs and issues `mentions:@me` and `assignee:@me`
   - your open PRs `author:@me` with check status and review state
   - open Dependabot/Renovate PRs
3. Recent GitHub Actions runs on each watched repo's default branch since "since".
4. Dependabot and code/secret-scanning alerts when access allows (always for maintainer/lead; for solo only critical/high).
5. Enrich only top candidates, at most 25 detail calls per run: PR details, check runs, reviews, issue details, failed-job log tail (about 60 lines, shown only as a short reason with token-like strings redacted, never stored).

If any call other than the notifications feed fails: name the failing call, don't reuse old data, and still show what succeeded.

## 2. Classify
Each item gets exactly one class, a reason of 12 words or fewer, and one proposed action.

Act now (max 5; overflow → "+M more", see Output):
- Review requested from the user on an open, non-draft PR (≥1 business day = "overdue").
- Direct @mention or assignment with a question or ask and no reply from the user.
- Red CI on a watched repo's default branch or on the user's own open PR.
- Critical/high security alert, or a Dependabot PR that fixes one.
- User's own PR approved, green, mergeable → propose merge. Changes requested → propose addressing it.

Review (max 7; same overflow rule):
- Dependabot/Renovate patch or minor bumps with all checks green → propose batch merge.
- User's own PR waiting for review >2 business days → nudge or request Copilot review.
- Maintainer/lead: outside contributor issue or PR with no maintainer reply >3 days.
- Open PR/issue with no activity >30 days → close-with-comment or ping.
- Likely duplicate issue → close as duplicate.

FYI: one line per repo (releases, merged/closed threads you were in, moderate/low alerts, state changes).

Ignore (count only, never list): bot comments (login ends in `[bot]`) unless they report a failure or security issue, subscribed chatter with no mention, green CI, anything outside the watch list, anything matching `rule: mute`.

Ranking inside a class: severity, then age (older first), then watch-list order, then `rule: boost` / `rule: demote`. Role tilt:
- solo: own PRs, CI, and bumps rank higher
- maintainer: first responses to outside contributors and stale items rank higher
- lead: review load and blocked team PRs rank higher (team lookups only if the user names a team)

Unsure about a class? Pick the lower-urgency one and add "(unsure)".

## 3. Ledger pass
For every item checked, key by its GitHub URL:
- Not in ledger → add `first_seen`, tag "new".
- In ledger, still open and still needing the user → tag "still waiting (Nd)" where N = days since `first_seen`.
- FYI or Ignore item with the same `last_state` and no activity since `last_seen` → unchanged: don't list it or count it again; count it once under "unchanged".
- Skipped by the user (`skipped` date set) and `last_state` unchanged → don't list it again; count it under "unchanged". If its state changed (new commits, new review request, CI flipped), clear `skipped` and list it again as "new".
- Resolved since last run (merged, closed, green) → drop from lists; keep `last_state` updated.
Then write back `last_seen`, `last_state`, `class`, and the run time.

## 4. Output
```
N items checked → K need you  (since <time> <user tz>)
ACT NOW
1. owner/repo#123 PR "title" — review requested 2d ago, CI green · new → Review now (I'll draft)
2. owner/repo main — CI red: test job timeout · still waiting (3d) → Re-run failed jobs
REVIEW
3. owner/repo#88, #90 dependabot patch bumps, green · new → Merge both
FYI: owner/repo — v2.1 released; 3 threads closed
Ignored: 41 (bot comments 25, green CI 9, watch chatter 7) · unchanged since last run: 12
Reply "yes 1", "skip 3", "mute …", or "help"
```
Over a cap: after the last listed item in that class add "+M more Act now" (or Review), ranked lowest first out. "more" lists them, numbered on from the last number shown. They count in K.
Link every item. Timestamps in the user's timezone. Never lead with an error or an n/a count.

Quiet rule: a scheduled run with zero Act now, zero Review, and no failed calls sends nothing (still update the ledger). If a call failed, send one line naming it even when nothing else needs the user. On demand: "Nothing needs you." plus the ignored count.

## 5. Validate before sending
- Every listed item has its GitHub URL.
- K (including "+M more" overflow) + FYI items + Ignored + unchanged = N.
- Nothing outside the watch list appears.
- Failed sources are named; no stale data reused.

## Ledger schema (/workspace/repo-monkey/ledger.json)
```json
{
  "version": 1,
  "last_run": {"digest": "ISO-8601", "health": "ISO-8601"},
  "items": {"https://github.com/owner/repo/pull/123": {"first_seen": "YYYY-MM-DD", "last_seen": "ISO-8601", "last_state": "open|ci-red|approved|merged|closed", "class": "act|review|fyi|ignore", "skipped": "YYYY-MM-DD (optional)"}},
  "decisions": [{"date": "YYYY-MM-DD", "action": "accept|skip", "class": "act|review", "repo": "owner/repo", "type": "pr|issue|ci|alert|bump|comment", "key": "author login, workflow, or label"}],
  "rule_proposals": [{"pattern": "…", "proposed": "YYYY-MM-DD", "answer": "yes|no|pending"}],
  "snapshots": [{"week": "YYYY-MM-DD", "repo": "owner/repo", "stars": 0, "forks": 0}],
  "share_offered": false
}
```
Housekeeping: drop items not seen for 30 days, decisions older than 90 days, snapshots older than 12 weeks. Only URLs, repo names, logins, workflow names, states, dates, counts. Never secrets, tokens, code, diffs, titles of private items, or issue text.
