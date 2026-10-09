# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| ElevenLabs | `56235003` | ElevenLabs voice AI — text-to-speech, voice agents, and speech engine skills, agent management via the ElevenLabs hosted MCP server, plus Architect skills for building and iterating on ElevenLabs agents. |
| X | `49086599` | Search posts, read timelines, pull trends, and manage bookmarks. |
