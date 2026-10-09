---
name: check-a-quote
description: "Use this when the user gives a verse, a saying, a meme's text, a sermon line, or a post that cites the Bible and asks whether it's accurate or used rightly: find the exact reference, quote KJV and WEB word for word, and grade it."
---

# Check a quote

1. **Pull out what's being checked.** Copy the exact words the user shared, any reference they gave, and the use: what the quote is being used to say. When a post only cites a reference ("Jeremiah 29:11"), the claim is whatever the post uses it to say. If no use is stated or clearly implied (for example, a verse on an image with no caption), record "use: none stated". Grade the wording only, and don't guess at a misuse.

2. **Open the texts.** Quote Scripture only from a text you actually opened, never from memory.
   - Best: download the public-domain plain-text files once into your working folder and search them with a shell:
     - WEB: `https://ebible.org/Scriptures/engwebp_vpl.zip` (66 books). `https://ebible.org/Scriptures/eng-web_vpl.zip` adds the deuterocanon.
     - KJV (1769 text, with the Apocrypha): `https://ebible.org/Scriptures/eng-kjv_vpl.zip`
     - Each `_vpl.txt` line is `BOOK C:V text`. The books use these codes: `JOH` (John), `PHI` (Philippians), `PHM` (Philemon), `SOL` (Song of Solomon), `EZE`, `JOE`, `MAR`, `JAM`, `1JO`, `JUD`. The KJV file also holds TOB, JDT, ESG, WIS, SIR, BAR, PRA, SUS, BEL, 1MA, 2MA, 1ES, PRM, and 4ES.
   - Fallback: open single chapters at `https://ebible.org/eng-kjv/<BOOK><CH>.htm` and `https://ebible.org/engwebp/<BOOK><CH>.htm`. These pages use standard codes (JHN, not JOH) and two-digit chapters (JHN03, 1TI06). Psalms use three digits (PSA046).
   - KJV square brackets mark words the translators supplied, which print in italics. Keep the words and drop the brackets, and drop the ¶ paragraph marks. The engwebp edition prints "LORD" where eng-web prints "Yahweh". Both are the WEB.
   - If you can't open or search either text, stop. Say what failed and don't grade.

3. **Find the verse.**
   - If a reference was given, open it first and compare.
   - If there's no reference, or the reference is wrong, search the full KJV and WEB texts, including the Apocrypha and deuterocanon. Search the two or three most distinctive words, then word stems, then KJV forms (-eth and -est endings, thee, thou, ye, "charity" for love, "meat" for food). Then try synonyms.
   - Record every search term. You'll list them if the grade is NOT IN THE BIBLE.
   - If a line's evident source is only in the Apocrypha or deuterocanon, the grade is NOT IN THE BIBLE, because for grading "the Bible" means the 66-book Protestant canon. The Bible, the 66 books, is God's word and the only authority Exegesis grades by. Say it isn't in the Bible, then name the book as its origin and call it "outside the Bible". Never present it as Scripture or as an authority.
   - A hit that only shares words and is not the evident source doesn't count. Say so in one line. A hit that is the evident source, even badly reworded, is MISQUOTED or PARAPHRASE, not NOT IN THE BIBLE.

4. **Compare the wording** word by word against KJV and WEB. Never quietly harmonize the two. If they differ because they rest on different Greek or Hebrew texts (for example, 1 John 5:7), show both, say plainly that they rest on different manuscript traditions, and don't prefer either. Ignore spelling, punctuation, capitals, and thee/thou modernized to you. Note every word added, dropped, or swapped, and whether it changes the meaning. If the words match a licensed modern translation, you may open that translation's public site and say "matches the <name> wording". Never copy its text. If you can't open it, grade against KJV and WEB and say "may match the <name> wording, not checked".

5. **Read the context** with the read-the-context skill. Every grade needs it, even ACCURATE.

6. **When the grade turns on one word,** or KJV and WEB differ in a way that matters, run original-language-note.

7. **Grade** with exactly one label: ACCURATE, PARAPHRASE, OUT OF CONTEXT, MISQUOTED, or NOT IN THE BIBLE. If more than one fits, use the most serious one that applies, in this order: NOT IN THE BIBLE, MISQUOTED, OUT OF CONTEXT, PARAPHRASE, ACCURATE. Put the second issue in the Wording or Use line.
   - NOT IN THE BIBLE means no verse in the 66-book Protestant canon is the evident source. It needs the full-text search from step 3 (including the Apocrypha and deuterocanon) to have actually run and found no verse in the 66 books that the saying is plainly drawn from. When a verse is the evident source and the change alters the meaning, the grade is MISQUOTED with that reference, even when the wording is far off.
   - If no use was stated, grade the wording only, and leave out the Use line.
   - For the origin of a saying, name a source only if you opened it (a primary text or a reliable archive) and it shows the words. Give the source and year. Otherwise say "origin not checked." Don't say someone coined a saying unless a source you opened says so.
   - A wrong chapter or verse number doesn't change the grade by itself. Correct it in the Reference line.

8. **Answer** with the grade first, then the Reference line, the KJV and WEB text, the Wording line, the Context line, and the Use line when a use was stated. Then add one line to `study-log.md`.

Read only. Never post, reply, or contact anyone.
