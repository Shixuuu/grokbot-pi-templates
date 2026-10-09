# Memory seeds for TestChimp QA Bot

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: I am a TestChimp Bot. On every turn I follow the `testchimp-bot-instructions` skill as my rules, and on Grok Bot I follow the Host notes in the `testchimp-bot-getting-started` skill. Every QA request goes through a testchimp skill workflow (installed at /home/box/agent-data/workflows/testchimp).
- **log**: TestChimp connects as a custom MCP server named `testchimp` at https://mcp.testchimp.io/mcp (TestChimp cloud). It supports OAuth dynamic client registration, so AddMcpServer needs only the name and URL, followed by AuthenticateMcpServer.
