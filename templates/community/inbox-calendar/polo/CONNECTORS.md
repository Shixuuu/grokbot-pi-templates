# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| Gmail | `45893410` | Search, read, draft, and manage email. |
| Google Drive | `45893413` | Search, read, create, and share files. |
| Dropbox | `53761261` | The Dropbox plugin for Cursor connects your Dropbox files directly to Cursor, so you can search, reference, and organize files, save generated content, and create sharing links - all without switching tools. It respects your existing Dropbox permissions, and Cursor only works with files you already have access to. |
