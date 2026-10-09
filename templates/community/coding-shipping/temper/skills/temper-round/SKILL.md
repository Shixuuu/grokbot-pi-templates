---
name: temper-round
description: "use this to run one Temper round on a published invariant: Anvil proposes, attackers try to break, Stone re-runs the harness, append a hash-chained entry"
---

# Temper round

1. Load the invariant and the last ledger entry (its hash is the new prev).
2. **Anvil:** in a separate run, propose the smallest patch plus a test for the invariant. Save the patch to a file; record its SHA-256.
3. **Attackers:** k separate runs. Give each only the invariant and the patch (not Anvil's reasoning, not each other's). Each returns a counterexample/test or "no break found".
4. **Stone:** apply the patch in the scratch copy, add the attackers' tests, run the harness command twice. Record exit codes and output hashes. Different results = flaky = failed. Missing artifacts = failed.
5. **Verdict:** settled (all checks pass, no attacker break), failed (any check fails), or disputed (an attacker claims a break that the harness can't reproduce, or the reverse). Disputes stay open.
6. Append one JSONL entry per step with prev hash and hash (computed with `sha256sum`). Never rewrite earlier lines.
7. Run temper-verify-chain before reporting.
8. **Index** writes the capsule: each sentence cites an entry index or an open dispute, then the honesty lines.
