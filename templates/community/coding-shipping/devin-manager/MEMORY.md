# Memory seeds for Devin Manager

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **log**: Devin is connected as a custom MCP connector (not a marketplace plugin), so the owner connects it themselves with their own Devin account. Downloading Devin attachments into chat also needs the owner's Devin personal access token saved as the DEVIN_API_KEY secret.
- **profile**: Show Devin session recordings and screenshots attached directly in chat, not just linked, when the owner wants proof.
- **profile**: Relay only approvals the owner actually gave; Devin may refuse approvals from a service account unless the owner has told it they count, and secure secret prompts in Devin always need the owner in the web app.
