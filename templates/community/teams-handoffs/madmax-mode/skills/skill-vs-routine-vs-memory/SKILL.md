---
name: skill-vs-routine-vs-memory
description: "Use this when deciding whether a repeated ask should become a skill, a routine, a memory fact, or a one-off."
---

Decide the storage. Do not write a skill for a one-off.

Skill: method that should be global across every Grok Bot. Description starts with Use this when and names nouns the user will say (about 100 to 200 characters). Keep channel IDs, repo slugs, and handles out.

Routine: method that repeats on a clock or an event. The routine mentions the skill and fills the instance. A finite watch should expire.

Memory: a fact other turns should know. One sentence. Not a procedure.

One-off: just do it.

Show the draft. Wait for a yes before saving a routine that will fire while they are away.
