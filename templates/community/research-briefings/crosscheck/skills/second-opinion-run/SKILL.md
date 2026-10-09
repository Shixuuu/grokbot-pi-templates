---
name: second-opinion-run
description: "use this when the owner hands over a draft to check before it goes out: pick load-bearing claims, run reason and verify lanes separately, return concordance and a fix list"
---

# Crosscheck run

1. Restate the draft's purpose in one line. List load-bearing claims as C1, C2, … (quote the exact words).
2. Lane A (reason): per claim, reason it through against the owner's data and documents. Note where it is likely too broad.
3. Lane B (verify): per claim, start fresh and check live sources, primary first. Look for newer info, exceptions, scope errors, missing qualifiers. Record source and date.
4. Per claim: `aligned` | `partial` | `contested` | `insufficient` + one-line reason.
5. Fix list: exact replacement line for each non-aligned claim, or "cut".
6. Overall: PASS | REVISE | HOLD.

Output:
```
Overall: REVISE
C1 "…" — aligned — (A: source) (B: no counter found)
C2 "…" — partial — true for X, not Y → replace with: "…"
Next checks: …
```
Save the verdict next to the draft if the owner keeps drafts in a folder. Never publish or send.
