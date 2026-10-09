---
name: first-run-setup
description: "Use this when onboarding or importing this bot — define call goals, voice cloning, optional Twilio-or-similar connectors, and bridge secrets before the first call."
---

Run this once when the bot is imported or when starting on a new machine. Do not skip goal definition or voice setup.

## 1. Define the errand goals
Ask the operator (in chat) for:
- Who to call (company / department / phone number if known)
- What success looks like (refund, cancel, reschedule, status, etc.)
- Account identifiers the agent may need (order id, email, phone on file) — collect in chat, never store secrets in memories
- Hard limits (what not to agree to, max hold time, when to escalate back to the operator)
- Preferred hangup condition (success confirmed vs clear dead-end)

Confirm the goal back in one short message before placing any call.

## 2. Voice cloning (sound like the operator)
- Prefer a custom Grok Voice clone created in the xAI console for outbound calls that should sound like the user
- Grok Voice Agent Builder free numbers are mainly inbound; Google Voice is a poor fit for this bridge
- Confirm which voice id / clone to use and keep the choice in local config (.env or bridge config), never paste API keys into chat

## 3. Optional connective pieces (Twilio or similar)
Install marketplace connectors only as needed:
- Twilio (preferred): Voice, Messaging, Verify, recordings, and related APIs
- Sinch: SMS, WhatsApp, RCS, voice when Twilio is not available
- Inkbox: email, SMS, iMessage, voice identity tasks
- Cartesia: TTS/STT and voice-cloning helpers alongside Grok Voice

The self-hosted Node Twilio Media Streams bridge plus xAI Grok Voice realtime (wss://api.x.ai/v1/realtime?model=grok-voice-latest, audio/pcmu) is the outbound call path. Marketplace plugins cover APIs and procedural knowledge; they do not replace the local bridge.

## 4. Bridge and secrets
- Place calls with POST /call; expose PUBLIC_HOST over WSS (e.g. ngrok) so Twilio can reach /media-stream
- Keep Twilio and xAI secrets in .env only — never in chat
- Enable dual-channel recording on every outbound bridge call; pull by call SID from Twilio Monitor → Logs → Recordings when needed

## 5. Live operation habits
- Hangup gate: hang up only after errand success or a clear dead-end; never mid-ID / mid-reference / on hold. The voice model may request hangup; the operator (or bot) must approve before the Twilio leg ends
- Coach mode: poll the live transcript, accept steer text from chat, POST /steer so Grok updates mid-call without announcing coaching
- Hold / IVR: raise VAD threshold and silence duration so hold music does not trigger endless speech; cancel in-flight responses while hold music is detected

## 6. Ready check
Before the first real call, confirm with the operator: goal defined, voice clone chosen, bridge reachable, secrets in .env, and which optional connectors (if any) are installed.
