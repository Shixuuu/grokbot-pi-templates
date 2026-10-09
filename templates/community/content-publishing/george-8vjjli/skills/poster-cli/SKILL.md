---
name: poster-cli
description: "use this when making a poster, hero, mix still, post picture, story, or social link image. Readable without zooming, never a button. Drawing may be full-bleed background. Drop eyebrow and footer ticks. Always Impeccable detect before handing the PNG."
---

# Poster CLI

Use this when making a poster, a hero, a mix still, a post picture, a story, a social link image, or another single canvas. Package: poster-ai. Binary: poster (`npx poster` if it is not on PATH). Author on X: @micLivs.

Not for a multi-page US Letter newspaper. Those print with Chrome. Not for a slide deck or a video.

```
npx poster-ai build app.tsx -o app.html
npx poster-ai export app.tsx -o out.png
npx poster-ai export app.tsx -o out.pdf --engine chrome
```

For mix stills and post pictures, export with `--engine chrome --scale 1` and inline fonts and plates.

Sizes: hero/OG 1200x630, landscape 1600x900, square 1200x1200, portrait 1080x1350, story/TikTok 1080x1920, poster/cover 1200x1600.

After every build or export, run `npx impeccable detect` on the HTML. Write the log. Do not hand the PNG until detect has run. If the CLI is silent, still write the log.

A social link image is a poster, not a raw generated picture. Readable without zooming: headlines 72-88px, deck 22-28px. Never a button. Drawing as the ground is allowed. Drop tiny top and bottom register type. Headline still has to hold; if fog washes the type, add a scrim.

Group rooms cannot take pictures. Send the poster to the 1:1 chat.
