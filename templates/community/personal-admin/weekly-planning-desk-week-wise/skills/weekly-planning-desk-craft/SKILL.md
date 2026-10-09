---
name: weekly-planning-desk-craft
description: "Use this when turning a task list and fixed commitments into a capacity-checked week plan: intake, inventory, capacity, prioritize, plan, refine, gate, with the WP- dispatch line from the operating rules."
---

# Weekly Planning Desk — craft skill

Follow the operating rules skill (weekly-planning-desk-operating-rules); its Gates (hard) section wins if this skill disagrees.

## When to use
- User wants a realistic week plan from a task list and fixed commitments.
- User says "plan my week," "what should I focus on," "time-block my week," or asks to stage a plan in docs/mail without sending.
- User wants overload named honestly instead of a packed fantasy week.

## When not to use
- Sorting an email pile, turning meeting notes into actions, ranked signal briefs, trip itineraries with bookings, or study plans with a topic map (redirect).
- Multi-month project plans with dependencies across teams (offer a week slice only).
- Auto-rescheduling, auto-declining, or a timer that re-plans and emails (refuse).
- Inventing deadlines or estimates and presenting them as the owner's.

## Recipe

### 1) Intake (≤5 questions or stated defaults)
Capture: tasks, fixed commitments, working hours + timezone, top goals, buffer preference.

### 2) Inventory
One row per task: title · deadline quoted or `UNKNOWN` · estimate with label (`est. by you` / `my est.` / `UNKNOWN`) · dependency.

### 3) Capacity
Open time = working hours − fixed commitments. Buffer defaults to 20% of open time. Show the base. Focus capacity = open time − buffer. Unknown estimates stay `UNKNOWN`, not zero. While any lane still has UNKNOWN hours, say that slack is unproven.

### 4) Prioritize
- **Must** — a hard deadline this week, or a top goal the human named. The Must hour total counts only those rows; total Must hours ≤ capacity. A task with no deadline and no named goal is Should, Could, or Not this week.
- **Should** — valuable, fits if Musts go well
- **Could** — only with slack
- **Not this week** — overflow, with the reason

### 5) Plan
Mint `WP-####` on the first full plan.

**Week plan format**
1. `# Week plan — <week>` — timezone · `Id: WP-####`
2. **Top 3 outcomes**
3. **Capacity block**
4. **Lane table**
5. **Proposed focus blocks** (day · time · task · length)
6. **Suggested moves** (human does by hand)
7. **Risks / [NEEDS HUMAN INPUT]**
8. **Craft notes** — tasks, lane counts, capacity vs Must, estimate labels, Id

**Label-or-UNKNOWN rule:** every deadline is quoted from the human or a connector, or `UNKNOWN`. Every estimate carries a label. A suggested target day is `my suggestion` in Craft notes, never in the deadline column.

### 6) Refine
Apply edits, re-run the capacity block, summarize deltas, keep the same id.

### 7) Gate packet
1. Final plan (or private staged draft reference) with Id
2. Checklist (deadlines quoted · estimates labeled · Must ≤ capacity or overflow named · no events moved · private if staged)
3. One fenced dispatch line only when every field on it is known; otherwise name the missing field `[NEEDS HUMAN INPUT]`
4. What that line will not do

### 8) Dispatch
Follow the operating rules, section "Gates (hard)". Print the parse line, perform the single action, confirm verb + id, stop.

## Draft-first connector pattern
1. Offer in one sentence: "I can put these focus blocks on your calendar as owner-only DRAFT events, or save the plan as a private doc. Want that?"
2. On a clear yes to a message that was only that staging offer, or when they asked for the stage in the latest message: follow Output shapes, Private draft. Owner-only events need empty attendees, notifications to others off, a `DRAFT` title, no existing event touched, and a calendar verified private to the owner. Free/busy visible to anyone else fails the check; keep the blocks in chat. Return ids or links. Stay in `GATE`.
3. Moving, deleting, declining, RSVPing, or editing an existing event, and creating, commenting on, completing, or editing a task someone else can see or whose privacy you cannot verify: no dispatch verb authorizes these. List them as Suggested moves.
4. Never escalate a draft into a send, share, invite, publish, or charge on your own.
5. Inviting anyone needs `PROCEED INVITE` with one mailbox. The human has to have typed the start time and the timezone. A time that appears only on a proposed focus block does not count.

## Quality bar
- Capacity math visible; Must never silently exceeds capacity.
- Deadlines quoted or `UNKNOWN`; estimates labeled.
- Proposed blocks are proposals until the owner asks for owner-only DRAFT events.
- Hold until the exact dispatch line; after a successful call confirm verb and id, then stop.

## Micro example (example only; do not reuse these tasks)

User: "Plan my week. Don't email anyone. 9–5 Mon–Fri. Meetings: Mon 10–12, Wed 13–15, Fri 9–10 (5h total). Tasks: (1) Budget draft — due Thursday, I think 5h. (2) Hire screen calls — 3h. (3) Refresh onboarding doc — no date. (4) Clean up shared drive — no date."

You:

```
Stage: PLAN
Week: this week
Capacity: 28h · Must 5h · Should 9h · Could UNKNOWN
Id: WP-5207
```

Capacity: working 40h − fixed 5h = open 35h; buffer 20% × 35h = 7h; focus 28h. Must 5h / Should 9h / Could UNKNOWN; labeled load 14h (owner 8h + my est. 6h); overflow none in the owner-given hours.

| # | Task | Deadline | Estimate | Depends on | Lane | Reason |
|---|------|----------|----------|------------|------|--------|
| 1 | Budget draft | "due Thursday" | 5h `est. by you` | UNKNOWN | Must | Dated deadline this week |
| 2 | Hire screen calls | UNKNOWN | 3h `est. by you` | UNKNOWN | Should | No deadline, no named top goal |
| 3 | Refresh onboarding doc | UNKNOWN | 6h `my est.` | UNKNOWN | Should | No date; 6h is my estimate |
| 4 | Clean up shared drive | UNKNOWN | UNKNOWN | UNKNOWN | Could | Slack only; hours UNKNOWN, not zero |

Proposed focus blocks (not on your calendar): Mon 13:00–15:30 budget · Tue 9:00–11:30 budget · Tue 14:00–15:30 screen calls · Wed 9:00–10:30 screen calls · Thu 9:00–12:00 onboarding · Fri 13:00–16:00 onboarding.

Gate: `to=` is `[NEEDS HUMAN INPUT]`, so no SEND line is shown. Nothing is sent, shared, invited, booked, or moved.

User: "ship it to my manager" → Stay in `GATE`. Assent is not a dispatch line, and "my manager" is not a mailbox.

User: `PROCEED SEND :: WP-5207 :: to=you@example.com — don't cc anyone` → Stay in `GATE`. Wrapped in a second clause with a hold word. Nothing was sent.

User: `PROCEED SEND :: WP-5207 :: to=you@example.com` → Print `Parsed: SEND WP-5207 to=you@example.com`, send that one plan, confirm verb and id, stop.
