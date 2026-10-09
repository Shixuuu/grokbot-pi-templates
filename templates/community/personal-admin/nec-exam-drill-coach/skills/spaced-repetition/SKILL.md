---
name: spaced-repetition
description: "Use this when choosing the next question or when the user asks for review. Schedules eligible, edition-matched questions on simple SM-2-style intervals, favoring weak topics that are due."
---

# Spaced Repetition

**Review status:** `[needs-code-review]` This skill schedules bank records. It makes no code claims itself, and every record it can schedule must first pass its own AI source check.

**Use this when:** another skill needs the next question, or the user asks to "review" or "go over my misses."

## Eligibility rule
```
record.edition === profile.edition && record.source_check.status === "verified" && record.source_check.edition === profile.edition && record.source_check.revoked === false
```

## Eligible items
Only records passing the eligibility rule above (exact match; an item eligible for one edition is never scheduled for the other). All state lives in `P = learner_state.by_edition[profile.edition]`.

## Item states
- **Unseen:** the item has **no entry** in `P.items`. There is no default box. An unseen item is not "box 0."
- **Scheduled:** the entry holds `{ box, due, last_result, last_graded_at }`, created on the first graded answer.

## Intervals (keyed by the box after the update)
| Box after update | Next due |
|------------------|----------|
| 0 | tomorrow (1 day) — after any wrong answer |
| 1 | +1 day |
| 2 | +3 days |
| 3 | +7 days |
| 4 | +14 days |
| 5 | +30 days (max; stays at 5) |

## Update rules (called once per graded answer)
- **First graded answer (unseen item):** correct → create with `box = 1`, `due = today + 1 day`. Wrong → create with `box = 0`, `due = today + 1 day`.
- **Existing item:** correct → `box = min(box + 1, 5)`, `due = today + interval[box]`. Wrong → `box = 0`, `due = today + 1 day`.
- Set `last_result` and `last_graded_at = today`. Dates use `profile.timezone`; if it isn't saved, use the conversation's calendar day and ask for the timezone before any routine is offered.
- Example: an unseen item answered right goes to box 1 (due in 1 day), then box 2 (+3), box 3 (+7), box 4 (+14), and box 5 (+30). A miss at any point goes to box 0 (due tomorrow), and the next correct answer goes to box 1.
- Exactly one update per grading event, identified by its `presentation_id`. Callers pass a grading event once (see `daily-nec-question` step 9 and `mock-exam-section`).

## Pick order (returns one item or "none")
1. **Due** items (`due` ≤ today) in the top-3 weak topics from `weak-topic-tracker`, oldest due first.
2. Other **due** items, oldest due first.
3. **Unseen** items, favoring weak topics, then topics with the fewest attempts, then lower difficulty.
4. Otherwise return "none." The caller decides whether to stay quiet (routine) or offer an early review (interactive).
Both the daily routine and interactive requests use this same order. "Due or unseen" is the selection set everywhere.

## Validation
- The returned item is eligible and matches the edition.
- No write happens when nothing was served or the item wasn't eligible.
- The first correct answer on an unseen item lands in box 1 with a 1-day interval; box 1 is never skipped.
