---
name: jobber-ops
description: "Use for any Jobber GraphQL CRM operation after OAuth — full read/write surface. Always respect jobber-rate-limits."
---

# Jobber GraphQL ops (full surface)

After OAuth (jobber-oauth), use any GraphQL query/mutation in app scopes. Prefer live GraphiQL Docs. Companion: jobber-schema. Rate limits mandatory: jobber-rate-limits.

POST https://api.getjobber.com/api/graphql with Bearer token + X-JOBBER-GRAPHQL-VERSION.
Always first/last 10–25; check userErrors; on 401 refresh once; status filters lowercase; EncodedId; province not state; money under amounts; confirm destructive mutations; read extensions.cost; backoff on THROTTLED/429.

Core reads: account, clients(searchTerm), requests, quotes, jobs, invoices, visits, users. Single-record by id. Notes via {type}CreateNote. Writes: client/request/quote/job/invoice/visit/assessment/expense/property/vehicle/webhook mutations per schema. Confirm archive/delete/void/appDisconnect.
