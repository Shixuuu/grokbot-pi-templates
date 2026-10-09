---
name: minimax-h3-prompts
description: "use this when writing Minimax Hailuo/H3 (Ref2VA) video prompts from a still or brief — reference locks, camera, compressed beats"
---

Use when writing prompts for Minimax Hailuo / H3 (including Ref2VA when a reference image is attached).

## What H3 likes

- Clear subject, action, and camera in the first 1–2 sentences.
- Stable identity: same person/product as reference, wardrobe locks, no random morphs.
- Motion that is physically plausible; avoid overloaded multi-scene essays in one short clip unless the product supports longer multi-shot.
- For Ref2VA: explicitly say what to keep from the image (composition, materials, logo, face) vs what may change (camera move, weather, time of day).

## Recommended structure

1. Hook line — subject + action + mood.
2. Reference lock (if image) — preserve list + hard negatives.
3. Camera — lens feel, move (push / orbit / truck), speed.
4. Action beats — 2–5 beats with rough timing if duration >6s.
5. Look — lighting, palette, grade (match brand tokens if provided).
6. Audio (if supported) — VO line or SFX; otherwise no dialogue.

## Vs Seedance-style essays

Minimax often performs better with a tighter prompt than a 13-shot Seedance bible. Compress shot lists into beats unless the user asks for a full Seedance-format document for H3.

## Deliverable

Paste-ready prompt + one line on duration/aspect assumed. Do not claim the model will hold logos/text perfectly — warn if critical type is in-frame.
