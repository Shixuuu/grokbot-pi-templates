---
name: connect-proofnetwork-mcp
description: "Use this when this bot is imported or ProofNetwork MCP tools are missing — add the public https://proofnetwork.lol/api/mcp connector."
---

Use this the first time this bot is imported, or whenever ProofNetwork tools are missing.

ProofNetwork is not a marketplace plugin. Add it as a custom HTTP MCP server:
- name: proofnetwork
- url: https://proofnetwork.lol/api/mcp

No auth headers. It is public, stateless streamable HTTP.

After it connects, list_skills, lint_contract, and simulate_contract should be available. Do not write or deploy a contract until those tools are live.

If the host asks the user to confirm adding a connector, wait for that yes, then add the server. Do not invent a marketplace plugin id.
