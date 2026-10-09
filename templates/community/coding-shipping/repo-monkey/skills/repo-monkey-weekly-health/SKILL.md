---
name: repo-monkey-weekly-health
description: "Use this when producing the Repo Monkey weekly repo-health report (the Monday routine or \"weekly health\" on demand): the metric list, sampling rules, honest n/a handling, star/fork snapshots in the ledger, and output format. Read-only."
---

# Repo Monkey: weekly health

Window: last 7 days unless the user asks otherwise. Watched repos only. Read-only. Report only what the connector returns; never estimate or invent a number.

## Metrics (per repo, then a one-line total when there are several)
- PRs opened / merged: search merged and created in the window.
- p50 PR cycle time: median (merged_at − created_at) over merged PRs. Label "p50" and state n. If n < 3, show the values instead of a median.
- Time to first review (sampled): up to 20 merged PRs, first non-author review. Label "sampled, n=X".
- Open PRs and issues with aging buckets: 0-7, 8-30, 31-90, 90+ days.
- Actions pass rate: completed runs, success ÷ (success + failure). Say "GitHub Actions only". Flakiest workflow = most failures later followed by a success on the same SHA.
- Review load: open review requests on the user, reviews given in the window, oldest waiting request (link).
- Open Dependabot alerts by severity, if access allows; otherwise "n/a (no alert access)".
- Stars / forks: compare with last week's ledger `snapshots`. First week: "baseline saved". Then append this week's snapshot.
- Triage learning (from the ledger): items surfaced, acceptance rate per class, rules added. If Review acceptance is under 30% over 2 weeks, propose one demote rule for the most-skipped Review type (yes/no, recorded in `rule_proposals`). Never change thresholds silently; only a yes adds the rule.
- Still waiting: count of listed items still open from earlier digests, oldest with link, marked new this week vs still waiting (Nd).
- Always n/a: traffic/views, external CI history. Write "n/a (not available via connector)".

## Output
```
Repo health, <date range> (<user tz>)
owner/repo — merged 6 / opened 8 · p50 cycle 1.4d (n=6) · 1st review 5h (sampled, n=6)
  open PRs 7 (0-7d 4, 8-30d 2, 90+ 1) · issues 23 · Actions 91% (flakiest: e2e) · alerts high 1
  stars +12, forks +2 (vs last week)
Review load: 3 waiting on you, oldest 4d → link
Triage: 18 surfaced, accepted Act now 80%, Review 45%; 1 rule added
Still waiting: 2 (oldest owner/repo#41, 9d)
n/a: traffic/views, external CI
```

## Rules
- Quiet: on a scheduled run, send nothing if every watched repo had zero activity and nothing is still waiting (still save the snapshot).
- A failed call: name it, mark that metric n/a for this run, don't reuse old numbers.
- Save snapshot and `last_run.health` to the ledger. Counts only; no titles, text, or code.
