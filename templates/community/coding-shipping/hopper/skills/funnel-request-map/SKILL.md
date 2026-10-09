---
name: funnel-request-map
description: "use this when automating or reverse-engineering Funnel.io dashboard save/chart/fields XHR — maps dashboards.edge endpoints and sanitized config shapes"
---

# Funnel dashboard request map

Sanitized shapes for automating Funnel dashboard builds. Never store JWTs/`x-auth-token`/cookies in skills or git.

## Hosts
- UI: `app.funnel.io`
- Dashboards API: `dashboards.edge.analysis.funnel.io`
- Field rules: `api.us.fields.funnel.io` (see funnel-fields-api)
- Preview: `POST .../data-explorer-view` on dashboards.edge

## Auth
- `GET app.funnel.io/api/v1/auth-token` → session JWT for fields API header `x-auth-token`
- Sniff from live session; redact in logs

## Dashboard document
- List: `GET /api/v1/accounts/{workspaceId}/dashboards`
- Get: `GET /api/v1/accounts/{workspaceId}/dashboards/{dashboardId}`
- **Save:** `PUT /api/v1/accounts/{workspaceId}/dashboards/{dashboardId}`
  - body: `{ title, config }` → `200`
  - `config`: `{ configVersion, defaultDateRange: { presetRangeId }, globalFilters[], metricAlerts[], dataTables[], cards[] }`
  - `dataTables[]`: `{ id, query: { fields, where } }`
  - `cards[]`: `{ id, type, title, position: { column, row, width, height }, dataTableId, data }`
  - Scorecard `type`: `bignumber`; metric in `data.metricId`

## Edit-time helpers
- `POST .../dashboards/field-extractor` body `{ config }` → `200`
- `POST .../dashboards/query-token` body `{ fields, filters, budgets }` → `201`
- `POST .../data-explorer-view` body `{ query }` → `200`

## Operator checklist
1. Confirm workspace + fields
2. Build `config` cards + dataTables (or edit in UI)
3. Preview via field-extractor / query-token / data-explorer-view as needed
4. PUT save; confirm before share/publish
