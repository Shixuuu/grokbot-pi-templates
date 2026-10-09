---
name: call-bridge-troubleshoot
description: "Use when SIP REGISTER/INVITE fails, audio is one-way, the provider blocks datacenter IPs, or registration drops mid-session."
---

# Troubleshoot

Read `GET /health` and `GET /v1/status` first (`sip.state`, `sip.detail`, `mode`, `active_calls`). Process logs: `LOG_LEVEL=DEBUG python -m call_bridge`. Event stream: `WS /v1/events`.

## REGISTER

| Symptom | Likely cause | What to do |
|---|---|---|
| Boot exits “requires SIP_*” | Empty `.env` | Fill registrar, domain, username, password |
| **401** looping | Bad user/password or realm | Reset SIP password; username is often `00…` not `+…` |
| **403** | IP allowlist or account lock | Add this box’s **egress** IPv4 (`/32`) or disable restriction; confirm softphone line |
| **500** from consumer SIP | Datacenter / VPS IP blocked | Expected for VoipWise-class providers. Move to OVH or residential egress |
| Timeout, no 401 | UDP filtered or wrong host | Check `SIP_REGISTRAR` / `SIP_PROXY` / port 5060 |
| Bind error on 5060 | Privileged port | `SIP_LOCAL_PORT=5062` |

## INVITE

| Symptom | Likely cause | What to do |
|---|---|---|
| 404 / 484 | Dial string | SCRIPT `+33…` becomes `00…` |
| 486 / 603 | Callee busy / reject | Not a bridge bug |
| 403 on INVITE | Outbound barred / ceiling / allowlist | Check credit / hors-forfait |
| 408 / timeout | Far end or proxy | Confirm REGISTER still `registered` |

## One-way audio / NAT

1. Set `SIP_ADVERTISE_HOST` to the public IPv4 the provider sends RTP to.
2. Or enable STUN and retry.
3. Open UDP RTP port range inbound.
4. Codec must stay **PCMA**.

## Voice side

`POST /v1/voice/probe` — GPT-Live / Grok should return `ok`. Auth errors → `OPENAI_API_KEY` / `XAI_API_KEY`. For Live PCMA, `audio.format` must include `rate: 8000`.

## After a fix

Re-check `/health` then place a short SCRIPT via handle-a-call. Do not log or commit passwords.
