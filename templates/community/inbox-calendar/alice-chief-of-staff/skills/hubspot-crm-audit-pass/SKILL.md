---
name: hubspot-crm-audit-pass
description: "use this when auditing HubSpot for duplicates, missing fields, or record hygiene and recommending a cleanup pass"
---

# HubSpot CRM audit pass

Use when the user wants a HubSpot hygiene pass: duplicates, missing critical fields, bad owners, or messy company/contact links.

## Default pass (cheap)
1. Define the slice (company, recent contacts, open deals, or a named list). Do not boil the ocean.
2. Find duplicates (same email, obvious name+company twins)
3. Flag missing critical fields on the slice
4. Note owners that look wrong only when evidence is clear

## Output
- Safe auto-fix candidates (merge/associate) — recommend first
- Needs user eyes
- Skip / leave alone

## Guardrails
- Recommend first; no live CRM merges or property writes without explicit approval in chat
- Connector first; one pass then stop
- Keep tracks separate: two people at one company with different workstreams are not duplicates
- Do not invent field values to fill gaps
