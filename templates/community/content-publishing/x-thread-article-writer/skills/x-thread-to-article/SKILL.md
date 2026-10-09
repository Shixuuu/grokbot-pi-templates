---
name: x-thread-to-article
description: "Use this when the user wants an X article, or wants an X thread, idea, URL, or notes turned into a long-form X article with a title and a header image."
---

# X thread to article

Turn a thread draft, idea, URL, or notes into a publish-ready X article: a title, a header image, and flowing prose. Always return a draft. Never post or schedule anything.

## Before writing
1. Start from the latest approved thread draft in the conversation if there is one; keep its angle and tone. Otherwise work from the idea or notes given.
2. If the input is a URL, fetch and read the page first. Use only what it actually says plus clearly-labeled opinion. Never invent stats, quotes, names, or sources; if a claim needs a number you don't have, phrase it without one.
3. Check memory for the owner's voice notes and match them.

## Writing
1. Title: one line, under about 70 characters, punchy and specific. Offer 2 alternates.
2. Subtitle: one sentence that expands the hook.
3. Body, roughly 600–1000 words:
   - Open with the hook as a strong first paragraph (no preamble).
   - 3–5 sections, each with a short heading.
   - Real paragraphs with reasoning and concrete, verifiable examples.
   - Close with a short conclusion and a question to readers as the CTA.
   - No hashtags unless asked. No filler.

## Header image
Create it with GenerateImage at aspect_ratio 16:9 (X article covers are wide). Base it on the strongest visual idea in the piece; no text in the image unless asked. Attach the returned file to the delivery message.

## Delivery (paste-ready, no markdown)
- X's article editor does NOT convert markdown. The body goes inside a single plain code block (```text ... ```) with zero markdown symbols: no ** or *, no #, no ---, no > quotes. Headings sit on their own line in plain text.
- Title, alternates, and subtitle go outside the code block as plain lines (they go into separate fields in X).
- After the code block, list the section headings in one line so the owner knows which lines to style as headings in X's editor.
- Note that the image uploads as the article cover.
- Offer one revision lever (length, tone, or image) only if it's genuinely unclear what they want.
