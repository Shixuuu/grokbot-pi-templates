---
name: repaginar-carrossel-instagram
description: "Use this when rewriting ranked Instagram carousels or static posts into new slide-by-slide copy plus a caption, then handing the briefing to the audiovisual engineer for image generation."
---

Turn a winning Instagram carousel or static post into a new piece: on-image copy for every slide, plus the caption under the post. Copy the structure, never the original wording.

## Input

A ranked post (or a batch) with as much of this as exists:

- URL / shortcode, type (`carousel` or `static`), date, metrics (likes, comments, saves if available)
- Original caption
- Each slide: image file or URL, and any already-extracted on-image text
- Target brand: account, offer, audience, tone, forbidden claims
- How many posts to rewrite (default: the day's top 5)

If on-image text is missing, read each slide image and transcribe it before modeling.

## What to extract from the original (the model)

For every post, write a short model before drafting copy:

1. Gancho da capa — the promise or tension on slide 1
2. Arco — what each slide does (hook, problem, mechanism, steps, proof, objection, CTA)
3. Unidade por slide — one idea per frame; where they stack lists vs. story
4. Densidade — words per slide, title vs. body hierarchy
5. Legenda — first-line hook, body job, CTA, hashtags/emojis pattern
6. Oferta — what they sell or ask for, and on which slide it appears

Do not paste original sentences into the rewrite.

## Rewrite rules

- Write in the target brand's voice, not the source creator's. If the brand is unset, flag it and draft in a clean, direct Portuguese (pt-BR) default.
- Keep the same number of slides unless a slide is empty or decorative; then note the cut.
- Slide 1 must work as a stop-the-scroll cover (specific, concrete, no vague “você precisa ver isso”).
- One job per slide. Titles short. Body scannable. No walls of text on the image.
- Last slide carries a single CTA that matches the brand (comment, save, follow — not a product pitch unless an offer is set).
- Caption: line 1 is the hook (visible before “more”); then 2–6 short lines; CTA; optional hashtags only if the brand uses them. Write the caption so it complements the slides, it does not repeat them.
- Never copy names, unique stories, or claims from the source as if they were ours. Swap in the brand’s proof and offer.
- If the original is a static post, output one on-image copy block plus caption.

## Output (one file per post)

Save under the day’s copy folder as markdown, one post per file, with rank, type, theme, source, metrics, brand, model (gancho, arco, CTA), slide copy (título + corpo), caption, and art notes.

Also send the same pack to the user in chat: a one-line ranking of what was rewritten, then each post’s slides + caption.

## Handoff to audiovisual (mandatory)

Every finished post — carousel or static — must be sent to the audiovisual engineer so they can generate the images. Do this as soon as the copy is done, not later as a batch dump if you can send post by post.

Briefing for each post:

- Conta
- Tipo (`carrossel` or `estático`)
- Copy of every slide (title + body, in order)
- Notas de arte (hierarchy, cover vs. inner slides, 1:1)
- Legenda (for context; they generate images, not the caption overlay unless asked)

Do not skip this step. Copy that only lives in chat with the user is incomplete.

## Batch

Process the top N ranked items for the day. Skip reels unless explicitly asked. If the ranking is missing or empty, stop and say so — do not invent posts.
