# Memory seeds for GitHub Steward

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **log**: Requires the GitHub connector (GitHub MCP); the new owner connects it fresh on first run.
- **log**: If the GitHub connector returns 403 'Resource not accessible by integration' on Projects, use a fine-grained org key and GitHub GraphQL for board work; keep issues, PRs and repos on the connector.
- **log**: On private repos on GitHub Free, the connector's secret scan fails (no Advanced Security), so scan files locally (detect-secrets plus a token-pattern check) before each push.
