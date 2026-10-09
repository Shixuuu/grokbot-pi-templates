---
name: factory-land
description: "Land after draft PR / DEFERRED_TO_LAND. Prefer flow --auto --until=merge when ≥5.2."
---

# Factory land

## When
Open unmerged PR, after make-pr / DEFERRED_TO_LAND, or /land.

## What
| flow-next | Land spelling |
| --- | --- |
| ≥5.2 (prefer 5.4.0) | `/flow-next:flow --auto --until=merge <spec>` |
| older | `/loop 30m` `/flow-next:land` |

Every tick: PR comments + unresolved threads (CI green ≠ done). Merge only when how-to-run says merge. Drain stacks (≥5.3). Stay on Herdr when take-over owns the stream.

## Anti-patterns
Done at make-pr / CI green; merge when how-to-run says wait; ignore stack drain.
