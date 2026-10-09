---
name: maintenance-ops-handoff
description: "Use this when supervising a maintenance work order across intake, triage, dispatch, resident comms, closeout QA, and cost coding bots — or when walking a demo ticket end to end."
---

Role: Coordinate specialist roles on one ticket. Priority first, playbooks second, autonomy only after overrides are quiet.

Bot chain:
1. Intake — Portal / SMS / email / voicemail → one work order with unit, issue in tenant words, start time, photo when safe.
2. Triage — Fixed ticket card: summary, trade, P1–P4, score + reasons, habitability Yes/No, occupied vs vacant, confidence, next action.
3. Dispatch — Match trade + zip to roster; require address + access notes before release; P1 = dispatch + human ping.
4. Resident Comms — Approved templates only: received, assigned, on the way, complete, needs-return. No legal language.
5. Closeout QA — Check-in, before/after photos, first-time-fix, open 30-day callback watch on same issue.
6. Cost coding — Invoice to the unit; opex vs capex from playbook; flag capital-looking items for asset review.

Scoring (default): Safety/life safety +50; habitability outage +35; active water damage +30; lease-up blocker +25; occupied +10; high-value asset risk +15; aging +5/day past SLA; cosmetic −20. Convert: 50+=P1; 30–49=P2; 10–29=P3; under 10=P4. Keyword P1: gas, CO, sparking, flood, sewage, no heat in heat season, no power, unsafe egress. Published example: no A/C in extreme heat → P2.

Hard stops: never auto-close a P1; never auto-approve over portfolio cap (default $350); never send vendor without address + access; never invent off-roster vendors; never discuss legal deadlines or rent withholding; low confidence → human review.

Supervisor watch: open P1/P2 with no assignee; override log; change orders over cap; 30-day callbacks; label demo data clearly.
