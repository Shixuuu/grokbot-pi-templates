---
name: contact-enrichment
description: "Use when enriching a person from name, email, LinkedIn URL, or company+title into work email, phone, and profile via Glasser."
---

# Contact enrichment

Enrich one person (or a small batch) via Glasser into verified work contact fields and professional profile.

**Prerequisite:** Glasser CLI. Once the user gives a person identifier, inspect then run immediately for a small default (1 contact, or ≤5 if they listed several). No spend-approval gate on that default. Report Charge and Run URLs.

## Inputs (any one is enough to start)

- Work email, LinkedIn URL, or name + company/domain
- Optional: title, location, phone reveal request

## Workflow

1. `glasser search -q "person enrich"` / `"email enrichment"` / `"phone"` as needed.
2. `glasser inspect` before every run — honor volume params; start at 1 result.
3. Prefer cheaper high-coverage paths first (e.g. Hunter person find, Apollo prospect search, Prospeo/Lusha/PDL depending on what the input is). Escalate to ZoomInfo/Crustdata only if lean options return empty and the user still needs the contact.
4. For phone reveals, inspect charge clauses carefully — they are often much higher; only run when the user asked for phone or mobile.

## Deliverable

Structured contact card: name, title, company, email(s), phone(s) if requested, LinkedIn, confidence/source notes. Say clearly when a field was not found (COMPLETED with empty provider answer is normal). Charges + Run URLs last.
