---
name: call-bridge-setup
description: "Use when installing call-bridge, configuring SIP + OpenAI GPT-Live or Grok Voice, or verifying mock/live REGISTER before the first call."
---

# Setup

Bring a Linux box from zero to a registered SIP line + voice provider (OpenAI GPT-Live or Grok Voice). Provider-specific values live in docs/providers/ in the bot-call-bridge repo — do not invent hosts or logins.

## 1. Install the bridge

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -e ".[dev]"
cp .env.example .env
```

Python 3.12+. Control plane defaults to `http://127.0.0.1:43123`.

## 2. Mock verify (no secrets)

```bash
BRIDGE_MODE=mock python -m call_bridge
```

`GET /health` → `ok: true`, `sip: registered`, `mode: mock`. Operator console `/` can place `examples/script.sample.json`. `pytest` must be green.

## 3. Choose a VoIP provider (SIP)

| Egress | Start here |
|---|---|
| Cloud / VPS / bot box | OVH softphone line (`docs/providers/ovh.md`) — documented working path |
| Home / residential IP only | VoipWise or OVH |
| New carrier | `docs/providers/README.md` |

Need a **software SIP line** (no hardware lock). Copy into `.env`:

- `SIP_REGISTRAR`, `SIP_DOMAIN` (required live)
- `SIP_PROXY` if the outbound proxy differs
- `SIP_USERNAME` (often `00` + country + number)
- `SIP_PASSWORD`
- `SIP_LOCAL_PORT=5062` unless you bind 5060 as root
- `SIP_ADVERTISE_HOST` = public IPv4 if NAT/STUN is unreliable
- If the provider has an **IP allowlist**, add this box’s **current egress** IP

If REGISTER from a datacenter returns `500` / policy reject, switch provider — do not fight it in code.

## 4. Voice provider

Live default often: `VOICE_PROVIDER=openai` + `OPENAI_API_KEY` (GPT-Live). Optional: `OPENAI_VOICE`, `OPENAI_LIVE_MODEL=gpt-live-1`.

Alternate: `VOICE_PROVIDER=grok` + `XAI_API_KEY`. Audio is PCMA 8 kHz — do not change codec to match a headset.

## 5. Live REGISTER check

```bash
set -a && source .env && set +a
BRIDGE_MODE=live python -m call_bridge
```

Boot **exits** if SIP fields or the active voice key are missing, or REGISTER fails. Success:

```bash
curl -s localhost:43123/health
curl -s localhost:43123/v1/status
```

Expect `sip.state == registered`. Then `POST /v1/voice/probe`.

Open UDP `SIP_LOCAL_PORT` and `SIP_RTP_PORT_*` on the host firewall. One registration / one call (`MAX_CONCURRENT_CALLS=1`).

If this fails, use call-bridge-troubleshoot. To place a SCRIPT, use handle-a-call.
