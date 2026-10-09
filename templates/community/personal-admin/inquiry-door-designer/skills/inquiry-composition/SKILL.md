---
name: inquiry-composition
description: "Use this when planning the look, layout, copy, images, or sources of a small interactive inquiry page, writing the build prompt for whoever builds it, or reviewing screenshots or a live page the creator brings: visual identity first, the blocking first-screen gate, beauty, type, images and credits, accessibility, layouts from phone to very wide screens, and the hand-off."
---

# Inquiry composition

Working is not finished: finished means beautiful, clear, accessible, and intentional. Every layout, image, and word carries the visitor toward the subject.

You can't build a page in this chat. These standards shape your briefs, build prompts, and reviews; don't recite them to the creator.

## Working order
1. The question.
2. Real sources, each named.
3. Design: the form, what the visitor does, how the page responds.
4. Visual identity. Nothing is generated before it exists.
5. The first-screen gate. Nothing else is built until it passes.
6. Build the rest, one beat per prompt.
7. Review the rendered page with First Visitor Review.
8. Owner review: judgment calls only, not defects a build prompt could have prevented.

## Visual identity first
Before anything is generated, write a short visual brief the owner can approve: the mood in a few plain words drawn from the subject; a palette where each color has a job (background, text, accent, controls) with passing contrast; typefaces chosen for the reading; how images are used; and at least six real examples from more than one tradition (books, museum and archive sites, atlases, scientific figures, interactive essays), each with what to borrow and what not to copy. No default brown, sepia, black, navy, beige, or AI gradient because the subject feels old, serious, or cosmic.

## The first-screen gate (blocking)
The first screen holds the real title and the real image. Five separate checks, in order; passing one never counts for the next.
1. **The actual asset exists.** A description of an image is not an image.
2. **The actual first screen is rendered.** A file existing is not proof it works on the page.
3. **Phone (390px) and desktop (1440px) are both reviewed.** Working technically is not working editorially.
4. **The failed dimension is named** (crop, type size, contrast, balance, meaning) before anything is touched.
5. **Only the necessary repairs are applied.** Leave what passed alone, then render and check again.

## Layout
- Never ship a plain text scaffold. The material picks the layout, not a component library.
- A layout or diagram is a claim: it may express what the material means, never invent meaning or make a guess look certain. Say what lines, sizes, and colors mean; label anything not to scale.
- Major edges share a few alignment lines. Empty space needs a job. A section after a full-width block matches its width or clearly steps down.
- One idea per screen: on a phone, one main object, one action, one movement. Scene first, measurement second, meaning after. End on a real finish.

## Type, sizes, access
- Body text 18px or larger. Nothing meant to be read falls below 17px, including captions, credits, labels, controls, and form inputs; only true notation is smaller. Paragraph lines about 60 to 68 characters.
- Contrast at least 4.5:1 for normal text, 3:1 for large text and essential controls.
- Recompose for each size, never just stack the desktop: a 390px phone, a tablet both ways, a 1440px desktop, a 5120x1440 wide screen. Nothing breaks at 320px or 200% zoom. On wide screens paragraphs keep their width and the extra space shows relationships.
- WCAG 2.2 AA minimum: keyboard with visible focus, screen-reader names and order, text equivalents for diagrams and media. Works with the sound off; meaning never lives only in sound, motion, color, or hover. Touch targets about 44px, a tap alternative for every drag, motion 150 to 250 ms respecting reduced motion, no autoplay audio, captions on audio and video.

## Images
Each image sits large beside its text. Show real source objects (a document, map, photo, specimen) before generated art. Template policy: public domain or openly licensed images and sounds come first. Generated or reconstructed images are labeled as interpretation and never pass as evidence; reject generic AI art and baked-in text.

## Sources and credit
- Facts and sources first; charm after. Keep a claim and source list: each claim, its source and where in it, what it supports, how sure it is, and image rights. Chicago-style notes unless the field uses another system.
- Every fact, quote, image, and sound has a named source and a visible credit beside it. Fuller notes sit in a collapsed section; no links inside body sentences.
- Keep record, tradition, reconstruction, interpretation, and generated response apart. Creative interpretation needs only a clear label. Never guess or invent a fact, quote, source, or credit.
- When sources are missing (most creators have no research team): first ask what sources they already have. Only if you can search the web in this chat, look up just the few facts the first screen needs, each with a named source. Put everything else on a short list of where to look (a museum catalogue page, an archive, a named book), at most three, the most important first, noting you haven't checked them. Say plainly that the first screen can be built now and the other gaps stay UNKNOWN until filled; no long UNKNOWN lists. Bigger research belongs to a sibling research bot if the owner has one.

## Copy
- Template policy: no em dashes anywhere on the page, including captions, labels, and buttons. Keep one only inside an exact quotation, and flag it to the creator.
- Short sentences, one thought each, with the subject as the grammatical subject. No filler, slogans, "This page...", on-screen instructions about the page, build notes, or AI tells (delve, tapestry, testament, "not just X but Y", forced groups of three).

## Leave out
- Never show a disabled or "pending" control for a feature that doesn't exist yet (for example "Audio pending"). Leave it off the page until it works.
- Repeated card rows, fake dashboards, popups, cookie banners, or analytics the page doesn't need; any private account, tool, or build note.
- Visitor data the experience doesn't need. If it needs some, the page says what is stored and where. For children, follow Inquiry encounter design.

## Reviewing a rendered page
If you can open links in this chat, you may try a preview link and look at it at phone and desktop sizes. If you can't, or it lands on a sign-in page, say so in one line and ask for screenshots at phone and desktop size, on arrival and after the main action. Private previews from AI page builders often require a sign-in, so screenshots are the normal route unless the preview is public. Never claim you opened or tested a page you didn't. Name any size you haven't seen, ask what happened when they tapped, then run First Visitor Review.

## Handing off to whoever builds
You write the prompt; someone or something else builds. Every prompt, brief, or spec goes in the chat as a copyable block. A file is only an optional extra when something is too long to paste, never the only way to get it.
- **First build prompt: the smallest working proof.** Only the first screen, the one visitor action, and the one response, with the colors and type from the visual brief, the claims it needs and their sources, and the standards this screen needs as plain requirements with their numbers. If the one response needs a fact not yet sourced, use a labeled approximate value to confirm, never an empty response. Keep the prompt under 500 words; the six examples stay in the brief, not the prompt. Ask for it to be checked on a phone before anything is added. Say in one plain line that this is step one of the full experience, and name the beats that come after the first screen passes. Each later beat gets its own prompt.
- **Fixes:** one corrective prompt, not a rebuild: what passed and stays untouched, the one thing that failed, and the change. Patch before replacing; if a fix doesn't hold, find the cause; fix a shared cause once.
- **Where the work lives:** changes go to a draft copy first, each working version is saved with a note, then the live page is updated and checked. The owner decides what goes live.
- End each build prompt with a short release check for the builder: claims sourced and no generated image as evidence; each screen size composed; WCAG 2.2 AA; the main path separate from reference; links work; anything still open written down.
