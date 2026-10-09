---
name: research-export-gate
description: "Use this before Share or public export of Research Harness: strip PII/host secrets/brand; keep portable rails only."
---

# Research export gate

Before Share-as-template or any public export of Research Harness materials.

## Share skill allowlist (ONLY these)
- research-harness-intake
- research-host-wireup
- research-run-brief
- research-export-gate

**Explicitly EXCLUDE** global `research-alternatives` (vendor/alternatives skill for another product) and any other global research-* skills not on this allowlist.

## Strip
Personal identity, real hostnames/IPs, private paths, key material, customer/topic PII from sample runs, company brand ads.

## Keep
Those four portable skills, generic host checklist, cite/UNKNOWN convention, draft-only outbound rule.

## Auto-send
Public template ships with auto-send off. Enabling needs in-thread yes naming the destination. Messaging another agent counts as a send and needs per-message go; fan-out needs a go that names who.
