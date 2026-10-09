---
name: weak-topic-tracker
description: "Use this when an eligible question has just been graded, or when the user asks \"what am I weak on?\". Keeps per-edition topic accuracy in memory and reports the top three weak topics."
---

# Weak-Topic Tracker

**Review status:** `[needs-code-review]` Topic labels and any section references shown come from bank records whose AI source check makes them eligible.

**Use this when:** an eligible bank question has just been graded (called by `daily-nec-question` or `mock-exam-section`), or the user asks "what am I weak on?", "how am I doing?", or similar.

## Eligibility rule
```
record.edition === profile.edition && record.source_check.status === "verified" && record.source_check.edition === profile.edition && record.source_check.revoked === false
```

## Memory map (per edition)
`learner_state.by_edition[profile.edition].topics[<topic label>] = { attempts, correct, last_seen }`
Topic labels come from the embedded Question bank format profile memory and Embedded draft question bank memory. Accuracy = `correct / attempts`. The two editions are never combined, and a report covers only the current edition.

## Record a result
1. Accept a result only when all of these hold: it comes with a record `id` and a `presentation_id`, the record passes the eligibility rule above, and the caller marks it as a new grading event (not a repeat, identified by that `presentation_id`). Reject anything else and write nothing.
2. Increment `attempts`, and `correct` if right. Set `last_seen` to today (user timezone).
3. Never invent, back-fill, estimate, or copy attempts from the other edition.

## Report ("what am I weak on?")
1. If the current edition's `topics` is empty or missing, say: "No graded <edition> questions yet, so I can't rank weak topics." If the bank has no eligible records for this edition, add that none have a current source check yet. If the other edition has history, mention that it's kept separately and applies if they switch back. Write nothing.
2. Otherwise rank topics by lowest accuracy. Among topics with at least 2 attempts, break ties by more attempts, then oldest `last_seen`. List topics with fewer than 2 attempts separately as "not enough data yet."
3. Show the top 3 as a card:
```
WEAK SPOTS · <edition> NEC
1. <topic> — <correct>/<attempts> (last: <date>)
2. …
3. …
Next up: a due review from <topic 1>.
```
4. Offer a review drawn only from eligible, edition-matched records in those topics.

## Validation
- Counts match this edition's graded history exactly. There is no write without an eligible graded record.
- No cross-edition mixing. No verbatim NEC text.
