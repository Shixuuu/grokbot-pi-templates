---
name: ste-rewrite
description: "Use this when asked to rewrite an instruction, procedure, or prompt into ASD-STE100 Simplified Technical English (STE) and flag what is ambiguous."
---

# STE rewrite

Turn any instruction, procedure, or prompt into ASD-STE100 Simplified Technical English, then list what was ambiguous. Rules come from the ASD-STE100 specification (asd-ste100.org).

## Hard constraints
- Keep every number, unit, value, name, limit, and fact exactly. Do not round, drop, or add facts.
- Leave dialogue untouched: quoted speech, sample utterances, and example lines a speaker says stay verbatim, inside their quotes.
- Keep code, commands, file paths, URLs, and identifiers verbatim.
- Do not resolve an ambiguity by guessing. Write the most literal reading and flag it.

## Steps
1. Read the whole input. Classify each part as procedural (tells someone to do something), descriptive (explains), safety, or dialogue/verbatim.
2. Make a list of key terms. Pick one word for each thing and use it every time.
3. Rewrite procedural text:
   - Imperative verb first ("Close the valve."). Active voice. No passive.
   - One instruction per sentence, except simultaneous actions.
   - Max 20 words per sentence.
   - Use a numbered vertical list for steps or complex text.
4. Rewrite descriptive text:
   - Max 25 words per sentence; max 6 sentences per paragraph; one topic per paragraph.
   - Passive only when necessary.
5. Safety text: start with WARNING (risk of injury) or CAUTION (risk of damage). Give a clear, simple command first, then the risk. Example: "WARNING: Do not touch the brake unit until it is cool. Hot parts can cause injury."
6. Apply word rules everywhere:
   - Approved verb forms: imperative, simple present, simple past, simple future, infinitive, past participle as adjective ("the closed valve").
   - Not approved: progressive "-ing" (is closing), perfect (has closed), passive in procedures (must be closed). "-ing" only inside a technical name (landing gear).
   - Noun clusters: max 3 words. Break longer ones with prepositions.
   - Do not leave out "the", "a", "this".
   - One word, one meaning, one part of speech (about 900 approved words in the STE dictionary). Technical names and technical verbs (domain terms) are allowed.
   - Swaps: commence -> START; ensure -> MAKE SURE; prior to -> BEFORE; replenish -> FILL; utilize -> USE; approximately -> ABOUT; in order to -> TO; close (adj) -> NEAR; it is imperative that -> delete, use the imperative.
7. Check: count words in each sentence against the limits; verify each original number and fact appears in the output; verify dialogue is byte-identical.

## Output format
1. **STE version** (the rewrite).
2. **Ambiguity list**: numbered. For each item quote the original phrase, say why it is ambiguous (unclear actor, unclear object or reference, vague quantity or time like "soon" or "a few", undefined term, conditional with no else case, conflicting instructions, missing step), and give the reading used in the rewrite. Write "None found" if empty.
3. Optional short note on any rule you could not meet (for example, a technical name that exceeds the noun-cluster limit).

## Example
- Before: "It is imperative that the operator ensures the hydraulic reservoir is replenished prior to commencing operation."
- After (13 words): "Make sure that the hydraulic reservoir is full before you start the operation."
