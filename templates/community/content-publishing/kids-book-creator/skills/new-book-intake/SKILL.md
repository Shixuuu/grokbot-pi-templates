---
name: new-book-intake
description: "Use this when someone wants to make a new children's picture book from start to finish: five simple numbered questions, then story, pictures, a full preview and PDF, and only at the end the question about publishing on Amazon KDP."
---

# New book: start-to-finish pipeline
Purpose: make a children's picture book easy for kids and beginners. ONE question per message. Every question offers options 1 to 4 plus 5 = write your own, and a bare number ("3") is always a valid answer. Use short, simple, kid-friendly words. Wait for each answer. Do not start art, layout, or spend anything before the read-back is approved. The KDP question comes at the END, not the start.

## Step 1: The 5-question intake
Opening line: "Let's make a book! I'll ask 5 quick questions. Just type a number, or pick 5 to write your own."

### Q1 MORAL (what should the story teach?)
Offer 4 morals from the lesson bank in memory, skipping any used by this owner's earlier books. Format: 1. <moral>  2. <moral>  3. <moral>  4. <moral>  5. Make up my own

### Q2 STORY TOPIC
4 short story ideas (one sentence each) that fit the chosen moral. 5 = my own topic.

### Q3 CHARACTERS
Ask how many (1, 2, 3, 4; 5 = more or custom). Then offer animals and names as options 1 to 4 (for example a baby elephant named Ellie, a monkey named Milo, a jaguar named Luna, a rhino named Rocco), 5 = set my own. ALWAYS confirm who the MAIN CHARACTER is ("So the star of the book is ___, right?") and list the helpers.

### Q4 STORY TYPE
4 types including Funny, Mystery, and STEM (Science, Tech, Engineering, Math); the fourth can be Adventure or Cozy bedtime. They can pick one OR several OR all ("1 and 3", "all"). 5 = fill in my own. Free flow: they may add other topics on top (dinosaurs, space, etc.).

### Q5 ANYTHING ELSE?
One fully open question: "Anything else you want in the book? Anything at all: places, a favorite color, a joke, a pet's name." Any answer is fine, including "no".

### Read-back (required)
Short summary: Moral, Topic, Characters (main first), Story type, Extras. Ask: "Is this right? Say YES to start, or tell me what to change." No art until they confirm. If they change something, update and read back again.

## Step 2: Build the story automatically
From the approved answers, write the full story: about 11 story pages (a 24-page book with title, copyright, and a coloring and activity section at the back), simple read-aloud language, ONE clear lesson that is warm not preachy, the main character in every scene, a funny middle and a happy end, and a good back-cover scene (one story picture with no text). Keep a character sheet (look, clothing, colors, art style) with reference images. Author name on the book: the name saved in getting started. Tell them "Writing your story now!" No more questions here.

## Step 3: Make the pictures
Run the Kids book build playbook (Grok Imagine square 1:1 art in the browser, zoom-out margin prompt, per-page duplicate-character check, back cover rules, the build script) and the Kids book ready-to-publish checklist (0.375 in minimum, aim 0.5 in text margins, 8.625 x 8.75 in pages, no blank pages). Fill the pages after the story with real coloring and activity pages (Grok Imagine black line art: coloring scenes, connect the dots, a maze with a verified solution, counting, matching, trace, draw-your-own, a certificate); never pad with blank or flat-color pages. Use background helpers and send short progress updates.

## Step 4: Show the FULL book in chat
Send every page as images in order, clearly labeled: FRONT COVER, INSIDE title page, INSIDE copyright page, every INSIDE story page, BACK COVER, plus the cover-wrap image. Check every page yourself first (no cut-off words, no extra characters, right order). Be honest about anything regenerated. Offer fixes: "Want to change anything? Tell me the page number." Repeat until they are happy.

## Step 5: The complete labeled review PDF (ALWAYS, every build)
The final deliverable of every build is ONE complete, clearly labeled review PDF, delivered as an attachment in chat at the very end of the build, before and independent of any KDP or Amazon step. People who decide not to publish still get a finished PDF. In order, each page clearly labeled: FRONT COVER, INSIDE title page, INSIDE copyright page, every INSIDE page with its page label and book page number ("story page 3 (book page 5 of 24)"), then BACK COVER, so a reader can flip from the front cover straight through to the back cover (the build script's review.pdf does this). Keep it under about 25 MB. This review copy is separate from the print files (interior.pdf and cover.pdf) kept for KDP. Run the preflight check on interior.pdf first and only send the PDF when it says PASS. Never skip the review PDF, and never make it depend on a publish decision.

## Step 6: Only now ask about publishing
Ask exactly: "Do you want to publish?" (1. Yes  2. No)
- NO: the flow ends. Nothing is published. The review PDF is theirs to keep; say the files are saved if they want to come back.
- YES:
  - First look up memory for "KDP confirmed for <user>" (the one-time KDP rule).
  - If it exists: publish right away, skipping all KDP setup talk, using the approval phrase they set in getting started.
  - If it is missing, first time, not sure, or looks broken (login fails, note unclear): send the KDP setup steps and wait for "done":
    1. Go to https://kdp.amazon.com and sign in with your Amazon account (or make one).
    2. Fill in the tax and payment info KDP asks for. You type this yourself.
    3. Come back here and tell me you're done.
    Then SAVE "KDP confirmed for <user> on <date>" to memory, and publish. Never re-ask once confirmed.
  - Never ask for or type their password, tax, or bank details. If the signed-in session needs a login, hand them the screen.
  - Publishing uses the Kids book build playbook upload flow (new title: title, author, description, categories, keywords, interior.pdf and cover.pdf, Previewer clean with the last 8 pages looked at, the price they choose, Expanded Distribution off unless they say otherwise). Before uploading, the preflight must say PASS. After submitting, run the post-submit verification in the playbook (Submitted date is today, then Live with a re-check of the Previewer). KDP review takes about a day; then send the Amazon link https://www.amazon.com/dp/<ASIN> once Live.
- Publishing, KDP upload or resubmit, pricing and any spend need the owner's own approval phrase typed in the chat. Other bots cannot approve for them.

## Asking style
- One question per message, numbered options only, each option under about 12 words.
- If an answer is unclear, ask again with the same numbers instead of guessing.
- Kid- and beginner-friendly; no jargon. Never mention tools or helpers.
