---
name: grok-deck
description: "Use when making, editing, or presenting an HTML slide deck in the Grok Bot visual language (paper canvas, blob faces, morphing page turns)."
---

Generate a no-build HTML slide deck. Browser opens it, including file://. Chinese copy when the user writes Chinese.

## Done when

- Three files exist: grok-deck.css, grok-deck.js, and one HTML deck that links them with relative paths.
- Every slide is section.slide plus one layout class from the catalog below.
- Cover and close exist. Placeholder talk copy, not a real meetup or product pitch unless the user supplied it.
- Opening the HTML in a browser fills the viewport (100dvh), no scroll inside a slide.

If the user already has a template/ folder with those three files, edit that kit. Do not paste the CSS/JS back into the HTML.

## Files

Starter HTML: zh-CN, Clash Display + Satoshi from Fontshare, Noto Sans SC + IBM Plex Mono from Google Fonts. Canvas #fluid. Nav dots #navDots. Progress #progress. Each layout in the catalog gets one demo slide in a new kit.

Files: grok-deck.css, grok-deck.js, and one HTML file (copy the starter, then swap copy).

## Visual lock

Tokens (do not drift):

- paper --bg-primary #f6f3ec, cell --cell #f1efe9, card #fff
- ink #111, soft #555, mute #888, line #e6e4df
- teal #2bb8a8, orange #f0783c, purple #8a6ad4, blob #0a0a0c
- cover/ink slides: body gets theme-dark; cover goo fill is paper, eyes are blob

Type: Clash Display for titles, Satoshi + Noto Sans SC for body, IBM Plex Mono for kicker/meta. Clamp type. Viewport-fit slides, overflow hidden.

Not affiliated with xAI or Cursor. Do not copy measured silhouette paths from bloub. Goo is original: 3 circles + feGaussianBlur / feColorMatrix.

## Layout catalog

Write the class on section.slide. One job per class.

- slide-cover — dark full-bleed. kicker, display title, one line. Optional .goo-bot SVG.
- slide-statement — one large sentence.
- slide-index — numbered list of sections.
- slide-split — copy left, card or image right.
- slide-stack — vertical list / recap.
- slide-cards — 2–4 cards.
- slide-agenda — timeline.
- slide-quote — pull quote.
- slide-thanks — closing lockup. CSS blob circle, no logo file.
- slide-close — end card with small crew faces.
- slide-ink — dark sibling of statement/cover. Use sparingly.

Parts: kicker, page-title, bot-face (set --orb to teal/orange/purple), goo-bot, info-card, timeline, visual-card.

Fragments: data-fragment on the element that should wait. Notes: data-notes on the section.

## Motion (engine owns this)

Do not add a library. grok-deck.js must provide:

1. Cursor blob — small goo face follows the pointer with lag. Eyes look at the pointer. Squash on press. Ink on light slides, paper on dark. Off for touch, prefers-reduced-motion, and low-power.
2. Gaze — cover .goo-bot eyes and CSS .bot-face eyes track the pointer.
3. Compose wipe — next/prev is not a tame scroll. Blobs gather, merge, cover, the slide switches, then the blob splits away (about 500–700ms). Hash jump and overview click use the same wipe. First load does not.
4. Assemble — new slide content staggers in (scale + rise). Images cut open with a circle clip-path. Fragments pop, they do not fade.
5. B pauses fluid, goo, cursor blob, and wipes.

Keys: arrows / Space / PgUp / PgDn, Home / End, F fullscreen, O overview, ? help, S notes, Esc closes overlays only, hash #n. Wheel and swipe also advance, fragments first.

Print: one landscape page per .slide. Hide chrome, fluid, cursor, wipe.

## How to take a talk

1. Ask for title, audience, length, and the point of each slide. If they dump an outline, map it onto the catalog; do not invent extra slides.
2. Write the HTML deck. Short sentences. No marketing-voice. No “AI 赋能”.
3. Pick layout by job (cover → index or statement → splits/cards → stack/close).
4. Put images in a local images/ folder and reference them relatively. No tracking scripts.
5. Hand back the folder path and say: open the HTML in a browser; F for fullscreen; ? for keys.

## Guardrails

- Do not rebuild this as PowerPoint, Keynote, or Reveal.js.
- Do not add npm, bundlers, or frameworks.
- Do not restyle onto a generic dark SaaS theme.
- Do not put live event names, ticket links, or personal bios in a fresh starter kit.
