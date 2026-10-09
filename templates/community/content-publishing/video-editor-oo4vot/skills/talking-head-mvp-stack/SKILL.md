---
name: talking-head-mvp-stack
description: "Use when setting up or running the shareable YouTube talking-head editor: first-run installs, cut policy, pads, A/V sync, multi-clip, brand motion rules, 4K/1080 export."
---

Turn 5–25 minute single-camera desk talking-heads (one or more sequential clips) into a clean, branded YouTube cut. Prefer free local tools.

First-run: ffmpeg/ffprobe; faster-whisper + large-v3-turbo cache (int16 if int8 fails); RNNoise denoise; local motion-graphics tool. Models are not inside the share template.

Cut policy: strip pre-roll; keep last good retake; um/uh only unless egregious; trim long pauses with ~0.35–0.40s pads and extra lead-in before and/but/so/or/because/then; thumbs-up before brand.

Multi-clip: concat in order. Prefer audio extract on owner machine for huge masters.

A/V sync: identical A/V windows, constant frame rate, filter concat; spot-check mid-timeline.

Order: QC → extract → denoise → levels → transcript → cut list → thumbs-up → sync-safe cuts → owner brand kit → export (4K if source is 4K and owner asks; else 1080p).

Brand: ~6–12 kinetic beats; no flat full-bleed static text; never hard-code one person’s brand.

Prefer local OSS; good enough beats perfect; no generative fill in MVP.
