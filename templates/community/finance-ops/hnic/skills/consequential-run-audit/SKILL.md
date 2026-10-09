---
name: consequential-run-audit
description: "use this every Friday (or when asked) to audit 5 completed consequential runs via an independent Auditor — report only"
---

Use every Friday (or when the principal asks). Prefer an independent Auditor bot; the Chief of Staff only routes and delivers.

Inputs: action logs under /workspace/logs/action-logs/, related handoffs, supporting evidence under /workspace/evidence/ and /workspace/approved/.

Process: confirm sources; select 5 completed consequential runs; independently inspect source quality, unsupported claims, incorrect numbers, ignored approval boundaries, repeated failures, unnecessary tool calls, avoidable human interruptions; label VERIFIED/INFERRED/UNKNOWN; write /workspace/reviews/audits/YYYY-MM-DD-consequential-audit.md; handoff to Chief of Staff; notify principal with the report. GATE 3 — recommendations only, no external actions.

Output: PASS RATE, REPEATED FAILURE PATTERNS, RULES WE SHOULD ADD, RULES WE SHOULD REMOVE, BOTS THAT NEED RETRAINING.

FORBIDDEN: Re-executing workflows; external send/trade/delete; logging secrets; bypassing gates.
