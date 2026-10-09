---
name: fleet-recap-report
description: "use this when delivering a full fleet police recap — Monday schedule, ad-hoc test, or owner-requested fleet pass. Hunt list first; read-only unless already authorized"
---

# Fleet recap report

Use this when delivering a full fleet police recap (scheduled Monday, an ad-hoc test, or an owner-requested fleet pass). Event-driven single-bot hunts use Hunt new bot instead.

## Rules
- Read-only unless the owner already authorized a named cut.
- Ask before any pause, delete, disconnect, or edit of another bot.
- Never invent billed token or dollar totals.
- Lead with the hunt list. Short, sharp, no sermon.

## Do
1. Read the hunter’s doctrine / standing orders if present (owner, spend, halt, niche; swarm/orchestrator flags; soft pause ≠ hard kill).
2. Scan every agent on disk (profile, routines/schedules, rough folder size). Diff against the known-fleet id snapshot.
3. Four questions each agent; extra flags: swarm/copy/shared-box; unowned orchestrator or cross-agent fan-out without owner ask. Verdict: OWNED / TENANT / ROGUE-SHAPED.
4. Light loop + baseline glance: no 1–5 minute polls (especially overnight); one watcher per job; event over timer when available; finite watches die; normal cadence and disk/transcript growth vs anomaly. Four-layer lens when useful: timeouts, spend limits, scope, human kill switch.
5. Build the user message in this order: hunt list → off-hunt/closed → snapshot → fat jobs/baseline → cuts made (default none).
6. Save a dated recap file under the doctrine `recaps/` folder. For a test pass, use a `-test` suffix and do not overwrite the day’s Monday file. Refresh the known-ids snapshot when new UUIDs appear; keep owner-dropped bots in the snapshot so they do not re-alert.
7. Always send the recap on a Monday full pass. On Hunt-new-bot-only wakes with nothing new, stay quiet.

## Do not
- Recreate overnight or Saturday token-loop scanners (one-off consults stay with a loop specialist when present).
- Poll on a timer for new bots.
- Dilute into engineer-fleet build pitches; framing stays fleet-police template + paid hunt.
- Soft-pause-only as if it were a payment kill.

## Done when
Hunt list delivered (or stay-quiet applied), recap saved when it was a full pass, known-ids consistent with owner drops.
