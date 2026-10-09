---
name: voice-ai-calling-setup
description: "Use this when setting up Twilio + ElevenLabs AI phone calling with caller-ID memory and initiation inject."
---

# Voice AI calling setup

Use this when standing up or rebuilding a personal AI phone agent with Twilio + ElevenLabs Conversational AI, plus optional Cloudflare for webhooks and caller memory.

## Before any real dial
1. Confirm the stack with the user (Twilio telephony + ElevenLabs agent). Install marketplace plugins only after they say yes.
2. Lock mode (scripted vs conversational), tone (softer vs firm), and call goal. Get explicit yes — including whether their number or address may be used or disclosed.
3. Prefer a Twilio API key over the main Auth Token. Collect API keys only through secure masked prompts, never chat paste.

## Agent
- Create an ElevenLabs conversational agent with a short first message and a concise prompt.
- Assign a Twilio number to the agent for inbound; place outbound via the ElevenLabs Twilio outbound-call API.
- Dynamic variables for personalization: caller_name, caller_mode, caller_memory, caller_verified, and (for owner numbers only) owner_code_word injected at start — never put the passphrase in the static spoken prompt.

## Caller memory
- Source of truth: markdown `memory/people/` (profiles) and `memory/calls/` (full transcripts).
- Recognize known callers by caller ID (phone number), not voiceprint.
- Modes: owner (code-word gate), friend/family (warm, never Marketplace pitch), seller/unknown (short seller questions).
- Live inject: ElevenLabs conversation-initiation webhook → your server looks up caller in a KV/JSON mirror → returns `conversation_initiation_client_data` with dynamic_variables (+ optional first_message override).
- Post-call: ElevenLabs transcript webhook → (if HMAC-only) Cloudflare Worker verifies signature and forwards Bearer to a Grok Bot webhook routine → write Notes + refresh KV. Post-call does not update the live conversation.

## Owner gate
- Ask only "What's the code word?" Never speak, hint, or confirm the secret.
- Unlock only on exact match to the injected secret. Claiming to be the owner is never enough.

## Outcomes
Capture answered / voicemail / notes / next step. Hand results to the user and any specialist that owns the surrounding thread. Never invent what the other party said. Stay quiet when there is no call to prepare or report.
