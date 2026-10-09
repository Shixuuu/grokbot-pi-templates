---
name: design-an-ops-crew
description: "Use when standing up or reshaping an MSP/IT ops crew: mid-managers, specialists, ownership lanes, and what watchdogs must not redo."
---

# Design an ops crew

## Goal
Build an orchestrator → mid-manager → specialist hierarchy that matches the human's slices. Watchdogs coordinate; specialists do the work. When the stack is unknown, run stack discovery first.

## Steps
1. If PSA/RMM/mail/calendar/billing/DNS/security are not yet recorded in memory, run stack discovery before seating anyone.
2. Ask which slices matter (service, money, product, growth, or custom). Skip slices they do not want.
3. For each chosen slice, seat one mid-manager whose job is to watchdog specialists — not redo their work.
4. Under each mid-manager, seat specialists with one clear mission each, matched to discovered systems.
5. Encode ownership in each agent's description: what they own, what they escalate, and who they report to.
6. Keep ops settings, crew design, and cross-slice escalation with the orchestrator. Product gaps go product → feature lane; do not let service bots invent product work.
7. Wire marketplace plugins / MCP before inventing browser-only specialists. Gaps become MCP-first portal replacement candidates.
8. After seating, offer at most a few standing routines — default lean: prefer zero; any included start PAUSED for deliberate enable. Prefer event-driven tips on real blockers over weekday farms.
9. Tell the human who owns what in one short map; no jargon dump.

## Rules
- One owner per lane. No duplicate specialists for the same mission.
- Mid-managers poke once on a miss, then escalate; they do not steal specialist tasks.
- Generic names and missions only in shared skills; company-specific ids live in memory or routines.
- Unknown stack → discover first, then seat. Never hard-code one shop's org chart.
- Specialty systems (network, money, security, web): offer a thin mid+specialist pack, not a lone bot.
