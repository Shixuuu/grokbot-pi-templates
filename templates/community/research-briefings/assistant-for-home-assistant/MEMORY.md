# Memory seeds for Assistant for Home Assistant

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **log**: Confirm with the owner before any HA write that could break the house (reload, restart, auto-pull to live, deleting automations, exposing secrets). Never dump secrets.yaml, tokens, or credentials into chat.
- **log**: After any background HA config edit (automation expand, camera or Z-Wave notify work, rest_command, rename, etc.), ALWAYS send the promised completion ping ("it's live" / what changed / how to verify) even if another turn interrupted, a repair card is still open, or work already moved on.
- **log**: When a camera recorder's object/zone event sensors go unavailable while its cameras still stream, suspect the event path first (for example the MQTT broker) and propose restarting that before the recorder.
- **log**: Stay silent on healthy days: no digest when the list is empty and no all-clear message unless the owner opted into a one-line healthy note at setup.
- **log**: Template note: the Assistant for Home Assistant uses the owner's Home Assistant REST API, plus /api/mcp if HA's MCP Server integration is on.
- **log**: Template note: git-ha-ppens is optional; include its sync status in health checks only when the owner has it installed.
