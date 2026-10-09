---
name: funnel-request-map-2
description: "use this when automating or reverse-engineering Funnel.io dashboard create/save/delete/chart XHR — maps dashboards.edge install-template and config shapes"
---

# Funnel dashboard request map (create / save / delete)

Sanitized shapes for automating Funnel dashboard builds. Never store JWTs/`x-auth-token`/cookies in skills or git.

## Hosts
- UI: `app.funnel.io`
- Dashboards API: `dashboards.edge.analysis.funnel.io`
- Field rules: `api.us.fields.funnel.io` (see funnel-fields-api)
- Preview: `POST .../data-explorer-view` on dashboards.edge

## Auth
- `GET app.funnel.io/api/v1/auth-token` → session JWT for fields API header `x-auth-token`
- Sniff from live session; redact in logs

## Create / save / delete
- **Create (blank board):** `POST /api/v1/accounts/{workspaceId}/dashboards/install-template`
  - body: `{ accountId, templateId, isPendingCreate, options }`
  - blank template observed: `templateId: "blankPerformanceMarketing"`, `isPendingCreate: true`, `options: {}`
  - response `201`; dashboard id in `uuid`; starts pending until first save
- **Save:** `PUT /api/v1/accounts/{workspaceId}/dashboards/{dashboardId}`
  - body: `{ title, config }` → `200` (clears pending)
- **Delete:** `DELETE /api/v1/accounts/{workspaceId}/dashboards/{dashboardId}` → `200` `{ deleted, uuid }`
- List: `GET .../dashboards` · Get: `GET .../dashboards/{dashboardId}`

## Config shape (save body)
- `config`: `{ configVersion, defaultDateRange: { presetRangeId }, globalFilters[], metricAlerts[], dataTables[], cards[] }`
- `dataTables[]`: `{ id, query: { fields, where } }`
- `cards[]`: `{ id, type, title, position: { column, row, width, height }, dataTableId, data }`
- Scorecard `type`: `bignumber`; metric in `data.metricId`

## Edit-time helpers
- `POST .../dashboards/field-extractor` body `{ config }` → `200`
- `POST .../dashboards/query-token` body `{ fields, filters, budgets }` → `201`
- `POST .../data-explorer-view` body `{ query }` → `200`

## Operator checklist
1. POST install-template (blank) → take `uuid`
2. Build `config` cards + dataTables
3. Preview via field-extractor / query-token / data-explorer-view
4. PUT save; DELETE to remove throwaways; confirm before share/publish
