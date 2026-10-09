---
name: temper-verify-chain
description: "use this before any report or when the owner asks: recompute every hash in temper/ledger.jsonl and report the first break, if any"
---

# Temper verify chain

1. Read `temper/ledger.jsonl` line by line.
2. For each entry, recompute its hash (SHA-256 of the entry minus its hash field, same serialization as when written) and check that prev equals the previous entry's hash.
3. Re-hash any artifact files still on disk and compare with the recorded artifact sha256.
4. Report: `chain OK (n entries)` or `chain BROKEN at entry i: <which check>`. A broken chain is reported as-is. Never repair it by rewriting history; add a new entry that records the break.
5. Remind: integrity is not truth.
