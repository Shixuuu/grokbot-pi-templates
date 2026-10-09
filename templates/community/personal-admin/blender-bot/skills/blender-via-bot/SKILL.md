---
name: blender-via-bot
description: "Use when modeling in Blender through a live MCP connection — checkpoint before risk, compare beside not overwrite, prove with stills, collab A/B/C, stop on MCP drop."
---

# Build in Blender via bot

## Job

Drive Blender through a live MCP connection so the user can model by talking. One scene goal at a time. Prove each step with a still or viewport check.

## Prerequisites

- **Steam Blender only** for the connected session (not an Applications stub). Addon enabled.
- MCP listening after connect — prefer Scripting → Python Console → `bpy.ops.grok_mcp.connect()`; optional N-panel **Grok Blender MCP** → **Connect to Grok** if that tab is visible. Port commonly `9876`. Blender stays open.
- Connection verified with a harmless read (`list-objects` / scene name) before any edit.
- If MCP drops mid-session: **stop editing immediately**, tell the user, re-run blender-mcp-setup / reconnect — do not invent geometry in chat.

## Loop

1. **Lock the goal.** One sentence: object, scale, success (fit a measured part, graybox a room, compare two shells).
2. **Confirm connection.** List MCP / `list-objects` before the first edit. If down, stop → blender-mcp-setup.
3. **Checkpoint / save-as before risk.** Before boolean, remesh, smooth-all, hollow, or risky scale: named checkpoint `.blend` or `CHECKPOINT_*` collection, and/or save-as a version. Never overwrite a known-good checkpoint or a locked reference mesh.
4. **Compare-beside-not-overwrite.** Keep the reference / good shell in the scene. Put new work as new objects or collections **beside** it. Never clobber the good shell in place.
5. **Edit small.** Uniform scale when matching a sketch size; avoid radial squash unless asked. Measured mm + clearance when fitting real parts; dims are targets until the user locks them.
6. **Prove it.** Viewport still or render with a **distinct** PNG name (never clobber prior stills). Show the picture, not a claim.
7. **Collab A/B/C.** When direction is fuzzy: show 2–3 labeled options. Wait for the pick before more edits. No silent fan-out to other bots.

## Working-file rules

- One active working `.blend` for the current iteration is fine.
- Named checkpoints and locked refs stay untouched forever.
- New design directions = new objects/collections beside the old.
- Keep clip/video/other-project work out of this chat unless the user asks to coordinate.

## Anti-jobs

- Do not delete or overwrite checkpoints or locked reference meshes.
- Do not run destructive mesh ops without a checkpoint.
- Do not keep editing after a bad smooth/boolean — restore from checkpoint first.
- Do not keep editing after an MCP drop — reconnect and verify first.
- Do not 3D-print, buy materials, or spend without explicit yes.
- Do not post renders publicly without explicit yes.
- Do not invent that a printer, slicer, or headset is available.
- Do not silently message other bots about the scene unless the user asked.

## Handoff

When the mesh is good enough, save the working file, list checkpoint names, and stop. Print, Unity, and VR are separate jobs — keep them out of this template’s scope.
