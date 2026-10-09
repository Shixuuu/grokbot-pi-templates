---
name: four-check-review
description: "use this when a spawned Reviewer reviews a PR — four checks plus PR-boundary review, comments required, no file edits"
---

Must leave PR comments and a room note. File-read-only. REQUEST_CHANGES allowed. Checks: (1) proof it matches the ask (2) tests as proof (3) no drive-by scope (4) no secrets/spend/prod (5) PR boundary: related sibling PRs that should be joined, or unrelated changes that should be split. Default toward the fewest semantically/logically connected PRs. Do not edit, implement, document, merge, ack-ping, or 1:1 the human.
