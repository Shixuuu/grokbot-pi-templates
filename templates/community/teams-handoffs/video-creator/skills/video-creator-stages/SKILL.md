---
name: video-creator-stages
description: "Pipeline S0-S13: research, script, VO, look pass, join, mech QA, upload."
---

Use when running or planning a video: stages S0-S13, owners, outputs. Every brief lists its rulebook rule IDs.

S0 Start (Director): run folder, BOARD.md, preflight PASS, status routine (R-C1), clear stale jobs, hold flag (R-M9). RB-LOAD: read the rulebook, paste relevant rules into each brief (R-L4).
S1 Topic (Research + Director): owner topic, or 10 verified ranked ideas + veto. PACKET.md. Save OWNER_DIRECTION verbatim.
S2a Research deep dive (Research, live search): research/RESEARCH.md = sourced facts (URL+date), numbers, quotes/posts, timeline, counterpoints, real-world impact, plus a media list (people photos, official logos, actual posts, official product photos, recent clips with credits). Catalog topics: ALL milestones with fun facts. Missing = script blocked (R-S12).
S2b Script, one chained job (Writer): packet gate (R-S13) -> 3 hooks, pick one -> outline -> write at SCRIPT_EFFORT (AI-writing-signs list loaded first) -> AI-writing + hedge scan -> Research fact-check vs RESEARCH.md (cut failures, never hedge) -> PIN; no second full rewrite (R-S6/S15).
S2c Voice (Writer): single generation pass with pace setting (R-V12); gaps per R-V8; gain only; vo-handoff + VO.DONE.
S3 Prep (parallel from S1): Editor toolchain, bed test, mirror, fetch media list; yt-meta skeleton + token dry-run; Visuals 3D picks if products (R-VIS25, owner picks one by one).
S4 Look + plan lock (Visuals): real refs, posts, logos and b-roll locked from the media list first; then ONE cohesive Opus-class pass at SCENE_EFFORT from the invent-look brief (hand-recipe-1): look guide, beats tiling the VO (cut = onset -~100 ms), clip/logo/photo placement, cue words, drawing code. SHOTPLAN, TIMING, LOCK.md. Wait for the full output. First videos: 1-min preview to owner.
S5 Remaining scenes: parallel Opus-class authors from the shared kit, one owner per beat, all lanes at once. No self-QA loops.
S6 Clips (Editor, compute): full-frame, on-topic, >= segment, frame-exact; fair-use credited <=1 min; never loop; else animation.
S7 Render (Visuals, gate, compute): RENDER_FORMAT; each beat >= its VO slice (R-V11); MANIFEST under lock.
S8 Join prep (Editor): clean VO, beat table, vo-gaps, soft bed (R-VIS18).
S9 Join (Editor, ONE builder, strongest local machine, R-M10): frozen list -> per-beat encodes -> plan-slotted VO-true join -> mux VO + soft bed -> join_check (R-Q2) -> mech_qa (R-Q1). FAIL: re-slot or re-render, re-run. Announce ONE candidate.
S9b RB-CHECK (Director): script, plan, master vs every active rule; fix; re-gate.
S10 Review (if REVIEW_TOOL): link to owner, wait, pull comments on their word, RB-APPEND each, fix, re-gate; owner may skip.
S11 Upload (Editor): single-flight; only after all gates PASS on this md5 (R-Q4/Q5); AUTO_UNLISTED or GO; re-hash, unlisted, token wiped, readback.
S12 Deliver (Director): link, duration, md5, caveats (gates are mechanical; owner's viewing is the review), "say GO PUBLIC to publish".
S13 Close: delete routine, lift holds, RB-APPEND + ISSUE-LOG every owner note and fix the generating step (R-L1/L4), ARTIFACTS, LEDGER, CLOSED. Clean heavy files only with owner OK (R-J4).
Parallel: fan every lane; start on input; per-beat encodes as scenes land; metadata during authoring; owner changes = ONE patched rebuild, then all gates.
