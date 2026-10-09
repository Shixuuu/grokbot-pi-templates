---
name: podcast-edit-doctrine
description: "Use when starting any podcast, YouTube long-form, interview, multicam or clip edit (read first): the house editing doctrine (camera policy, cleanup, loudness, editorial grammar) and which skills to run in what order."
---

# Podcast edit doctrine

Read first on any podcast, YouTube long-form, interview, multicam or clip edit: house rules and run order. Other skills hold the how-to.

## Hard rules
1. No live switching: every camera is an ISO file, every person has a mic track; camera choices happen in post.
2. Keep every ISO mic in the timeline, cut identically. An "active mic" flag never mutes a track; mute only an interval of one ISO when its crosstalk audibly hurts the line, and note why.
3. Cleanup is proposal-only: a person approves every removal and ordinary pauses stay.
4. Transcripts are drafts until a person checks names, numbers and negations.
5. Never invent logos, intros, outros, people or quotes. Missing assets mean ask.
6. Meaning first: keep qualifiers, chronology and real reactions; never splice words into something that wasn't said.
7. Nothing is published or sent without the owner's approval. Ask before spending money or credits.
8. The show's brand kit wins on look. Spoken captions stay verbatim; written on-screen copy should sound human, not AI, with no em dashes.

## Pick the path
- **Path A, a dedicated auto-multicam editing app, if you have one:** fastest base cut; refine it with these rules; interchange files go to `timeline-import`.
- **Path B, agent plus ffmpeg:** short jobs, clips, full control. `multicam-sync`, `transcript-and-chapters`, `cut-silences`, `cut-mistakes`, `camera-direction`.
- **Path C, DaVinci Resolve Studio through MCP:** a human finishes in Resolve; cleanup stays as markers. `resolve-mcp-edit`, `timeline-import`.
If a path fails, say so and switch; never report a success you didn't get.

## Run order
0. Brief: show, deliverables, pace (`calm` | `standard` | `energetic`), brand kit, style (`editing-styles`).
1. Sync every source; check drift at head and tail.
2. Transcribe and review with real speaker names (`transcript-and-chapters`).
3. Select on audio first: paper cut, then radio cut (`podcast-interview-story-editing`).
4. Cut: cleanup proposals, then approval (`cut-silences`, `cut-mistakes`); camera direction (`camera-direction`); cut types by style (`narrative-cuts`).
5. Hide jump cuts that still show, truthfully (`hide-jump-cuts`).
6. Brand, captions, graphics after the edit works (`apply-brand`, `captions`, `talking-head-recut`, `video-storytelling`).
7. QC (`qc-check`). 8. Delivery after approval (`delivery`); packaging via `youtube-podcast-growth`.
Clips: `podcast-clip-editing` (select) → `edit-podcast-reels` (multicam reel cut) → `short-form-edit` (finish) → `captions` → `qc-check` → `delivery`. Single-camera talking head: `edit-video`.

## Camera policy
- **Authority order:** locked or manual choices → camera availability → sustained isolated-mic ownership → bounded contextual refinements (reactions, emphasis, seam coverage) → semantic fallback (transcript cues).
- **Opening:** first material mic owner, else the primary speaker's close-up.
- **Handoffs:** follow mic ownership. The transcript may only anticipate the same person by up to about half a second; it never creates a switch alone.
- **Overlap:** prefer the wide unless holding the speaker reads better; a stray "mm-hm" must not create long wide holds. On vertical, reframe the wide into a tight single.
- **Reactions:** truthful punctuation, not wallpaper. Presets change frequency, never ethics:
  - `calm` (thoughtful, emotional): fewest switches, longest holds, reactions only on major beats.
  - `standard` (default): reactions at real rhetorical beats.
  - `energetic` (debate, panels, promos): more switches and reactions, tighter holds. Never on a grief interview.
- **Shot length:** minimum and maximum durations with hysteresis so nothing flickers; no hold under about 0.6 s.

## Cleanup (proposal-only)
Propose only opening/closing bounds, restarts, repeats, filler or false starts backed by pauses, and extreme dead air. Ordinary pauses stay on long-form. Never auto-apply; never cut for low transcription confidence. Reels may get a tighter edge-trim pass.

## Loudness (show settings override)
- Program or long-form video: about -15 LUFS integrated, ≤ -1 dBTP (±1 LU).
- Social clips: about -16 LUFS, ≤ -1 dBTP (-1.5 for AAC headroom).
- Audio-only podcast feed: -16 LKFS ±1, ≤ -1 dBTP. Broadcast EBU R128 -23 only when specified.
- Music beds 14-20 dB under voice. Measure the final file.

## Editorial grammar
- Standalone pieces need orientation → tension → development → landing. Prefer chronological order; a payoff-first hook only if the next line restores orientation.
- Cut dead time, not humanity. Keep repetition that shows uncertainty, humor or conviction.
- Audio first: cut on thought boundaries, audition each seam at normal speed, keep room tail and emotional breaths.
- Switch for a reason, in order: handoff, reaction to a meaningful line, quoted line or question, emotional turn, seam coverage, reset after a long hold. Never on a timer.
- Reaction bridge: cut to the listener before the outgoing audio edit, make the edit under the reaction, return once the incoming line has started (offsets 0.2-0.6 s).
- Reel calibration (35-75 s conversation, the `standard` anchor): speaker close-up 60-75% of picture, reactions 12-20%, median hold 2-3 s, reactions 0.75-1.8 s. Criteria, not quotas.

## House-style defaults (from measured hand edits)
1. Setup must play, not just exist: keep subject, relationship, timeframe and connectives ("but", "so") together in one contiguous clip and held shot.
2. Transcript ranges are candidates: after the story works, trim every kept phrase to its audible edges (hand revisions ran 3-13% shorter).
3. Reduce device changes, not context: cover most dialogue seams with a real angle change, keep about 80% of close-up time on one base crop, 2-3 punch-ins per reel at most.
4. Ownership before anticipation: the questioner holds the whole question; switch on the answer.
5. One dominant visual idea per beat; let a strong analogy hold 10 s or more.
6. Picture can be denser than audio; never split audio for captions or a picture cut.
7. The wide is source material for distinct tight singles, not generic two-shot cover.
