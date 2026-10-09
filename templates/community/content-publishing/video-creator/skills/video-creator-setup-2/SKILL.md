---
name: video-creator-setup-2
description: "Setup 2: media/YouTube/review/3D PARAMs, preflight, tool contracts."
---

Use for setup part 2: footage/music/brand/YouTube/review/3D PARAMs, preflight P1-P20, tool contracts.

## Parameters (cont.)
STOCK_SOURCES (>=1 free, e.g. Pexels); STOCK_API_KEYS SECRET. CLIP_POLICY: fair-use credited, <=1 min (R-VIS23); never loop. ALLOW_AI_FOOTAGE no.
MUSIC_BED: very soft royalty-free lofi, not AI-tagged, long enough. BED_TARGET: bed ~24-28 dB under VO loudness, ducked under speech; err softer; master -14..-15 LUFS, TP <=-1.2; tol 1.5 dB.
BRAND_BLOCK (banned words, disclaimer). DISCLOSURE_BEAT off. RENDER_FORMAT default 1920x1080 30 fps (4K60 if compute allows); 2D for explainers; 3D only when the topic needs it, bright and welcoming.
YT_CHANNEL; YT_OAUTH SECRET (refresh token in secret store; short-lived token wiped, R-UP5); YT_DEFAULTS unlisted. X_ACCOUNT off.
REVIEW_TOOL optional (e.g. Frame.io): upload candidate, share link, pull comments on owner's word. Tokens SECRET.
ASSET_3D_TOOL optional (image-to-3D from official photos, e.g. Higgsfield). SPEND_CAP: pause and ask when paid generation goes well past it.
RUN_ROOT. MAX_PAUSE_S 0.6. OUTRO_TEXT. RULEBOOK = bot-level FEEDBACK-RULEBOOK.md. RAM_PER_AUTHOR_MB; RAM_FLOOR_MB 900.

## Preflight (meta/PREFLIGHT.md; any FAIL blocks)
P1 box/clock. P2 compute tools. P3 link. P4 gate + kill-by-id. P5 voice, no ASR. P6 CLI model/effort. P7 research URLs. P8 stock. P9 bed_level. P10 YouTube dry-run, token wiped. P11 notify. P12 routine. P13 corpus. P14 brand/fonts. P15 join_check + mech_qa FAIL a truncated copy and an early-onset cut. P16 author RAM. P17 hold flag. P18 review/3D tool auth (no spend).

## Tools (via gate; ffmpeg -threads 2)
gate run --class render|encode|light --on auto|box|compute; status; kill <id>; procwatch.
bed_level <master> <clean_vo>: one definition of bed under voice (R-VIS19).
join_check <video> <expected_frames>: R-Q2.
mech_qa <master> <beat_table> <clean_vo> [--open-clip b01]: the R-Q1 gate (qa-briefs-1); exit 1 on any FAIL.
author-launch.sh: logs launch-log.tsv; rejects max and non-Anthropic scene models.
