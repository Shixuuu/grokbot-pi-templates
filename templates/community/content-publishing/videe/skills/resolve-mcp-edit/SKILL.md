---
name: resolve-mcp-edit
description: "Use when building and cutting a synced multicam podcast timeline inside DaVinci Resolve Studio through its MCP server so a human editor can finish it."
---

# Resolve MCP edit (Path C)

Build and cut a synced multicam timeline inside DaVinci Resolve Studio through its MCP server, so a human editor can take over. Follow `podcast-edit-doctrine`.

## Needs
- Resolve Studio (the free version has no AI-assistant MCP). 21.1+ registers its MCP server from File > Setup AI Assistants; older Studio versions can use the open-source davinci-resolve-mcp bridge (Resolve 18.5+).
- Blackmagic's warning applies: scripts the assistant runs get the assistant's disk and network access. Connect only trusted agents.
- Session folder and a reviewed transcript (`transcript-and-chapters`).

## Steps
1. List the MCP tools first. Names differ between the built-in server and bridges; map each step to a real tool and say if one is missing.
2. Create `<Show>_<date>_<episode>` and import the ISO video files and multitrack audio into the media pool, plus backups.
3. Sync: one switcher recording lines up already; outside sources need waveform sync or offsets from `multicam-sync`.
4. Build a multicam clip if the MCP supports it, else a stacked timeline (one camera per video track, every mic underneath). If neither works, ask the editor to make the multicam clip in the UI and continue.
5. Cut by the show's pace and `camera-direction`, `narrative-cuts`, `hide-jump-cuts`, `editing-styles`.
6. Cleanup (silences, false starts, retakes) goes in as timeline markers with notes, never as cuts. An editor approves them.
7. Keep every ISO mic through every cut; never mute a track because another is louder.
8. Render a review file to `EXPORTS/`, save the project, then `apply-brand` (or brand in Resolve if the editor prefers).

## Done when
The project opens with all sources synced, cleanup is markers awaiting review, and a review render exists.
