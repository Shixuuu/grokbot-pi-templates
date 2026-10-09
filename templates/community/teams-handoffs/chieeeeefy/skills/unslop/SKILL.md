---
name: unslop
description: "Use when rewriting any writing, including slide headlines, titles, and deck copy. Cut AI tells. Must always apply. Also catch slogan couplets, poster contrast titles, and headlines you would not say out loud."
---

# Unslop

Edit text to remove AI patterns and add human voice.

This is the working copy. The marketplace unslop file is locked. Use this one. It includes the original patterns plus headline and contrast tells that still slipped through.

## Process

1. Scan for the patterns below.
2. Rewrite. Preserve meaning, match intended tone.
3. Add soul (see next section).
4. Self-audit: "What makes this obviously AI generated?" Fix remaining tells.
5. Read titles and slide headlines out loud. If you would not say the line to a person in the room, it is a slogan. Rewrite until you would.

## Adding soul

Removing patterns is half the job. Sterile, voiceless writing is just as obvious.

- **Have opinions.** React to facts instead of neutrally listing pros and cons.
- **Vary rhythm.** Short sentences. Then longer ones that take their time. Mix it up.
- **Acknowledge complexity.** "Impressive but also kind of unsettling" beats "impressive."
- **Use "I" when it fits.** First person isn't unprofessional.
- **Let some mess in.** Perfect structure looks machine-made.
- **Be specific.** Not "this is concerning" but "there's something unsettling about agents churning away at 3am."

## Patterns to detect and fix

### Content

1. **Puffery.** "pivotal moment", "testament to", "evolving landscape", "setting the stage for", "indelible mark", "deeply rooted". Cut puffery, state what happened.
2. **Name-dropping.** Listing media outlets without context. Pick one, say what was said.
3. **Superficial -ing phrases.** "highlighting...", "ensuring...", "reflecting...", "showcasing...", "fostering...". Delete or expand with real sources.
4. **Promotional language.** "nestled", "vibrant", "breathtaking", "groundbreaking", "renowned", "stunning", "must-visit". Use neutral descriptions.
5. **Vague attributions.** "Experts believe", "Industry reports suggest", "Some critics argue". Name the source or delete.
6. **Formulaic challenges.** "Despite challenges... continues to thrive." Replace with specific facts.

### Language

7. **AI vocabulary.** Additionally, crucial, delve, enduring, enhance, fostering, garner, interplay, intricate, landscape (abstract), pivotal, showcase, tapestry (abstract), testament, underscore, vibrant. Replace with plain words.
8. **Fancy ways to say "is".** "serves as", "stands as", "boasts", "features". Just say "is" or "has".
9. **"Not just X, but Y."** State the point directly instead.
10. **Rule of three.** Forcing ideas into groups of three. Use the natural number.
11. **Synonym cycling.** Protagonist, main character, central figure, hero all in one paragraph. Pick one, repeat it.
12. **False ranges.** "from X to Y" where X and Y aren't on a meaningful scale. List topics directly.

### Style

13. **Em dash overuse.** Avoid em dashes entirely. Use periods or commas only (no parentheses, no en dashes, no hyphen-as-dash substitutes). Em dashes are an AI tell, and reaching for parentheses instead just trades one tell for another. If a thought needs separation, end the sentence or use a comma.
14. **Colon overuse.** Colons are fine before a list or example. Not as mid-sentence connectors. "If you're coming from traditional automation: instead of registering event handlers, you describe conditions" adds nothing with the colon. Rewrite to let the point stand on its own without comparison framing. "Describing when the scheduler should fire works best as plain English." Same meaning, no crutch punctuation.
15. **Boldface overuse.** Don't bold every proper noun or acronym.
16. **Inline-header lists.** The tell is a bold label and colon that restates the line: "**Performance:** Performance improved...". Convert those to prose. A bold lead-in that ends in a period, names the item, and is followed by genuinely new detail ("**Schema in TypeScript.** Tables live in one file.") is fine, not a tell.
17. **Title case headings.** Use sentence case.
18. **Decorative emojis.** Remove from headings and bullets.
19. **Curly quotes.** Replace with straight quotes.

### Communication artifacts

20. **Chatbot phrases.** "I hope this helps!", "Let me know if...", "Of course!", "Certainly!", "Found the smoking gun!" Remove.
21. **Cutoff disclaimers.** "While specific details are limited..." Find sources or remove.
22. **Sycophantic tone.** "Great question! You're absolutely right!" Respond directly.

### Filler

23. **Filler phrases.** "In order to" becomes "To". "Due to the fact that" becomes "Because". "It is important to note that" gets deleted.
24. **Excessive hedging.** "could potentially possibly be argued that it might" becomes "may".
25. **Generic conclusions.** "The future looks bright." State specific plans or facts.

### Jargon

26. **Abstract metaphor nouns.** Substrate, wedge, vector, locus, vantage, nexus, primitive (as noun), harness (as metaphor), surface (as in "API surface"), bedrock, scaffolding (as metaphor), modality, paradigm, gold-plating, ratchet (as metaphor), evacuate (for moving code), endgame, north star, flywheel. These read as technical but usually have a plainer concrete word. "Substrate" becomes "base". "Wedge in" becomes "add". "Vector" becomes "way" or "method". "Gold-plating" becomes "more than the job needs". "Ratchet" becomes the mechanism's real name or "a limit that only tightens". "Evacuate" becomes "move out". "Endgame" becomes "the last phase". Pick the concrete word.

### Plain speech

27. **Say what it does, not how it feels.** "the database stays close at hand", "SQL you can read", "types that follow your schema" name a feeling. The fix names the mechanism or a number: "`.toSQL()` returns the exact string sent to the database", "a column rename fails the build". Ask what the sentence tells the reader to do or know, then write that. If you can't restate it as a concrete instruction, fact, or number, cut it. One more check: if the sentence could appear unchanged in another project's docs, it says nothing about this one. Cut it.
28. **Shorten or split dense sentences.** If the reader has to backtrack to parse a sentence, break it in two or drop clauses. One idea per sentence.
29. **Active voice.** Prefer it. Catch "is/are/was/were + past participle" and name the actor: "queries are validated" becomes "the compiler validates queries", "the file is parsed by the loader" becomes "the loader parses the file". Passive is fine only when the actor is unknown or genuinely doesn't matter.
30. **Cut adverbs, or use a stronger verb.** "runs quickly" becomes "is fast" or the number. "significantly improves" becomes the measured delta. An adverb propping up a weak verb means the verb is wrong.
31. **Prefer the plain word.** "utilize" becomes "use", "leverage" becomes "use", "facilitate" becomes "help", "numerous" becomes "many", "in the event that" becomes "if". The fancier synonym is rarely clearer.

### Headlines, slides, and poster voice

These are the tells that survive 1–31 because they look "clean" and "punchy." They are still AI.

32. **Slogan couplets.** Two short fragments posing as a title. "Same words. Four products." "Treat this as a map." "Build fast. Ship safer." That is ad copy, not a sentence. Write the claim a person would actually say. Fail any title you would be embarrassed to read aloud in a meeting.

33. **Poster contrast titles.** ALL CAPS or title-case "X, NOT Y" used as gravitas. "A MAP, NOT A CONTRACT." "A GUIDE, NOT A PROMISE." Rewrite as one spoken claim. One-word chrome labels (Privacy, Training) are layout, not this pattern. The tell is the claim itself shouting.

34. **Forced "X. It is not Y." in every cell.** If every card ends by saying what it is not, that is a template, not a distinction. Say what it is. Keep "not" only when the room will actually mix two things up (inference is not residency). One real correction in a deck is fine. A refrain on every card is slop.

35. **Staccato slide voice.** A stack of 5–8 word sentences with the same beat. "Privacy Mode, no training." "Opt out on the account." "No-training contract." Vary length. Let one sentence run. Clipped noun phrases as headlines are fine once. Identical clip on every card is a generator.

36. **Contrastive parallelism.** "While A, actually B." "Not X. Y." used for drama, not a real correction. "It is not a setting. It is a map." Say the point once. Do not set up a fake opposite.

37. **Negative setup.** "This is not about X. This is about Y." unless you are correcting a misconception the audience already has. Otherwise delete the first sentence.

38. **Headlines that are not spoken.** Read the title out loud. If it sounds like a poster, a TED talk, or a product hunt tagline, rewrite it as the sentence you would say while sharing the slide.

39. **Meta-leaking.** Never mention writing rules, banned words, or how the draft was made inside the draft. Never write "we will not delve" to prove you followed a ban. Output only the content.

40. **Redundant and-pairs.** "navigate and understand", "adapt and thrive". Pick one verb.

41. **Formulaic three-part openers.** "While A presents challenges, B offers an opportunity." Start the next idea.

42. **Grandiose closers.** "Ultimately a testament", "beacon of hope", "reshaping our understanding". End on the actual next step or fact.

## Rationalizations that still produce slop

Agents invent these. They do not make the line human.

- "It is punchy / scannable / on-brand for slides." Punchy is not the test. Spoken is the test.
- "Short titles are a design constraint." Length is fine. Slogan rhythm is not.
- "I already removed em dashes and 'not just X but Y'." Those are two patterns. Slogan couplets are a third.
- "Every card needs a contrast so the grid is clear." Grids need facts. They do not need a matching 'not' line.
- "ALL CAPS is an eyebrow, so the claim can shout too." Eyebrows label the section. The title still has to be a sentence.

## Self-audit extra

After the usual pass, ask:

1. Would I say this title out loud?
2. Does more than one card end with "it is not"?
3. Are two fragments doing the job of one sentence?

If yes to 2 or 3, or no to 1, rewrite. Do not ship.
