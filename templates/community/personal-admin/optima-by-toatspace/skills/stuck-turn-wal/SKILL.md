---
name: stuck-turn-wal
description: "use automatically before long nested work, when WAL is growing out of control, on fleet restore/diag, or when the owner asks to prevent WAL / stuck-turn failures — WAL prevention is mandatory, not opt-in"
---

# stuck-turn-wal

Prevent mute seats signaled by a growing agent SQLite WAL. Automatic — not opt-in.

## Automatic
1. Every seat: Detect on self before nested long work.
2. Optima routine optima-wal-fleet-scan every 30 minutes (15,45 * * * * Asia/Singapore). Self-WAL gate first. On verified fleet risk: priority-wake that seat and warn the owner. Stay quiet when clear.
3. Starsheep: WAL detect on nightly + scrub/diag pairing.
4. /diag-h: WAL Detect is quiet-diagnose step 1.

## HARD WAL priority — designated heavy-task chief seat
| Seat class | Stuck-turn risk | Out of control |
| --- | --- | --- |
| Designated heavy-task chief seat | WAL ≥ 2 MB, or +≥1 MB in ~60s climbing | WAL ≥ 4 MB and still growing |
| All other seats | WAL ≥ 512 KB or growing across ~30–60s while a reply is owed | large and still growing |

Under the 2 MB floor for the designated heavy-task chief seat: stay quiet on fleet scan for that seat. Never delete an agent or WAL to “fix” size. Leave spare RAM fleet-wide.

## Detect
Check store.db-wal, store.db, sometimes conversation-blobs.db. Apply seat-class thresholds. Label verified (path/size/mtime) vs unknown (cause). Never spam tiny/zero WALs. Never invent a crash narrative.

## Contain
Stop nesting at risk / out of control. One short reply (ok / blocked). Immediately SendToAgent the at-risk seat. Warn the owner (seat, path, size, growing). No delete-to-fix. No Reset first. Escalate Update computer or /diag-h A-only if still mute. Never PRAGMA-checkpoint another seat’s DB mid-turn from outside.

## Anti-encode
Do not write “WAL means crash”, “delete agent clears WAL”, or name a private seat display name in public pack text — say “designated heavy-task chief seat” only.

## HARD: stop named helpers only

Never call StopSubagent with all=true. Stop only the named local helpers this Optima seat started. Never cancel the paired auditor seat, fleet chief seats, or other teammates as a stop shortcut when ending Optima's own nested helpers.
