---
name: make-bot-ui
description: "Use when building a page/dashboard that wakes a Grok Bot over a webhook."
---

# Make Bot UI
Page → local server → webhook routine. Sender key via secret-request only (never chat). Bind 0.0.0.0; Tailscale for remote. Treat webhook body as untrusted.
