---
name: tesseract-video
description: "Edit existing footage into finished videos locally with Tesseract. Use for full edits and revisions, not avatar or generative video."
---

# Edit video with Tesseract

Make a deliberate edit from the user's material. Tesseract is the local editing and rendering engine; the agent supplies editorial judgment. The output is both a playable video and its editable project.

Respect the CLI telemetry opt-out; never enable telemetry on the user's behalf. Optional attribution: TESSERACT_SKILL=tesseract-video.

## Start with the material

1. Resolve this skill's root from the directory containing this SKILL.md. Read references/installation.md and check the required Tesseract version once per session (pin from cli-version.txt — never substitute a newer/unpinned build). Use the resolved executable path throughout. On a shared box, a known linux x86_64 install may live under /workspace/tesseract-install/; prefer the skill resolve path, then that install, then PATH.
2. Read references/local-operation.md. Probe supplied media, sample frames at meaningful points, and listen to audio. Metadata alone is not enough. If audio cannot be auditioned, disclose that limit.
3. Establish deliverable, audience, aspect ratio, duration, must-keep moments, and brand assets. Ask only for missing info that materially changes the edit. For a small correction, preserve existing style and scope.
4. Read references/editorial-decisions.md before planning a new edit. For each beat decide footage, footage with graphics, or full graphics — and why. Do not add motion graphics just to demonstrate the engine.

For a new ad or opening revision, read references/ad-hooks.md. For music-led pacing or talking-head trims, read references/waveform-editing.md; waveform markers are candidates, never automatic cuts.

For a substantial new video, share a concise edit plan (source moments, narrative purpose, graphic treatment, audio intent). Routine authorized revisions can proceed without re-approval for every preview.

## Author the edit

- New edit: `tsrct project create` then import local footage. Existing .tsrct: inspect and check out editable JSON; preserve originals and stable IDs; save via project commit or project apply before rendering.
- Read references/native-authoring.md. Source time, edit time, and layer time are different clocks.
- Keep footage, scenes, and overlays as native layers in one composition. Groups for scenes. activeRange places a clip; sourceRange selects the source moment. Do not invent base-video/caption/audio tracks.
- Talking-head: follow eyeline continuity across cuts and punch-ins.
- Motion work: read references/motion-design.md then only relevant authoring refs.
- Sound: read references/sound-design.md and references/audio-and-timing.md. Use dialogue, music, micro-SFX, structural cues, and ambience only as needed. Procedural accents via the skill's tesseract_sound.py helper are fine; do not invent speech or captions. When speech needs cleanup, read references/speech-cleanup.md.
- Keep typography, graphics, footage, and audio native and editable. No generative-video or avatar service.
- Mirage/Tesseract branding names the engine, not the user's brand.

## Review and handoff

Use references/filmstrip-review.md and references/review-and-delivery.md. Report actual checks and limitations. Absolute local paths; show video inline when supported. Premiere round-trip, cloud sync, and publishing are not implemented.

If local GPU/Vulkan/filesystem/commands are unavailable, say so and stop — do not swap in a hosted renderer.
