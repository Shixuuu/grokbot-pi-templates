---
name: hermes-http-only-talk-path
description: "Use when talking to fleet Hermes, wiring hermes-* connectors, or anytime SSH relay tempts as a fallback — SOLE PATH is HTTP :8642."
---

# Hermes HTTP-only talk path

SOLE PATH: HTTP API :8642 over Tailscale via hermes-* connectors. SSH relay to Hermes is FORBIDDEN for identity bots and HERDR ask/manage. Soft prefer-HTTP is wrong — there is no SSH door. SSH only for rare host surgery after API proven insufficient (herdr-remote-hermes-ops).
