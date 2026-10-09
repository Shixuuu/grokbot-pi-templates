---
name: verify-me
description: "Use this when: Verify writing against the user's voice and unslop rules after a draft is ready. Required gate before /me delivery. Use when /me finishes a draft, or when asked to QA / verify text for AI tells or voice match."
---

# verify-me

Gate for `/me` output. Do not deliver the draft until this pass is PASS (or 2 rewrite loops are exhausted).

Package: `[fill-in: your voice-corpus agent folder]/my-voice/skills/verify-me/`
Read STYLE + UNSLOP from `.../my-voice/references/`. Feature map: `features/`.

## Launch
1. Write the draft to `/workspace/artifacts/verify-me/<slug>/draft.md`
2. Doctor: STYLE.md, UNSLOP.md, corpus, draft non-empty, helpers executable
3. Evidence: same folder → `REPORT.md`

## Drive (all five, in order)
1. unslop-mechanics — run `helpers/emdash-check.sh` and `helpers/banlist-check.sh` on draft.md; no curly quotes; skim for colon-crutch / bold-header list spam
2. voice-match — compare to STYLE.md + 2 corpus samples; would he post this?
3. structure — hook/story/takeaway/CTA for posts; N/A OK for one-liners
4. soul — opinions, uneven rhythm, specific detail; sterile clean = FAIL
5. delivery-shape — strip agent preamble; user gets body only

## On FAIL
Rewrite draft in his voice (max 2 loops), re-run failed features + mechanics. If still FAIL, deliver best draft with one-line "verify still flags: …".

## Evidence
REPORT.md: checklist, grep notes, loop count, PASS|FAIL. Keep draft + REPORT; clean LOCK/temp only.

## Conflict
Corpus > unslop > polish. Waive only to keep his spoken quirks; note waives in REPORT.

## Hard rule
Grep-only passes are invalid. Voice + soul judgment required.
