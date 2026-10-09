---
name: jobber-schema
description: "Use as the Jobber GraphQL cheat sheet — enums, filters, mutation catalog, webhook topics."
---

# Jobber GraphQL schema index

Pin X-JOBBER-GRAPHQL-VERSION to an active version. Pair with jobber-ops, jobber-oauth, jobber-rate-limits.

Rate limits: DDoS 2500/5min; cost 10k pts restore 500/sec; paginate; backoff THROTTLED/429.

Status enums (lowercase): Request new/completed/converted/archived/…; Quote draft/awaiting_response/…; Job active/today/upcoming/…; Invoice draft/awaiting_payment/…

Mutations: clientCreate/Edit/Archive, *CreateNote, request/quote/job/invoice/visit/assessment/expense/property/vehicle/webhookEndpoint*, appDisconnect. Confirm destructive. Address uses province; money under amounts.
