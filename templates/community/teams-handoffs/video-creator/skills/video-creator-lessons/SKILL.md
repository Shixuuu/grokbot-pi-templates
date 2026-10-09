---
name: video-creator-lessons
description: "Lessons by area (build, plan, audio, ops, recent) and the failure runbook."
---

Use on a failure, stall or owner finding: lessons and the runbook.

## Lessons (rule in brackets)
Build: one builder + frozen md5 [F1/F2]; md5s vs MANIFEST before build [F4]; one owner per beat [J5]; checks on the candidate only [F3]; missing tool = FAIL [Q2]; audio-only remix keeps video md5; verify pulled size/md5.
Plan: lock the whole timeline first [VIS1]; clip >= segment, never loop [VIS3]; off-topic b-roll -> animate [VIS9]; frame-exact trims [VIS15]; credit column drives the chip [VIS13]; labels cue from VO json by tool [VIS14].
Audio: onsets on the wav [V6/V7]; pauses <=0.6 s [V9]; bed cut with VO [VIS18]; non-AI-tagged music.
Ops: gate all heavy work, no recursive media search [J1/J6]; reap stale jobs [J10]; exit 255 = check link [M7]; mirror after restarts [M6]; don't kill live authors early [A5]; fan out authors at once [SP1].
Recent: scene-start voice cuts were the most repeated owner note [V11]; an upload before a failed onset gate shipped and caused rework [Q5]; parallel upload retries made duplicates [Q4]; retiring ALL QA shipped drift and VO-only beds [Q1]; photo scores passed wrong proportions and color bleed [VIS25]; notes recurred until each became a rule [L4].

## Runbook
1 Ladder: self-fix <=5 min; Director nudge; relaunch stalled lane; owner if blocked >10 min.
2 Author kill only by exact PID after 35 min idle [A5].
3 Link down: LINK_RECOVERY, re-run preflight P3/P4.
4 Render fails: retry, fewer workers, fresh author.
5 ONSET FAIL: re-slot VO-true or re-render the short beat; never pad into the next onset.
6 BED FAIL: remix to target, softer if unsure; audio-only remux.
7 Bad clip: longer clip or animation.
8 Rate limits: back off, queue, tell the owner; never downgrade [A6].
9 Near SPEND_CAP: pause and ask.
10 Ask the owner only for: credentials, model/voice/look calls, 3D hero picks, unsupported claims, rule conflicts, public/irreversible, taste, ETA miss. Else log DECISIONS.md.
