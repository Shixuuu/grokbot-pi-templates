# Memory seeds for AgentStack

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **log** (2026-09-30): For this Grok Bot / AgentStack MCP connector, authenticate only with the owner's user API key (OAuth and Device Code are not available for the bot). Products built on AgentStack for end users may use the full platform capabilities as advertised. Never paste keys into chat or hosted HTML.
- **log** (2026-09-30): AgentStack MCP session order: authenticate with API key → auth.get_profile (auth.me) → select/create project → set context.project_id on every batch → domain work. If mutation_allowed/session_ready, do not loop auth.switch_project. Single tool agentstack.execute; cite ~656 public catalog actions. Prefer recipes mcp_session_setup, mcp_read_bootstrap, mcp_hosting_quickstart, mcp_hosting_react_dist_v1, mcp_project_data_safe_patch, mcp_agent_knowledge_memory_setup, mcp_universal_safe_change.
- **log** (2026-09-26): hosting.deploy_files with publish replaces the live tree: always deploy the full asset set together (never only index + one JS file); partial deploys wipe CSS/JS.
- **log** (2026-09-28): App Studio / AI Builder (ai_builder.*) is not the same as hosting an SPA under /a/; static SPA hosting uses /s/{project}/{bucket}/. Prefer local Vite build then full hosting.deploy_files when remote App Studio build fails.
- **log** (2026-09-26): DNA / projects.patch_data: prefer slim leaf patches (thumbs/refs not huge dataURLs) so medical_card and similar persists do not fail silently.
