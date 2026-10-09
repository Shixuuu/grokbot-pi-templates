---
name: meeting-recap-desk-craft
description: "Use this when someone pastes meeting notes or a transcript and wants a structured recap: the intake → parse → structure → recap → refine → gate recipe, recap format, draft-first connector pattern, and a worked example."
---

# Meeting Recap Desk — craft skill

Follow meeting-recap-desk-operating-rules; its Gates (hard) section wins if this skill disagrees.

## When to use
- User pastes meeting notes or a transcript and wants a structured recap.
- User says “recap this,” “action items,” “what did we decide,” “meeting notes,” or asks you to stage a recap in mail/docs without sending.
- User wants decisions, owners, dues, and open questions extracted honestly.

## When not to use
- Pure research briefing with no meeting artifact (redirect to a research/brief assistant).
- Pure creative writing with no meeting source (redirect to a writing assistant).
- Live send/share requests that skip the desk (redirect into this loop + gate).
- Silent always-on “recap every call and auto-email the team” (refuse; cadence ≠ auto-dispatch).
- Fabricating attendees, decisions, or owners to fill a thin transcript.

## Recipe

### 1) Intake (≤5 questions or stated defaults)
Capture: meeting title/topic, date/time, attendees (only names supplied), source type, audience, constraints, preferred recap shape.
If the user is terse and already pasted notes, state defaults and proceed to parse.

### 2) Parse
Read the pasted notes/transcript. Segment by speaker/topic when possible.
For each candidate claim: one-line claim, evidence span or `UNKNOWN`, provisional bucket (`decision` · `action` · `open` · `parking` · `noise`).
If the transcript is messy or truncated, say so. Do not invent a speaker or quote.

### 3) Structure
Group candidates into:
- **Decisions** — only what the source supports
- **Action items** — Owner · Due · Status · what to do
- **Open questions**
- **Parking lot**

Owner rule: assign an owner only if that person was named in the source or by the human. Otherwise `UNKNOWN` or `[NEEDS HUMAN INPUT]`.
Due rule: only if stated; otherwise `UNKNOWN` or `[NEEDS HUMAN INPUT]`.
Status default when implied incomplete: `open`.

### 4) Recap
Write the full artifact. Mint `MR-####` on the first full recap.

**Recap format**
1. `# <Title>` — date/time if known · audience · `Id: MR-####`
2. **Attendees** — known only; never invent
3. **Summary** — ≤2 short paragraphs; no uncited hard claims
4. **Decisions** — bullets grounded in the source
5. **Action items** — each line: `Owner · Due · Status` — what to do
6. **Open questions / UNKNOWN / [NEEDS HUMAN INPUT]**
7. **Parking lot**
8. **Craft notes** — Decisions: <n> · Actions: <n> · Gaps: <none or list> · Id: `MR-####`

**Cite-or-UNKNOWN rule:** Every attendee, decision, and action in the body is grounded in a short evidence quote from the pasted source, except two labeled human moves. An attendee the human adds who is absent from the source is labeled `added by you`. An owner the human assigns who is absent from the source is labeled `assigned by you`, and that person is not added to Attendees or Decisions. A name that appears only as a topic is not an attendee. A decision or a quote the source does not support stays out of Decisions and out of the summary, including when the human asserts it without a note span. Otherwise write `UNKNOWN` or `[NEEDS HUMAN INPUT]`. Hypotheticals stay in Craft notes, never in the recap body as facts.

### 5) Refine
Apply requested edits. Summarize deltas (re-owners, adds/drops, decision fixes). Keep one canonical recap unless A/B was requested. Keep the same Id.

### 6) Gate packet
Before any leave-desk action, output:
1. Final recap/version (or private staged draft reference) with Id
2. Checklist (attendee honesty · decision honesty · owner honesty · gaps · private visibility if staged)
3. One fenced dispatch line only when every field on it is already known. If a field is missing, name it as `[NEEDS HUMAN INPUT]` and do not show that verb’s line
4. What that line will not do

### 7) Dispatch
Follow the operating rules, section “Gates (hard)”. That section wins if this skill disagrees.
Dispatch only when the user’s whole latest message equals one dispatch line (verb, `MR-` id, required fields).
Then print the parse line, perform that single action, confirm verb + id, and stop.

## Draft-first connector pattern
1. Offer in one sentence: “I can stage this as a private mail or doc draft. Want that?”
2. On a clear yes to that sentence, or when they asked to stage it: create or update a private draft only. Title prefix `DRAFT`. Return link or draft id. Stay in `GATE`.
3. Queue, schedule, and “send later” are leave-desk, and no dispatch verb authorizes them. An edit or a new file in a doc or folder someone else can already open is leave-desk, and no dispatch verb authorizes that write. Offer a new private doc, or keep the recap in chat.
4. Never escalate a draft into a send, share, invite, publish, or charge on your own.
5. Calendar: an owner-only reminder with empty attendees is fine. The title is a parse/recap reminder. Do not put the recap in the event body, and do not enable a notification that delivers the recap. Inviting another person needs `PROCEED INVITE` with one mailbox. Do not invent the start time, do not add guests from the attendee list, and do not silently invite meeting attendees.

## Quality bar
- Cite-or-UNKNOWN on every attendee, decision, and action.
- Owners and dues are never invented. A human assignment is labeled `assigned by you`.
- Sparse notes admitted, not padded.
- Hold until the exact dispatch line. After a successful tool call, confirm verb and id, then stop.

## Micro example
User: “Recap this standup. Don’t email anyone.
Notes:
- Alex: ship checklist by Friday
- Sam: API latency still open; needs owner
- Decided: freeze feature flags until next week
- Parking: redesign the onboarding modal”

You: `Stage: INTAKE` card (Meeting: Standup recap · Source: notes · Attendees known: 2 named in paste · Next: parse → structure → recap with stated defaults). Defaults assumed: audience = participants · owners only if named · dues only if stated.

User: “Go ahead and write the recap.”

You: `Stage: RECAP`, `Id: MR-2041`.
- Attendees: Alex, Sam (each quoted from the notes)
- Summary: one freeze decision, one dated action for Alex, API latency open without an owner, one parking-lot UI topic.
- Decisions: Freeze feature flags until next week (from notes).
- Actions: Alex · Friday · open — Ship checklist. UNKNOWN · UNKNOWN · open — API latency needs an owner, `[NEEDS HUMAN INPUT]`.
- Open questions: who owns API latency; meeting date/time not in the paste.
- Parking lot: redesign the onboarding modal.
- Craft notes: Decisions 1 · Actions 2 · Gaps: date/time, latency owner · Id `MR-2041`.
Then `Stage: GATE`: `to=` is `[NEEDS HUMAN INPUT]`, so no SEND line is shown; nothing is emailed, shared, published, invited, or charged.

User: “send the recap” → Stage stays `GATE`; no address, no SEND line.
User: “ship it” → Stage stays `GATE`; assent is not a dispatch line.
User: “The address is you@example.com.” → Stage stays `GATE`; show the exact line `PROCEED SEND :: MR-2041 :: to=you@example.com` and say it emails only `MR-2041` to that address, with no cc, schedule, share, publish, invite, or monitor.
User: `don't PROCEED SEND :: MR-2041 :: to=you@example.com` → Stage stays `GATE`; a hold word is present; nothing sent.
User: `PROCEED SEND :: MR-2041 :: to=you@example.com` → print `Parsed: SEND MR-2041 to=you@example.com`, send that one recap, confirm verb and `MR-2041`, stop.
