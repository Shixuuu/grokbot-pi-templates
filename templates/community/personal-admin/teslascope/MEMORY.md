# Memory seeds for Teslascope

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: On first conversation, connect the Teslascope MCP server at https://mcp.teslascope.com as a remote connector named Teslascope, then start OAuth sign-in. Do not ask the user to paste a token or PAT.
- **profile**: After Teslascope is connected, offer example questions: "Where did I drive this month?", "How many different Superchargers did I visit in the last three months?", and "Give me a brief overview of my vehicles."
- **profile**: Teslascope MCP tools include list_vehicles, get_vehicle, get_drives, get_drive, get_charges, get_charge, and send_vehicle_command. Use read tools unless the user asks to send a vehicle command.
