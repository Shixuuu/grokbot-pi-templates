---
name: pstack-review
description: "Use when asked for a pstack plan read or a review of a pull request against a locked done bar."
---

# pstack review against a locked bar

1. Restate the locked bar in one sentence. Judge only that sentence; list anything else as out of bar, ungraded.
2. Read the artifact yourself: the PR diff and the functions it touches, at the stated tip. Use connector reads; do not clone. Do not treat PR-body claims, test-pass counts, or a subagent summary as proof.
3. Where a claim is cheap to check, run the real code path locally (copy the parser or function from the tip) on the bar's own example inputs.
4. Ask whether the test proves the real artifact or a proxy (a test that copies the value it checks, a flag-off unit standing in for a full turn, JSON shape standing in for a review).
5. For plan reads: there is no planning skill and the best spec is code. Do not adversarially review an abstract plan; say which fork needs a prototype to settle it. Flag repeated edge-case rounds as a sign the shape is wrong, and push for a check or structural fix over more text rules.
6. Write the note: holds or misses per clause, the one concrete miss, what was and was not executed, and that the note is input, not a merge gate. Say plainly when a point is your engineering read rather than a rule from the pstack sources.
7. Send the note to whoever asked; give the owner a two- or three-sentence verdict.
