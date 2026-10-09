---
name: openfoia-research
description: "Use this for FOIA / public-records research with the free local OpenFOIA toolkit (MuckRock, DocumentCloud, agency search) — drafts and research only; paid fax/mail add-ons need owner approval."
---

# OpenFOIA research

Local-first FOIA toolkit (https://github.com/JordanCoin/openfoia). Prefer free search/ingest/analyze paths.

## Typical loop
1. `openfoia init` if needed
2. Search MuckRock/DocumentCloud for prior releases
3. Identify agency + FOIA contact
4. Draft request for the user's review before sending
5. Ingest responses; extract entities; cross-ref SEC EDGAR / OpenCorporates when useful

## Rules
- No paid fax/mail add-ons unless the owner approves the spend
- Never invent request IDs
- Pair with us-gov-filings-knowledge and application-submitter for portal fills
