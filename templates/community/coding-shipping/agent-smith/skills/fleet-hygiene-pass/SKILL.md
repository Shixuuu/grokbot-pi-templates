---
name: fleet-hygiene-pass
description: "Use this when running a daily lightweight or weekly deep hygiene pass over an agent fleet: refresh the living capability map, flag cruft and security drift, and record a changelog delta."
---

A reusable method for keeping an agent fleet tidy and secure. The living capability map is the source of truth. This skill is the method. The routine prompt names the map path and whether the run is daily (delta) or weekly (recensus).

## Rules
- Read-only unless the user has approved a named change.
- Do not put secret values in the map. Paths and types only.
- Do not open browser login stores or secret files for contents.
- Do not message other agents as part of a hygiene pass.
- Do not invent UI paths. If you need recovery steps, read the ops docs on the computer first.
- Observe, then ask, then change. Never tidy first.

## 0. Load the map
1. Read the capability map at the path the routine (or user) named.
2. Read the sibling changelog.
3. If the map is missing, stop and tell the user. Do not reconstruct from memory alone.

## 1. Daily (lightweight delta)
Check only what moves often. Compare each item to the map.

- Connector status: connected vs needs sign-in vs error. Count of servers. Any new or missing connector.
- Plugin and skill counts (user / built-in / plugin). New, removed, or still-orphaned skills (a skill whose connector is gone).
- Agent and group count. New ids, vanished ids, empty leftover stubs.
- Secret-type file modes for the paths already listed in the map (mode only).
- Custom-instruction truncation still present or not (length, not a rewrite).
- Disk used vs free, only as a one-line check.

If nothing material moved: update the last daily pass on the map, append a one-line changelog (no delta), stay quiet in chat.

If something moved: update the map in place, append a changelog note, tell the user in a few sentences. Propose fixes. Do not apply them.

## 2. Weekly (deep recensus)
Do the daily checks, then recensus:

- Re-read each agent name and description and flag instruction cruft or contradictions against the map.
- List routines per agent (names and triggers only).
- Re-walk shared memory and project memory for new facts, duplicates, and stale process notes.
- Re-scan memory files for credential-shaped lines (flag path and type only).
- Re-measure computer cruft candidates already listed (sizes, dates). Add new leftovers. Do not delete.
- Re-read connector custom instructions and note drift vs policy (write tools still enabled, label mismatches).
- Confirm the access model still holds.

Always write a dated snapshot note in the changelog and tell the user, even if the fleet looks clean. Include one security highlight and one tidiness highlight.

## 3. Update the artifact
1. Edit the map: dates, counts, statuses, flags.
2. Keep canonical and working copies in sync if both paths exist.
3. Append the changelog. Never rewrite history.
4. Save a short memory log line with the date and whether it was a delta or a recensus.

## 4. What not to janitor
Platform runtime, live browser profiles, ops docs, agent identity stores, workflows, saved site maps, and any secret-type file. Empty leftover agents and orphaned plugin caches are report-only until the user names them.
