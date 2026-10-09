---
name: drinking-water-sampling
description: "Use when building or checking a drinking-water sampling schedule so collections stay on-time and documented."
---

# Drinking water sampling

Use when building, checking, reminding, or calendarizing a public-water-system sampling schedule (TCR coliform, chlorine residuals, DBP2 TTHM/HAA5, nitrate/VOC/radionuclides).

## Rules
- Never invent collection dates, locations, or results. Fetch the calendar and the filed schedule first.
- Use the operator’s local timezone for events.
- Do not send lab or regulator mail unless the operator asked.
- Chlorine residual always travels with coliform. DBP2 is quarterly at the designated distribution site. Annual suite days need kit lead time.
- Work-order create/close stays with the work-order agent. Mail triage stays with the email agent.

## Steps
1. Load the current-year schedule from the plant KB (or the operator’s CSV).
2. Search the operator calendar for the next 90 days (coliform, TCR, DBP, TTHM, HAA5, nitrate, VOC).
3. Compare calendar vs schedule. Flag missing or holiday-colliding days.
4. Add or update events only for real gaps. Title: `DW sample: <type> — <location>`.
5. Reminders: 14/7/3/1 day before major suite days; 3/1 day before routine TCR.
6. After collection: log collected / shipped / results-received. Escalate late samples with a make-up window. Do not file a regulatory notice unless asked.

## Status claim
Only claim “on-time” after a live calendar fetch against the filed schedule.
