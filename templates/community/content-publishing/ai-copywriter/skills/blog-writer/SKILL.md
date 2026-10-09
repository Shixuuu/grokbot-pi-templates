---
name: blog-writer
description: "Use this when writing a blog post, newsletter, or long-form essay. Interviews for the angle, drafts in the captured voice (Dan Koe by default), then strips AI tells."
---

# Blog Writer

Create blog posts through a guided conversational workflow. Interview about the topic, capture voice from how they answer, draft to match, strip AI patterns with Humanizer, then publish as markdown or HTML.

If a topic is already given, use it as the Phase 1 starting point. If they want Dan Koe's voice (the default for this writer), run Dan Koe voice on the draft. This skill is not for video scripts, landing-page copy, or social batches.

Ask one question group at a time (question widget when the choices are real). Follow up open-ended so you capture natural voice.

## Phase 1: Interview

**Goal**: Understand the topic AND capture how the user naturally communicates.

**CRITICAL**: Pay close attention to HOW the user answers — not just WHAT they say. Their word choices, sentence length, formality, humor, directness, and vocabulary ARE the voice profile.

### Step 1a: Topic & Audience

- What's this blog post about? Give me the elevator pitch. (tutorial / opinion / story / announcement)
- Who are you writing this for? (developers / business / general / community)

### Step 1b: Voice Capture Questions

Open-ended, to capture natural writing voice.

- In your own words, what's the ONE thing you want readers to walk away knowing?
- What's your take on this topic that most people get wrong or overlook?

### Step 1c: Tone & Style Preferences

- How do you want this to feel? (casual / direct / thoughtful / energetic)
- How long? Short 500–800, medium 800–1500, long 1500–2500, or whatever it takes.

Default tone when they asked for Dan Koe: direct, opinionated, short paragraphs.

### Step 1d: Build Voice Profile

After the interview, silently build a voice profile from the user's answers. Analyze:

1. **Vocabulary level**: jargon, simple words, mix?
2. **Sentence structure**: short and punchy, long and flowing, varied?
3. **Formality**: contractions, slang, professional language?
4. **Personality markers**: humor, sarcasm, earnestness, directness?
5. **Perspective**: first person, second person, inclusive "we"?
6. **Energy**: excited, measured, skeptical, enthusiastic?

Store this as an internal note — do NOT show the voice profile. Just use it.

If they skipped the interview and want Koe, use Dan Koe voice as the profile.

## Phase 2: Outline

Structure the post before writing.

- Working title (2–3 options)
- Section breakdown with 1-line descriptions
- Estimated word count per section
- Key points to hit in each section

Koe-shaped default: Problem → Amplify → Reframe → Framework → soft close. Section titles name what the reader gets.

Present the outline. Wait for: looks good / tweak it / start over.

If "Tweak it": ask what to change, update, re-present.
If "Start over": return to Phase 1.

## Phase 3: Draft

Write the full blog post matching the voice profile.

### Writing Rules

1. Lead with the point — no throat-clearing introductions
2. Use the user's actual phrases from interview answers where they fit
3. Vary sentence length — mix short punchy sentences with longer ones
4. Be specific — concrete examples over abstract statements
5. Skip the preamble — no "In today's rapidly evolving landscape..."
6. End strong — no wishy-washy conclusions, no "In conclusion..."
7. Use transitions the user would use — not "Furthermore" and "Moreover"

### What NOT to Write

Never use:

- "In today's [anything]..."
- "Let's dive in" / "Let's explore"
- "It's worth noting that..."
- "At the end of the day..."
- "This is a game-changer"
- "Importantly," / "Notably,"
- "In this blog post, we will..."
- "Without further ado"
- "The landscape of..."
- Rhetorical questions as transitions ("But what does this mean?")
- Three-item lists in every paragraph
- Starting every section with a question
- Ending with "What do you think? Let me know in the comments!"

Write the draft. Keep a working copy if you are saving files.

## Phase 4: De-AI & Polish

Run Humanizer on the draft with the voice profile. Keep every claim. Kill chatbot leftover, sales language, forced triads, fake-candid openers.

If the job is Dan Koe, run Dan Koe voice after Humanizer and rewrite anything that fails (preamble, hedging, uniform paragraphs, missing framework).

If Humanizer cannot run, do an inline de-AI pass using the same never-write list plus Humanizer's 35 patterns.

## Phase 5: Review & Publish

Present the polished draft in full.

Ask: love it and publish / close but needs changes / rewrite sections / start the draft over.

If changes: edit, re-run Phase 4, re-present.

### Publish

When approved, ask format: Markdown, HTML, or both. Ask where to save if they want a file.

**Markdown:** title as `# heading`, proper hierarchy, no unnecessary frontmatter unless requested.

**HTML:** self-contained, embedded CSS, readable typography, max-width ~700px centered, system font stack, charset + viewport, no external dependencies.

Display the final path and word count. Remove working draft files after publishing.

## Error Handling

- Abandoned mid-interview: keep working notes, no cleanup required
- De-AI fails: inline Humanizer pass
- "Start over": return to the appropriate earlier phase

## When to use

- User wants to write a blog post or newsletter essay
- User asks for help with blog content
- `/blog` or creating blog content

## When not to use

- Documentation
- Editing an existing post (edit the file, or use Copy editing / Humanizer)
- Marketing page copy (Copywriting)
- Social batches (Social media content engine / Social content)
- Video scripts
