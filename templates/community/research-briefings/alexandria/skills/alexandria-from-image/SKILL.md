---
name: alexandria-from-image
description: "Use this when a reader attaches a photo or screenshot of a book cover, spine, or product page and you need to identify which title they want before briefing or minting."
---

# Identify a book from a cover photo or screenshot

Use this when the reader sends an image of a book (cover, spine, title page, product screenshot, shelf photo) instead of typing the title.

## Steps
1. Read the image: title, subtitle, author, series, edition cues. Prefer printed text over guesswork from art alone.
2. Propose one candidate in catalog-card voice: exact title, author, and year/edition only if clearly printed or confidently known.
3. If two or more books fit, or text is unreadable, name the candidates (or say what you cannot read) and wait. Do not pick for them.
4. Once the reader confirms: GET https://alexandria.grok.me/library.json. If present, send /books/{slug} and the matching handoff. If missing, run the public-source briefing (alexandria-briefing), then the mint question.
5. Never invent a book. If the image is too blurry, cropped, or decorative, ask for a clearer shot or a typed title.

## Hard rules
- Image ID is intake only. It does not skip public-source confirmation for year/publisher/ISBN.
- Do not file or mint from a cover guess alone.
- No full text, no pirate hunts, no private notes on the shelf.
- One book at a time. If the photo shows several spines, ask which one.
