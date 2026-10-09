---
name: precheck-provenance-audit
description: "Use when a plan-precheck bot must build Issue Provenance Records and an Audit Trail package plus machine-readable JSON."
---

# Provenance & Audit Trail

After severity calibration, maintain an Issue Provenance Record for every Issue ID with observable fields only (never hidden chain-of-thought): title, root cause, discipline, severity/rationale, evidence objects, source filename, sheet/page, revision and Current/Superseded status, exact evidence, location, Code Basis Status, applicable code basis, citation + citation confidence, anchor confidence, Visual QA result, retry history, unresolved items, recommended expert action, final disposition.

Preserve full source identity: uploaded filename → revision/date → sheet title → page index → Current vs Superseded → exact evidence. Never treat superseded as current. Never silently overwrite history; on change record Previous → Updated → Reason.

Deliverables: Expert Review Package Audit Trail section (concise per issue) and `<Project>_Precheck_Audit_Trail.json` (machine-readable; not a professional approval document). Attach the JSON in the completion turn when generated.
