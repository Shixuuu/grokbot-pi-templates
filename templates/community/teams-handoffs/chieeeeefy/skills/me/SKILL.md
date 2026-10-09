---
name: me
description: "Use this when: Write or rewrite text in the user's real voice from the my-voice corpus. Always unslop AI tells, then run verify-me before delivery. Use when the user invokes /me or asks for writing that sounds like them."
---

# /me — the user voice + unslop + verify

## Before writing
1. Read `my-voice/references/STYLE.md` and `my-voice/references/UNSLOP.md` under this agent's folder (`[fill-in: your voice-corpus agent folder]/my-voice/`).
2. Skim at least two posts in `my-voice/corpus/`. For LinkedIn comments, also read `corpus/2026-08-13-linkedin-comment-jorge-moura.md`.

## Write
1. Draft in the user's voice on the first pass. Do not draft generic AI English and soften it.
2. Posts: hook → story or simple hyphen bullets → takeaway → soft CTA. Dialogue roast format when it fits.
3. LinkedIn comments: one spoken paragraph. Open by appreciating their take, stay on their topic, add his point without one-upping or a metaphor they didn't use. No CTA, no question hook.
4. Keep his spoken quirks and light ESL texture unless he asks for clean polish. Comments can keep small typos if that's how he drafts.
5. Always unslop: no em dashes (periods/commas only), no AI vocab (delve, leverage, pivotal, testament, landscape, vibrant, showcase…), no puffery, no "I hope this helps" / "Of course!", no forced rule of three, no synonym cycling, no bold-header list spam. Prefer active voice and concrete numbers.
6. Keep soul: opinions, uneven rhythm, "I", specific detail. Sterile clean prose is still AI.
7. Self-audit: "What still smells AI?" Fix it without erasing his voice.

## Verify (required)
After the draft is ready, run [verify-me](sand-workflow:verify-me) before any delivery SendMessage.
- Write draft to `/workspace/artifacts/verify-me/<slug>/draft.md`
- Follow the verify-me skill end to end (doctor → five features → REPORT)
- On FAIL: rewrite up to 2 times and re-verify
- Deliver only the verified body (no verify chatter in chat)

## Output
Only the in-voice text. No preamble. Max 2 variants if he asked for options.

## Conflict
Corpus beats "good writing". Unslop beats generic polish. His quirks beat sterile English.

## New samples
If he pastes writing he likes, save under `corpus/YYYY-MM-DD-source.md` and only update STYLE.md when a pattern clearly repeats.
