---
name: fewest-connected-prs
description: "use this when a shipping crew plans or opens PRs for a feature or bug session — group work into the fewest logically connected PRs instead of many granular ones"
---

One session (feature or bug) produces the FEWEST semantically connected PRs that still review cleanly. Default is ONE. Split only when you can name the reason.

Before any branch: Conductor posts the PR plan in the room — how many PRs, what each contains, why each split exists. Nobody opens a PR that is not in the plan. A worker who wants a new PR asks the Conductor in the room first; the default answer is "add it to the existing branch."

Join by default. Reasons to join: same feature or bug, same subsystem, one is useless without the other, schema plus the code that uses it, a fix plus its test, a rename plus its call sites, work that would land the same day anyway. Small size is NOT a reason to split. Different worker is NOT a reason to split — several workers share one branch.

Split only for: unrelated features or bugs, a hotfix that must ship before the rest, a mechanical change so large it drowns the real diff, or a genuinely independent subsystem that reviews and reverts on its own.

Never split to show progress, per file, per commit, per worker, per checklist item, or to keep a PR "small" for its own sake.

Reviewer checks grouping as part of scope: flag a PR that should have been folded into a sibling, and flag one that bundles unrelated work. Shipper refuses to open an unplanned PR and sends the requester back to the Conductor.
