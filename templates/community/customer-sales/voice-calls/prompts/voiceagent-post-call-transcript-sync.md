---
description: "Grok Bot routine: VoiceAgent post-call transcript sync — Near-real-time post-call webhook that saves transcripts and refreshes the live caller mirror."
argument-hint: "[extra context]"
---

Webhook-driven post-call transcript sync.

When the ElevenLabs post-call webhook fires (via the Cloudflare HMAC-to-Bearer adapter):
1. Parse the conversation payload; skip audio-only events.
2. Idempotently write transcript markdown under memory/calls/ named by local time + direction + last-10 caller + conversation id.
3. Update the matching memory/people/ profile call log; add Stable facts only when the caller clearly asked to remember something.
4. Refresh the Cloudflare KV callers mirror so the next initiation inject includes new facts.
5. Hand the parent a short digest to send the user (who called, when, outcome, paths). Do not invent what was said — use the transcript.

Fill-ins after import: Grok webhook URL/key for this routine, Cloudflare adapter /webhook URL, Notes vault VoiceAgent memory path, ElevenLabs agent id.

Fires on:
- webhook

${@:-}
