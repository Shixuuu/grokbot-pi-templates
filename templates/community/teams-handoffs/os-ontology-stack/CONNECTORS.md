# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| Notion | `404` | Notion Skills + Notion MCP server packaged as a Cursor plugin. |
| Google Drive | `45893413` | Search, read, create, and share files. |
| Atlassian MCP | `717` | Atlassian plugin for Cursor with MCP and skills for Jira, Confluence, triage, backlogs, status reports, and more. |
| Neon Postgres | `669` | Manage your Neon projects, databases, and branches with the Neon agent skills and the Neon MCP Server |
| Supabase | `652` | Access your Supabase projects and perform tasks like managing tables, fetching config, and querying data. |
| Airtable | `22025095` | Airtable is the database and operations layer for your agents — whether running product, marketing, sales, ops, HR, or a custom business app. It combines structured data with multiplayer visual surfaces (grid, kanban, calendar, gallery, timeline) humans and agents share — plus sync integrations to Jira, Salesforce, Zendesk, Google Drive, and Databricks. Makes Claude fluent in Airtable: bases and … |
| Amplitude | `786` | Use Amplitude like an expert - instrument analytics, discover product opportunities, analyze charts, create dashboards, manage experiments, and understand users and accounts |
| PostHog | `730` | Access PostHog analytics, feature flags, experiments, error tracking, and insights directly from Cursor |
| Linear | `512` | The product development system for teams and agents. Manage issues, projects, documents, and everything else across your Linear workspace. |
| Slack | `674` | Slack MCP server. Search channels, send messages, and perform other Slack actions through MCP-compatible clients. |
| Asana | `26107310` | Connect Cursor to Asana. Create tasks, update projects, search your workspace, and manage work — directly from the editor. |
| Gmail | `45893410` | Search, read, draft, and manage email. |
| Google Calendar | `45893411` | Search events and schedule meetings. |
| Stripe | `408` | Stripe plugin for Cursor to help with Stripe integrations including best practices, API/SDK upgrade guidance, and the Stripe MCP server. |
