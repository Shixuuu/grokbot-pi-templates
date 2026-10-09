---
name: human-voice-prose-cleanup
description: "Use this when someone pastes text to edit, or asks you to remove AI writing patterns, get rid of em dashes, fix \"not X, it's Y\" sentences, or correct grammar and spelling while keeping their meaning and voice."
---

# Human voice prose cleanup

Goal: return text that reads like a careful person wrote it. Keep the author's meaning, facts, and voice. Change only what makes the writing sound machine-made, unclear, or incorrect.

## Ground rules
- Never add facts, numbers, quotes, examples, or claims that were not in the original.
- Keep length within about 10% of the original unless the user asks for shorter.
- Leave quoted material, code, URLs, names, data, legal wording, and technical terms untouched.
- Match the author's dialect. If the text uses US spelling, keep US spelling; if UK, keep UK. Make it consistent throughout.
- Match the register. A casual email stays casual; a board memo stays formal.
- If a sentence is ambiguous and a fix would change its meaning, leave it and flag it.

## Edit depth
Use the depth the user asks for, or their saved default. If neither exists, use Standard.
- **Light:** spelling, grammar, punctuation, and em dashes only.
- **Standard:** Light, plus every pattern in Passes 2 to 5.
- **Deep:** Standard, plus restructuring paragraphs for flow and cutting padding.

## Pass 1. Grammar and spelling
Fix spelling and typos; subject and verb agreement; tense drift; comma splices and run-ons; dangling or misplaced modifiers; missing or doubled words; wrong homophones (its/it's, their/there/they're, affect/effect, than/then, lose/loose, principal/principle); apostrophes in plurals; inconsistent capitalization; missing serial commas where the author otherwise uses them.

## Pass 2. Em dashes
Remove every em dash (—), every en dash used as a pause (–), and every double hyphen (--) or spaced hyphen ( - ) standing in for one. Swapping one dash for another is not a fix. Keep an en dash only in a numeric range, or write the range with "to".

Choose the rewrite that fits what the dash was doing:
- **Two separate thoughts:** split into two sentences.
- **A light aside:** set it off with commas.
- **A true side note:** use parentheses.
- **An explanation or a list after a complete clause:** use a colon, sparingly (no more than one per paragraph).
- **A cause, result, or condition:** rebuild with a connecting word such as because, so, which, when, although, or until.

Examples:
- Before: "The launch slipped — the vendor missed two deadlines."
  After: "The launch slipped because the vendor missed two deadlines."
- Before: "Our team — all four of us — worked the weekend."
  After: "All four of us worked the weekend."
- Before: "We need one thing — a signed contract."
  After: "We need a signed contract."

## Pass 3. Negation-first and contrast framing
Find sentences that open by denying something the reader never claimed, then pivot to the real point. Common shapes:
- "It's not X, it's Y." / "This isn't about X. It's about Y."
- "Not X. Not Y. Just Z." / "No X, no Y, just Z."
- "It's less about X and more about Y."
- "X isn't just A. It's B." / "not just A, but B"
- "The problem isn't X. The problem is Y."

Fix: state Y directly as a positive claim. Keep X only if the reader really believed it or the author is correcting a real misconception, and even then lead with Y.
- Before: "This isn't just a software update. It's a new way to run your fleet."
  After: "This update changes how you dispatch, fuel, and maintain your fleet."
- Before: "It's not about working harder. It's about working smarter."
  After: "Plan the week before you start it, and the work gets lighter."
- Before: "No contracts. No setup fees. Just results."
  After: "There's no contract or setup fee, and you pay only for results."

When the concrete Y is missing from the original, use the author's own nearest specific detail. Do not invent one.

## Pass 4. Rhythm and structure tells
- **Staccato bursts:** "Fast. Simple. Powerful." Join into full sentences with subjects and verbs.
- **Setup questions:** "The result? A 20% drop." / "Why does this matter?" Rewrite as a statement: "The result was a 20% drop."
- **Label-colon fragments:** "The catch: it costs more." / "Bottom line: ship it." Rewrite as a sentence: "The catch is that it costs more."
- **Reflexive groups of three:** "fast, reliable, and scalable" when only one or two are true or supported. Keep the ones the text backs up.
- **Tacked-on participles:** ", highlighting the importance of…", ", ensuring that…", ", making it ideal for…" Cut them, or make them their own sentence with a real subject.
- **Uniform sentence length:** vary it. Mix short and long sentences so the text has a natural pace.
- **Synonym cycling:** calling the same thing "the platform," "the solution," and "the tool" in three sentences. Pick one name and keep it.
- **Symbols in prose:** replace arrows (→, ->), "~", "≠", and slashes used as "and/or" with words.

## Pass 5. Vocabulary and stock phrases
Replace these with plain, specific words, or cut them when they carry nothing:
- **Inflated verbs:** delve, embark, navigate, leverage, harness, unlock, unleash, elevate, empower, foster, streamline, supercharge, revolutionize, underscore, showcase, boast.
- **Inflated adjectives:** robust, seamless, pivotal, crucial, vital, vibrant, intricate, multifaceted, holistic, cutting-edge, game-changing, transformative, groundbreaking, meticulous, nuanced, dynamic.
- **Stock nouns:** tapestry, testament, landscape, realm, journey, paradigm, synergy, ecosystem (unless literal), game-changer.
- **Filler openers:** "In today's fast-paced world," "In an ever-evolving landscape," "When it comes to," "At its core," "It's worth noting that," "It's important to note that," "Let's dive in," "Here's the thing."
- **Canned closers:** "In conclusion," "Ultimately," "At the end of the day," "The bottom line is," "I hope this helps," "Feel free to reach out," "Let me know if you have any questions."
- **Grand significance:** "stands as a testament to," "marks a pivotal moment," "plays a crucial role in," "is reshaping the landscape of."
- **Empty intensifiers:** truly, incredibly, genuinely, absolutely, really, very, deeply. Keep one only when it changes the meaning.
- **Chatbot framing:** "Certainly!", "Great question!", "Absolutely!", "As an AI…"

## Pass 6. Formatting tells (Standard and Deep)
- Remove bold scattered through ordinary sentences. Keep bold only for a single critical warning.
- Convert headers and bullets on short pieces back into paragraphs, unless the content is truly a list or steps.
- Remove emoji used as bullets or decoration unless the author clearly wants them.
- Use sentence case for headings.

## Final check before returning
Search the result for each of these and fix any that remain:
- "—", "–" (outside numeric ranges), " -- ", " - "
- "not just", "isn't just", "it's not", "this isn't", "rather than just", "less about"
- A question mark followed by a one-line answer
- Any word from Pass 5
- Any sentence under five words that is not a deliberate line of dialogue or a greeting
Then reread once for meaning. If any fact, number, or claim changed, restore the original.

## Output format
1. The cleaned text, ready to paste, with nothing before it.
2. A line break, then a short "What changed" note of three to six plain sentences naming the main fixes (for example, "Removed four em dashes, mostly by splitting sentences."). Skip this note if the user said they want only the text.
3. Any flagged ambiguities, quoted briefly, with the question the author needs to answer.

Do not explain the rules, lecture the author, or offer alternate versions unless asked.
