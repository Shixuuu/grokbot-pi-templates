---
name: humanizer
description: "Use this when editing or reviewing prose to remove AI tells: inflated claims, sales language, stock words, filler, chatbot leftovers, or repetitive structure, without changing what the text says."
---

# Humanizer: remove AI writing patterns

Rewrite AI-sounding text so it reads like the writer, not a chatbot. Do not change what it says or make up details.

The patterns below come from Wikipedia's [Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing), maintained by WikiProject AI Cleanup. Source: blader/humanizer v2.11.2.

## What to do

1. **Find AI patterns.** Check the text against the patterns below.
2. **Keep every claim.** You may shorten dull parts, expand useful parts, and merge or split paragraphs. Keep the information even when you change the structure.
3. **Do not invent facts.** Do not add a fact, name, number, date, quote, or citation unless it comes from the source or the user. If a sentence needs a missing detail, ask for it or use a simpler sentence. You may add an opinion or reaction when the writer's voice calls for one, but you may not add a factual claim. Fiction is exempt because invented details are part of the task.
4. **Match the voice.** Use the right tone for the text, such as formal, casual, or technical. Add personality only when the text and the writer call for it.

A writing sample takes priority over these style rules. If the sample uses em dashes, keep them at about the same rate. Do not apply §14 as a ban.

Use personality in blogs, essays, opinions, and personal writing. Keep reference, technical, legal, and factual text neutral. Never invent facts to make the text feel personal.

## Content patterns

### 1. Inflated claims about importance and legacy
Words: stands/serves as, testament, vital/significant/crucial/pivotal, underscores/highlights, evolving landscape, indelible mark, deeply rooted, marking a shift.
Problem: ordinary details get dressed as a major change.
Before: "was officially established in 1989, marking a pivotal moment in the evolution of regional statistics."
After: "was established in 1989, part of a wider decentralization."

### 2. Name-dropping to prove importance
Lists of outlets or follower counts with no context. Keep useful, sourced citations only.

### 3. Shallow analysis with -ing phrases
highlighting, underscoring, symbolizing, reflecting, showcasing, fostering, encompassing. Delete the fake depth.

### 4. Sales language
boasts, vibrant, nestled, breathtaking, groundbreaking, must-visit, stunning, in the heart of. Describe, don't advertise.

### 5. Vague sources
Experts argue, observers have cited, industry reports (unnamed). Name a real source or drop the claim. Never invent a source.

### 6. Formulaic challenges and outlook
"Despite these challenges… continues to thrive." Keep the concrete problem. Cut the stock future-looks-bright paragraph.

## Language and grammar patterns

### 7. Overused AI words
Actually, additionally, align with, crucial, delve, emphasizing, enduring, enhance, fostering, garner, gate/gated/gating (figurative; keep technical usage), highlight (verb), interplay, intricate, key (adjective), landscape (abstract), pivotal, quietly, showcase, tapestry, testament, underscore (verb), valuable, vibrant.

### 8. Avoiding is and are
serves as / stands as / boasts / features → is / has.

### 9. Not X but Y and clipped endings
"It's not just X, it's Y." "…, no guessing." State the point in a full clause.

### 10. Forced groups of three
Use the number of items the meaning needs.

### 11. Changing names and repeating sentence openings
One clear name. Merge repeated-subject sentences unless the repetition is doing work (She came. She saw. She conquered.).

### 12. False from X to Y ranges
List the actual topics instead of a fake spectrum.

### 13. Passive voice and missing subjects
Name who acts when that makes the sentence clearer.

## Style patterns

### 14. Em and en dashes
Final rewrite must not contain em dashes (—) or en dashes (–), unless the writer's sample uses them. Replace with period, comma, colon, or parentheses. Also catch ` — ` and `--`. Search for — and – before returning.

### 15. Too much bold text
Unbold decorative bold.

### 16. Lists with bold mini-headings
Prefer prose unless it is truly a list.

### 17. Title case in headings
Use sentence case.

### 18. Emojis
Remove decorative emojis.

### 19. Curly quotation marks
Use straight quotes in plain text: "like this".

## Chatbot patterns

### 20. Chatbot leftover
I hope this helps, Of course!, Certainly!, You're absolutely right!, Would you like…, Want me to…, let me know, here is a…

### 21. Knowledge-limit disclaimers and guesses
as of [date], while specific details are limited, maintains a low profile, likely grew up. State what is known or cut it. Do not present a guess as fact.

### 22. Overly agreeable tone
"Great question! You're absolutely right." Answer directly.

## Filler and hedging

### 23. Filler
In order to → to. Due to the fact that → because. At this point in time → now. In the event that → if. has the ability to → can. It is important to note that → (cut).

### 24. Too many qualifiers
could potentially possibly, might arguably. Keep a qualifier only when the meaning needs it.

### 25. Generic positive endings
"The future looks bright." End on the last concrete fact.

### 26. Too many hyphenated word pairs
Keep the hyphen before a noun when grammar needs it (`a high-quality report`). Drop it after the noun (`the report is high quality`).

### 27. Pretending to reveal a deeper truth
The real question is, at its core, what really matters, fundamentally, the heart of the matter.

### 28. Announcing the next point
Let's dive in, let's explore, here's what you need to know, without further ado. Also casual announcements: "one thing that bit me, so pay attention."

### 29. A heading repeated in the first sentence
Cut the echo sentence under the heading.

### 30. Writing about the previous version
Describe current behavior unless this is a changelog.

### 31. Forced punchlines and dramatic fragments
One short sentence can add emphasis. A row of fragments usually feels forced.

### 32. Formulaic sayings
X is the Y of Z. X is not a tool but a mirror. Replace with the specific claim.

### 33. Fake-candid openings
Honestly? Look. Here's the thing. Let's be honest. Real talk. (as standalone hooks)

### 34. Answering objections no one raised
This isn't mainly about, I'm not saying, Don't get me wrong, Some might say… but. Keep a real, named objection.

### 35. Rejecting fake alternatives
A tempting approach would be… Remove the unused fake option. Keep real alternatives a reader might consider.

## What not to flag alone

Perfect grammar. Mixed casual/formal. Dry prose without specific tells. Formal academic words not on §7. Letter-style greetings. One however. Curly quotes from a CMS. Em dashes without sales-y rhythm. One short sentence for emphasis. Deliberate anaphora. "Honestly" mid-sentence. Real limits, legal notices, named objections, real alternatives. Unsourced web writing. Complex formatting from templates. Quoted/titled watched phrases.

When unsure, look for several patterns together.

## Human details to keep

Specific odd details. Mixed feelings. Dated slang. Deliberate first-person cuts. Sentence-length variety. Genuine asides and self-corrections. Text from before 30 Nov 2022.

## How to return the result

**Pasted text (default).** Return the draft, a short list of remaining AI patterns, and the final rewrite.

**File mode.** Write only the final prose to the file. Keep code, YAML, data, and URLs unchanged. Then a short summary.

**Embedded mode.** Return only the final text.

## Rewrite process

1. Read the source and mark each AI pattern.
2. Write a draft. Read it aloud. Check rhythm, details, simple verbs (*is*, *has*), formality.
3. Ask: What still sounds AI-generated? Did the rewrite add or remove any fact, name, number, date, quote, citation, ranking, or other claim?
4. Write the final version as natural prose, not a patch of flagged phrases. If a sentence stays awkward, rewrite the paragraph. Apply §14.

Wikipedia's point: LLMs guess the most statistically likely next token, which tends toward the widest, blandest case.
