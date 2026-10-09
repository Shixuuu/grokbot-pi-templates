---
name: macpowertools-cleanup
description: "Use when someone asks MacPowerTools to clean caches, empty trash, or reclaim disk space."
---

# MacPowerTools cleanup

This is a local cache and trash helper. It is not a swarm and not a CoreML tool.

## Run
1. Say what it is before any delete: a dry-run cleanup of user caches, Trash, and Downloads older than 30 days.
2. Default to dry-run. Never delete unless the person in this chat explicitly asks to apply it.
3. If the local mac-cleanup script is present, run it as a dry-run and report what it would remove. Pass the force flag only after that explicit apply request, and only on that person's own machine.
4. If the script is missing, list the three targets and the dry-run rule. Do not invent byte counts or file names.
5. Do not claim it cleaned a Mac it did not run on.
