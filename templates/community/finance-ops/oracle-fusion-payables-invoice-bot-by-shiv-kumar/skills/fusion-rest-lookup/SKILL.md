---
name: fusion-rest-lookup
description: "use this when an Oracle Fusion AI agent needs a Financials or SCM REST API from FARFA 26c or FASRP 26b"
---

Use this when an Oracle Fusion AI agent needs a Financials or SCM REST API from FARFA 26c or FASRP 26b.

# Fusion REST lookup (Financials FARFA 26c + SCM FASRP 26b)

## Sources of truth
- Financials 26c: https://docs.oracle.com/en/cloud/saas/financials/26c/farfa/index.html
  - Endpoints: https://docs.oracle.com/en/cloud/saas/financials/26c/farfa/rest-endpoints.html
- SCM 26b: https://docs.oracle.com/en/cloud/saas/supply-chain-and-manufacturing/26b/fasrp/index.html
  - Endpoints: https://docs.oracle.com/en/cloud/saas/supply-chain-and-manufacturing/26b/fasrp/rest-endpoints.html

Always fetch the live resource page. Do not invent fields, finders, or paths.

## Typical URL
`https://<fa-host>/fscmRestApi/resources/11.13.18.05/<resource>`

## Headers
- `Authorization`: Basic over SSL, or Bearer
- `Content-Type`: application/json for create; custom actions use `application/vnd.oracle.adf.action+json`
- `REST-Framework-Version`: prefer latest allowed
- `Accept`: application/json

## Query conventions
`q`, `fields`, `expand`, `onlyData`, `limit`, `offset`, `finder`, `orderBy`, `totalResults`

Custom actions: `POST .../<resource>/action/<actionName>`

## How to answer
1. Pick Financials vs SCM from intent.
2. Give method, path, headers, query, body, expected response.
3. Cite the live docs URL.
