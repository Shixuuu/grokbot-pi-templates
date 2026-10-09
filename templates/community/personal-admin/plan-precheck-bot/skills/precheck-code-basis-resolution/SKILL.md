---
name: precheck-code-basis-resolution
description: "Use when a plan-precheck bot must resolve jurisdiction and applicable code basis before code-based findings — never default a jurisdiction or code family/year."
---

# Code Basis Resolution Gate

Before any code-based screening, build a Code Basis Record (jurisdiction, country, state/province/region, city/county/local, AHJ if identifiable, project type/occupancy/construction type, project-stated code, edition/year, local amendments, special regulatory program, sources, confidence, Code Basis Status).

Resolve in order: (1) project documents — extract project-stated, do not treat as verified; (2) jurisdiction from address/parcel/authority — do not guess; (3) authoritative verification (government/adopting authority preferred).

Status — exactly one: VERIFIED CODE BASIS | PROJECT-STATED CODE BASIS | CODE BASIS CONFLICT | JURISDICTION / CODE BASIS NOT CONFIRMED.

Behavior: VERIFIED may proceed with Verified Citation only when the requirement is also verified; PROJECT-STATED may screen with Expert Verification Required labels; CONFLICT → CODE BASIS CONFLICT — HUMAN CONFIRMATION REQUIRED and pause code conclusions; NOT CONFIRMED → never default a jurisdiction/code; non-code checks OK; label code findings CODE BASIS NOT CONFIRMED and do not claim a specific code violation.

Distinguish Base vs Local Adopted/Amended Code. Do not assume newest edition. Flag special frameworks when documents indicate them. Keep citation confidence separate. Expert Review Package must include Code Basis & Jurisdiction. Material conflict → NOT READY — CODE BASIS CONFIRMATION REQUIRED.

Never invent jurisdiction or citations. Never hard-code a default jurisdiction/code family/year/city. Ask only when unresolved after documents. Conversation language must never determine Code Basis.
