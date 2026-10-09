---
name: grok-imagine-cinematic-studio-workflow
description: "Use this when directing a 1–2 minute cinematic short with Grok Build and the Grok Imagine Cinematic Studio plugin (Bible, Character DNA, Image 2.0 plates, Video 1.0/1.5 clip chains), or choosing which studio agents, models, and effort to use to save tokens."
---

# Grok Imagine cinematic studio workflow

Repo: https://github.com/FineComputer14451/Grok-Imagine-Cinematic-Studio (pin the version the owner uses, e.g. v3.11.4). Full-studio activation phrase in Grok Build: `Activate Grok Imagine Cinematic Studio v<version>`. It loads all 25 core agents at once, so use it only for a brand-new project where every department really needs to weigh in. Otherwise activate agents per stage (below).

## Core loop
Logline, then Production Bible, then Character DNA lock, then an Image 2.0 hero plate, then gated image-to-video clips (8–12s each), then sequence extension to 60–120s, then QA, color, AI polish, and delivery.

1. Orient: run the plugin's doctor/validate and confirm the models Grok Build lists.
2. Lock the Bible and one VIDEO_PIPELINE_SPEC early. Video 1.0 is the cheap default for test takes; use 1.5 only for final takes that need native audio or physics. Never mix 1.0 and 1.5 in one chain.
3. Lock Character DNA, then make the hero plate with Image 2.0 (quality medium). Drafts can use Image 2.0 low.
4. Generate clips one at a time from the approved plate. Carry LAST_FRAME_RECAP and MOMENTUM_VECTOR (plus audio notes on 1.5) into each next clip.
5. Stop after every stage and wait for the owner's GO. Never regenerate without it.
6. Identity QC every clip against the DNA; on a fail, re-still from the locked plate, at most two retries.
7. Titles and captions are code overlays, never baked into generated frames.

## Lean agent activation (great results without overspending)
Keep the full suite installed; installed but inactive agents cost almost nothing. Every agent you ACTIVATE loads its instructions into the session and is re-read each step, so activate only what the current stage needs. Spend most on the decisions that are hard to undo.

| Stage | Activate | Model / effort |
|---|---|---|
| Bible + character lock | Studio Director, Character DNA Extractor, Identity Lock Specialist | grok-4.6, high |
| Hero image | Imagine Prompt Master, Reference Asset Curator | grok-4.6, medium; draft images first, full quality once the look is right |
| Each shot | Plate & Motion Readiness Lead, then Image-to-Video Specialist | grok-4.6, medium; the readiness gate catches a bad start frame before paying for video |
| QC after every clip | Quality Assurance Guardian | grok-4.6, medium; one clip at a time so errors don't carry forward |
| Audio, color, assembly (once, at the end) | Sonic Architect, Post-Production Color Grading Supervisor, Assembly Editor | grok-4.6, low or medium |

Add a specialist only when a shot actually needs it (e.g. Dialogue/ADR Director for lip sync, Stunt Action Choreographer for action, Costume Wardrobe Continuity for outfit changes, Multi-Clip Continuity Orchestrator for a cross-shot audit).

## Project files are the source of truth
Keep the Bible, DNA, voice log, script, shot list, and prompts in the project folder. When chat notes or handoffs contradict those files, the files win. Record approvals and decisions in the files so the next session starts from the real state.

## Token efficiency in Grok Build
- Prefer `grok-4.6` for studio work; the newer default model can spend about twice the output tokens at the same effort. Escalate to the newer model only when 4.6 fails a quality gate.
- Never use the build-fast model variant for studio work; it costs about twice as much for speed you don't need.
- Effort: high for first locks (Bible, DNA, hero prompts, identity lock, chain QA); medium for each generation, retries, and draft prompts; low for typos, renames, packaging, and status. Avoid xhigh.
- Reuse sessions (`-c` / `-r`) instead of starting fresh, keep prompts under 200k tokens, and cap headless runs with `--max-turns`.
- Video seconds cost far more than chat tokens: iterate cheap, QA, then do the quality pass only on heroes and failed clips.
- The GO gate between stages means a wrong turn costs one step, not five.
- Use the owner's own Grok sign-in (SuperGrok OAuth) when that's how they want to be billed; don't set an API key they haven't asked for.

Example: `grok -m grok-4.6 --effort high -c "ACTIVATE CHARACTER_DNA_EXTRACTOR + ACTIVATE IDENTITY_LOCK. Extract and lock Character DNA"`.
