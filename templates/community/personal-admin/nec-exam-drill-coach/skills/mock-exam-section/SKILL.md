---
name: mock-exam-section
description: "Use this when the Weekly Mock Section routine fires or the user asks for a mock section or practice test. Runs a 10-question mixed set from eligible, edition-matched questions only, grades or records each answer once, and writes a weak-topic debrief."
---

# Mock Exam Section

**Review status:** `[needs-code-review]` Questions, answers, and cited sections come from bank records whose AI source check makes them eligible; the "~2 minutes per question" pace is a study suggestion, not an exam-board rule.

**Use this when:** the Weekly Mock Section routine fires, or the user asks for a "mock," "practice test," or "timed set."

## Eligibility rule
```
record.edition === profile.edition && record.source_check.status === "verified" && record.source_check.edition === profile.edition && record.source_check.revoked === false
```

## Session state
`P = learner_state.by_edition[profile.edition]`
`P.mock_session = { mock_id, edition, item_ids[10], item_digests: { id: sha }, mode: "per-question" | "at-end", cursor, answers: { id: letter }, applied_ids: [], started_on, occurrence_key, status: "in_progress" | "awaiting_submit" | "completed" | "abandoned" | "invalidated" }`
At most one session per edition can be open (`in_progress` or `awaiting_submit`).

## Eligibility re-check (applies throughout)
A record's eligibility and content can both change after a mock starts. Re-check every item against the eligibility rule **and** confirm its current `source_check.content_sha256` still equals the digest stored in `item_digests[id]`:
- when a session is resumed (all 10 items),
- before presenting each item,
- before grading or applying each answer, including on `submit`,
- before applying a `change N to X`.
If any item in the session fails this re-check: set `status: "invalidated"` right away. Don't show, grade, or apply that item or any other not-yet-applied item. Don't append a score. Per-question grades already in `applied_ids` are kept. Tell the user: "One of these questions was pulled back for review, so I've closed this mock without scoring it."

## Start
1. **Edition gate.** Without `profile.edition`, ask interactively. A routine sends nothing.
2. **Routine ledger, checked first for a scheduled run.** Check `routine_ledger` for this run's `occurrence_key` (see the embedded Routine policy profile memory); an existing entry means quiet, nothing written. Interactive requests never read or write the ledger.
3. **Existing open session (`in_progress` or `awaiting_submit`), or a daily question waiting:**
   - **Interactive:** if a mock session is open, offer to resume it (after the eligibility re-check) or abandon it and start fresh. Otherwise, if `P.answer_target` is open instead (a daily question waiting), say so and ask the learner to answer it or reply `skip`. Don't start the mock.
   - **Routine:** either condition — an open mock session, or a daily question waiting — is busy. Record ledger outcome `quiet-busy` and send nothing. The session (or the daily target) stays open until the user resumes, changes/submits, answers, skips, or abandons it. A scheduled run never abandons a session, and it never stacks a second mock — it never abandons one automatically. It never sends the "answer it or reply skip" prompt above; that's interactive-only.
4. **Eligible pool:** records passing the eligibility rule above for `profile.edition`.
5. **Pool smaller than 10 distinct items:**
   - Interactive: "A full mock needs 10 eligible questions for the <edition> NEC, and <n> currently have a source check. I won't pad it with made-up questions." If n ≥ 1, offer a single daily question instead. Write nothing.
   - Routine: send nothing, record ledger outcome `quiet-empty`.
6. **Build the set:** 10 distinct eligible items. Mix topics (max 3 per topic when the pool allows). Include up to 4 due items from weak topics. Ask whether the user wants feedback after each question (`per-question`) or `at-end` (default: at-end). Suggest a pace of about 2 minutes per question. There is no real timer; this is an exam-style feel only.
7. Create `P.mock_session` with `status: "in_progress"`, `item_digests` set from each item's current `source_check.content_sha256`, and (for a routine start) the run's `occurrence_key`.

## Item presentation and target transitions (X3)
Each item gets its own presentation and its own `answer_target`, exactly like the daily flow, scoped to this mock:
- **Presentation ID:** `<edition>-M<mock_seq>-<NN>` (e.g. `2023-M3-04` for the 4th item of mock 3), minted when that item is first shown.
- **Answer target:** `P.answer_target = { presentation_id, flow: "mock", item_id, content_sha256: record.source_check.content_sha256, mock_id, stage: "question", cursor, occurrence_key }`. At most one target open per edition.
- **Presenting item `cursor`:** mint its presentation ID and open the target above before showing it.
- **At-end mode:** a valid, re-checked answer records the letter in `answers[id]`, closes that item's presentation (append `presentation_id` to `closed_presentations`), and advances `cursor` to open a fresh target for the next unanswered item. After the 10th item's answer is recorded, close its presentation, **clear** `P.answer_target`, and set `status: "awaiting_submit"` — there is no open target while awaiting submit.
- **Per-question mode:** grade the current item exactly once, apply it once (`applied_ids`), close its presentation, clear the target, and advance to the next item's fresh target.
- **Quit, invalidation, or completion** (session becomes `abandoned`, `invalidated`, or `completed`) all clear `P.answer_target` for this edition.
- A reply naming a **repeated or non-active** presentation code — one already closed, or one that isn't the current target — never applies: acknowledge it without grading or recording.

## Answers
- **Valid answer:** a single letter A–D (either case, surrounding words allowed) for the item currently being asked, addressed by `presentation_id` or, right after that item was shown, a bare letter. Anything else, including more than one letter, gets one re-ask. It's not recorded and not graded.
- Record each valid answer in `answers[id]`. An item that already has an answer is not re-answered by a plain reply.

## Grading
- **Per-question mode:** after each valid answer, and after the eligibility re-check, grade it, give its one-line reason with a `cite-nec` citation, send `{ id, correct, presentation_id }` to `weak-topic-tracker` and `spaced-repetition`, and add `id` to `applied_ids`. No changes are allowed in this mode — once answered and graded, an item is final. It completes automatically after the 10th answer.
- **At-end mode:** answers are recorded without feedback and nothing is graded yet.
  - After the 10th answer, `status` becomes `awaiting_submit` and the bot lists all 10 letters back to the user.
  - **`change N to X`** (item number 1–10, new letter X): applies only when item N is **already-answered** — `answers[item_ids[N-1]]` already holds a letter. While `status` is `in_progress` or `awaiting_submit`, re-checks eligibility and the digest for that item first; on failure, follow the eligibility re-check above (invalidate) instead of changing it. Otherwise replaces `answers[item_ids[N-1]]` with X. A change to an item that hasn't been answered yet, or was never presented, is rejected (`not-allowed`) and creates no answer.
  - **`submit`:** re-checks all 10 items (eligibility + digest). If all pass, grade each item once (only those not already in `applied_ids`), add them, and set `status: "completed"`. If any item fails, set `status: "invalidated"` per the section above.

## Completion
On `submit` (at-end) or after the 10th valid, re-checked, graded answer (per-question): set `status: "completed"` and append `{ mock_id, date, score, by_topic, weak_topics }` to `P.mocks`. That is the only time a mock score is written. Then send the debrief card:
```
MOCK SECTION · <edition> NEC · <date>
Score: <x>/10
By topic: <topic> <c>/<n> · …
Focus this week: <1–2 weakest topics> (NEC <sections from missed items>)
Practice aid, not the exam. Exam board and AHJ rules govern.
```
For each missed item, give the correct letter and a one-line reason with its citation via `cite-nec`.

## Partial, invalidated, or abandoned sessions
- The session becomes `abandoned` only when the user says stop or quit, the user starts a new mock, or `profile.edition` changes. It becomes `invalidated` only when an item fails the eligibility re-check (see above). A scheduled run never abandons a session and never invalidates one on its own.
- Per-question mode: results applied before abandonment or invalidation stay applied, since each was graded one time while its record was eligible and unchanged. Nothing else is applied.
- At-end mode: recorded but ungraded answers are discarded on abandonment or invalidation. No tracker or spaced-repetition updates for items not already in `applied_ids`.
- An abandoned or invalidated session never appends to `P.mocks` and never gets a score.

## Validation
- The session has exactly 10 eligible, edition-matched items at start, or no mock at all. Never generated or ineligible filler.
- No item is shown, graded, or applied after it fails the eligibility re-check.
- Each item is applied to learner state at most once, and the score is written only on completion (`submit` or the 10th per-question grade).
- `change N to X` only affects an uncompleted at-end session and never touches `applied_ids` by itself.
- No verbatim NFPA text. No live-work instructions.
