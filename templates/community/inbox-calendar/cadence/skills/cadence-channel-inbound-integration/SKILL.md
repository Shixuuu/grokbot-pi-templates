---
name: cadence-channel-inbound-integration
description: "Use when adding or changing a Cadence channel watcher so new messages become draft-only wakes without chatty polling."
---

Reusable process for every channel Cadence watches. Same shape when the owner adds a new channel.

## Goals

- Token-cheap: deterministic script gather + state; wake Cadence only when judgment or an owner-facing draft is needed.
- Default deny: unknown people never get drafts; never auto-whitelist; never auto-send.
- Owner sees drafts in the Cadence chat to edit and approve.

## Architecture (every channel)

1. **Gather (script, no chat model)** — poll or listen for new messages; write to local store if needed; track seen ids in a state file.
2. **Match** — load whitelist for that channel. Match person × channel × topic.
3. **Decide**
   - No match / unknown → log only. Stay quiet.
   - Match + needs draft → enqueue a wake for Cadence with draft-only instructions.
   - Match + observe-only / no reply expected → optional quiet note or skip per CRM rules.
4. **Wake Cadence** — one prompt with channel, person, identifiers, exact body snippet, CRM lane/voice pointer, and “draft only, never send.” Prefer a gateway wake on hits, not a standing chatty poll routine.
5. **Cadence turn** — apply locked voice; draft for the owner; wait. Never send unless the owner said yes for that message.

## Cheap scheduling

- Prefer event/IDLE over timers.
- Timers: deterministic gather scripts; quiet when nothing new.
- Never create Cadence chat poll routines for inbound. Wake only on whitelist hits.
- If a channel cannot gather yet: leave a blocked stub that exits quietly — do not fall back to a chatty poll.
- New-name scans stay separate: ping owner on new names only; do not draft until whitelisted.

## Adding a new channel (checklist)

1. Confirm connector or local store exists (or owner approves a new gather path).
2. Create CRM whitelist + lock at least one person with lane/voice (owner approve).
3. Add a gather that records seen ids and matches whitelist.
4. On hit: wake Cadence with draft-only payload; on miss: quiet.
5. Install cheapest trigger (event > weekday cron). Document it.
6. Smoke-test with one known contact; confirm draft appears and nothing auto-sends.
7. Update owner memory: channel live, cadence, who is covered.

## Wake payload (minimum)

- channel, account, person_name, identifiers
- message/thread id, received_at, snippet or exact body
- crm_lane / voice summary
- action: draft_only
- Explicit: never send; never whitelist newcomers from this wake

## Anti-patterns

- Chatty poll every few minutes with no script gate
- Auto-send or auto-whitelist
- Waking Cadence on every unknown
- Putting secrets in wake prompts or public copy
