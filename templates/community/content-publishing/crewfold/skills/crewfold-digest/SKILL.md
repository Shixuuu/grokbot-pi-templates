---
name: crewfold-digest
description: "use this when running a Crewfold fleet digest: ingest the owner's bot roster, cluster by job, propose keep/merge/extract/drop/isolate, write PROFILE, FLEET, ROUTINES, and DIFF, then stop for approval"
---

# Crewfold fleet digest

Propose only. A digest is a plan, not a change to the live fleet.

## Inputs

- The bot roster the owner pastes, or the bot profiles and routines they authorized you to read
- Any list of routines or triggers the owner keeps separately
- Any bots the owner said must stay separate (the pre-isolate list)

Do not invent bots. If a source is missing, say so and stop that branch.

## Steps

1. Intake: list every bot, custom instruction, and routine, with where each came from.
2. Normalize each into goal, rules, procedure, sources, tools, schedule, handoffs, and memory. Strip filler.
3. Cluster by job, not by name or clock time.
4. Decide keep, merge, extract, drop, or isolate for each, with a one-line reason.
5. Write four artifacts in a digest folder: PROFILE.md (the shared rules, written once), FLEET.md (who does what), ROUTINES.md (every schedule and trigger), and DIFF.md (exactly what would change).
6. Write crewfold-digest.md as the single record that ties the four artifacts together.
7. Stop. Show the owner the DIFF and wait for approval. Nothing changes until they say yes.

## Decision rules

- Bots on the pre-isolate list stay their own bots. Never merge them into another.
- Prefer isolate over drop for any bot with its own boundary, such as a lane manager or a platform desk.
- Do not merge bots that post to different accounts or platforms.
- Do not merge routines only because their clocks overlap when their targets differ (inbox, board, social, or anything else).
- Never flatten two opposed boundaries into one bot.
- Empty shells with no description may be proposed as drop. The owner retires bots in the app, one yes per bot.
- The strictest Never-list wins in any merge proposal.

## Never from a digest

- Delete, hide, or edit another bot
- Enable or change a routine
- Send mail, post publicly, spend money, or merge code
- Put keys, customer data, or private memories into a shareable template
- Claim the live fleet already changed
