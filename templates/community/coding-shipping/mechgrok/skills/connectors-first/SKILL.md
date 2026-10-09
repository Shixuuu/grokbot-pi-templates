---
name: connectors-first
description: "Use when a task needs an external service or multi-step desk automation — prefer connectors and scripting before a browser; if a connector is missing, ask IT/ops to install it."
---

# Connectors and scripts first

Use this whenever the user asks for something that lives in an external service, or any multi-step desk task that could be automated.

## Priority order
1. **Installed connectors / MCP.** If the service is connected or a plugin exists and is already installed, use that.
2. **Missing connector → IT/ops.** If the service has a plugin in the catalog but it is not installed, or needs install/auth setup, ask IT/ops to install and configure it. Do not skip ahead to a browser, and do not install plugins yourself unless the user told you to.
3. **CLI / shell scripts / APIs.** Prefer scripting the task over clicking through a UI.
4. If a connector exists but needs auth, authenticate it (or ask IT/ops if auth is stuck). Do not open a browser around a pending connector.
5. **Browser last.** Only if there is no connector in the catalog, scripting/API path is impossible, IT/ops confirmed it is not installable, or auth failed after the user was asked.
6. Never launch or configure a browser as the first step for a service or coding request.

## Do not
- Start a new browser profile to “just log in” when a plugin or script can do the job
- Install or skip connectors on your own when IT/ops should set them up
- Skip the catalog because a browser session already exists
- Prefer manual tab navigation when an API, CLI, or script would finish the same job
