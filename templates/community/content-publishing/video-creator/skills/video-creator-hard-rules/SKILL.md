---
name: video-creator-hard-rules
description: "Binding rules: speed, machines, voice, authoring, upload, visuals, script, QA"
---

Use for binding rules or conflict rulings. Precedence: owner's newest word > FEEDBACK-RULEBOOK > these rules > other skills. New rules take the next free number in their group.
> Pipeline: research deep dive -> script -> single-pass VO -> one cohesive look+scene pass -> render -> plan-slotted join + soft bed -> join safety (R-Q2) -> mechanical QA gate (R-Q1) -> rulebook check -> [review] -> unlisted upload. Full visual QA roles stay retired.

## A Speed
R-SP1 Fan out every independent lane at once. R-SP2 Start downstream the moment its input exists. R-SP3 Chain, don't relay: packet -> write -> checks -> fact-check -> pin -> VO is ONE job advanced by markers. R-SP4 Speed never buys a look change. R-SP5 Edit = patch only changed beats; >~25 renders: re-plan. R-SP6 Honest ETAs. R-SP7 Reassign stalled lanes fast. R-SP8 Each check names the slowest lane and unblocks it. R-SP9 Quality first, then speed; each run's process becomes the standard.

## B Machines
R-M1 HARD Small files on COORD_BOX; all heavy media on COMPUTE_MACHINE. R-M2 HARD Never design big-file transfers between machines; master never copied back. R-M3 Only small files cross. R-M4 Design stages onto compute. R-M5 Join, gates and upload run on compute via the gate. R-M6 Mirror coordination files to compute on change. R-M7 Each check verifies the link; down -> LINK_RECOVERY. R-M8 One machine: same folders and gate classes. R-M9 SHARED_MACHINE_HOLD flag at S0, removed at S13. R-M10 Final join, bed mux and mechanical QA run on the owner's strongest local machine, never the box. Never render on the box (single-box Starter tier only, told to owner). Route renders to the less-loaded machine; a machine exporting an edit runs one heavy render at a time.

## C Capacity
R-CAP1 HARD Read live RAM/CPU on both machines before any capacity claim. R-CAP2 Parallel authors = floor((free RAM - floor)/per_author). R-CAP3 Move work, not files. R-CAP4 COMPUTE-HOLD: no new compute jobs. R-CAP5 Deep queue + idle CPU: tune admission. R-CAP6 Each check: fresh loads, rebalance, throttle hogs by PID.

## D Voice
R-V1 HARD One voice model, the owner's clone; never switch or mix silently. R-V2 HARD Never voice-QA the owner's voice (no ASR, WER, bot listening, weaker-model re-check). R-V3 VO pinned once (md5 in vo-handoff). R-V4 Voice audio = timing and gain only. R-V5 Re-generate only a line the owner flags; same model. R-V6 Measure onsets on the wav, not word JSON. R-V7 Head trim at onset -30 ms; picture cut at onset -~100 ms. R-V8 Gaps 120-180 ms in a section, 250-350 ms between; no tail artifacts. R-V9 No hold over ~0.6 s. R-V10 Pace set natively in the provider (e.g. +10%), never time-stretch.
R-V11 HARD Never cut a scene's voice start: beat N's picture lands at or before beat N's onset; never old picture under new speech; pads only after speech; each beat render covers its whole VO slice (re-render short beats).
R-V12 VO is one generation pass: one take, no multi-take pick, no ASR scoring.

## E Authoring
R-A1 HARD Animated scenes: ONE Anthropic Opus-class pass at SCENE_EFFORT (default xhigh) writes look guide, beats, clip/logo placement AND drawing code together, direction baked into the code. Wait for the full kit; remaining scenes may then fan out as parallel authors from it. No creative->executor model split unless the owner asks. Anthropic-only scene authors. Script at SCRIPT_EFFORT (default high). Never max.
R-A2 Log every launch. R-A3 Small same-frame edits direct only if disclosed in the log. R-A4 Verify reported model and effort; wrong = relaunch. R-A5 Never kill a live author before 35 min of no CPU/IO/file change. R-A6 On limits: back off, queue, tell the owner; never downgrade or switch silently.

## F Upload
R-UP1 HARD UNLISTED only. Unlisted upload is part of every run unless the owner says no (AUTO_UNLISTED); public only on the owner's explicit word. R-UP2 The upload record names the gated md5 + duration; GO from GO_AUTHORITY if AUTO_UNLISTED off. R-UP3 Re-hash before upload. R-UP4 Read back before the link. R-UP5 Short-lived token, wiped. R-UP6 Never overwrite/delete old versions. R-UP7 Upload from compute. R-UP8 Sources + credits in description. R-UP9 No social posts.

## G Visual
R-VIS1 HARD Whole timeline locked before any scene or clip cut. R-VIS2 Clips fill the frame (floor 90%, crop <=12%). R-VIS3 HARD Never freeze, loop or repeat b-roll. R-VIS4 Clips never end early. R-VIS5 No leftovers between scenes. R-VIS6 No teleporting. R-VIS7 Text and lines never cover objects, numbers or people. R-VIS8 Key words and important numbers only. R-VIS9 B-roll matches the words; weak match -> animation. R-VIS10 Text never vanishes mid-card; callouts held long enough to read. R-VIS11 Subtle grain, never overwhelming. R-VIS12 Frame 0 composed; purposeful motion to the last frame; no motion for motion's sake. R-VIS13 Credit chip for the whole clip beat. R-VIS14 Labels cue to the spoken word (+-2 frames). R-VIS15 Frame-exact trims. R-VIS16 Re-deliveries list changes. R-VIS17 Safe areas, clear of heads.
R-VIS18 Music ALWAYS soft and in the background, never competing with the voice; err softer; trims cut bed with VO. R-VIS19 One bed_level measure. R-VIS20 Clean bed fades; end-card hold. R-VIS21 BRAND_BLOCK banned words.
R-VIS22 Real footage first; name a person -> their photo; about a post -> the actual post.
R-VIS23 Fair-use clips where they fit: on-screen credit, max 1 min each, logged; the owner's legal call; CLIP_POLICY can disable.
R-VIS24 HARD Named company/product/brand -> its real official logo near the spoken word; never invent a logo.
R-VIS24b Invent-look brief, not a fixed palette: lock the instruction set, never one color scheme.
R-VIS25 Photoreal real products: pin the reference model year/generation; official photos -> image-to-3D (ASSET_3D_TOOL) or a free model, never from-scratch 3D. True scale within 1% of official dimensions; exact colors; re-segment generated textures into flat clean materials (no bleed across glass, trim, lights); trim matches body color unless photos differ; real lights get light materials. Render and inspect every downloaded model before showing (free models can be broken or duplicated). Pick sheets: front/side/rear beside official photos. Locked only on the owner's eye approval, one by one; a numeric photo score never substitutes.
R-VIS27 Licensing: no non-commercial models or assets on a monetized channel; CC BY credit lines in the description; never extract paid models from web viewers.
R-VIS26 Silky transitions; calm infinite-canvas moves; cartoon hands only; no diagonal light sweep; red = blocked.

## H Script
R-S1 Hook hard; first 30-60 s most engaging; stake by ~0:20. R-S2 Plain words (grade 5-6), analogies tied to real-world impact. R-S3 No hedging, restating or filler; owner projections stay theirs. R-S4 A turn every ~120 words. R-S5 Educational feature, never newsy, never AI-sounding. R-S6 Pin after fact-check; pin never moves. R-S7 Facts only from RESEARCH.md. R-S9 Process claims match the launch log. R-S11 Research = live search, dated primary URLs.
R-S12 HARD RESEARCH.md deep dive exists before the script, every run; missing = blocked, never skipped.
R-S13 Script packet = owner idea + direction verbatim + RESEARCH.md + rulebook rules.
R-S14 3 hooks with one method, keep the strongest (meta/HOOKS.md). R-S15 AI-writing-signs + hedge pass, then fact-check; no second full rewrite.

## I Jobs, security, messaging
R-J1 HARD Heavy jobs only via the gate. R-J2 Kill by exact PID; R-J3 never pkill -f. R-J4 Never delete run folders without owner OK. R-J5 One owner per beat. R-J6-J10 No recursive media search; ffmpeg -threads 2; Chrome is heavy; reap stale jobs. R-J11 Pause and ask at SPEND_CAP.
R-SEC1 HARD Never print credentials. R-SEC2 No accounts or 2FA.
R-MSG1 HARD External actions only on explicit order (status + unlisted upload excepted). R-MSG2 Never broadcast stop. R-MSG3 Priority only for blockers/DONE. R-MSG5 Plain words. R-MSG6 Only the Director messages roles.

## K Status
R-C1 Visible routine at run start, deleted at close. R-C2 Routine runs every STATUS_INTERVAL_MIN (5). Default quiet: ping the owner only when they must pick, approve or act, or a review link / final link is ready. 5-minute updates only on request: then an actual message every interval, even if nothing changed. R-C4 Verify before relaying. R-C5 Never fabricate.

## L Freeze, QA, rules
R-F1 ONE builder. R-F2 ONE frozen candidate md5. R-F3 Checks on the named candidate only. R-F4 Frozen file list before final build.
R-Q1 HARD Visual QA roles retired, BUT the quick mechanical pre-upload QA gate is REQUIRED on every video: ALIGN (drift <=~0.5 s), ONSET (R-V11), BED (present + soft), OPEN-CLIP (required clips), FREEZE (blank/frozen scan), JOIN (boundaries match plan). Any FAIL = no upload; re-run after every patch.
R-Q2 HARD Join safety right after the join: real regular file, full decode, frames = beat-table total; tool missing = FAIL.
R-Q3 Delivery says gates are mechanical; the owner's viewing is the review. R-Q4 One upload in flight per run. R-Q5 No upload until every gate passes on the same file.
R-L1 Owner issue -> ISSUE-LOG + root-cause fix in the generating step. R-L2 DECISIONS.md + LAUNCH-LOG current.
R-L4 HARD Every owner note becomes a rule in FEEDBACK-RULEBOOK.md the same day, before fixing: dedupe (xN), latest note wins when it replaces one. RB-LOAD injects relevant rules into research, script and visual briefs; RB-CHECK before review/upload (qa-briefs-2).
R-L5 With REVIEW_TOOL: review comes first; pull comments, log each to the rulebook, fix, re-run mechanical QA. Only real comments are logged; empty polls never write to the lessons log.
