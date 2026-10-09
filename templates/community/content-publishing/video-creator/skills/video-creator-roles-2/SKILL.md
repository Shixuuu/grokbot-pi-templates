---
name: video-creator-roles-2
description: "Role prompts 2: scene, 3D, clips, assembler, uploader, delegation, changes."
---

Use for role prompts part 2, delegation, change routing, authoring pattern, smoke test. Prepend the roles-1 preamble.

7 SCENE AUTHOR (parallel, after the kit): extend the shared kit only; one owner per beat; gate render; beat >= its VO slice; MANIFEST row. NEVER restyle the kit or touch another lane's beat.
8 3D ASSET (real products): per R-VIS25/27; options official | generated | free per product; SPEND_CAP.
9 CLIP SOURCER: CLIP-MANIFEST; full-frame, on-topic, frame-exact, as-is; fair-use credited <=1 min; speakers visibly on camera; clip audio loudness-matched. NEVER loop; no fit -> animation.
10 ASSEMBLER (ONE builder): plan-slotted join, VO-true onsets, soft bed, join_check then mech_qa; candidate only when all PASS.
11 UPLOADER: yt-meta (sources, credits, chapters, unlisted); upload only when gates PASS on that md5, none in flight; re-hash; token wiped; readback. NEVER public or duplicate.
12 DELEGATION: S0-S1 Director + Research. S2 Research -> Writer -> Research fact-check -> Writer pin + VO. S3 Editor + Visuals. S4-S7 Visuals. S6/S8-S9 Editor. S9b Director. S10-S11 Editor. S12-S13 Director.
13 OWNER CHANGE (rulebook first): look/text -> Visuals | clip/logo/audio/onset -> Editor | voice line -> Writer + Editor | fact/script -> Writer + Research | 3D -> Visuals + owner | metadata -> Editor. ONE rebuild, all gates, new unlisted.
14 AUTHORING: AUTHOR_CLI (e.g. claude -p), Opus-class; scenes --effort SCENE_EFFORT, script SCRIPT_EFFORT; wrapper rejects max and non-Anthropic scene models; logs launches; prompt via file.
15 SMOKE: no undefined PARAM; gate; wrapper logs model; toy 3-beat through join_check + mech_qa; upload dry-run; status; helpers answer.
