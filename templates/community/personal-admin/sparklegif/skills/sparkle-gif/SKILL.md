---
name: sparkle-gif
description: "Use this when someone asks for a short, looping, sparkly animated GIF from a one-line idea (for example \"a fox watching falling leaves\" or \"a good morning coffee mug\"); covers the styles, sparkle looks, and the GIF pipeline."
---

# Sparkle GIF: styles and pipeline

## Art styles (pick what fits the request, or what the owner prefers)
- Watercolor storybook (a favorite): soft watercolor washes with gentle bleeds and pigment pooling at edges, loose thin ink outlines, white textured paper background, lots of white space. Small subjects (animals gazing up, a cozy mug) with drifting autumn leaves. Also works on a solid deep color (berry red, sapphire blue) or black paper, which makes silver glitter pop.
- Whimsical jewel-tone: a magical subject (for example a swirly tree) on a deep, rich colored background such as berry magenta.
- Colored-pencil sketchbook: fine linework, soft pastel washes, lots of white paper, doodled stars and sparkles, a watercolor galaxy splash. Artsy and nostalgic.
- Cosmic wonder: dreamy space scenes on a deep indigo-violet starry nebula wash, with glowing ripples, pulsing light, and twinkling stars.
- Heart window: a torn-paper heart opening onto a sparkling galaxy, with a small cute creature (for example a unicorn) at the bottom tip.
- Cute and simple: clean rounded shapes, big shiny eyes, rosy cheeks, pastel gradient background.
- Never depict real people (including the person asking, from a selfie) or copyrighted/trademarked characters, and don't copy another artist's image. Offer an original character or an original piece in that style instead.

## Sparkle looks
- Sparkling light (default): 15-30 soft glowing points of white and warm gold that bloom and fade at their own phases, each with a soft halo, plus 2-4 thin 4-point glints with long fine rays. Airy, not busy. On white paper, tint glows warm gold so they read.
- Tinsel glitter (when asked for glittery, sparkly, tinsel, or silver): dense twinkling specks (hundreds to about 1,500, 1-3 px) across the frame and thickest on the subject, short diagonal tinsel glints, 5-8 bright 4-point star flares, soft glow on the brightest points. Pick one color family: cool silver/white with icy lilac and pale blue, or gold. Works best on a deep background.
- Keep big glows and flares off faces and off any lettering.

## Extra elements that work well
- Falling leaves: 4-6 code-painted watercolor leaves with a thin ink outline, drifting with sway, rotation, and a gentle tumble. Fade them with a patchy dissolve at full color (plain opacity fades turn them grey), and fade the outline faster.
- Steam: 2-3 translucent wisps rising and curling from a drink, fading at the top.
- Signal ripples: 3-4 thin glowing rings (pale cyan to lavender-silver) born from one emitter point at evenly staggered phases, each growing and fading, with a gentle sine wobble. Mask them to the sky only: segment the subject and fill holes so rings never show over the face or inside dark eyes. Place the emitter with some room above it or the ring tops get cropped.
- Shooting star: a silver star with a sparkly fading trail sweeping once per loop (for example under a title word).
- Lettering (for example "Good Morning" or a sparkly silver script word): put the words in the generated keyframe or render them carefully, check the spelling, then never warp or cover that area. Mask every overlay out of a box around the text.
- Small waves or props (a pumpkin, a waving paw): gentle motion only.

## Motion rules
- Keep motion small so the painting doesn't distort: tail swish, canopy sway, gentle breathing, a tiny head nod, a slow wave.
- A creature sitting on a person (for example on a shoulder) never bounces, hops, or squashes rhythmically; it reads as inappropriate. Keep it seated with a slow gentle float, stardust, or a glint instead.

## Defaults
- 512x512 square unless asked otherwise.
- 20-36 frames at about 100 ms, infinite loop (loop=0).
- File under about 5 MB. Dense glitter is heavy, so drop to about 20 frames at 120 ms if needed.

## Pipeline (Python + Pillow, numpy optional)
1. Make a scratch folder for the job and write one generator script there. Don't use generic filenames in a shared folder.
2. Base image:
   - Detailed subjects: generate a keyframe image in the chosen style, with plain background space for the effects. Generated images may come out wide (check the real size); crop to a square around the subject, and extend the background by mirroring a clean strip if needed, with no seam. Scale to the final size.
   - Simple subjects: draw with code at 2x size, then downsample with LANCZOS.
3. Confine warps to the subject so nearby paint marks don't move. Leave mugs, faces, and lettering unwarped.
4. Drive every motion from the loop phase t = 2*pi*i/N with whole-number cycles per loop, so frame N equals frame 0. Round timing values to avoid 1 px floating-point drift.
5. Glows go on a separate blurred layer blended additively or with screen. When blurring a transparent layer, fill transparent pixels with the glow's own color (alpha 0) to avoid grey halos.
6. Quantize all frames to one shared palette built from about 8 frames (255 colors) with dithering. To stop background dither crawl, lock pixels that barely change across the loop to frame 0's value. Save with save_all=True, append_images, duration, loop=0, disposal=2.
7. Verify before sending:
   - Check frame count, durations, loop value, size, and file size with Pillow.
   - Confirm consecutive frames differ, and that the change from the last frame back to the first is in the normal range (or render frame N and compare it to frame 0).
   - Save a contact sheet of about 6 frames and look at it: the subject looks right, lettering is crisp, motion is visible, and the sparkle reads without looking noisy.
   - Fix anything that fails and re-check. Be honest about anything still imperfect.
8. Send the GIF file itself with one short line describing it, then offer one tweak (speed, colors, more or less sparkle, background).
