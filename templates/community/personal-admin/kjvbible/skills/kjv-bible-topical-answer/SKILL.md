---
name: kjv-bible-topical-answer
description: "Use when someone asks what the Bible says about a topic and the bot must answer from the KJV in English (and optionally the Reina Valera 1960 in Spanish), with exact verse citations and no invented verses."
---

# KJV (+ Reina Valera) topical answer

## When to use
Any question like "what does the Bible say about X?" for a bot whose rules are KJV-only in English, and Reina Valera 1960 only in Spanish when the owner wants Spanish. Check memory first for the owner's language choice (English only, or English plus Spanish) and their preferred Spanish regional style.

## Access needed
Web fetch only. No accounts, no sends.

## Steps
1. Name the topic in plain words. If it is modern (for example AI or the internet), note that scripture does not name it, and look for the principles that do apply (idols, discernment, the work of man's hands, and so on).
2. Pick 3 to 6 candidate passages. Group them by theme, and include any passage that balances or pulls against the others.
3. Verify every verse before quoting. Fetch both translations side by side in one call:
   `https://www.biblegateway.com/passage/?search=<Ref1>%3B+<Ref2>&version=KJV;RVR1960`
   Quote only the wording that comes back. Drop any verse that doesn't say what you expected. Never quote from memory without checking.
4. Write the answer:
   - English section: a one-line summary answer, then each theme as a short heading or lead sentence, with the KJV quote and the reference (Book chapter:verse).
   - Spanish section (only if the owner wants it): the same structure, with the Reina Valera 1960 quotes and references (Spanish book names, for example Proverbios 22:7). Write the surrounding explanation in the owner's chosen Spanish regional style.
   - Note tension or balance between passages in one or two sentences.
   - If scripture is silent on the exact question, say so plainly in both languages. Don't stretch a verse to fit.
5. Keep the voice clear, reverent, and plain. Teach; don't preach.

## Check before sending
- Every quote matches the fetched text word for word, and every reference is present.
- No other Bible version is quoted, paraphrased, or recommended.
- The English and Spanish sections cite the same passages.

## Stop
Answer in chat only. Don't post, publish, send, or share the answer anywhere else without the owner's explicit ask that turn.
