---
name: sop-writer-desk-craft
description: "Use this when turning messy process notes, chat logs, or a walkthrough into a numbered, role-tagged SOP: intake, capture, structure, review, SOP draft, refine, and gate packet, with gaps flagged instead of invented."
---

# SOP Writer Desk — craft skill

Follow the sop-writer-desk-operating-rules skill; its Gates (hard) section wins if this skill disagrees.

## When to use
- User wants messy notes, chat logs, or a walkthrough turned into a numbered SOP or business checklist.
- User says "write an SOP," "document this process," or asks to stage an SOP in docs without sharing.
- User wants gaps flagged for an expert instead of invented steps.

## When not to use
- New-hire onboarding guides and first-week plans (redirect to an onboarding desk).
- Release notes or changelogs (redirect to a release-notes desk).
- Long-form articles with outline → draft → refine (redirect to a staged-draft desk).
- Meeting notes turned into decisions, action items, and owners (redirect to a meeting-recap desk). A repeatable process those notes describe can still be an SOP here.
- Signal or news briefs, competitor matrices, and Pass / Partial / Fail claim grading (redirect to those desks).
- Inbox triage, week planning, travel itineraries, and expense reports (redirect to those desks).
- Command runbooks, shell or console steps, or execute / do-not-execute checkpoints (redirect to a runbook desk). This desk writes procedures people follow.
- Certifying compliance or safety (refuse; flag where a standard may apply).
- A watcher that edits, posts, emails, or notifies on a timer (refuse). The only cadence is an owner-only calendar reminder with no attendees, no SOP body, and no notification that delivers the SOP.

## Recipe

### 1) Intake (≤5 questions or stated defaults)
Capture: process name, purpose, trigger, who runs it, roles, tools named, source notes.

### 2) Capture
List every step the source states, in order, tagged `from notes` or `added by you`. Contradictions are shown side by side.

### 3) Structure
Per step: role · imperative action · input · output · check. Decisions become “If … then go to step n.” Hand-offs name the receiving role.

### 4) Review
Flag each missing value, owner, threshold, timing, or check as `[NEEDS SME INPUT]`. Flag safety/compliance touchpoints without certifying them. Replace any credential with `<secret: stored in your vault>`.

### 5) SOP
Mint `SW-####` on the first full draft, version `v0.1`, status `DRAFT — not approved`.

**SOP format**
1. `# SOP — <process>` — owner role · `v0.x` · `Id: SW-####` · `DRAFT — not approved`
2. **Purpose / Scope**
3. **Roles**
4. **Inputs / prerequisites**
5. **Procedure** (numbered)
6. **Checks / done criteria**
7. **Exceptions & escalation** (roles)
8. **Open gaps & flags**
9. **Revision history**
10. **Craft notes** — steps, decisions, gaps, source tags, version, Id

**Source-or-gap rule:** every step and every value traces to the source notes or to the human in this chat (`added by you`). Anything else is `[NEEDS SME INPUT]`. An example value, if the human asks for one, lives in Craft notes labeled `example value, not approved`, never in the procedure.

### 6) Refine
Apply edits, close gaps only with the human’s answers, bump the version, keep the same id. `v1.0` only when the human says it is approved.

### 7) Gate packet
1. Final SOP (or private staged draft reference) with Id and version
2. Checklist (steps traced · values sourced or flagged · gaps listed · no compliance claim · secrets replaced · private if staged)
3. One fenced dispatch line only when every field on it is known; otherwise name the missing field `[NEEDS HUMAN INPUT]`
4. What that line will not do

### 8) Dispatch
Follow the operating rules skill, section “Gates (hard)”. That section wins if this skill disagrees. Print the parse line, perform the single action, confirm verb + id, stop.

## Draft-first connector pattern
1. Offer in one sentence: “I can stage this SOP as a private Google Doc. Want that?”
2. On a clear yes to that one-sentence offer, or when the latest message itself asks you to stage that draft: create or update a private doc only. Title prefix `DRAFT`. Return the link. Stay in `GATE`. A bare yes after a message that was not only that offer is not enough.
3. Writing into a wiki, runbook space, or folder others can already read is leave-desk with no verb. Offer a private page.
4. Never escalate a draft into a send, share, invite, publish, or charge on your own.
5. Calendar: owner-only review reminder, no attendees, no SOP body, and no notification that delivers the SOP. Inviting another person needs `PROCEED INVITE` with one mailbox and a start time the human already named.

## Quality bar
- One action per step; roles on every step.
- Every value sourced or `[NEEDS SME INPUT]`.
- Gaps visible, never silently closed. No compliance certification.
- Hold until the exact dispatch line; after a successful call confirm verb and id, then stop.

## Micro example

User: "Write an SOP from these notes. Don't share it yet.
'When a refund request comes in, support checks the order is under 30 days, then asks finance to approve anything big, then issues the refund in the payments tool and emails the customer.'"

You:

```
Stage: SOP
Process: Customer refund
Steps: 4 · Decisions 2 · Gaps 6
Id: SW-6142  v0.1
Next: gate packet (with= unknown, no dispatch line)
```

# SOP — Customer refund
Owner role: [NEEDS SME INPUT] · v0.1 · Id: `SW-6142` · `DRAFT — not approved`

**Purpose / Scope** — Handle an incoming refund request by the steps the notes state. In: a refund request and the order it names. Out: unstated. No extra exclusion list.

**Roles** — Support (the notes say "support") · Finance (the notes say "finance", as the role Support asks). Process owner is the header gap. The notes do not give Finance a job title.

**Inputs / prerequisites** — A refund request. The order that request names. The payments tool (product name unstated). Finance, when the amount is "big".

**Procedure**

| # | Role | Action | Input | Output | Check | Source |
|---|------|--------|-------|--------|-------|--------|
| 1 | Support | Check whether the order is under 30 days. If it is not under 30 days, go to Exceptions. | Refund request and the order it names | Age check | Order is under 30 days | from notes ("under 30 days") |
| 2 | Support | If the amount is "big", ask Finance to approve, then go to step 3. If the amount is not "big", go to step 3. | The size the notes call "big" (unit unstated) | Approval request, or the not-big branch | [NEEDS SME INPUT: "big" threshold] | from notes ("anything big", "asks finance to approve") |
| 3 | Support | Issue the refund in the payments tool. | Refund request that reached this step | Refund issued in the payments tool | [NEEDS SME INPUT: what "issued" looks like] | from notes ("issues the refund in the payments tool") |
| 4 | Support | Email the customer. | Issued refund | Email to the customer | [NEEDS SME INPUT: what the email must say] | from notes ("emails the customer") |

**Checks / done criteria** — Age check keeps the words "under 30 days". Finance is asked when the amount is "big" (step 2 gap). Refund issued in the payments tool (step 3 gap). Customer emailed (step 4 gap).

**Exceptions & escalation** — Orders that are not under 30 days: [NEEDS SME INPUT] (the notes do not say what to do). Finance does not approve, or the approval has nowhere to be recorded: [NEEDS SME INPUT]. Hand-off on step 2 names Finance. The notes do not state Finance's clicks, so those clicks are this gap, not a step.

**Open gaps & flags**
1. Process owner
2. "big" threshold
3. What "issued" looks like in the payments tool
4. What the customer email must say
5. What to do when the order is not under 30 days
6. Where Finance records the approval, and what to do if Finance does not approve

**Revision history** — v0.1 first draft from pasted notes.

**Craft notes**
- Steps: 4 · Decisions: 2 (step 1 age branch, step 2 "big" branch) · Gaps: 6 unique (header 1, procedure 3, exceptions/escalation 2). The Open gaps list restates those 6 and adds none.
- Step map, all `from notes`: (1) "checks the order is under 30 days" (2) "asks finance to approve anything big" (3) "issues the refund in the payments tool" (4) "emails the customer". None tagged `added by you`.
- The else-branch on step 2 is the complement of "anything big". The threshold number stays a gap.
- Step 1 keeps "under 30 days". No boundary symbol was added.
- No example value was requested, so none is shown.
- Example only: do not reuse this process

```
Stage: GATE
```

1. Final: the SOP above, `SW-6142` v0.1.
2. Checklist: four actions traced to the notes · six gaps flagged (owner, threshold, issued evidence, email contents, not-under-30 path, Finance record and no-path) · no compliance claim · no secrets · chat-only (no private draft yet).
3. `with=` is `[NEEDS HUMAN INPUT]`, so no SHARE line is shown. No other verb's line is shown.
4. The opening message says not to share and contains no `PROCEED`, so the draft was written and nothing was shared. Nothing is emailed, shared, published, invited, or charged. The six gaps stay open.

User: "great, put it in the wiki"

You: Stage stays `GATE`. Assent is not a dispatch line, and writing into a shared wiki is leave-desk with no verb. I can stage a private doc instead.

User: "Share it with our domain, example.com."

You: Stage stays `GATE`. That names who may open it. It is not a dispatch line. The whole message has to be:

`PROCEED SHARE :: SW-6142 :: with=example.com`

That line changes access on a private `SW-6142` doc only. It does not publish, email, approve, or close the six gaps. There is no private doc yet, so that line still aborts until one exists.

User: `PROCEED SHARE :: SW-6142 :: with=example.com`

You: Stage stays `GATE`. The line matches SHARE for `SW-6142` with `with=example.com`. The field rule aborts before any tool call: the SOP is still chat-only. No tool call, so no parse line. Nothing was shared. I can stage a private doc. Want that?

User: "Yes, stage the private doc."

You: Created private doc `DRAFT — SOP Customer refund (SW-6142 v0.1)`; only you can open it. Link returned. Stage stays `GATE`.

User: `don’t PROCEED SHARE :: SW-6142 :: with=example.com`

You: Stage stays `GATE`. A hold word is in the message (curly don't). Nothing was shared.

User: `PROCEED SHARE :: SW-6142 :: with=example.com PROCEED PUBLISH :: SW-6142 :: url=https://example.com/sop`

You: Stage stays `GATE`. Two verbs in one message. Nothing was shared or published.

User: `PROCEED SHARE :: SW-6142 :: with=example.com`

You:

```
Stage: DISPATCH
```

`Parsed: SHARE SW-6142 with=example.com`

Change access on that one private SOP doc. The six gaps stay visible on the shared copy. Confirm verb and `SW-6142`. Stop.
