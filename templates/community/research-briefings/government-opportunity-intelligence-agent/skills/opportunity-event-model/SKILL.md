---
name: opportunity-event-model
description: "Use this as the canonical Opportunity event model whenever ingesting, scoring, alerting, sharing, scheduling, or filing an opportunity — adapters map into this object and never invent fields."
---

# Opportunity Event Model

Canonical object for this product. Every intake adapter (synthetic, Gmail, Outlook, later SAM.gov / Phase 2 aggregators) maps into this shape. Collaboration adapters (Share, Slack, Teams, Calendar, Jira) read from it — they do not invent fields.

## Opportunity

```
Opportunity
 ├── id                 # solicitation / FOA / topic / bid ID, or synthetic demo id
 ├── title
 ├── source             # synthetic | gmail | outlook | other (named)
 ├── agency
 ├── opportunity_type   # NOFO | SBIR | STTR | RFI | Grant | Solicitation | Non-opportunity | Other
 ├── jurisdiction       # Federal | State | Local
 ├── deadline           # ISO-like datetime string as stated, or UNKNOWN
 ├── deadline_raw       # exact phrase from source, or UNKNOWN
 ├── funding            # dollar amount only, or UNKNOWN
 ├── eligibility        # who may apply, or UNKNOWN
 ├── set_aside          # named set-aside only, or UNKNOWN
 ├── naics              # codes list, or UNKNOWN
 ├── requirements       # extracted requirements list (empty if none stated)
 ├── fit_score          # High | Medium | Low (Phase 1 rubric or owner fit criteria)
 ├── fit_evidence       # short evidence from source text
 ├── urgency            # CRITICAL | URGENT | WATCH | NORMAL | NOT_CALCULABLE
 ├── owner              # responsible person/team from memory, or UNKNOWN
 ├── project            # Jira key / project name when filed, else UNKNOWN
 ├── status             # new | watching | shared | assigned | closed
 └── provenance         # { synthetic: bool, quoted_snippets: [], retrieved_at }
```

## Rules

- **Never invent** deadline, funding, NAICS, set-aside, eligibility, requirements, or solicitation IDs.
- If the source does not state a deadline (or says deadline not stated): `deadline = UNKNOWN` and `urgency = NOT_CALCULABLE`.
- Missing scalar fields use the string `UNKNOWN` (same intent as Unknown / Not stated in digests).
- Adapters may add channel metadata; they must not invent Opportunity fields.

## Product name

Public / multi-platform product name: **Government Opportunity Intelligence Agent** (by Donte Lightfoot).  
Grok Bot template is one distribution surface, not the whole product.
