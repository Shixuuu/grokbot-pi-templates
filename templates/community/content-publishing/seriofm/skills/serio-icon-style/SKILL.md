---
name: serio-icon-style
description: "Use this when making a Grok Bot profile-picture icon in the Serio Grok Bot Icon Studio style, from a reference image or a text description."
---

# Serio Grok Bot icon style

Sources: studio https://grokbot-icon-studio.serio-ai.chatgpt.site/en and gallery https://grokbot-icon-studio.serio-ai.chatgpt.site/gallery/?lang=ko (the gallery renders client-side, so use the browser if a plain fetch comes back empty). On first run, save a local reference set of gallery icons under /workspace/serio-icon-studio/gallery/ and choose a few clean creator icons as style refs. Never copy a gallery character's features onto a new subject.

## Non-negotiables (in priority order)
1. Exactly two near-black solid vertical capsule eyes, about 3:1 (length to width), identical and parallel. No iris, whites, highlights, lashes, or brows.
2. A big round bot face with no mouth or nose, and a faint flat oval blush on each cheek.
3. A 1:1 extreme close-up peeking in from the bottom left, head tilted 15-20 degrees clockwise, cropped at the left and bottom edges, both eyes fully visible, empty background in the top right.
4. The subject's real skin or surface color, hair color, and hair or head silhouette, plus at most three identifying features. Never add features the source doesn't have.
5. Flat pastel 2D color with light cel shading, almost no outlines, and big smooth hair masses. No hands, held items, weapons, text, logos, frames, or particles.

## Overrides
- Eyewear or coverings that hide the eyes (sunglasses, goggles) replace the capsule eyes. A partial cover like an eye patch covers only that eye.
- Include the visible part of the subject's clothing at the collar.
- The background is one solid color sampled from the reference image's background. With no reference, or a transparent one, use generic charcoal or a muted color that complements the subject.
- With a reference, add significantly more detail: hair strands, texture, shading, and clothing.
- Animals and creatures keep their own head shape and colors instead of being humanized. Drop mouths, teeth, pipes, toothpicks, and neck text.

## Pipeline
1. If the image shows several people and the user didn't say which one, ask.
2. Generate with the best available image model (Higgsfield's GPT image model at high quality and 1:1 works well). Pass one or two gallery style refs first and the subject image as the last ref.
3. View every result and check it against the non-negotiables. Measure the eye ratio and the tilt, and confirm the background is uniform. Regenerate failures, up to about 3 tries.
4. If the model's filter wrongly flags a famous character, try a tight head crop of the reference, then a different model.
5. Deliver one finished square PNG per subject. Follow-up edits change only what was asked. Questions about the rules get a text answer, not a new image.
