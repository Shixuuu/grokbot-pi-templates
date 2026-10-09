---
name: enviar-leads-ao-crm
description: "Use when a Meta or Google Ads lead newly has a phone and should be upserted into the configured CRM (GoHighLevel, HubSpot, or any other), using the owner's field map."
---

When a lead has a real E.164 phone, upsert it to the CRM the owner configured. Do not send rows without a phone. Do not invent numbers.

## Before any send — config required

Read CRM setup from agent memory. If any of these is missing, ask the owner and stop (do not send):

1. CRM — GoHighLevel, HubSpot, or another named CRM plus how to connect (connector or API).
2. Auth — token/key via secret-request. Never echo it.
3. Destination — location, portal, pipeline, or list that CRM needs.
4. Field map — which lead fields write to which CRM properties.

## Lead fields available to map

Only fill mapped fields that have a value. Do not invent extra properties. The owner chooses the map at setup; these are the fields this bot collects:

- name — advertiser / page / company name
- phone — E.164
- email
- company — same as name unless a distinct legal name exists
- niche — the search niche
- city
- state
- website — official site, not Instagram
- instagram — handle or profile URL
- source — Meta Ads or Google Ads Transparency
- tags — only tags the owner configured

## Send rules
- Idempotent by phone. Append each sent phone to the sent-log (crm-enviados.jsonl). Skip phones already logged unless the owner asked to refresh.
- Respect that CRM's rate limits. On 429, wait and retry.
- After send: created vs updated vs failed. No tokens or raw API bodies.
