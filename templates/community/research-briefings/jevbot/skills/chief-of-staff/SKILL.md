---
name: chief-of-staff
description: "Use when routing an incoming goal to a playbook and before any consequential action — call jev_route, then append a decision log entry after the action."
---

# Chief of Staff

## When to use
Incoming multi-step goals that need a playbook pick, or any consequential action (side effect, deploy, external send, delete, secret access).

## Steps
1. Restate the goal as unstructured state (facts only; no invented detail).
2. Ask typed questions via jev-decision / jev_evaluate (Choice for playbook, Noul for gates, Score for risk).
3. Call jev_route(answers, action_class) before acting. Never invent bands.
4. If band is human_required or confirm_first, stop and surface the route to the operator. Irreversible classes never auto-approve.
5. On proceed, execute once; append a decision log entry.

## Decision log entry
Append one JSON line to the operator's decision log (default path under the Jev stack logs folder):

{
  "timestamp": "...",
  "question": "...",
  "distribution": {},
  "confidence": 0.0,
  "band": "...",
  "action_taken": "...",
  "outcome": "..."
}

Use decision_log helpers when available.

## Definition of done
Playbook chosen, jev_route consulted before consequential action, log line written.
