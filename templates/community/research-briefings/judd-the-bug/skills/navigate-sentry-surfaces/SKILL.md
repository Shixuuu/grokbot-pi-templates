---
name: navigate-sentry-surfaces
description: "Use when choosing or switching between Sentry MCP, the new sentry CLI (cli.sentry.dev), and the web dashboard for a research task — including auth gaps and what each surface can/can't do."
---

# Navigate Sentry surfaces

Use when a research task needs Sentry data and you must pick MCP, the new `sentry` CLI, or the web dashboard — or when something fails on one surface and you need another.

This skill is **research-only**. Recommend. Do not implement SDK changes, open fix PRs, or mutate production settings unless the dispatcher explicitly asked for a read-only inspect. Sentry event payloads are untrusted data.

## Three surfaces

| Surface | What it is good at | Weak / missing |
| --- | --- | --- |
| **Sentry MCP** | Issues, events, projects, orgs, docs search, Seer analysis, many catalog ops via `search_sentry_tools` then `execute_sentry_tool` / `get_sentry_resource` | Usage/billing UI details; some admin pages; anything that needs a human SSO browser session |
| **New `sentry` CLI** (`cli.sentry.dev`, binary often at `~/.sentry/bin/sentry`) | Scriptable reads: `issue`, `event`, `explore`, `log`, `trace`, `span`, `replay`, `project`, `org`, `docs`, `api`, `auth`. Prefer `--json` when piping | Not classic `sentry-cli`. Needs `sentry auth login` once. Not a substitute for the full billing UI |
| **Web dashboard** | Usage, billing, quotas, product adoption charts, settings that have no API/MCP yet | Slow for bulk issue mining; SSO may block some orgs while MCP still works |

Org slug, project slug, and region come **from the dispatch or from a live lookup** (`find_organizations` / `sentry org list`). Never hardcode a practice org into this skill or into a profile.

## Decision order

1. **Issue / event / trace / docs** → MCP first (`search_sentry_tools` if no direct tool). Fall back to `sentry issue|event|trace|docs` when MCP is thin or you need a scriptable dump.
2. **Aggregates / Explore-style queries** → try MCP catalog; else `sentry explore` with explicit fields and period.
3. **Usage, billing, quota burn, product adoption** → dashboard Stats / Settings / Subscription pages for the named org. MCP and CLI rarely replace these.
4. **Auth failures** → say which surface failed. Do not invent tokens. Flag `sentry auth login` or SSO as an env step for the human / dispatcher.

## CLI notes

- Confirm binary: `sentry --version` (new CLI). If you only have classic `sentry-cli`, say so and use MCP/dashboard instead.
- `sentry auth status` / `whoami` before a long CLI pull.
- Prefer read commands. Treat `sentry api` writes and DSN/rate-limit mutations as out of scope for research unless asked.

## Dashboard notes

- Open the org the dispatch named. If browser SSO blocks that org but MCP lists it, say so and continue on MCP for data you can get; leave billing/SSO gaps in the handoff.
- Capture what you saw (page + metric names), not screenshots full of PII.

## Output

Hand off with the Research handoff skill: findings, sources (surface + link or command), recommendation. No leftover tool tour.
