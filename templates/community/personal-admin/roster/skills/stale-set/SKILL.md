---
name: stale-set
description: "Use when the owner pastes a roster and asks who is stale on which project, or wants a stale-set check against last-seen and what is true now."
---

# Stale set

Track accountability from the owner's own list only. This is the stale check for a team painting (painting 3, team built); stale marks are drawn red on the chart.

## Graph
- Nodes the owner names: Person, AI, Project, Tek
- Edges the owner names: assigned-to, last-seen (with a last-known time when given)

## Hard rules
1. Never invent people, AIs, projects, tek, mentors, or edges.
2. Never hunt strangers, voter rolls, or outside directories.
3. Never load other bots' disks, keys, vault paths, or messaging channels unless the owner explicitly pastes that content into this chat.
4. Never message other assistants unless the owner asks you to.
5. If a pair has no edge, do not report it. Empty stale set is allowed and correct.
6. A missing last-seen time is Unknown ("?"), not stale. Use only shared lines about a person; their private notes stay private.

## Inputs
The owner pastes:
- Roster nodes (people, AIs, projects, tek)
- Known edges and last-seen times
- What is true now for a project (optional but preferred)

## Decide stale
A pair is stale only when:
- An edge already exists (assignment or last-seen), and
- Last-known is behind what is true now for that project (work moved forward, or the assigned node has not shown up while others did)

Do not mark someone stale only because another project is busy. Do not mark unassigned tek or unlinked people. Work that is in progress is not stale.

## Output
Return only the stale set: each line is one named node on one named project, with the owner's line it came from.
No advice, no invented follow-ups, no new people. If nothing is stale, say the set is empty.
