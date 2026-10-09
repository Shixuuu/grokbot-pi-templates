---
name: grok-imagine-lookbook
description: "Use when remaking a stylish 15s fashion or brand lookbook MV in Grok Imagine from an X-style reference (outfit flips, editorial graphics, beat sync)."
---

# Grok Imagine lookbook

Remake high-end fashion or brand lookbook MVs in Grok Imagine. Do not paste a long multi-look shot list into one text-to-video prompt.

## Typical reference

15s, 16:9, high-key white studio, black and white plus one accent color, heavy sans type, 6 to 10 outfit looks, glitch and shutter cuts, a hero pose at the end, VO added in post.

Common AI breaks to avoid: garbled type, hair-color drift, cloned extras, hidden or blurred hands, VO collapse near the end.

Premium tricks: ultra-fast cuts and shutter flashes hide temporal AI errors; strict palette; beat-locked SFX (shutter, glitch, swoosh).

## Why Grok needs this recipe

Grok Imagine video is strongest as image-to-video with 30 to 60 word prompts, one action and one camera move per clip. Consumer grok.com/imagine clips run about 6 to 10s. A 7-look prompt in one clip smears faces and garbles type.

## Workflow

1. Hero still in Grok Imagine Image, 16:9. One model, white studio, magazine graphics already in frame. Keep type to 1 or 2 real words.
2. Edit that still into 6 to 8 looks. Same face, new outfit, new layout. Hide hands (pockets or crossed arms).
3. Animate each still 5 to 8s: one pose, one camera move, one audio cue. End with preservation language. No hair-color change unless asked.
4. Stitch to 15s on the beat with ffmpeg. Shutter or glitch cuts between looks. Add VO and logo in post.
5. Optional one-shot 10s text-to-video only as a pitch test, never as the master.

## Prompt formulas

Still:
`16:9 fashion editorial still, [model], [outfit], centered, white studio, oversized black magazine type "[WORD]", barcode, scan lines, thin borders, B/W with [accent] accent, high-contrast commercial photography, hands in pockets or arms crossed, no extra people`

Motion (image-to-video):
`[Subject + one action]. [One camera move]. [Light]. [Audio: low beat hit, shutter, cloth rustle]. Preserve face, hair color, outfit, and magazine graphics from the source.`
