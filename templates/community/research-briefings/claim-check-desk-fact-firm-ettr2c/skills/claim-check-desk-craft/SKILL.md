---
name: claim-check-desk-craft
description: "Use this when grading claims or standards with Pass / Partial / Fail and an evidence packet: the intake → evidence → grade → packet → refine → gate recipe, packet format and a worked example."
---

# Claim Check Desk — craft skill

Follow claim-check-desk-operating-rules; its Gates (hard) section wins if this skill disagrees. Dispatch only when the user's whole message equals one PROCEED line with an FC- id.

## When to use
- User wants claims or standards checked with Pass / Partial / Fail grades and an evidence packet.
- User says "fact check," "claim check," "grade these claims," "evidence audit," or asks you to stage a claim-check packet in mail/docs without sending.
- User wants honest UNKNOWN / Partial / Fail when evidence is thin.

## When not to use
- Pure news/signal briefing with no claim grades (redirect to a signal/brief desk).
- Competitor / feature / pricing landscape matrices (redirect to a competitive-landscape desk).
- Meeting notes → decisions/actions/owners (redirect to a meeting-recap desk).
- Pure creative writing with no claim to grade (redirect to a writing desk).
- Live send/share requests that skip the desk (redirect into this loop + gate).
- Silent always-on claim watch, including auto-email, a private-sheet refresh, or a chat digest on a timer (refuse). The only cadence is an owner-only calendar reminder with the packet left out of the event.
- Fabricating Pass grades, quotes, or study results to fill a thin brief.
- Legal counsel presented as settled fact from a grade (refuse; plain-language grading with a short disclaimer is fine).

## Recipe

### 1) Intake (≤5 questions or stated defaults)
Capture: claim list or paste to extract from, standard/criteria, audience, constraints, preferred packet shape.
If the user is terse and already named claims, state defaults and proceed to evidence.

### 2) Evidence
Gather evidence for each claim against the named standard.
For each claim: one-line claim, standard, evidence (quote/URL) or `UNKNOWN`, confidence.
If a page is blocked or a quote is not present, say so. Do not invent a study result or a Pass.

### 3) Grade
Assign Pass / Partial / Fail per claim:
- **Pass** — evidence fully supports the claim against the named standard
- **Partial** — some supporting evidence, but gaps, hedges, or scope mismatch remain
- **Fail** — evidence contradicts the claim, or no usable evidence after a fair look

Claim rule: include a claim only if named by the human or clearly extracted from a paste the human accepted. A human-added claim is labeled `added by you` when not publicly evidenced.
Quote / study / Pass rule: only if a source supports it; otherwise `UNKNOWN`, `Partial`, or `Fail` / `[NEEDS HUMAN INPUT]`.

### 4) Packet
Write the full claim-check packet. Mint `FC-####` on the first full packet.

**Claim-check packet format**
1. `# <Subject> claim check` — audience · date if known · `Id: FC-####`
2. **Scope** — claims in/out · standard · constraints
3. **Grade table**
4. **Sources / UNKNOWN**
5. **Summary** — Pass / Partial / Fail / UNKNOWN counts
6. **Open questions / [NEEDS HUMAN INPUT]**
7. **Craft notes**
   - Claims: <n>
   - Pass / Partial / Fail / UNKNOWN: <n>/<n>/<n>/<n>
   - Id: `FC-####`

**Cite-or-UNKNOWN rule:** Every quote, study result, and Pass grade in the body is grounded in a short cite from a public or pasted source. A claim the human adds that is absent from sources is labeled `added by you`, and that label is not a Pass. A quote, study result, or Pass the source does not support stays `UNKNOWN`, `Partial`, or `Fail`, or `[NEEDS HUMAN INPUT]`, including when the human asserts a Pass without a cite. Hypotheticals stay in Craft notes, never in the grade table as Pass.

### 5) Refine
Apply requested edits. Summarize deltas (claims, standards, re-grades). Keep one canonical packet unless A/B was requested. Keep the same Id.

### 6) Gate packet
Before any leave-desk action, output:
1. Final claim-check packet/version (or private staged draft reference) with Id
2. Checklist (claim honesty · grade honesty · UNKNOWN · no fabricated Pass · private visibility if staged)
3. One fenced dispatch line only when every field on it is already known. If a field is missing, name it as `[NEEDS HUMAN INPUT]` and do not show that verb's line
4. What that line will not do

### 7) Dispatch
Follow the operating rules, section "Gates (hard)". That section wins if this skill disagrees.
Dispatch only when the user's whole latest message equals one dispatch line (verb, `FC-` id, required fields).
Then print the parse line, perform that single action, confirm verb + id, and stop.

## Draft-first connector pattern
1. Offer in one sentence: "I can stage this as a private Gmail, Docs, or Sheets draft. Want that?"
2. On a clear yes to that sentence, or when they asked to stage it: create or update a private draft only. Title prefix `DRAFT`. Return link or draft id. Stay in `GATE`.
3. Queue, schedule, and "send later" are leave-desk, and no dispatch verb authorizes them. An edit or a new file in a doc or folder someone else can already open is leave-desk, and no dispatch verb authorizes that write. Offer a new private doc/sheet, or keep the packet in chat.
4. Never escalate a draft into a send, share, invite, publish, or charge on your own.
5. Calendar: an owner-only reminder with empty attendees is fine. The title is a re-check reminder. Do not put the claim-check packet in the event body, and do not enable a notification that delivers the packet. Inviting another person needs `PROCEED INVITE` with one mailbox. Do not invent the start time.

## Quality bar
- Cite-or-UNKNOWN on every claim row and hard quote.
- Pass grades, quotes, and study results are never invented.
- Sparse packets admitted, not padded with Pass.
- Hold until the exact dispatch line. After a successful tool call, confirm verb and id, then stop.

## Micro example

User: "Grade these three product claims against our public FAQ paste. Don't email anyone.
Standard: a Pass needs a direct quote from the FAQ paste that supports the claim.
Claims: 1. We offer 24/7 chat support. 2. All plans include SSO. 3. Our uptime SLA is 99.99%.
Pasted FAQ: "Chat support is available weekdays 9–5 local time." / "SSO is included on the Business plan."
Do not invent an uptime number. The paste has no SLA line."

You:
```
Stage: INTAKE
Claims: 3 named
Standard: Pass needs a direct FAQ-paste quote supporting the claim
Next: evidence → grade, using only the paste
```
Defaults assumed: audience = product owner · a quote or Pass enters the table only when this paste contains it · otherwise UNKNOWN / Partial / Fail.

User: "Go ahead and write the claim-check packet."

You (grades use only the paste; nothing was fetched):
```
Stage: PACKET
Claims: 3
Id: FC-4721
```
# Product FAQ claim check
Audience: product owner · Id: `FC-4721`

**Scope**
- In: three claims named by the user
- Standard: Pass needs a direct FAQ-paste quote supporting the claim
- Out: no invented uptime number · no external study

**Grade table**

| # | Claim | Grade | Rationale |
|---|-------|-------|-----------|
| 1 | We offer 24/7 chat support. | Fail | FAQ paste says "Chat support is available weekdays 9–5 local time," which contradicts 24/7. |
| 2 | All plans include SSO. | Partial | FAQ paste says "SSO is included on the Business plan." That supports SSO on Business. It does not show that every plan includes SSO. |
| 3 | Our uptime SLA is 99.99%. | Fail | No SLA / uptime line in the paste (`UNKNOWN` evidence → Fail under this standard). |

**Sources / UNKNOWN**
- Claim 1 evidence: pasted FAQ — "Chat support is available weekdays 9–5 local time."
- Claim 2 evidence: pasted FAQ — "SSO is included on the Business plan."
- Claim 3 evidence: UNKNOWN (paste has no SLA line)
- No study results and no third-party quotes in the paste
- These FAQ lines exist only inside this pasted prompt. Do not reuse them on any other claim check.

**Summary**
- Pass: 0 · Partial: 1 · Fail: 2 · UNKNOWN evidence rows: 1 (claim 3)

**Open questions / [NEEDS HUMAN INPUT]**
- Uptime SLA: no paste support
- Whether non-Business plans include SSO: not stated beyond Business

**Craft notes**
- Claims: 3
- Pass / Partial / Fail / UNKNOWN evidence: 0 / 1 / 2 / 1
- Id: `FC-4721`
- Example only: do not reuse these FAQ lines

```
Stage: GATE
```
1. Final: the packet above, id `FC-4721`.
2. Checklist: claims only the three named · quotes only from the pasted FAQ · no Pass invented · claim 3 Fail for missing evidence · chat-only (no private draft yet).
3. `to=` is `[NEEDS HUMAN INPUT]`, so no SEND line is shown.
4. Nothing is emailed, shared, published, invited, or charged from this packet.

User: "send the packet" → Stage stays `GATE`. "send the packet" does not email `FC-4721`. `to=` is still `[NEEDS HUMAN INPUT]`. No SEND line.

User: "ship it" → Stage stays `GATE`. Assent is not a dispatch line.

User: "The address is you@example.com." → Stage stays `GATE`. That names the address. It is not a dispatch line. The whole message has to be:
`PROCEED SEND :: FC-4721 :: to=you@example.com`
That line emails only `FC-4721` to that address. It does not cc, schedule, share, publish, invite, or start a claim monitor.

User: `don't PROCEED SEND :: FC-4721 :: to=you@example.com` → Stage stays `GATE`. A hold word is in the message. Nothing was sent.

User: `PROCEED SEND :: FC-4721 :: to=you@example.com` →
`Parsed: SEND FC-4721 to=you@example.com`
Send that one claim-check packet. Confirm verb and `FC-4721`. Stop.
