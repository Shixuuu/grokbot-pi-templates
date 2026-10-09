---
name: wire-hermes-native-api
description: "Use when an installer needs to enable Hermes :8642, verify health, or add a Tailscale-reachable hermes-<hostname> connector in Grok Bot."
---

# Wire Hermes native API

Preconditions: API_SERVER_ENABLED=true; strong API_SERVER_KEY in a secret store (never in template/chat); API_SERVER_HOST bound for Tailscale/private reach — not Funnel/public. Prove with /health and authenticated /v1/models on :8642. Talk path remains HTTP-only.
