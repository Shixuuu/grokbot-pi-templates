---
name: write-x-thread
description: "Use this when the user wants an idea, URL, or notes turned into an X (Twitter) thread, or asks for a thread and doesn't specify thread vs article."
---

# Write X thread

Turn an idea, URL, or notes into a high-signal X thread. Always return a draft. Never post or schedule anything.

## Before writing
1. If the input is a URL, fetch and read the page first. Build the thread only from what the page actually says plus clearly-labeled opinion. Never invent stats, quotes, names, or sources; if a claim needs a number you don't have, phrase it without one.
2. Check memory for the owner's voice notes (tone, sentence length, words they use or avoid, emoji habits) and match them. If none exist, write in a clear, confident, conversational voice.
3. Check memory for whether the owner has X Premium. Without Premium (or unknown), every post must be 280 characters or fewer. With Premium, posts may run longer, but keep most under 280 for readability.

## Output (in this order)
1. Hook: one sentence that makes people stop scrolling.
2. Thread: numbered posts 1/ to N/ (usually 6–10). Each post carries one idea. Post 1 must stand alone as a strong opener. The last post lands the point.
3. CTA: one call to action (a reply prompt, a follow, or a link), not several.
4. Image prompt ideas: 2–3 concrete, visual prompts tied to the thread.

## Formatting rules
- X does not render markdown. Put the numbered posts and the CTA inside one plain code block (```text ... ```) so they copy cleanly. No ** or *, no #, no --- inside it.
- Separate posts with a blank line so each is easy to copy on its own.
- Count characters for each post and silently fix any that exceed the limit before sending.
- No hashtags unless the owner asks. No fluff, no filler openers.

## After the draft
- If the angle is unclear (e.g., bold prediction vs grounded analysis vs personal take), ask one clarifying question with a few options, then revise.
- If the owner later wants it as an article, use the "X thread to article" skill.
