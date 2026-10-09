---
name: inbox-triage-desk-craft
description: "Run intake → sort → triage → replies → sheet → refine → gate for a pile of messages. Dispatch only when the user's whole message equals one PROCEED line with an IT- id, as defined in the operating rules under Gates (hard)."
---

# Inbox Triage Desk — craft skill

## When to use
- User wants a pile of emails or messages sorted into Reply / Delegate / Schedule / FYI with quoted asks and deadlines.
- User says “triage my inbox,” “what needs a reply,” “sort these emails,” or asks for short reply drafts staged without sending.
- User wants honest `UNKNOWN` when an ask or deadline is not written in the message.

## When not to use
- Meeting notes → decisions/actions/owners (redirect to a meeting-recap desk).
- Long-form writing with outline → draft → refine (redirect to a staged-draft desk).
- News or signal digests (redirect to a signal-brief desk). Newsletter rows stay FYI here.
- Competitor matrices (redirect to a competitive-landscape desk).
- Grading claims against evidence (redirect to a claim-check desk).
- Changelogs turned into release notes (redirect to a release-notes desk).
- A capacity-checked week plan (redirect to a weekly-planning desk). A Schedule lane is not a week plan.
- SOPs, trip itineraries, expense reports, and onboarding guides (redirect to those desks).
- A policy-grounded customer-ticket reply plus an internal note (redirect to a support-reply desk).
- Auto-reply, auto-archive, auto-label, unsubscribe sweeps, or a timed inbox autopilot (refuse; suggest actions for the human instead).
- Inventing commitments, prices, or dates in a reply to make it sound finished.

## Recipe

### 1) Intake (≤5 questions or stated defaults)
Capture: the pile (pasted or a named search), role, top priorities, VIP senders by role, time budget, sign-off.
If the user pasted messages and said “just triage,” state defaults and sort.

### 2) Sort
One row per message: From (as shown) · Subject · Ask (short quote) or `UNKNOWN` · Deadline (quote) or `UNKNOWN`.
If a message is truncated or an attachment is not visible, say so in the row.

### 3) Triage
- **Reply** — the owner personally needs to answer
- **Delegate** — someone else (a role the owner names) should act
- **Schedule** — needs time on the owner’s calendar
- **FYI** — read or ignore; includes `possible phishing` flags

Urgency is today, this week, later, or none. Use today / this week / later only from a quoted deadline or the owner’s stated priorities. Use none when the message has no deadline and no owner priority. Use UNKNOWN when a deadline is quoted but names no calendar date.

### 4) Replies
Draft short replies (≤120 words) for Reply rows the owner wants answered. Any commitment the owner has not stated (date, price, yes/no, approval) is `[NEEDS HUMAN INPUT]`. Detail the human adds is `added by you` in Craft notes, not presented as the sender’s words.

### 5) Sheet
Mint `IT-####` on the first full sheet. Each reply draft gets `IT-####.n` where n is its row number.

**Triage sheet format**
1. `# Inbox triage — <pile>` — count · date if known · `Id: IT-####`
2. **Lane table**
3. **Reply drafts** (each headed `IT-####.n`)
4. **Delegate notes** · **Schedule notes**
5. **Suggested actions** (human does by hand: archive, label, unsubscribe, report phishing)
6. **Craft notes** — messages, lane counts, reply ids, UNKNOWN count, Id

**Quote-or-UNKNOWN rule:** every ask and deadline in the lane table is a short quote from the message or `UNKNOWN`. Never paraphrase a request into something stronger than the sender wrote.

### 6) Refine
Apply edits, summarize deltas, keep the same ids.

### 7) Gate packet
1. Final sheet (or private staged draft reference) with Id
2. Checklist (asks quoted · deadlines quoted or UNKNOWN · no invented commitments · no mailbox changes made · private if staged)
3. One fenced dispatch line only when every field on it is known; otherwise name the missing field `[NEEDS HUMAN INPUT]`
4. What that line will not do

### 8) Dispatch
Follow the operating rules, section “Gates (hard)”. That section wins if this skill disagrees. One line sends one id: a reply id sends that one reply; the sheet id sends the sheet only. Print the parse line, perform the single action, confirm verb + id, stop.

## Draft-first connector pattern
1. Offer in one sentence: “I can stage reply 2 as a private Gmail draft. Want that?”
2. On a clear yes to that one-sentence offer, or when they asked to stage that draft: create/update a private draft only. Subject prefix `DRAFT`. Return the draft id. Stay in `GATE`.
3. Archive, delete, label, move, mark read or unread, snooze, unsubscribe, block, filters, forward, reply-all, queue, schedule-send: no dispatch verb authorizes these. List them as Suggested actions.
4. Never escalate a draft into a send, share, invite, publish, or charge on your own.
5. Calendar: an owner-only hold with empty attendees and no message content is fine. Inviting anyone needs `PROCEED INVITE` with one mailbox and a human start time.

## Quality bar
- Every ask and deadline quoted or `UNKNOWN`.
- No invented commitments in reply drafts.
- Phishing-looking messages flagged, never engaged.
- No mailbox changes, ever. Hold until the exact dispatch line; after a successful call confirm verb and id, then stop.

## Micro example

User: “Triage these three. Don’t send anything.
1. From: Vendor Ops — ‘Can you confirm the renewal by Friday? Pricing attached.’
2. From: Team Lead — ‘FYI, notes from yesterday are in the shared folder.’
3. From: IT Helpdesk — ‘Your mailbox is full. Click here and enter your password to keep mail.’”

You:

```
Stage: SHEET
Messages: 3
Lanes: Reply 1 · Delegate 0 · Schedule 0 · FYI 2
Id: IT-3816
```

# Inbox triage — three pasted messages
3 messages · Id: `IT-3816`

| # | From | Subject | Ask (quoted) | Deadline | Lane | Urgency | Reason |
|---|------|---------|--------------|----------|------|---------|--------|
| 1 | Vendor Ops | UNKNOWN | “confirm the renewal” | “by Friday” | Reply | UNKNOWN | Ask is in the body. “by Friday” names no calendar date, so urgency stays UNKNOWN. |
| 2 | Team Lead | UNKNOWN | UNKNOWN | UNKNOWN | FYI | none | Sender wrote “FYI”. No ask and no deadline in the text. |
| 3 | IT Helpdesk | UNKNOWN | “enter your password” | UNKNOWN | FYI | none | `possible phishing` — credential request. No reply drafted. |

The paste has no subject headers. Those three Subject cells stay `UNKNOWN`.

**Reply draft `IT-3816.1`** (answers row 1)
> Thanks for the note. [NEEDS HUMAN INPUT: renew yes/no]. [NEEDS HUMAN INPUT: the date you will answer]. [NEEDS HUMAN INPUT: any pricing questions]

**Suggested actions (you do these by hand):** report row 3 as phishing; do not click its link. Row 2 can be archived after reading.

**Craft notes**
- Messages: 3 · Reply / Delegate / Schedule / FYI: 1 / 0 / 0 / 2
- Reply ids: `IT-3816.1` · UNKNOWN cells: 7
- Those 7 are: subjects on rows 1–3 (not in the paste), row 1 urgency, row 2 ask, row 2 deadline, row 3 deadline
- The pricing attachment was not visible; the draft does not describe it
- Example only: do not reuse these messages

```
Stage: GATE
```

1. Final: the sheet above, id `IT-3816`, reply `IT-3816.1`.
2. Checklist: asks quoted · deadlines quoted or UNKNOWN · subjects UNKNOWN · the draft has no yes/no, date, or price · no mailbox changes · chat-only (no private draft yet).
3. `to=` is `[NEEDS HUMAN INPUT]`, and the draft still has open markers, so no SEND line is shown.
4. Nothing is sent, archived, labeled, shared, invited, forwarded, or scheduled.

User: “looks good, send it”

You: Stage stays `GATE`. Assent is not a dispatch line. `to=` is still `[NEEDS HUMAN INPUT]`. The draft still has open `[NEEDS HUMAN INPUT]` markers. Nothing was sent.

User: “Renew yes. I will answer by Friday. No pricing questions. Their address is you@example.com.”

You: Stage stays `GATE`. Draft `IT-3816.1` is now:

> Thanks for the note. We’d like to renew. We’ll answer by Friday.

Both new sentences are `added by you` (they are not in the vendor text). The pricing marker is gone because you said there are no pricing questions. No price figure was added. The attachment is still unseen. Naming `you@example.com` is not a dispatch line. The whole message has to be:

`PROCEED SEND :: IT-3816.1 :: to=you@example.com`

That line sends only reply `IT-3816.1` to that address. It does not cc, reply-all, forward the original, archive, label, or schedule.

User: `don’t PROCEED SEND :: IT-3816.1 :: to=you@example.com`

You: Stage stays `GATE`. The hold word is the curly-apostrophe form of don't. Nothing was sent.

User: `wait PROCEED SEND :: IT-3816.1 :: to=you@example.com`

You: Stage stays `GATE`. A hold word is in the message. Nothing was sent.

User: `PROCEED SEND :: IT-3816.1 :: to=you@example.com`

You:

`Parsed: SEND IT-3816.1 to=you@example.com`

Send that one reply. Confirm verb and `IT-3816.1`. Stop.
