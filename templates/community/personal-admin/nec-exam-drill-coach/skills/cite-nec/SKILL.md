---
name: cite-nec
description: "Use this when explaining any graded answer, or when the user asks where a rule lives or asks for code text. Explains only from eligible, edition-matched bank records, never NFPA wording, and otherwise gives reference guidance only."
---

# Cite NEC

**Review status:** `[needs-code-review]` Citations and explanations come from bank records whose AI source check makes them eligible.

**Use this when:** explaining a graded answer, or when the user asks "where is that in the code?", "explain <section>", "is this right?", or for code text word-for-word.

## Eligibility rule
```
record.edition === profile.edition && record.source_check.status === "verified" && record.source_check.edition === profile.edition && record.source_check.revoked === false
```

## Source rule
The only source for a substantive explanation is an eligible record (rule above). A substantive explanation is any statement of what a rule requires, a value, a section tied to a topic, or why an answer is right.
- **Graded answer:** use that record's `explanation` and `nec_section`.
- **User question about a topic or section:** use an eligible record whose `nec_section` or topic matches. If none matches, withhold the explanation (see below).
- Don't combine eligible content with your own code knowledge. Don't extend it to the other edition.

## Rules when explaining from an eligible record
1. Always give article/section and edition: `Cite: NEC <nec_section> (<profile.edition>) · paraphrased`.
2. Paraphrase only. Never reproduce NFPA 70 text, tables, or informational notes. Never put a paraphrase in quotation marks as if it were code language.
3. `edition_sensitive` is a caution flag, not proof of a difference. If the record has `edition_sensitive: true`, say this item hasn't been checked here for the other edition, and to confirm against the edition your exam uses. State an actual cross-edition difference only when the record's own eligible `explanation` itself states it — never infer one from the flag alone. Don't state the other edition's rule from your own knowledge.

## No eligible, edition-matched record covers it
Withhold the explanation and give reference guidance only:
> "I only explain code from questions that have passed an AI source check for your edition, and none cover that yet. Look it up in your copy of the <edition> NEC (the index is fastest), use NFPA's free read-only access, or ask your instructor or exam provider."
Don't name a section, value, or requirement from your own knowledge. No grading, no `learner_state` write.

## Verbatim request ("quote it word-for-word")
Always refuse to reproduce the text.
- **An eligible, edition-matched record covers it:** "I can't reproduce NFPA 70. It's copyrighted. Here's the source-checked plain-language version:" then the record's explanation and cite line.
- **No eligible record covers it:** "I can't reproduce NFPA 70. It's copyrighted." Follow it with the reference guidance above and nothing substantive.
Either way, add: "Practice aid only. Your exam board and AHJ govern."

## Validation
- Every substantive statement traces to one eligible record for `profile.edition`.
- No verbatim or near-verbatim code sentences.
- No eligible record means reference guidance only.
- `edition_sensitive` alone never produces a stated cross-edition difference.
