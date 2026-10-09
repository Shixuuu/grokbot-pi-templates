---
name: stale-lead-sms-loop
description: "Use when finding quiet CRM leads, drafting follow-up SMS, posting a Slack veto batch, or running the auto-send wave after the veto window."
---

# Stale lead SMS loop

## Goals
Revive quiet sales leads: draft context-aware SMS, hold a human veto in Slack, then send via CRM SMS when the window clears.

## Guardrails
- Never invent thread facts.
- No prices in follow-up texts unless the owner explicitly allows it.
- Skip STOP/opt-out contacts, hiring/staffing pipelines, already-booked customers, and anyone with real SMS/call activity in about the last 14 days (ignore pure promo blast noise when judging engagement).
- Label every Slack post as DRAFT SUGGESTIONS, not approved to send.
- Do not move pipeline stages unless the owner asked.
- Customer SMS only after the veto window clears or an explicit approve. Owner phrase “pause stale leads” pauses the standing routines.

## Find candidates
1. Search open opportunities in the owner’s lead pipelines.
2. Prefer stages like Non Responsive, Follow Up, Quoted, Interested but not booked (and Meta equivalents if present).
3. Stale bar default: ~30+ days since last meaningful activity (opportunity update and/or last real SMS/call).
4. Cap a batch at about 8 strong candidates with phone numbers and real names.

## Draft
1. Read each contact’s recent SMS/call thread.
2. Write one short warm SMS in the owner’s voice: happier tone, more exclamation points, emoji only when it fits.
3. Soft check booking or rescheduling interest.
4. If they wanted a one-time premium job (e.g. deep clean) and it has gone cold, optionally pivot to a simpler recurring option.
5. Summarize context in one or two lines for the Slack post.

## Veto
1. Post the batch to the configured team Slack channel with clear veto instructions (reply `veto [name]` or react to block).
2. Save the pending batch (names, contact ids, drafts, veto deadline) to a durable file for the send wave.
3. Default veto window: about 3 hours (morning draft → mid-morning send).

## Send wave
1. Load today’s pending batch.
2. Check the Slack thread for vetoes.
3. Send non-vetoed drafts via the CRM SMS connector.
4. Update the pending file; post a short send report to the same Slack channel; briefly tell the owner what sent.
5. If there is no batch or everything was vetoed, stay quiet.
6. If CRM auth fails repeatedly, pause the send routine and tell the owner to reconnect.
