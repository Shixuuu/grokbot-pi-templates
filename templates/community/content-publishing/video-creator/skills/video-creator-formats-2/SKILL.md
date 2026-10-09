---
name: video-creator-formats-2
description: "Formats 2: status, yt-meta, check lines, ISSUE-LOG, rulebook format."
---

Use for status, yt-meta, GO, upload report, check lines, ISSUE-LOG, rulebook format, close-out files.

## 8 Status
BOARD.md: owners, lanes, stage, ETA, flags. DECISIONS.md dated. meta/status/<role>.status.md. Owner message (R-C2): 1-4 lines: stage, % beats, slowest lane, blockers, ETA, loads; or a decision request.
## 9 yt-meta.json
title, description (hook; CHAPTERS; CREDITS incl. clips, music, free 3D models; SOURCES; disclaimer), tags, category, privacy=unlisted, expected_md5, expected_duration_s. No secrets.
## 10 GO (when AUTO_UNLISTED off)
GO <md5> <duration_s> from GO_AUTHORITY only.
## 11 UPLOAD-REPORT.md
URL, id, title, visibility, duration readback, md5 match, single upload confirmed, token wiped, time.
## 12 Check lines
JOIN CHECK vN: <path> | regular file yes | decode OK | frames d/e | md5 | time
MECH QA vN: ALIGN <drift s> | ONSET <0 early of N> | BED <dB under VO> | OPEN-CLIP <ok/na> | FREEZE <0 runs> | JOIN <ok> | PASS/FAIL | md5
RB-CHECK vN: rule -> PASS | FIXED | N-A.
## 13 ISSUE-LOG.md
found | issue | owner | generating step | permanent fix | rule ID | status.
## 14 FEEDBACK-RULEBOOK.md
"ID. Rule. - Source (date, where, quote) - Enforced: step." xN repeats; Superseded list per section.
## 15 Close
credits-used.txt; ARTIFACTS.md (paths + md5); LEDGER append; CLOSED last.
