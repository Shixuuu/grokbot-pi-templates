---
name: funnel-request-map-3
description: "use this when automating Funnel.io dashboard create/save/layout/chart XHR — includes install-template, PUT config with cards[].position grid, and chart type data shapes"
---

# Funnel dashboard request map (layout + chart types)

Sanitized shapes for automating Funnel dashboard builds. Never store JWTs/`x-auth-token`/cookies in skills or git.

## Hosts
- UI: `app.funnel.io`
- Dashboards API: `dashboards.edge.analysis.funnel.io`
- Save referer observed: `https://static.analysis.funnel.io/`
- Field rules: `api.us.fields.funnel.io` (see funnel-fields-api)

## Auth
- Header `x-auth-token` from `GET app.funnel.io/api/v1/auth-token` (session JWT)
- Sniff from live session; redact in logs

## Create / save / delete
- **Create:** `POST /api/v1/accounts/{workspaceId}/dashboards/install-template`
  - body: `{ accountId, templateId, isPendingCreate, options }`
  - blank: `templateId: "blankPerformanceMarketing"`, `isPendingCreate: true`
  - `201`; id in response `uuid`
- **Save (layout + charts + filters):** `PUT /api/v1/accounts/{workspaceId}/dashboards/{dashboardId}`
  - body: `{ title, config }` → `200`
  - **No separate layout endpoint** — grid seats are `config.cards[].position`
- **Delete:** `DELETE .../dashboards/{dashboardId}` → `200` `{ deleted, uuid }`

## Config / layout
- `config`: `{ configVersion, defaultDateRange: { presetRangeId }, globalFilters[], metricAlerts[], dataTables[], cards[] }`
- `dataTables[]`: `{ id, query: { fields, where } }` — board filters often live in `where` (e.g. `paid-organic: { "=eq": "Paid Search" }`)
- `cards[]`: `{ id, type, title, dataTableId, data, position: { column, row, width, height } }`
- Grid: **12 columns**, zero-based `row`/`column`
- Types sniffed: `bignumber` (scorecard → `data.metricId`), `line` (`leftMetricId`, `metrics[{metricId,axis}]`, `bucketType`), `bar` (`metricId`, `dimensionId`, `limit`), `table` (`dimensions[]`, `metrics[]`, `orderBy`)

## Edit helpers
- `POST .../field-extractor` `{ config }`
- `POST .../query-token` `{ fields, filters, budgets }`
- `POST .../data-explorer-view` `{ query }`
