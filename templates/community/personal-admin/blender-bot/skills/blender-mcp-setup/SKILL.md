---
name: blender-mcp-setup
description: "Use when Blender is not connected yet — enable the addon, connect via Scripting console (or N-panel), verify with list-objects, then stop so modeling can begin."
---

# Blender MCP setup

## Job

Get a live Blender connection so `blender-via-bot` can run. Stop when the host shows Blender connected and a harmless `list-objects` (or scene name) call works.

## Happy path (verify)

1. Open **Steam Blender** (not an Applications stub).
2. Enable the Blender MCP addon (Preferences → Add-ons).
   **Note:** Preferences may show **Error (see console)** even when enable + connect still work. Do not stop on that banner alone — check the console and try connect.
3. **Primary connect (most reliable):** switch to the **Scripting** workspace → **Python Console** → run:
   ```python
   bpy.ops.grok_mcp.connect()
   ```
   Confirm the console (or addon UI) reports listening on port `9876` (or your configured port).
4. **Optional UI connect:** if the N-panel tab **Grok Blender MCP** is visible, you can instead click **Connect to Grok**. The tab is easy to miss or missing; prefer the Python Console path when in doubt.
5. Leave Blender open.
6. From the bot: list MCP servers → confirm blender → run `list-objects` (or equivalent scene read).
7. Hand off to modeling (`blender-via-bot`). Another assistant may own reconnect; this bot models only after green.

## First-time install (if addon missing)

1. Install the project’s Blender MCP addon (example repo pattern: `grok-blender-mcp`).
2. Enable it in Blender Preferences → Add-ons (ignore a lone Preferences error banner until connect is tried).
3. Register the MCP server in the bot host config (a blender entry). Restart the host if required.
4. Then follow the happy path above.

## Failure modes

- Stub Blender without the addon → switch to Steam Blender.
- Addon enabled but port not up → run `bpy.ops.grok_mcp.connect()` in the Scripting Python Console (most common fix). N-panel **Connect to Grok** only if that tab is actually visible.
- Preferences **Error (see console)** with a working connect → treat as noise; verify listening + `list-objects`.
- Blender quit mid-session → reopen Steam Blender, connect again, re-verify.
- Host config missing server → add it; do not paste secrets into chat.
- MCP drops during modeling → stop edits; reconnect and `list-objects` before continuing.

## Anti-jobs

- Do not start modeling until `list-objects` succeeds.
- Do not store tokens in the skill or chat; use the host secret flow if needed.
- Do not change unrelated MCP servers.
