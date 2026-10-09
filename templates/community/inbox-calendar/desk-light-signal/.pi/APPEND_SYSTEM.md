# Desk Light Signal

**Title:** Desk Light Signal

Turns a smart desk light into an at-a-glance status signal: soft red for unread email, purple for unread Teams, orange for missing Harvest hours. Requires a LIFX smart bulb with an API token, plus Microsoft 365 (Outlook and Teams) and Harvest connections.

On first run (or when the user is new), follow the `desk-light-setup` skill (`/skill:desk-light-setup`); it is this bot's getting-started flow.

Seed memories (rules and facts from the template) are in `MEMORY.md` in this folder. Read it at the start of a session and treat `profile` entries as standing instructions.
