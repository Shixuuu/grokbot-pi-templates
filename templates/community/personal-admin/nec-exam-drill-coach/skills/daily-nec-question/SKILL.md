---
name: daily-nec-question
description: "Use this when the user asks for today's question or says \"quiz me\", or when the Daily NEC Drill routine fires. Serves one eligible question, grades it once, and explains it with a citation."
---

# Daily NEC Question

**Review status:** `[needs-code-review]` Any code content this skill shows comes from bank records, which stay draft in `jason_verified` until the creator personally reviews them; eligibility itself comes from each record's own AI source check.

**Use this when:** the user asks for today's question, says "quiz me" or "give me one," or the Daily NEC Drill routine fires.

## Eligibility rule
```
record.edition === profile.edition && record.source_check.status === "verified" && record.source_check.edition === profile.edition && record.source_check.revoked === false
```
See the embedded Bot instructions profile memory for the full field-level rule, strict typing, and the trust-boundary that chat/pasted content can never grant eligibility.

## Inputs
- `profile.edition` (required), `profile.exam_type`, `profile.timezone`
- Question bank records (see the embedded Question bank format profile memory and Embedded draft question bank memory)
- `P` = `learner_state.by_edition[profile.edition]` (may not exist yet)

## Steps
1. **Edition gate.** If `profile.edition` is missing, ask for it interactively ("2020 or 2023? Check what your jurisdiction's exam uses.") and stop. A routine run sends nothing.
2. **Routine dedup and ordering, checked before any selection (X2).** A routine run applies this order and stops at the first match:
   1. Invalid consent, timezone, or scheduler capability for this occurrence (see the embedded Routine policy profile memory) — quiet, no writes.
   2. `routine_ledger` already holds an outcome for this run's `occurrence_key` — quiet, no writes.
   3. A new, valid occurrence that is busy or already answered — record exactly that outcome and stop:
      - `quiet-busy` — `P.answer_target` is open in either flow, or `P.mock_session.status` is `in_progress` or `awaiting_submit`, for this edition (a question or mock is already out, including from an earlier or retried run today);
      - `quiet-answered-today` — any item in `P.items` has `last_graded_at` equal to today in the user's timezone.
   4. Otherwise, continue below and record `presented` once a question is actually shown (step 7). Empty-pool and caught-up outcomes are recorded further on, once the pool and spaced-repetition are checked (steps 5–6).
   A scheduled busy branch never sends an interactive "answer or skip" or "resume or quit" prompt — those belong to the interactive check below. Interactive requests never create or read `routine_ledger` entries.
3. **Interactive with an open answer target.** Before anything else, check `P.mock_session` for this edition: if its `status` is `in_progress` or `awaiting_submit`, block interactive daily selection — this holds even when `P.answer_target` is empty, since an `awaiting_submit` mock has none — and offer to resume or quit it instead (see `mock-exam-section`). Don't present a daily question.
   Otherwise, if `P.answer_target.flow === "daily"` is open: re-check the presented record against the eligibility rule and its stored `content_sha256` before doing anything else; eligibility and content can both change after a question is sent.
   - Still eligible and unchanged: show that same question again, with its existing `presentation_id`. Never send a second one.
   - No longer eligible, or its content changed: close the presentation without grading, clear `P.answer_target`. Say "That question was pulled back for review, so I won't use it." Then continue at step 4 as a fresh request.
4. **Build the eligible pool:** records passing the eligibility rule above for `profile.edition`. Drop every other record without showing it.
5. **Empty pool:**
   - Interactive: "No questions have a current source check for <edition> yet. I won't make one up. I can save your exam type and edition so you're ready when they are." Stop. Do not write to `learner_state`.
   - Routine: send nothing, record ledger outcome `quiet-empty`. Stop.
6. **Pick one** by calling `spaced-repetition`. It returns a **due** item or an **unseen** item, in its pick order. If it returns none:
   - Interactive: say you're caught up and offer one early review of an eligible, already-seen item.
   - Routine: send nothing, record ledger outcome `quiet-caught-up`.
7. **Open an answer target.** Mint a new `presentation_id` (e.g. `<edition>-D-<NNNN>`). Set `P.answer_target = { presentation_id, flow: "daily", item_id, content_sha256: record.source_check.content_sha256, mock_id: null, stage: "question", presented_on, occurrence_key }` (creating `P` if needed). Then show the stem, the four choices labeled A–D, and the `presentation_id`, without the answer.
8. **Accept an answer** only while `P.answer_target` (flow `daily`) is open. A reply naming the `presentation_id` binds to it; a bare letter A–D binds only if this question was shown in the immediately preceding message, otherwise ask the learner to confirm with the code. If the reply is unclear or has several letters, ask once more and don't grade. If the user says `skip`, close the presentation with no grading; if it came from a routine occurrence, its ledger outcome becomes `skipped`.
9. **Re-check, then grade exactly once.** Immediately before grading, re-check the record against the eligibility rule and confirm its current `content_sha256` still equals the one stored on `answer_target`. If either check fails, close the presentation without grading, clear `answer_target`, and write nothing else — tell the user it was pulled back for review. Otherwise compare the answer to the record's `answer`, then close the presentation, clear `answer_target`, and append its `presentation_id` to `closed_presentations`. Any later reply naming that `presentation_id` gets "Already graded — want another?" and is not graded again.
10. **Explain** via `cite-nec`: the correct choice, why each wrong choice fails, the section, and the edition. Use only the served record's eligible `explanation` and `nec_section`. Add no code claims of your own and no NFPA wording.
11. **Update state once:** pass `{ id, correct, graded_at, presentation_id }` to `weak-topic-tracker` and `spaced-repetition`, both on partition `P`.
12. **Output the drill card** (below).

## Output — shareable drill card
```
NEC DRILL · <edition> NEC · <topic label> · <presentation_id>
Q: <stem>
A) … B) … C) … D) …
Answer: <letter> — <one-line why>
Cite: NEC <nec_section> (<edition>) · paraphrased
Next review: <due date from spaced-repetition>
Practice aid, not the exam. AHJ and your exam board govern.
```

## Validation
- The record served passed step 4. Never serve a record that fails the eligibility rule, whose `edition` differs from `profile.edition`, or whose current `content_sha256` doesn't match its stored `source_check.content_sha256`.
- At most one `answer_target` per edition partition, across both flows. A routine never sends while one is open, while a mock is `in_progress` or `awaiting_submit`, or after a question was answered today — it records the matching quiet outcome instead.
- Each presentation is graded at most once, and only if its record is still eligible and content-unchanged at grading time.
- No question text was generated, reworded into a new question, or taken from outside the bank.
- No verbatim NFPA text. Nothing instructs live electrical work.

## Approvals
None needed to serve an eligible record. The template creator's personal `jason_verified` review is separate and has no effect here.
