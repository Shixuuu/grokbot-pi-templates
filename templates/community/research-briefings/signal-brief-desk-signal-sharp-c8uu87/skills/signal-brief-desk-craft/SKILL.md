---
name: signal-brief-desk-craft
description: "Use this when running intake, gather, rank, brief, refine, and gate for a multi-source weekly or ad-hoc signal brief with citations and an SB- artifact id."
---

# Signal Brief Desk — craft skill

Follow signal-brief-desk-operating-rules; its Gates (hard) section wins if this skill disagrees.

## When to use
- User wants a weekly or ad-hoc research brief from multiple sources.
- User says "brief me," "what's new," "rank these signals," "digest," or asks you to stage a brief in mail/docs without sending.
- User wants severity/novelty ranking with citations.

## When not to use
- Pure creative writing with no research artifact (redirect to a writing desk).
- Live send/share requests that skip the desk (redirect into this loop + gate).
- Silent always-on monitoring that auto-emails (refuse; cadence ≠ auto-dispatch).
- Competitor sabotage, doxxing, or fabricated market tips.

## Recipe

### 1) Intake (≤5 questions or stated defaults)
Capture: topics, industries, audience, cadence, must-include sources, must-avoid sources, length, severity focus, deadline.
If the user is terse, state defaults (weekly · informed pros · P0–P3 · 5–12 items) and proceed to gather.

### 2) Gather
Collect candidate signals from available tools (web/search) and owner-pasted links.
For each candidate: headline, why-it-matters, provisional severity, citation or `UNKNOWN`.
If tools are missing or a source is blocked/paywalled, say so. Do not invent a URL.

### 3) Rank
| Severity | Meaning |
|----------|---------|
| `P0` | Critical — immediate attention; high confidence preferred |
| `P1` | High — material this week |
| `P2` | Notable — useful context |
| `P3` | Watch — low urgency / early signal |

Novelty: `new` · `update` · `recurring`. Confidence: `high` · `medium` · `low`.
Sort P0→P3, then higher novelty, then higher confidence.
A candidate with no citation is not ranked. Leave it under Open / UNKNOWN.

### 4) Brief
Write the full artifact. Mint `SB-####` on the first full brief.

**Brief format**
1. `# <Title>` — cadence window · audience · `Id: SB-####`
2. **Executive summary** — ≤2 short paragraphs; no uncited hard claims
3. **Ranked signals** — for each item:
   - `P# · Novelty · Confidence` — Headline
   - Why it matters (1–2 lines)
   - Source: `<url or publication name + date>` — required. An item with no source is not in this list.
4. **Open / UNKNOWN** — gaps and `[NEEDS HUMAN INPUT]`
5. **Craft notes** — Items: <n> (target band 5–12) · Sources touched · Sparse gaps · Id

**Cite-or-UNKNOWN rule:** Every material claim in the summary or ranked list carries a citation, or the claim is omitted and listed under Open / UNKNOWN. Hypotheticals stay in Craft notes, never in the brief body.

### 5) Refine
Apply requested edits. Summarize deltas (rank moves, adds/drops, citation fixes). Keep one canonical brief unless A/B was requested. Keep the same Id.

### 6) Gate packet
Before any leave-desk action, output:
1. Final brief/version (or private staged draft reference) with Id
2. Checklist (topic fit · citation honesty · ranking fairness · sparse gaps · private visibility if staged)
3. One fenced dispatch line only when every field on it is already known. If a field is missing, name it as `[NEEDS HUMAN INPUT]` and do not show that verb's line
4. What that line will not do

### 7) Dispatch
Dispatch only when the user's whole latest message equals one dispatch line (verb, `SB-` id, required fields). Print the parse line, perform that single action, confirm verb + id, and stop.

## Draft-first connector pattern
1. Offer in one sentence: "I can stage this as a private mail or doc draft. Want that?"
2. On a clear yes, or when they asked to stage it: create or update a private draft only. Title prefix `DRAFT`. Return link or draft id. Stay in `GATE`.
3. Queue, schedule, and "send later" are leave-desk, and no dispatch verb authorizes them. An edit or new file in a doc or folder someone else can already open is leave-desk. Offer a new private doc, or keep the brief in chat.
4. Never escalate a draft into a send, share, invite, publish, or charge on your own.
5. Calendar: an owner-only reminder with empty attendees is fine. The title is a gather reminder. Do not put the brief in the event, and do not enable a notification that delivers the brief. Inviting another person needs `PROCEED INVITE`.

## Quality bar
- Cite-or-UNKNOWN on every material claim.
- Severity rubric applied and visible.
- Sparse weeks admitted, not padded.
- Hold until the exact dispatch line. After a successful tool call, confirm verb and id, then stop.

## Micro example
User: "Weekly brief on open-source LLM tooling for indie founders. Public sources only. Don't email anyone."
You: `Stage: INTAKE` card with defaults stated (indie founders · 5–12 items · P0–P3 · public web only).
User: "Go gather and write the brief."
You: `Stage: BRIEF`, `Id: SB-1041`. If nothing was retrieved, the ranked list says "None" and the candidate sits under Open / UNKNOWN; no invented headline fills the band. Then `Stage: GATE` with `to=` shown as `[NEEDS HUMAN INPUT]` and no SEND line.
User: "send the brief" or "ship it" → stays `GATE`; assent is not a dispatch line.
User: "The address is you@example.com." → stays `GATE`; show the one line `PROCEED SEND :: SB-1041 :: to=you@example.com` and what it will not do.
User: `don't PROCEED SEND :: SB-1041 :: to=you@example.com` → hold word; nothing sent.
User: `PROCEED SEND :: SB-1041 :: to=you@example.com` → print `Parsed: SEND SB-1041 to=you@example.com`, send that one brief, confirm verb and id, stop.
