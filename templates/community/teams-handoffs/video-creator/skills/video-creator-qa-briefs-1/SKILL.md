---
name: video-creator-qa-briefs-1
description: "Join safety check + quick mechanical pre-upload QA gate (onset, bed, drift)."
---

Use for the two required checks: join safety (R-Q2) and the quick mechanical pre-upload QA gate (R-Q1). Full visual QA roles stay retired.

## Join safety (R-Q2)
Editor, right after the join, on compute via gate, seconds. PASS only if: real regular file (not symlink/pointer/0-byte), full decode exit 0 with no errors, decoded frames == frozen beat-table total. Tool missing = FAIL.

## Mechanical QA gate (R-Q1), every video, before review/upload
Scripted measurements, no visual judgment, adapt per run:
ALIGN: master duration vs VO + plan; drift <=~0.5 s anywhere.
ONSET: for every beat start, scan ~0.5-1.0 s: speech energy of beat N while picture is still beat N-1, or a truncated first word = GATE-ONSET-FAIL (R-V11). Measure on the wav.
BED: music present under the VO through the whole video and soft (BED_TARGET via bed_level); VO-only = FAIL; too loud = FAIL.
OPEN-CLIP: REQUIRED_OPEN_CLIP present in its beat (real footage, not a placeholder or still) when set.
FREEZE: no blank/black or frozen runs beyond planned holds.
JOIN: beat boundaries land where the plan says (plan-slotted, not naive concat).
Write qa/MECH-QA.md + the MECH QA line. Any FAIL = no upload; fix join/slotting or re-render short beats, then re-run join_check + mech_qa on the new master. Re-run after every patch.

## If someone asks for full QA
The owner's explicit order wins for that video (log DECISIONS.md). Otherwise no visual re-render loops; owner-spotted defects become rulebook rules + ONE patched rebuild.
