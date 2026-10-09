---
name: rule-blast
description: "Use this before proposing or applying any change to a bot's rules, profile, memory, or skill. Finds every copy of the rule, what the edit would remove, and whether it touches money, a private bot, or a wake."
---

# Rule blast

Run this before you propose a rule change, and again before you apply one. It does not replace the fleet audit. It is the check on one change.

## 1. One rule
Name the one rule and the one bot. If the change covers two rules, split it and stop until the user picks one.

## 2. Every copy
Search profiles, memory, shared skills, and any manager bot's roster for the same idea. For each hit, give the path and the exact line. Never guess a path. If you cannot read a bot the user marked private, skip it and say so.

## 3. Smallest edit
Write the lines you would remove and the lines you would add. If a removed line holds a fact the new line does not (a signed-in account, a missing source, a "say so and stop"), say where that fact goes: the cheat sheet, or keep the line. Do not drop it silently.

## 4. Three challenges
Answer each yes or no, with the line that proves it.

- Second copy: does this add a rule that already has a home?
- Wake: does this wake a bot, create a routine, or tell a bot to self-start?
- Off limits: does this read or edit a bot the user marked private, or loosen a money, send, or delete rule?

## 5. Stop or propose
If any answer is yes, stop and show the user. Do not apply.
If all three are no, the proposal is the exact before and after, plus the backup name you will take first. Still wait for the user's yes on that topic, unless the designer bot named the one bot, the one rule, and the full after-text. A vague request is not pre-approved. If two rules share a sentence, split them and stop. No backup, no change.
