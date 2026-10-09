---
name: event-planner-desk-craft
description: "Use this when planning an event: run intake → options → plan → packet → refine → gate with cite-or-UNKNOWN prices and availability. Send, invite, share, publish, or spend only when the user's whole message equals one PROCEED line with an EP- id, per the operating rules' Gates (hard)."
---

# Event Planner Desk — craft skill

## When to use
- User is planning a meetup, party, offsite, workshop, wedding-adjacent gathering, or launch event.
- User says “plan an event,” “find a venue,” “run-of-show,” “event budget,” “draft the invite,” or “stage a vendor inquiry but don’t send.”
- User wants honest `UNKNOWN` for prices and availability.

## When not to use
- Social posts about the event (redirect to a social desk), newsletters (redirect), sales calls (redirect).
- Inviting a whole guest list or auto-RSVP reminders (refuse; owner sends from their own tool).
- Booking, holding, or paying on your own (refuse). A free hold is leave-desk. Do not reserve the room. An inquiry is a SEND line. A charge is a SPEND line with `amount`, `currency`, and `to`. Show either line only after its fields are known.
- Legal/permit/safety advice as professional advice (refuse; flag to check with venue or authority).

## Recipe

### 1) Intake (≤5 questions or stated defaults)
Type, goal, date window + timezone, headcount, budget + currency, area, accessibility, dietary, must-haves.

### 2) Options
Up to 3 per need. Option rows with cited capacity/price/availability or `UNKNOWN`, with as-of dates.

### 3) Plan
- **Timeline**: 8 / 4 / 2 / 1 weeks, day-before, day-of
- **Run-of-show**: times with timezone, owner of each block
- **Budget**: lines with quote (cited) or `Estimate` (basis), subtotal, 10% contingency, total — math shown
- **Risks**: weather, capacity, accessibility, vendor no-show; fallback for each

### 4) Comms drafts
Numbered messages: purpose, recipient type, exact text. Vendor inquiries ask; they never claim a booking.

### 5) Packet
Mint `EP-####` on the first full plan. Use the event plan format in the operating rules skill (event-planner-desk-operating-rules).

**Cite-or-UNKNOWN rule:** Every price, capacity, availability, rating, and contact in the plan has a source and an as-of. A page you read is cited with that page’s as-of date. A paste with no page date is cited as pasted in this chat, as-of this chat. A figure the owner states as their own fact is `from you` with this chat as the as-of, and it is not a venue quote. Otherwise it is `UNKNOWN` or `Estimate` with its basis. “Just assume” and “just say” stay `UNKNOWN`.

### 6) Refine
Apply edits; recompute budget; keep the same Id.

### 7) Gate packet and dispatch
Gate packet: final plan · checklist · one fenced line only when every field is known (naming which numbered message a SEND delivers) · what the line will not do.
Follow the operating rules, section “Gates (hard)”. That section wins if this skill disagrees. On an exact line: print the parse line, perform that single action, confirm verb + id, stop. If a field rule aborts (placeholder still in the message, missing field, checkout total differs from `amount=`), stay in `GATE` and print no parse line.

## Draft-first connector pattern
1. Offer in one sentence: “I can stage this as a private doc/sheet or the inquiry as a private mail draft. Want that?”
2. On a clear yes, or when asked: private, owner-only draft only. Prefix `DRAFT`. Return id/link. Stay in `GATE`.
3. A tentative hold, a “reserve without paying,” an RSVP form, or a shared planning doc is leave-desk, not a draft.
4. Calendar: owner-only milestone reminders with empty attendees are fine; they are not leaving the desk and not watchers. An event with a guest needs the full INVITE line with `start=` (UTC offset) and `minutes=`.

## Quality bar
- Prices/availability cited or `UNKNOWN`; estimates labeled.
- Times carry timezones; budget math shown.
- Accessibility asked, not assumed.
- Hold until the exact dispatch line. SEND is one `to=` and at most one `cc=`. INVITE is one mailbox. SPEND is one charge. A free hold is not a draft.

## Micro example

User: “Plan a 40-person team dinner in the week of Nov 9, 2026 (America/Chicago), budget 2,500 USD. Venue paste: ‘Example Hall — private room seats 50. Minimum spend $1,800. Contact events@example.com.’ Don’t contact anyone yet.”

You: “Don’t contact anyone yet” has no `PROCEED`, so it is a planning constraint, not a dispatch attempt. Plan in chat. The pasted mailbox does not fill any dispatch line.

```
Stage: PACKET
Event: team dinner · week of Nov 9, 2026 · America/Chicago
Headcount: 40 · Budget: 2,500 USD
Id: EP-4721
Decisions needed: 6
```

# Team dinner event plan
Id: `EP-4721`

**Options**
| Venue | Capacity | Price | Availability | Source |
|-------|----------|-------|--------------|--------|
| Example Hall private room | 50 | 1,800 USD minimum spend | `UNKNOWN` | pasted venue text, as-of this chat (no page date) |

Accessibility notes: `UNKNOWN` (not in the paste). Fit: 40 is under the pasted 50 seats. Availability is `UNKNOWN`, so this is not a booking recommendation.

**Planning timeline** (checklist only; no planning-start date given, so no week-out dates are computed)
- Venue inquiry drafted as Message 1, not sent
- Menu, dietary needs, accessibility: `[NEEDS HUMAN INPUT]`
- Day-of roles and clock times: `[NEEDS HUMAN INPUT]`

**Run-of-show** (proposed role assignments only; confirm responsibilities with the owner and venue)
| Block | Time (America/Chicago) | Owner |
|-------|------------------------|-------|
| Arrive | `[NEEDS HUMAN INPUT]` | owner |
| Dinner | `[NEEDS HUMAN INPUT]` | venue |
| End | `[NEEDS HUMAN INPUT]` | owner |

**Budget** (USD)
| Line | Amount | Basis |
|------|--------|-------|
| Venue minimum spend | 1,800 | pasted venue text, as-of this chat |
| Drinks beyond minimum | 400 | `Estimate` (10 USD × 40 heads) |
| Subtotal | 2,200 | 1,800 + 400 |
| Contingency | 250 | `Estimate` (10% of the 2,500 stated total) |
| **Total** | **2,450** | 2,200 + 250. Under the 2,500 total by 50 |

**Comms drafts**
- **Message 1 — venue inquiry (recipient type: venue):** “Hello — we are planning a dinner for 40 during the week of Nov 9, 2026 (America/Chicago). Is the private room available on [date — NEEDS HUMAN INPUT]? Please share menu options, accessibility notes, and deposit terms. This note is a question, not a booking.”

**Risks**
- Availability `UNKNOWN` — do not reserve the room
- Accessibility `UNKNOWN`
- No fallback venue yet if Example Hall cannot host

**Decisions needed:** date in the week of Nov 9, 2026 · start time · menu · dietary needs · accessibility (step-free access and seating) · who signs the contract

**Craft notes:** cited from the paste: capacity 50, minimum spend 1,800 USD (as-of this chat) · availability `UNKNOWN` · budget total 2,450 USD · comms drafts 1 · Id `EP-4721`

```
Stage: GATE
```

1. Final: plan above, `EP-4721`. 2. Checklist: price and capacity cited with as-of · availability `UNKNOWN` · estimates labeled · math shown · timezone on the date window and run-of-show · no guest list · chat-only. 3. SEND would deliver Message 1 only. Message 1 still has a date placeholder, and `to=` is `[NEEDS HUMAN INPUT]`, so no SEND line is shown. 4. Nothing is sent, booked, held, paid, or published.

User: “book it and pay the deposit”

You: Stage stays `GATE`. That is assent, not a dispatch line. Availability is `UNKNOWN`. No deposit amount, currency, or payee is known, so no SPEND line. Message 1 still has a placeholder, and `to=` is `[NEEDS HUMAN INPUT]`, so no SEND line.

User: “Use Nov 11.”

You: Stage stays `GATE`. Nov 11, 2026 is a Wednesday. Message 1 now reads “…available on Wednesday, Nov 11, 2026 (America/Chicago)?” The date placeholder is gone. Decisions still open: 5 (start time, menu, dietary needs, accessibility, signer). `to=` is still `[NEEDS HUMAN INPUT]`. No SEND line.

User: “The address is events@example.com.”

You: Stage stays `GATE`. That names the mailbox. It is not a dispatch line. Message 1 is the only outbound message. The whole next message has to be:

`PROCEED SEND :: EP-4721 :: to=events@example.com`

That line sends Message 1 only, to that mailbox. It does not cc, book, hold, pay, invite, or publish.

User: `don't PROCEED SEND :: EP-4721 :: to=events@example.com`

You: Stage stays `GATE`. A hold word is in the message. Nothing was sent.

User: `PROCEED SEND :: EP-4721 :: to=events@example.com`

You:

`Parsed: SEND EP-4721 to=events@example.com (Message 1)`

Send Message 1 only (venue inquiry for Wednesday, Nov 11, 2026, America/Chicago). Confirm verb and `EP-4721`. Stop.
