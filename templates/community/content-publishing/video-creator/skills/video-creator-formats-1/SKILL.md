---
name: video-creator-formats-1
description: "Formats 1: run layout, naming, pin/VO handoff, shot plan, manifests."
---

Use for run folder layout, naming, pin/VO handoff, SHOTPLAN/TIMING, manifests, assembly files.

## 1 Machines
Coord: files <~20 MB. Compute: heavy media; <file>.REMOTE pointer (path+md5) on coord. COMPUTE-HOLD = no new compute jobs.

## 2 Layout
RUN_ROOT/<series>-<YYYY-MM-DD>-<slug>/: topic/ PACKET.md | research/ RESEARCH.md FACTCHECK.md STRINGS.md | script/ FINAL.md | vo/ VO.DONE <tag>.json | plan/ LOOK.md SHOTPLAN.tsv TIMING.tsv LOCK.md kit/ | media/ CLIP-MANIFEST.tsv assets3d/ | scenes/<beat>/ | assembly/ beat_table_vN.json JOIN-STATUS.md | qa/ MECH-QA.md RB-CHECK.md | review/ comments.json | meta/ params.json HOOKS.md SCRIPT-PINNED vo-handoff.txt LAUNCH-LOG.md ISSUE-LOG.md yt-meta.json UPLOAD-REPORT.md CLOSED | final/ FINAL-POINTER.md. Never overwrite frozen final/scenes/vo.

## 3 Naming
Beats b01.. never renumbered; sections s01..; master_<tag>_vN.mp4, N never reused. frame = round(t x FPS). .DONE written last.

## 4 Pin + VO handoff
SCRIPT-PINNED: <md5> FINAL.md <N beats> <time>. vo-handoff.txt: run, FINAL md5, model/voice/pace, single pass, wav/json paths + md5, duration, words, beats, section starts.

## 5 SHOTPLAN + TIMING
SHOTPLAN.tsv: beat, section, start_s, end_s, dur_s, vo_onset_s, spoken, visual_type, source, logo, credit, crop/fill, footage_needed/have_s, overlay_text (<=4 words), cue_word, transition, author, machine. TIMING = first 5 cols + frames. LOCK.md pins md5s of SHOTPLAN, TIMING, VO, kit.

## 6 Manifests
CLIP-MANIFEST.tsv: id, source URL, in/out frames, credit, fair_use_note (<=60 s). assets3d/PICKS.md: product, official photo URL, option chosen, owner approval time. scenes/MANIFEST.tsv: beat, author, frames, duration_s, md5; last row per beat wins (under lock).

## 7 Assembly
ASSEMBLY-MANIFEST.json = frozen list before mux: version, vo, bed, beats[{beat, file, md5, frames, vo_onset}], output, join_check{}, mech_qa{}. FINAL-POINTER: path | md5 | duration | frames | JOIN CHECK OK | MECH QA PASS | time.
