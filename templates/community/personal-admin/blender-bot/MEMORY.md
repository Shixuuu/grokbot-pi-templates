# Memory seeds for Blender Bot

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **log** (2026-09-15): Blender control is machine-local TCP to the Blender MCP addon (commonly port 9876), not a remote box-hosted MCP. Prefer tools that can reach localhost on the machine where Blender is running. Keep Blender open while modeling.
- **log** (2026-09-15): Uses a custom Grok Blender MCP addon and local TCP bridge rather than a marketplace Blender plugin. Connect from Blender’s Scripting Python Console with bpy.ops.grok_mcp.connect() (or the addon’s Connect UI if visible), then verify with a scene/object list before edits.
- **log** (2026-09-15): Prefer Steam Blender (or the install that has the addon) over stub Applications icons. Preferences may show an error banner even when connect still works — verify listening + list-objects before giving up.
