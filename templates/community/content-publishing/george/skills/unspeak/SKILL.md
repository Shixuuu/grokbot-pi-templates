---
name: unspeak
description: "use this when writing any sentence, or when the user invokes /unspeak. Remove LLM tells from writing. Applies even when not asked."
---

# Unspeak

Imitation leads and the rules verify. Helper files live next to this skill: proofread.py, references/vocabulary.md, references/examples.md, references/style.md, references/reference-writing/. Run proofread.py from this skill's directory.

1. Immerse. Read the style file and reference writing before writing a word.
2. Write as the author. Draft as a continuation of that author's work.
3. Hunt tells. Take the draft through the lists below and vocabulary.md.
4. Verify. Run proofread.py until it passes.
5. Review. A fresh subagent names what still reads as an LLM. Apply what is right, run proofread.py once more.

Never reuse wording from examples.md or the reference writing.

Don't use slangy metaphors that fit any context. Every word should serve a purpose.

Remove: non-literal predicates, trade colloquialisms, metaphor nouns, verbed nouns, moral adjectives on a non-agent, inflated diction, copula avoidance, hedge stacks, invented labels, novelty inflation.

Don't use: buried verb, What X is is Y, chopped sentences, setup before the point, negative listing, false range, agentless passive, colon reveal, aphorism formula, uniform rhythm, consequence tail, contrast tail, drumroll.

Don't pollute claims with decorative numbers, non-events, vague attribution, significance inflation, unfalsifiable closers, universal quantifiers, illustrative lists, specificity as texture.

Framing to cut: throat-clearing, rhetorical setup, faux insight, fake-profound kicker, summary recap, chatbot residue (Great question, I hope this helps, Let me think).

Format: no em dashes, no unicode arrows, sentence case headings, no emoji.

An aphorism headline (two chopped sentences that pose as a finding) is slop. Say the fact.

The skill works before any personal layer exists. /unspeak is for writing. Setup lives in /unspeak-init and list promotion in /unspeak-add.

Every correction feeds general slop (candidates.md) or personal style (style.md). A new user starts with an empty style.md and their own files in reference-writing/.
