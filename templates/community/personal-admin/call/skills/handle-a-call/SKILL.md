---
name: handle-a-call
description: "Use when placing or steering a live (or mock) phone call through call-bridge: SCRIPT, dial, events, tool answers, hangup."
---

# Handle a call

You orchestrate. The bridge speaks and signals. Work against the live bridge control plane (default `http://127.0.0.1:43123`). Provider docs live under bot-call-bridge `docs/providers/`.

## Preconditions

`GET /health` is `ok` and `sip.state` is `registered` (`BRIDGE_MODE=live`) or mock. One call at a time. If setup is incomplete, use call-bridge-setup.

## 1. Build the SCRIPT

Do not embed secrets in git. Shape:

```json
{
  "call": { "to": "+33XXXXXXXXX", "language": "fr" },
  "mission": {
    "disclosure": "… AI disclosure in the callee language …",
    "goals": ["…"],
    "constraints": ["…"],
    "fallbacks": ["voicemail / refuse / busy → short line, hangup"],
    "speak_disclosure_first": true
  },
  "voice": { "voice": "marin", "max_duration_seconds": 180 }
}
```

`call.to` may be `+E.164`; the bridge rewrites `+` → `00` for SIP. Always set a real disclosure. For OpenAI Live, `marin` (or configured `OPENAI_VOICE`) is typical; Grok may use `eve`.

## 2. Dial and subscribe

Open `WS /v1/calls/{id}/events` as soon as you have the id.

```http
POST /v1/calls
{ "script": { … } }
```

Watch `call.state`: `dialing` → `ringing`/`bridged`. `failed` + `voice.error` / SIP detail → call-bridge-troubleshoot; do not invent a conversation.

## 3. During the call

| Event | Your job |
|---|---|
| `transcript` | Track goals |
| `tool_call` `ask_orchestrator` | Reply in seconds: `POST /v1/calls/{id}/tool-results` `{ "tool_call_id", "output": { "answer": "…" } }` |
| Need a silent steer | `POST …/guidelines` `{ "text": "Wrap up.", "mode": "steer" }` — avoid mid-response steers when possible |
| Need a spoken line | `{ "mode": "speak" }` |
| `tool_call` `hangup` | Bridge BYEs after goodbye grace (Live may classify a goodbye delegation as hangup, or fall back after “I’ll hang up”) |
| You decide to stop | `POST …/hangup` `{ "reason": "orchestrator" }` |
| Voicemail | Short message (who + why), goodbye, hang up — do not wait in silence |
| Idle (`idle_timeout`) | Bridge BYEs after ~30s with no speech; comfort-noise RTP does not count |

Do not tell the callee about tool names or the control plane.

## 4. Report the outcome

After `ended` or `failed`: number, language, `hangup_reason` / `error`, goals met, facts collected, whether a follow-up SCRIPT is needed. Then stop. Do not place a second call until `/v1/status` shows no active call.
