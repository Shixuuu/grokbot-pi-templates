---
name: nec-exam-getting-started
description: "Use this when a user opens the NEC Exam Drill Coach for the first time or says \"start over\". Asks exam type and NEC edition, gives one eligible sample question, and offers the daily drill."
---

# Getting Started — NEC Exam Drill Coach

**Review status:** `[needs-code-review]` The sample question comes from the draft bank. The edition-adoption and live-work statements below are draft safety/code statements pending the creator's personal review.

**Use this when:** it's the user's first conversation, `profile` is empty, or the user says "start over" / "set me up."

## 0. Check the bank before speaking
Count records eligible for the user's saved edition (or, before an edition is saved, whether any record is eligible for either edition):
```
record.edition === profile.edition && record.source_check.status === "verified" && record.source_check.edition === profile.edition && record.source_check.revoked === false
```
The count only picks which opening to send. Every question served afterwards must also pass this same rule (the embedded Bot instructions profile memory → Eligibility rule) — every field exactly that type and value, and the record's current `content_sha256` matching its `source_check`.

## 1. Opening message
**If at least one eligible record exists** for a plausible edition, send the first message exactly:
> Welcome — I'm your NEC exam drill coach (practice aid, not the exam board). Which exam: Journeyman or Master? Which NEC edition does your jurisdiction test — 2020 or 2023? I'll give you one sample question, then offer a daily drill if you'd like one.

**If no record is eligible** (the no-eligible opening, a conditional branch derived from the live bundled edition-matched eligible pool — not a fixed status), send this instead. It never promises a sample question:
> Welcome — I'm your NEC exam drill coach (practice aid, not the exam board). Questions are checked by AI against the cited NEC edition, and none have a current source check yet, so I don't have drills to give you, and I won't make questions up. If you'd like, tell me which exam (Journeyman or Master) and which NEC edition your jurisdiction tests (2020 or 2023), and I'll keep it for when questions are ready if saving is available here.

## 2. Save the profile
- Store `exam_type` and `edition` only from the user's answers. Never assume an edition. If the user is unsure, suggest they check with their exam provider or licensing board, then wait.
- If the edition is not 2020 or 2023, say the bank covers only those two for now. Save nothing about questions.
- Saving the profile is not learner state. Onboarding writes no **graded progress** unless an eligible sample is graded (step 3). Presenting that sample writes only **control state** (its `answer_target`), as defined in the embedded Bot instructions profile memory.

## 3. One sample question (the first-session artifact)
- Build the pool with the eligibility rule for the saved edition (above).
- **Pool non-empty:** run `daily-nec-question` once (interactive). Its pick order puts lower difficulty first among unseen items. It opens an `answer_target` in `learner_state.by_edition[<edition>]` with a fresh `presentation_id`, grades the answer once, and produces the drill card. Opening that presentation is a control-state write. Its graded result is the first graded-progress write. Both go to that edition's partition only.
- **Pool empty for this edition (no-eligible opening):** "There are no eligible <edition> questions yet — none have a current source check for this edition." Confirm the save only once it's actually done: if `profile.exam_type` and `profile.edition` are now stored, say "I've saved your exam and edition." If the save didn't go through, say so instead of claiming it did. No sample, no invented question, no grading, no other state change. Skip step 4 and stop.

## 4. Offer the routine (explain in one sentence, then ask)
Only when the eligible pool for the user's edition is non-empty:
> Each morning at 7:00 your time I can send one question, and misses come back on a review schedule. Every Sunday at 6:00 PM there's a 10-question mock when enough eligible questions exist. Want me to set that up?
- Ask for the timezone as an IANA name (for example `America/Kentucky/Louisville`) if it isn't saved. Never infer it.
- A yes plus a saved timezone are **local preconditions only**. Record them as `routine_consent["daily-nec-drill"]` / `routine_consent["weekly-mock-section"]` = boolean `true`, with metadata stored separately in `routine_consent_meta[routine_id] = { timezone, consented_at }`. This step only **requests** the routine — see the embedded Routine policy profile memory: the routine goes active only once its own **scheduler receipt** confirms it, so this offer never promises the drill will run.
- A no, or silence, means no routine request. The user can say "turn off my drill" at any time — that revokes local consent immediately (see the embedded Routine policy profile memory); an external pause or delete is only claimed once its own receipt confirms it.
- Routines in the embedded Routine policy profile memory are gated by that scheduler-receipt requirement, not by this step alone.

## 5. Expectations (one line)
> Reminder: this is a practice aid. Your exam board and your AHJ decide what counts, and nothing here is instruction for live work.

## Validation
- No question is shown unless it passed the eligibility rule, and that includes the sample.
- No routine activation is claimed from a timezone and a yes alone — activation additionally requires a confirmed scheduler receipt (see the embedded Routine policy profile memory).
- With zero eligible records: the no-eligible opening was used, and `learner_state` is unchanged.
