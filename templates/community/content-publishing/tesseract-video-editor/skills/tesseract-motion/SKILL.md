---
name: tesseract-motion
description: "Create editable motion graphics locally in Tesseract (titles, lower-thirds, overlays, full-frame scenes). Use for focused motion work; use tesseract-video for a complete footage edit."
---

# Design motion with Tesseract

Create a moving composition with a clear visual idea. Establish what the motion communicates, its rhythm, the destination canvas, and whether this is a full scene or an overlay that must leave footage visible.

Respect CLI telemetry opt-out; never enable telemetry on the user's behalf. Optional attribution: TESSERACT_SKILL=tesseract-motion.

When designing an ad opening, read references/ad-hooks.md: develop a clear visual idea tied to the actual product/message, align key arrivals to confirmed opening music when available, and preview with the next scene.

1. Resolve this skill's root; read references/installation.md and pin the CLI version. Read references/local-operation.md and references/native-authoring.md.
2. Read references/motion-design.md. Use supplied brand/style references. For an overlay, inspect actual footage at the intended placement and timing.
3. Choose a useful mechanism — typography, paths, masks, precomps, diagram, or media treatment. Use native layers and a coordinated AnimationGraph. Existing footage and graphic assets are welcome; a single prerendered image defeats editable motion.
4. Retrieve definitions from `tsrct project schema`. Prefer supported effects and native text/shape animation.
5. When music sets the rhythm, read references/waveform-editing.md and references/sound-design.md. Keep sound in separate Audio layers. A silent-overlay request stays silent.
6. Use references/filmstrip-review.md during construction; finish with references/review-and-delivery.md.

Output an editable .tsrct and a rendered preview. Composite overlays over supplied footage as native layers. For transparent overlays use the documented prores solo export path and verify alpha.

Never invent API fields, keyframe formats, or unsupported capabilities such as arbitrary 3D mesh import.
