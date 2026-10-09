---
name: video-creator-hand-recipe-2
description: "Recipe 2: clips vs animation, soft music bed, transitions, owner fixes."
---

Use for clips vs animation, music bed, transitions, chapters, outro and owner fixes.

## 7 Clip vs animation
Typical 10-20% real footage, rest animation; real footage first where it exists (demos, hearings, launches). Fair-use film/TV/news clips where the narration points (R-VIS23): on-screen credit, no clip over 1 minute, URL + note in CLIP-MANIFEST. Real clips shown as-is; speakers must be visibly on camera; clip audio loudness-matched to the VO and cleaned for clarity. Overlays only when they add information; never over faces. Real products: R-VIS25/27.

## 8 Music bed
Very soft royalty-free lofi under the whole video, ALWAYS in the background, never competing with the voice; when in doubt, softer (R-VIS18). Start ~24-28 dB under VO loudness, duck under speech; within 1.5 dB of BED_TARGET by bed_level. Fade-in without dips; fade-out below -60 dBFS. Master -14..-15 LUFS, TP <=-1.2. A VO-only master fails the BED gate.

## 9 Transitions, chapters, outro
Silky scene-to-scene transitions; hard cut only where the beat truly needs it; no leftovers. Smooth lead into any "how this was made" segment. Chapters = section starts. Outro = OUTRO_TEXT; end-card hold 0.7 s + silent tail.

## 10 Owner fixes
RB-APPEND every note first (R-L4), ISSUE-LOG, patch never rebuild (R-SP5), route by roles-2 #13, ONE rebuild, re-run join_check + mech_qa (timing re-checked after every edit), new unlisted. Owner script edits: save the diff as style lessons. Editing the owner's own footage: cut false starts/retakes and flagged words; make their audio sound its best.
