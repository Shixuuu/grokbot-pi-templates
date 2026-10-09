---
name: cut-mistakes-and-repeats-review-gated
description: "Use when removing stutters, repeated words, false starts or retakes after cut-silences, with every cut reviewed and approved before rendering."
---

# Cut mistakes and repeats (review-gated)

Second step of the talking-head cleanup pipeline, after `cut-silences`. It removes stutters, repeated words, false starts and retakes, keeping the best take. This is judgment, not formula. Emphatic repetition ("never, never") and rhetorical doubling look exactly like stutters to a machine. So the step is review-gated: the detector proposes, a person decides, and only approved cuts are rendered. This is the hand-run version of the proposal-only cleanup in `podcast-edit-doctrine`.

## Flow
1. **Find candidates** on the silenced transcript, so cuts land on the silenced timeline. Use a bundled helper script (if available), or scan the words directly for three types:
   - stutter: an immediate repeat of the same word or fragment;
   - retake: a near-duplicate segment (high word-overlap or Jaccard similarity) where the speaker started a sentence over;
   - false start: a short abandoned phrase followed by a restart.
2. **Review (required).** Read each candidate's removal along with its context; don't trust a "recommend" flag blindly. Common false positives are emphatic repetition, a copula followed by a question, and lists. Present each item with a recommendation and collect approvals. Write `approved-cuts.json`: `{"cuts":[{"start":100.93,"end":101.06,"reason":"I- false start"}]}`, in seconds on the input timeline. Widen a retake so it runs from the start of the botched take to the clean restart.
3. **Apply** only the approved ranges, with the same trim/concat ffmpeg method as `cut-silences`. Run a dry run (plan only) first, then render. Output the cut list, a retimed transcript, a decisions log and the clean video, with audio and video in sync.
4. **Eyeball the cuts.** Build a simple side-by-side review: original and edited, with each cut listed and a jump link for each one. Play every join.

## Notes
- Zero cuts on a clean delivery is a valid result. Never cut to hit a quota.
- A cut between two words is a hard join; add a 20-30 ms fade for tighter audio.
- Keep meaningful hesitation and character. House style keeps repetition like "I guess, I guess" and keeps setup lines when they carry uncertainty, humor, conviction or context. Don't over-edit (see `podcast-interview-story-editing`).
- Low ASR confidence is never a reason to cut.
- Multicam: apply the same approved ranges to every ISO mic and every camera so the stack stays phase-aligned.
- Hand the retimed transcript and the clean video to the next stage: `camera-direction` and `hide-jump-cuts` for multicam, or `short-form-edit` for reels.
