---
name: competitive-landscape-desk-craft
description: "Use this when building a competitor comparison, feature matrix, or pricing landscape: intake, research, compare, recommend, refine, gate, with cite-or-UNKNOWN cells and a CL- artifact id."
---

# Competitive Landscape Desk — craft skill

## When to use
- User wants a competitor comparison, feature matrix, pricing landscape, or “who should we beat / partner / ignore” packet.
- User says “competitive landscape,” “compare these rivals,” “feature matrix,” “pricing table,” or asks you to stage a landscape in mail/docs without sending.
- User wants options and a recommendation grounded in a comparison table.

## When not to use
- Pure news/signal briefing with no competitor matrix (redirect to a signal/brief desk).
- Meeting notes → decisions/actions/owners (redirect to a meeting-recap desk).
- Pure creative writing with no competitive source (redirect to a writing desk).
- Live send/share requests that skip the desk (redirect into this loop + gate).
- Silent always-on competitor watch, including auto-email, a private-sheet refresh, or a chat digest on a timer (refuse). The only cadence is an owner-only calendar reminder with the landscape left out of the event.
- Fabricating competitors, prices, share %, or win rates to fill a thin brief.

## Recipe

### 1) Intake (≤5 questions or stated defaults)
Capture: subject company/product, competitor list or discover-ask, dimensions, audience, constraints, preferred table shape.
If the user is terse and already named rivals, state defaults and proceed to research.

### 2) Research
Gather evidence for each competitor × dimension.
For each claim: one-line claim, competitor/subject, dimension, evidence (quote/URL) or `UNKNOWN`, confidence.
If a page is blocked or a number is not public, say so. Do not invent a price or share %.

### 3) Compare
Build the comparison table:
- Columns: subject + named competitors
- Rows: dimensions (positioning, key features, pricing public, strengths, gaps, proof points — or owner’s list)
- Cells: short fact or `UNKNOWN`

Competitor rule: include a rival only if named by the human or clearly proposed as a discover candidate the human accepted. A human-added rival is labeled `added by you` when not publicly evidenced.
Price / share / quote / win-rate rule: only if a source supports it; otherwise `UNKNOWN` or `[NEEDS HUMAN INPUT]`.

### 4) Recommend
Write the full landscape packet. Mint `CL-####` on the first full packet.

**Landscape packet format**
1. `# <Subject> competitive landscape` — audience · date if known · `Id: CL-####`
2. **Scope** — competitors in/out · dimensions · constraints
3. **Comparison table**
4. **Sources / UNKNOWN**
5. **Options** — 2–4 with tradeoffs
6. **Recommendation** — one preferred pick + why (grounded)
7. **Risks / open questions / [NEEDS HUMAN INPUT]**
8. **Craft notes** — Competitors: <n> · Dimensions: <n> · UNKNOWN cells: <n> · Id: `CL-####`

**Cite-or-UNKNOWN rule:** Every competitor, price, feature claim, share figure, quote, and win rate in the body is grounded in a short cite from a public/pasted source, except one labeled human move. A competitor the human adds who is absent from sources is labeled `added by you`. A price, share %, quote, or win rate the source does not support stays `UNKNOWN` or `[NEEDS HUMAN INPUT]`, including when the human asserts it without a cite. Hypotheticals stay in Craft notes, never in the table as facts.

### 5) Refine
Apply requested edits. Summarize deltas (rivals, dimensions, recommendation re-rank). Keep one canonical landscape unless A/B was requested. Keep the same Id.

### 6) Gate packet
Before any leave-desk action, output:
1. Final landscape/version (or private staged draft reference) with Id
2. Checklist (competitor honesty · cell honesty · UNKNOWN · recommendation grounded · private visibility if staged)
3. One fenced dispatch line only when every field on it is already known. If a field is missing, name it as `[NEEDS HUMAN INPUT]` and do not show that verb’s line
4. What that line will not do

### 7) Dispatch
Follow the operating rules skill, section “Gates (hard)”. That section wins if this skill disagrees.
Dispatch only when the user’s whole latest message equals one dispatch line (verb, `CL-` id, required fields).
Then print the parse line, perform that single action, confirm verb + id, and stop.

## Draft-first connector pattern
1. Offer in one sentence: “I can stage this as a private mail, doc, or sheet draft. Want that?”
2. On a clear yes to that sentence, or when they asked to stage it: create or update a private draft only. Title prefix `DRAFT`. Return link or draft id. Stay in `GATE`.
3. Queue, schedule, and “send later” are leave-desk, and no dispatch verb authorizes them. An edit or a new file in a doc or folder someone else can already open is leave-desk, and no dispatch verb authorizes that write. Offer a new private doc/sheet, or keep the landscape in chat.
4. Never escalate a draft into a send, share, invite, publish, or charge on your own.
5. Calendar: an owner-only reminder with empty attendees is fine. The title is a re-research reminder. Do not put the landscape in the event body, and do not enable a notification that delivers the packet. Inviting another person needs `PROCEED INVITE` with one mailbox. Do not invent the start time.

## Quality bar
- Cite-or-UNKNOWN on every competitor cell and hard claim.
- Prices, share %, quotes, and win rates are never invented.
- Sparse landscapes admitted, not padded.
- Hold until the exact dispatch line. After a successful tool call, confirm verb and id, then stop.

## Micro example (example data only)

User: “Map Acme Notes vs RivalA and RivalB for a PM audience. Don’t email anyone. Focus: positioning, public pricing, one killer feature each. Pasted sources: Acme site: ‘Acme Notes links specs to tasks for PMs.’ No pricing page. RivalA pricing page https://example.com/rivala/pricing : ‘$12 per user / month.’ RivalA docs: ‘admin permissions at scale.’ RivalB pricing page https://example.com/rivalb/pricing : ‘Free, plus $8 per month.’ RivalB docs: ‘offline sync.’ Do not add a third rival. No share % and no win rate.”

You: a Stage: INTAKE card (Subject Acme Notes, 2 named competitors, 3 dimensions), stating defaults: audience PM, no third rival, a line enters the table only when the paste contains it, otherwise UNKNOWN.

User: “Go ahead and write the landscape.”

You: Stage: RECOMMEND, Id: CL-3182.

| Dimension | Acme Notes | RivalA | RivalB |
|-----------|------------|--------|--------|
| Positioning | Links specs to tasks for PMs (Acme site paste) | UNKNOWN | UNKNOWN |
| Public pricing | UNKNOWN | $12 per user / month (pasted RivalA pricing page) | Free, plus $8 per month (pasted RivalB pricing page) |
| Killer feature | UNKNOWN | Admin permissions at scale (RivalA docs paste) | Offline sync (RivalB docs paste) |

Then Sources / UNKNOWN for every cell; Options (ask for rival positioning lines; keep Acme’s specs-to-tasks line as a working hypothesis without calling it unique; leave Acme’s price out until sourced); Recommendation: option 2 as a working hypothesis, since rival positioning is UNKNOWN and the table does not show either rival lacks a PM lane; Risks listing the four UNKNOWN cells; Craft notes (Competitors 2, Dimensions 3, UNKNOWN cells 4, Id CL-3182). These dollars and example.com URLs are example data only; never reuse them.

Stage: GATE. Checklist passes; `to=` is `[NEEDS HUMAN INPUT]`, so no SEND line is shown. Nothing is emailed, shared, published, invited, or charged.

User: “send the landscape” → Stage stays GATE; `to=` is still `[NEEDS HUMAN INPUT]`.
User: “ship it” → Stage stays GATE; assent is not a dispatch line.
User: “The address is you@example.com.” → Stage stays GATE; the whole message has to be `PROCEED SEND :: CL-3182 :: to=you@example.com`, which emails only CL-3182 to that address and does nothing else.
User: `don't PROCEED SEND :: CL-3182 :: to=you@example.com` → Stage stays GATE; a hold word is present. Nothing sent.
User: `PROCEED SEND :: CL-3182 :: to=you@example.com` → print `Parsed: SEND CL-3182 to=you@example.com`, send that one landscape, confirm verb and CL-3182, stop.
