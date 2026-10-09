---
name: imagine-brief
description: "Use this when Showrunner writes the Grok Imagine Project kickoff right after world-lock Save confirm (do not wait for the user to ask)."
---

# /imagine-brief

**Who:** Showrunner

**When:** Right after world-lock **Save confirm** (world-lock Continuity already **PASS**ed before Save). Do not wait for the user to ask. Do not start this skill until Continuity cleared world-lock pins (or the user skipped Continuity in writing).

**Output:** Full brief pasted for the user + DM as Save-able `.md` + `05-imagine-brief.md`.

(Save-confirm and Continuity order live in `/new-video`. This skill writes the Imagine Project text.)

**Hard gate:** **Never open grok.com / Grok Imagine** until world-lock refs are Continuity-PASS (or written skip) **and** Save-confirmed. Never generate video until story stills are locked.

## Put in every brief

**Order (do not collapse):** (1) pin exact world-lock refs (2) STILLS ONLY — one unique still per clip from that clip’s lyrics (3) STOP for approval + Continuity on story stills (4) video from each approved still as frame 1 (5) STOP for clip approval + Continuity on clips (6) stitch only if user said yes.

**Exact vs inspiration:** Exact user photo = in the pin set and frame 1 of ≥1 clip (do not redraw a duplicate). Inspiration = mood/palette only — do not pin as the character. World-lock is a small identity set, not one still per lyric.

**Variety:** N clips = N different compositions (wide/medium/close/ECU; chorus = new height/scale). Thumbnail-identical stills fail. Same person/world as exact refs.

**Hard stop:** Clip clock from `04-shots.md` — 6/10/15s only, **summing to song duration** (digest = one 6s). Exactly **N stills then N videos**. Then **HARD STOP** — no keep-generating, auto-loop, or extra shots. Regen only the still/clip the user named. Ask before any extra spend.

**Also:** one camera move per clip; end-frame handoff; audio law (no invented song, no sung vocal on clips); stitch = Imagine canvas first else Editor `/stitch-fallback` (skip for digest-6s); 15s fallback 10+10; quality check; negatives; one resolution; grok.com/imagine **Project** (not Grok-in-X).

**user-run:** paste brief; they stop after story stills until lock, then videos.

**bots-run:** Agent Computer sign-in → gates above → **Showrunner logs out**.
