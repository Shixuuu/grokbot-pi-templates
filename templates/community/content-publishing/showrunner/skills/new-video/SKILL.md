---
name: new-video
description: "Use this when the user says new video, kickoff, or starts a project without answering intake — paste the form and wait. Showrunner is the only user-facing voice; always DM Save/Download files in 1:1."
---

# /new-video

**Who:** Showrunner

**When:** User wants a new music video / “kickoff” and has not answered intake.

Showrunner is the only user-facing voice. Specialists stay in the group.

## Do this

1. First-time user → also `/user-guide` (or Description first-hello).
2. Paste the form below; wait. No compose / stills / Imagine until they answer.
3. On reply → create `/workspace/mv/<slug>/` from the contract, write `00-brief.md`, set `STATUS.md` to `waiting-on-audio`, start the pipeline. Do not skip story-still approval.
4. If **digest-6s** but audio >~20s → ask once: digest vs feature. If **feature** but file ≤10s → ask once: treat as digest-6s?

Ask once if missing song/ref: own master + photo(s) (exact|inspiration), or compose / generate world-lock. Limits: 25 MB audio/images/docs, 6 attachments/message; split large masters.

```
New music video — reply to Showrunner:

Theme: [one line]. Occasion + date only if for an event.
Aspect: 9:16 · 2:3 · 16:9
Scope: digest-6s OR feature

AUDIO — pick one:
• Grok, make the song. Style: […]. Spoken-sung clear English.
• Attached mp3/wav is the MASTER. Do not compose.

REFS (optional): exact | inspiration (ask once if untagged)

IMAGINE — pick one:
• Bots run Grok Imagine (screen sign-in after world-lock Save; Showrunner logs out)
• I will run Grok Imagine (Showrunner DMs refs + brief)

Gates: song lock → world-lock pins → Continuity PASS → Save confirm → shot list + Imagine brief → story stills → Continuity → videos → Continuity/clips → clip approval → stitch ask.
Always DM Save/Download files in 1:1 (see /user-guide) — never wait for “show me.”
```

## Delivery gates + STATUS

**Hard delivery rule:** Every product the user needs (audio, world-lock stills, story stills, Imagine brief `.md`, clips, `final.mp4`) is DMed as a **Save/Download file attachment in the user’s 1:1 chat**, even if the crew just finished in the Music Video Crew group. Inline/gallery is not delivery. Do not wait for the user to ask to show the work.

**Song lock:** After A&R posts structure + master on disk → DM playable audio → ask **song locked**.

**World-lock Continuity (before Save):** After Art lists pins → `STATUS.md` = `waiting-on-world-lock-continuity` → kick Continuity on the pin set. Do **not** ask Save yet. On FAIL → Art regens that pin only; re-check. On PASS (or written skip) → DM each still as a file → `STATUS.md` = `waiting-on-world-lock-save` → “Confirm you can Save these N frames. Then shot list + Imagine brief.”

**On Save confirm:** Kick `/shot-list` → `/imagine-brief` (same beat). World-lock Continuity already passed.

**Story stills:** After N story stills land → kick Continuity on story stills → then story-still lock → videos. `STATUS.md` = `waiting-on-story-stills` while awaiting lock.

**Clips:** After videos (or a regen) → Continuity on clips as needed → `waiting-on-clip-approval` → clip approval → stitch ask.

Art: small identity set only. Exact user file **is** a still (no duplicate redraw). Inspiration = mood only.

**Never open grok.com / Grok Imagine** until world-lock refs are Continuity-PASS (or written skip) **and** the user has Save-confirmed those pins. Never start video until story stills are locked.

Do not connect X, Gmail, or wallets. Obey `/workspace/mv/_template/` and the workspace contract.
