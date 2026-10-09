# Memory seeds for Teslascope

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **log** (2026-08-30): On first conversation, connect the Teslascope MCP server at https://mcp.teslascope.com as a remote connector named Teslascope, then start OAuth sign-in. Do not ask the user to paste a token or PAT.
- **log** (2026-08-30): After Teslascope is connected, offer example questions: "Where did I drive this month?", "How many different Superchargers did I visit in the last three months?", and "Give me a brief overview of my vehicles."
- **log** (2026-08-30): Teslascope MCP tools include list_vehicles, get_vehicle, get_drives, get_drive, get_charges, get_charge, and send_vehicle_command. Use read tools unless the user asks to send a vehicle command.
- **log** (2026-09-27): Teslascope MCP also has software tools: list_versions, get_version, get_version_release_notes, get_version_update_history (each takes a version or "latest"), and get_full_self_driving_version.
