---
name: nrc-adams-search
description: "Use this when searching or retrieving public NRC documents from the ADAMS (Atoms) library via the ADAMS Public Search REST API."
---

# NRC ADAMS Public Search

Search and retrieve publicly available NRC documents from ADAMS (the Agencywide Documents Access and Management System). The REST API shipped December 2025. There is no catalog connector; call the HTTP API with a subscription key.

## Auth

- Developer portal: https://adams-api-developer.nrc.gov/
- After signup, subscribe to **ADAMS Public Search API (ADAMS APS API)** and copy the key.
- Send the key on every request as header `Ocp-Apim-Subscription-Key`.
- Store the key privately (env or credential file). Never paste it into chat, logs, or skill files.
- Unauthenticated calls return HTTP 401.

Official guide: https://adams-search.nrc.gov/assets/APS-API-Guide.pdf
Public search UI: https://adams-search.nrc.gov/home
Support: APSSupport.Resource@nrc.gov

## Endpoints

Base host: `https://adams-api.nrc.gov`

### Get one document

`GET /aps/api/search/{accessionNumber}` (e.g. `ML20014E642`). Headers: `Accept: application/json`, `Ocp-Apim-Subscription-Key: <key>`. Returns metadata plus indexed plain-text `content`.

### Search the library

`POST https://adams-api.nrc.gov/aps/api/search` with `Content-Type: application/json`, `Accept: application/json`, and the key header.

```json
{
  "q": "safety valve",
  "filters": [],
  "anyFilters": [],
  "legacyLibFilter": true,
  "mainLibFilter": true,
  "sort": "DocumentDate",
  "sortDirection": 1,
  "skip": 0
}
```

- `q`: full-text / boolean search string (optional if filters are enough)
- `filters`: AND; `anyFilters`: OR
- `mainLibFilter`: public docs since 1999-11-01; `legacyLibFilter`: pre-Nov 1999 bibliographic records
- `sort`: e.g. `DocumentDate`, `DateAddedTimestamp`; `sortDirection`: `0` ascending, `1` descending
- `skip`: pagination offset; loop until `results` is empty. Use `count` when present.
- `content`: `true` for indexed text snippets

## Filters

Text: `{ "field": "DocumentType", "value": "Inspection Report", "operator": "equals" }`. Operators: `contains`, `notcontains`, `starts`, `notstarts`, `equals`, `notequals`. Field names are case-sensitive.

Dates (only `DocumentDate` and `DateAddedTimestamp`, `YYYY-MM-DD`, no `operator` key): `{ "field": "DocumentDate", "value": "(DocumentDate ge '2024-01-01')" }`. Operators `ge`, `le`, `eq`.

To pull one day by date added: `eq` returns nothing because values include time. Use `DateAddedTimestamp ge 'YYYY-MM-DD'`, sort ascending, page through, and filter to that day client-side.

## Useful fields

`AccessionNumber`, `DocumentTitle`, `AuthorName`, `AuthorAffiliation`, `AddresseeName`, `AddresseeAffiliation`, `DocumentDate`, `DocumentType`, `Keyword`, `DocketNumber`, `DateAddedTimestamp`, `EstimatedPageCount`, `Url`, `LicenseNumber`, `DocumentReportNumber`. Typical `Url`: `https://www.nrc.gov/docs/ML2401/ML24017A120.pdf`.

## Examples

Operating-reactor inspection reports: `DocumentType` starts `inspection report` plus `DocketNumber` starts `05000`. Part 21 reports: `DocumentType` equals `Part 21 Correspondence`. Fetch by ML number with GET, not search.

## How to run a search

1. Confirm a subscription key is available. If not, have the user sign up at the developer portal and store the key privately.
2. Build the smallest query that answers the ask.
3. POST the search (or GET an accession number).
4. Summarize hits: title, ML number, document date, type, docket, URL. Pull full text with GET when needed. Direct nrc.gov PDF downloads are often blocked, so rely on the API's text content.
5. Page with `skip` if they want more.

Do not scrape the public search website when the API is available.
