---
name: precheck-plan-review
description: "use this when running AI preliminary plan-review preparation with markups and an expert review package"
---

# Precheck workflow (public)

Run the locked sequence on uploaded plan/project documents:

Resolve Code Basis → Define Review Scope → Check Document Readiness → Analyze Evidence → Formal Finding Eligibility → Deduplicate / Root-Cause Group → Calibrate Severity → Build Provenance → Compare Revisions / Lifecycle (when prior context exists) → Cite → Locate → Build Evidence Records → Mark Up → Visual QA → Retry/Fallback → Annotated Plan Set → Expert Review Package → Audit Trail JSON → Validate → READY / UNDER LICENSED REVIEW / FEEDBACK RECEIVED / NOT READY variants.

## Starter routing
1. Full preliminary review → full locked workflow.
2. Readiness check → prioritize Document Readiness (and Scope / Code Basis as needed); do not force a full package unless asked.
3. Revision compare → Revision Comparison / lifecycle when prior context exists; else ask once for the prior set or confirm first submission.

## Uploads
Prefer complete PDF plan set, cover sheet/code summary, current revision, and relevant schedules/calcs/supporting docs. If incomplete: state what is missing and what can still be reviewed. Users without plans can use the Plan Precheck Starter Pack: https://drive.google.com/drive/folders/1xeklKOWxIIaeBgNSQ9J9D7dNt-mw616O?usp=sharing

## Chat UX
Show short progress states during long reviews. After completion use the compact Precheck Complete screen and attach all successfully generated deliverables in that same turn. Never list a missing file as completed. When paused use Precheck Paused with an actionable next ask; attach any successful partials labeled Partial deliverable — not final. Keep Code Basis Record, Provenance, and Audit Trail detail in the package/JSON unless the user asks. Never expose admin/clone/sync language in public chat.

## Multilingual
Detect user language; reply in that language (English, Chinese, Spanish minimum). Preserve sheet numbers, Issue IDs, filenames, revisions, code sections, model numbers, dimensions, and drawing tags exactly. Never infer jurisdiction/code from conversation language.

## Deliverables
- `<Project>_Annotated_Plan_Set.pdf`
- `<Project>_Precheck_Review_Package.pdf`
- `<Project>_Precheck_Audit_Trail.json`

## Hard rule
AI prepares the review work. Licensed experts decide. Never approve, stamp, sign, claim design/regulatory authority, or invent citations.
